
'use client';

import Section from '@/components/shared/Section';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Film, Sparkles } from 'lucide-react';

interface VideoSectionProps {
  videoSrc: string;
}

export default function VideoSection({ videoSrc }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && videoRef.current) {
      const video = videoRef.current;
      video.defaultMuted = true;
      video.muted = isMuted;
      
      const playVideo = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Video autoplay prevented.", error);
          });
        }
      };
      playVideo();
    }
  }, [mounted, videoSrc]);

  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  // Derive human readable title from file path
  const videoTitle = videoSrc.includes('AgenticChance')
    ? 'Agentic Chance — Autonomous Intelligence in Action'
    : videoSrc.includes('ChancellorOS')
    ? 'ChancellorOS — The Agentic Enterprise Operating System'
    : 'iSynera AI Media Showcase';

  return (
    <Section className="py-12 md:py-16 relative overflow-hidden w-full">
      {/* Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4/5 h-4/5 bg-primary/10 blur-[140px] rounded-full" />
        <div className="w-2/3 h-2/3 bg-accent/8 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="group relative w-full aspect-video rounded-3xl overflow-hidden border border-primary/40 bg-black shadow-[0_0_60px_-10px_hsla(var(--primary)/0.3)] transition-all duration-700 hover:shadow-[0_0_90px_-5px_hsla(var(--primary)/0.5)]">
          
          {mounted ? (
            <video
              ref={videoRef}
              key={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={handleCanPlay}
              className="w-full h-full object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-105"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full bg-card/50 animate-pulse flex items-center justify-center">
              <Play className="w-16 h-16 text-primary/30" />
            </div>
          )}
          
          {/* Cyber Corner Brackets */}
          <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-accent pointer-events-none z-20" />
          <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-accent pointer-events-none z-20" />
          <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-accent pointer-events-none z-20" />
          <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-accent pointer-events-none z-20" />

          {/* Top Title Overlay */}
          {mounted && (
            <div className="absolute top-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-primary/40 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg pointer-events-auto">
                <Film className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-purple-300 font-extrabold">
                  {videoTitle}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white/80 text-[10px] font-mono font-bold tracking-widest uppercase">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>4K CINEMATIC STREAM</span>
              </div>
            </div>
          )}

          {/* Bottom Control & Audio Toggle */}
          {mounted && (
            <div className="absolute bottom-5 right-6 z-20">
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-primary/40 text-white hover:bg-primary/30 transition-all duration-300 shadow-lg text-xs font-mono font-bold uppercase tracking-wider"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-muted-foreground" />
                    <span className="hidden sm:inline">Unmute Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 hidden sm:inline">Audio On</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Cinematic Letterbox Shadow Overlays */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </Section>
  );
}

