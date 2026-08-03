
'use client';

import Section from '@/components/shared/Section';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

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
    <Section className="py-8 md:py-12" disablePadding>
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-black">
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
            <div className="w-full h-full bg-black/50 animate-pulse" />
          )}
          {/* Overlay for aesthetic consistency */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-overlay" />
          
          {/* Mute Toggle Button */}
          {mounted && (
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60 backdrop-blur-md transition-all duration-300"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 animate-pulse-slow" />
                    <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Sound On</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
