'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useUser } from '@/firebase/provider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageSquare, Repeat, Mic, Volume2, Edit2, Trash2, Globe, Sparkles, Star, Zap, Smile } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Post {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string | null;
  content: string;
  createdAt: Date;
  likes: number;
  emojis: Record<string, number>;
  isEditing?: boolean;
}

interface SocialWidgetProps {
  topicId: string;
}

export default function SocialWidget({ topicId }: SocialWidgetProps) {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  // Fallback to browser SpeechRecognition if no Whisper endpoint
  const handleSTT = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    
    setIsRecording(true);
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      if (editingPostId) {
        setEditContent((prev) => prev + " " + transcript);
      } else {
        setNewPostContent((prev) => prev + " " + transcript);
      }
      setIsRecording(false);
    };
    
    recognition.onerror = () => {
      setIsRecording(false);
    };
    
    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const handleTTS = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    // Simple voice selection could go here
    window.speechSynthesis.speak(utterance);
  };

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;
    
    const newPost: Post = {
      id: Math.random().toString(36).substring(7),
      userId: user ? user.uid : 'visitor',
      userName: user ? user.displayName || 'Anonymous Member' : 'Visitor',
      userPhoto: user ? user.photoURL : null,
      content: newPostContent,
      createdAt: new Date(),
      likes: 0,
      emojis: { brilliant: 0, phenomenal: 0, excellent: 0, love: 0 },
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const handleStartEdit = (post: Post) => {
    setEditingPostId(post.id);
    setEditContent(post.content);
  };

  const handleSaveEdit = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, content: editContent } : p));
    setEditingPostId(null);
  };

  const handleEmojiReact = (postId: string, emojiType: string) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          emojis: {
            ...p.emojis,
            [emojiType]: (p.emojis[emojiType] || 0) + 1
          }
        };
      }
      return p;
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-between h-12 mt-2 group bg-card/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border-primary/20 hover:border-primary/50">
          <span className="flex items-center font-medium">
            <MessageSquare className="mr-2 h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" /> 
            Join the Discussion
          </span>
          <span className="text-muted-foreground text-xs flex items-center bg-background px-2 py-1 rounded-full border border-border/50">
            {posts.length} Threads
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-xl border-primary/20">
        <DialogHeader className="p-6 pb-4 border-b border-border/50 bg-card/50">
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Community Threads
          </DialogTitle>
          <DialogDescription>
            Share your thoughts, ask questions, and engage with the community.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
          {/* Input Area */}
          <div className="flex gap-4 p-4 rounded-xl bg-card border border-primary/10 shadow-sm">
            <Avatar className="w-12 h-12 border-2 border-primary/20 shadow-sm">
              <AvatarImage src={user?.photoURL || undefined} />
              <AvatarFallback className="bg-primary/5 text-primary font-bold">
                {user?.displayName?.charAt(0) || 'V'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 flex flex-col gap-3">
              <Textarea 
                placeholder="Start a thread or leave a comment..."
                className="min-h-[100px] bg-background/50 resize-none border-primary/20 focus-visible:ring-primary/50 text-base"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`text-primary/80 hover:text-primary border-primary/20 hover:border-primary/50 hover:bg-primary/10 ${isRecording ? 'animate-pulse bg-destructive/10 text-destructive border-destructive/30 hover:bg-destructive/20' : ''}`}
                    onClick={handleSTT}
                    title="Dictate with STT"
                  >
                    <Mic className={`w-4 h-4 mr-2 ${isRecording ? 'text-destructive' : ''}`} />
                    {isRecording ? 'Listening...' : 'Voice (STT)'}
                  </Button>
                </div>
                <Button onClick={handleCreatePost} disabled={!newPostContent.trim()} className="font-bold px-6 shadow-md hover:shadow-lg transition-all shadow-primary/20">
                  Post
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-border/50" />

          {/* Posts Feed */}
          <div className="flex flex-col gap-5">
            {posts.map(post => (
          <div key={post.id} className="flex gap-3 p-3 rounded-lg bg-background/30 border border-border/30 hover:border-primary/20 transition-colors">
            <Avatar className="w-8 h-8 shrink-0 border border-primary/20">
              <AvatarImage src={post.userPhoto || undefined} />
              <AvatarFallback>{post.userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-foreground">{post.userName}</span>
                  <span className="text-xs text-muted-foreground">{formatDistanceToNow(post.createdAt)} ago</span>
                </div>
                {/* Edit / Delete available for creator */}
                {((user && user.uid === post.userId) || (!user && post.userId === 'visitor')) && (
                  <div className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="w-6 h-6" onClick={() => handleStartEdit(post)}>
                      <Edit2 className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-6 h-6 text-destructive hover:text-destructive" onClick={() => handleDeletePost(post.id)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>

              {editingPostId === post.id ? (
                <div className="flex flex-col gap-2 mt-1">
                  <Textarea 
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="min-h-[60px] text-sm"
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setEditingPostId(null)}>Cancel</Button>
                    <Button size="sm" onClick={() => handleSaveEdit(post.id)}>Save</Button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-foreground/90 whitespace-pre-wrap">{post.content}</p>
              )}

              {/* Actions & Emojis */}
              <div className="flex flex-wrap items-center gap-2 mt-2 pt-2 border-t border-border/30">
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-muted-foreground hover:text-primary">
                  <MessageSquare className="w-3 h-3 mr-1.5" /> Reply
                </Button>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-muted-foreground hover:text-primary">
                  <Repeat className="w-3 h-3 mr-1.5" /> Repost
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 px-2 text-xs text-muted-foreground hover:text-primary"
                  onClick={() => handleTTS(post.content)}
                  title="Read Aloud"
                >
                  <Volume2 className="w-3 h-3 mr-1.5" /> Listen
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 px-2 text-xs text-muted-foreground hover:text-primary"
                  title="Translate to user's language"
                >
                  <Globe className="w-3 h-3 mr-1.5" /> Translate
                </Button>

                {/* Custom Reactions */}
                <div className="flex items-center gap-1 ml-auto">
                  <button onClick={() => handleEmojiReact(post.id, 'brilliant')} className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary/10 hover:bg-primary/20 text-[10px] transition-colors" title="Brilliant">
                    <Sparkles className="w-3 h-3 text-yellow-500" /> {post.emojis.brilliant > 0 && post.emojis.brilliant}
                  </button>
                  <button onClick={() => handleEmojiReact(post.id, 'phenomenal')} className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary/10 hover:bg-primary/20 text-[10px] transition-colors" title="Phenomenal">
                    <Star className="w-3 h-3 text-purple-500" /> {post.emojis.phenomenal > 0 && post.emojis.phenomenal}
                  </button>
                  <button onClick={() => handleEmojiReact(post.id, 'excellent')} className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary/10 hover:bg-primary/20 text-[10px] transition-colors" title="Excellent">
                    <Zap className="w-3 h-3 text-blue-500" /> {post.emojis.excellent > 0 && post.emojis.excellent}
                  </button>
                  <button onClick={() => handleEmojiReact(post.id, 'love')} className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary/10 hover:bg-primary/20 text-[10px] transition-colors" title="Love">
                    <Heart className="w-3 h-3 text-red-500" /> {post.emojis.love > 0 && post.emojis.love}
                  </button>
                </div>
              </div>
            </div>
          </div>
          ))}
          {posts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground bg-card/30 rounded-xl border border-dashed border-border/50">
              <MessageSquare className="h-10 w-10 mb-3 text-primary/30" />
              <p className="font-medium text-foreground/80">No posts yet.</p>
              <p className="text-sm">Be the first to start the conversation!</p>
            </div>
          )}
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Trigger rebuild
