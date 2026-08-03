'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * @fileOverview A component that renders a high-quality video for the hero section with a mute toggle.
 */

export default function HeroVisual() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative w-full h-auto group overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-primary/30">
        {/* Premium Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-auto object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-105"
        >
          <source src="/workspaceiq.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Small Featured Platform Link Overlay */}
        <a 
          href="https://workspaceiq.us/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full text-white/90 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-all duration-300 group/platform"
        >
          <span className="opacity-70 group-hover/platform:opacity-100 transition-opacity">Featured Platform:</span>
          <span className="text-primary group-hover/platform:text-white transition-colors">WorkSpaceIQ</span>
        </a>

        {/* Aesthetic Overlay/Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        
        {/* Data Flow/Glow Atmosphere */}
        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 animate-slow-spin -z-10" />
        
        {/* Subtle Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-primary/20 pointer-events-none" />
      </div>

      {/* Small Mute Toggle Below Video */}
      <div className="flex justify-center md:justify-end">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Unmute Video</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 animate-pulse-slow" />
              <span className="text-xs font-bold uppercase tracking-wider">Muting On</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}