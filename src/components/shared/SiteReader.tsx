
'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { textToSpeech, type TextToSpeechOutput } from '@/ai/flows/openai-tts-flow';

type PlayerState = 'idle' | 'loading' | 'playing' | 'paused' | 'stopped';

// The input type is now defined here, on the client.
export type TextToSpeechInput = {
    text: string;
};

const SiteReader = () => {
  const [playerState, setPlayerState] = useState<PlayerState>('idle');
  const [canPlay, setCanPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getTextFromPage = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      // Basic text extraction, could be improved to be more selective
      const text = Array.from(mainContent.querySelectorAll('h1, h2, h3, p, li, span'))
        .map(el => (el as HTMLElement).innerText)
        .join(' ');
      return text.replace(/\s+/g, ' ').trim();
    }
    return document.body.innerText.trim();
  };

  useEffect(() => {
    // Ensure this only runs on the client
    if (typeof window !== 'undefined') {
        const textExists = !!getTextFromPage();
        setCanPlay(textExists);
    }
  }, []);

  const handlePlay = async () => {
    setPlayerState('loading');
    try {
      const textToSpeak = getTextFromPage();
      if (!textToSpeak) {
        throw new Error('No text content found on the page.');
      }
      
      const input: TextToSpeechInput = { text: textToSpeak };
      const response = await textToSpeech(input);
      
      const audio = new Audio(response.media);
      audioRef.current = audio;
      
      audio.oncanplaythrough = () => {
        audio.play();
        setPlayerState('playing');
      };
      
      audio.onended = () => {
        setPlayerState('idle');
      };
      
      audio.onerror = (e) => {
        console.error('Error playing audio.', e);
        setPlayerState('idle');
      };

    } catch (error) {
      console.error('Error in text-to-speech flow:', error);
      setPlayerState('idle');
    }
  };

  const handlePause = () => {
    if (audioRef.current && playerState === 'playing') {
      audioRef.current.pause();
      setPlayerState('paused');
    }
  };

  const handleResume = () => {
    if (audioRef.current && playerState === 'paused') {
      audioRef.current.play();
      setPlayerState('playing');
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setPlayerState('idle');
  };

  const handleMainButtonClick = () => {
    if (playerState === 'idle') {
      handlePlay();
    } else if (playerState === 'playing') {
      handlePause();
    } else if (playerState === 'paused') {
      handleResume();
    }
  };


  if (!canPlay) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 p-2 bg-background/80 border rounded-full shadow-lg backdrop-blur-md">
      <Button
        size="icon"
        onClick={handleMainButtonClick}
        disabled={playerState === 'loading'}
        className="rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label={playerState === 'playing' ? 'Pause reader' : 'Play reader'}
      >
        {playerState === 'loading' && <Loader2 className="h-6 w-6 animate-spin" />}
        {playerState === 'idle' && <Play className="h-6 w-6" />}
        {playerState === 'playing' && <Pause className="h-6 w-6" />}
        {playerState === 'paused' && <Play className="h-6 w-6" />}
      </Button>
      {(playerState === 'playing' || playerState === 'paused') && (
        <Button
          size="icon"
          variant="ghost"
          onClick={handleStop}
          className="rounded-full w-12 h-12"
          aria-label="Stop reader"
        >
          <Square className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default SiteReader;
