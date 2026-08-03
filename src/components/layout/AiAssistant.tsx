
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Loader2, Send, User, X, Bot, Mic, MicOff, StopCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { websiteQueryRAG, type WebsiteQueryRAGInput, type WebsiteQueryRAGOutput } from '@/ai/flows/website-query-rag';
import { textToSpeech, type TextToSpeechOutput } from '@/ai/flows/openai-tts-flow';
import { transcribeAudio } from '@/ai/flows/whisper-stt-flow';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import { useUser } from '@/firebase';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: number;
}

// The input type is defined here on the client.
export type TextToSpeechInput = {
    text: string;
};

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [sessionId, setSessionId] = useState('');
  
  const { user } = useUser();

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
      setIsAudioPlaying(false);
    }
  };

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    // Stop audio when the assistant is closed
    if (!isOpen) {
      stopAudio();
    } else {
      // Start a new session when opened
      setSessionId(`session_${Date.now()}_${Math.random().toString(36).substring(2)}`);
    }
  }, [isOpen]);

  useEffect(() => {
    // Cleanup audio and recording streams on unmount
    return () => {
      stopAudio();
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  const handleSendMessage = async (e?: React.FormEvent<HTMLFormElement>, textInput?: string) => {
    e?.preventDefault();
    const currentInput = textInput || input;
    if (!currentInput.trim() || isSending) return;
    
    stopAudio(); // Stop any currently playing audio

    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: currentInput,
      sender: 'user',
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      const ragInput: WebsiteQueryRAGInput = { 
          query: userMessage.text,
          userId: user?.uid,
          sessionId: sessionId,
      };
      const response: WebsiteQueryRAGOutput = await websiteQueryRAG(ragInput);

      const aiMessage: Message = {
        id: Date.now().toString() + '-ai',
        text: response.answer,
        sender: 'ai',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMessage]);

      // Generate and play audio for the AI's response
      const ttsInput: TextToSpeechInput = { text: response.answer.replace(/\[.*?\]\(.*?\)/g, '') }; // Remove markdown links for cleaner speech
      const audioResponse: TextToSpeechOutput = await textToSpeech(ttsInput);
      const audio = new Audio(audioResponse.media);
      audioRef.current = audio;
      audio.onplay = () => setIsAudioPlaying(true);
      audio.onended = () => {
          stopAudio(); // This will also set isAudioPlaying to false
      };
      audio.onerror = () => {
          console.error("Error playing audio.");
          stopAudio();
      };
      audio.play();

    } catch (error) {
      console.error('Error querying AI assistant:', error);
      const errorMessage: Message = {
        id: Date.now().toString() + '-error',
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'ai',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSending(false);
    }
  };
  
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const greeting = "Hello! I'm the iSynera assistant. You can ask me questions about our services, technology, or where to find information on the site.";
        const initialMessage: Message = {
          id: 'initial-greeting',
          text: greeting,
          sender: 'ai',
          timestamp: Date.now(),
        };
        setMessages([initialMessage]);
      }, 500);
    } else {
      setMessages([]);
    }
  }, [isOpen]);
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const formData = new FormData();
        formData.append('audio', new File([audioBlob], 'speech.webm', { type: 'audio/webm' }));

        setIsSending(true);
        try {
          const transcribedText = await transcribeAudio(formData);
          if (transcribedText) {
            setInput(transcribedText);
            handleSendMessage(undefined, transcribedText);
          }
        } catch (err) {
          console.error('Whisper STT failed:', err);
        } finally {
          setIsSending(false);
        }

        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsListening(true);
    } catch (err) {
      console.error('Error starting audio recording:', err);
      setIsListening(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  
  const renderMessageText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const [, linkText, linkUrl] = linkMatch;
        return (
          <Link href={linkUrl} key={index} className="text-primary underline hover:opacity-80" onClick={() => setIsOpen(false)}>
            {linkText}
          </Link>
        );
      }
      const lines = part.split('\n');
      return lines.map((line, lineIndex) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
          return (
            <div key={`${index}-${lineIndex}`} className="flex items-start">
              <span className="mr-2 mt-1">•</span>
              <span>{trimmedLine.substring(2)}</span>
            </div>
          );
        }
        return <span key={`${index}-${lineIndex}`}>{line}{lineIndex < lines.length - 1 && <br />}</span>;
      });
    });
  };

  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary-gradient text-primary-foreground hover:opacity-90 transition-opacity"
              aria-label="Open AI Assistant"
              onClick={() => setIsOpen(true)}
            >
              <Bot className="h-7 w-7" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-primary text-primary-foreground">
            <p>Chat with iSynera AI</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full max-w-md p-0 flex flex-col" aria-describedby={undefined}>
          <SheetHeader className="p-4 border-b">
            <div className="flex justify-between items-center">
              <SheetTitle className="text-lg font-semibold">iSynera AI Assistant</SheetTitle>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </SheetClose>
            </div>
          </SheetHeader>
          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={cn('flex items-end space-x-2', msg.sender === 'user' ? 'justify-end' : 'justify-start')}>
                  {msg.sender === 'ai' && (
                    <Avatar className="h-8 w-8 self-start">
                      <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={18} /></AvatarFallback>
                    </Avatar>
                  )}
                  <div className={cn('max-w-[85%] rounded-lg px-3 py-2 text-sm shadow', msg.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted text-muted-foreground rounded-bl-none')}>
                    <div className="flex items-start">
                        <div>{renderMessageText(msg.text)}</div>
                    </div>
                  </div>
                  {msg.sender === 'user' && (
                     <Avatar className="h-8 w-8"><AvatarFallback className="bg-accent text-accent-foreground"><User size={18} /></AvatarFallback></Avatar>
                  )}
                </div>
              ))}
              {isSending && (
                <div className="flex items-end space-x-2 justify-start">
                  <Avatar className="h-8 w-8"><AvatarFallback className="bg-primary text-primary-foreground"><Bot size={18} /></AvatarFallback></Avatar>
                  <div className="max-w-[75%] rounded-lg px-3 py-2 text-sm shadow bg-muted text-muted-foreground rounded-bl-none">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
               {isListening && (
                <div className="flex items-center space-x-2 justify-center text-primary">
                  <Mic className="h-5 w-5 animate-pulse" />
                  <p>Listening (OpenAI Whisper)...</p>
                </div>
              )}
            </div>
          </ScrollArea>
          <form onSubmit={handleSendMessage} className="border-t p-4 bg-background">
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder={isListening ? "Listening..." : "Ask about iSynera..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow"
                disabled={isSending || isListening}
                aria-label="Chat input"
              />
              <TooltipProvider>
                 {isAudioPlaying && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button type="button" size="icon" variant="destructive" onClick={stopAudio} aria-label="Stop audio">
                        <StopCircle className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Stop audio</p>
                    </TooltipContent>
                  </Tooltip>
                 )}
                <Tooltip>
                  <TooltipTrigger asChild>
                     <Button type="button" size="icon" variant={isListening ? "destructive" : "outline"} onClick={toggleListening} disabled={isSending} aria-label="Use microphone">
                       {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                     </Button>
                  </TooltipTrigger>
                   <TooltipContent>
                      <p>{isListening ? 'Stop listening' : 'Use microphone'}</p>
                   </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button type="submit" size="icon" disabled={isSending || !input.trim()} aria-label="Send message">
                {isSending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AiAssistant;
