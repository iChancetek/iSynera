'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * @fileOverview A component that renders a high-quality ambient background video.
 */

export default function BackgroundVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Cinematic Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover opacity-50"
      >
        <source src="/isynera11.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for readability - lightened */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      
      {/* Gradient Vignette - lightened */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
    </div>

    {/* Mute Toggle Button - fixed to bottom left so it doesn't conflict with AI chat */}
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleMute}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-primary/20 text-foreground hover:bg-background/80 hover:border-primary/50 backdrop-blur-md transition-all duration-300 shadow-lg group"
        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline text-muted-foreground group-hover:text-primary transition-colors">Ambient Sound Off</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-primary animate-pulse-slow" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline text-primary">Ambient Sound On</span>
          </>
        )}
      </button>
    </div>
  </>
  );
}
