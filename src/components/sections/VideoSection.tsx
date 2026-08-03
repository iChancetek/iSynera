
'use client';

import Section from '@/components/shared/Section';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

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

  // Attempt to play when mounted or when the source changes
  useEffect(() => {
    if (mounted && videoRef.current) {
      const video = videoRef.current;
      
      // Browsers often require explicit property setting for muted to allow autoplay
      video.defaultMuted = true;
      video.muted = isMuted;
      
      const playVideo = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // This is a common warning for autoplay being blocked until user interaction
            console.warn("Video autoplay prevented. Browser requires user interaction or explicit muting.", error);
          });
        }
      };

      // Try playing immediately
      playVideo();
    }
  }, [mounted, videoSrc]);

  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for some browsers that require another attempt after data is buffered
      });
    }
  };

  return (
    <Section className="py-8 md:py-12 relative overflow-hidden" disablePadding>
      {/* Ambient glow behind video */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-3/4 h-3/4 bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="video-glass-frame relative w-full aspect-video bg-black">
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
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full bg-card/50 animate-pulse flex items-center justify-center">
              <Play className="w-16 h-16 text-primary/20" />
            </div>
          )}
          
          {/* Cinematic letterbox overlays */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
          
          {/* Mute Toggle Button */}
          {mounted && (
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white hover:bg-white/15 transition-all duration-300 border-white/20"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Sound On</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* AI Media Badge */}
          {mounted && (
            <div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-white/80 text-xs font-bold tracking-wider uppercase border-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                AI Media
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
