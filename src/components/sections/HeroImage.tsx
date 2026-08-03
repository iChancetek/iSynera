'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX, Activity, Cpu, Sparkles, Zap, ShieldCheck } from 'lucide-react';

/**
 * @fileOverview A component that renders a high-quality visual video with a Cyberpunk AI HUD overlay.
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
    <div className="flex flex-col gap-4 w-full max-w-2xl relative">
      {/* Outer Cyberpunk Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-accent/30 to-purple-500/30 rounded-[2.5rem] blur-2xl opacity-60 animate-pulse pointer-events-none" />

      <div className="relative w-full group overflow-hidden rounded-3xl border border-primary/40 bg-card/80 shadow-[0_0_50px_-10px_hsla(var(--primary)/0.3)] transition-all duration-700 hover:shadow-[0_0_80px_-5px_hsla(var(--primary)/0.5)]">
        
        {/* Top HUD Telemetry Header */}
        <div className="relative z-20 flex items-center justify-between px-5 py-3 bg-black/60 backdrop-blur-md border-b border-primary/20 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
              AI RUNTIME ACTIVE
            </span>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground font-mono text-[10px]">
            <span className="hidden sm:inline flex items-center gap-1">
              <Cpu className="w-3 h-3 text-primary" /> GPT-5.6 LUNA
            </span>
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-accent" /> 12ms LATENCY
            </span>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover scale-[1.02] transition-transform duration-1000 group-hover:scale-105"
          >
            <source src="/workspaceiq.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Cyber Corner HUD Brackets */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/80 pointer-events-none z-20" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/80 pointer-events-none z-20" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/80 pointer-events-none z-20" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/80 pointer-events-none z-20" />

          {/* Featured Platform HUD Badge */}
          <a
            href="https://workspaceiq.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-primary/40 text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/20 transition-all duration-300 group/platform"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-muted-foreground text-[10px]">Flagship AI:</span>
            <span className="text-primary group-hover/platform:text-white font-extrabold transition-colors">
              WorkSpaceIQ
            </span>
          </a>

          {/* Audio Mute Toggle inside video HUD */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 text-xs font-bold uppercase tracking-wider"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-[10px] hidden sm:inline">Unmute Audio</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 hidden sm:inline">Audio On</span>
              </>
            )}
          </button>

          {/* Gradient Overlay for Cinematic Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Bottom Status Bar */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-black/80 backdrop-blur-md border-t border-primary/20 text-[11px] font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-primary">
              <Zap className="w-3 h-3" /> Agentic AI Flow
            </span>
            <span className="text-muted-foreground/60">•</span>
            <span className="flex items-center gap-1 text-accent">
              <ShieldCheck className="w-3 h-3" /> Zero-Data-Retention
            </span>
          </div>
          <div className="text-accent font-bold">iSynera v5.6</div>
        </div>
      </div>
    </div>
  );
}