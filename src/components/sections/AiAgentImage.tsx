'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * @fileOverview A component that renders a high-quality video for the AI agents section.
 */

export default function AiAgentVisual() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full animate-float">
      <div className="relative w-full h-auto group overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-accent/30">
        {/* Premium Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-auto object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-105"
        >
          <source src="/Chancetek_3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Aesthetic Overlay/Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        
        {/* Data Flow/Glow Atmosphere */}
        <div className="absolute -inset-6 bg-accent/20 blur-3xl rounded-full opacity-20 animate-slow-spin -z-10" />
        
        {/* Subtle Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-accent/20 pointer-events-none" />
      </div>

      {/* Small Mute Toggle Below Video */}
      <div className="flex justify-center md:justify-end">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-all duration-300 group"
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
              <span className="text-xs font-bold uppercase tracking-wider">Sound On</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}