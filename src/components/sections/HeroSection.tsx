'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '@/components/shared/Section';
import { companyInfo } from '@/lib/data';
import { ArrowRight, Sparkles, Zap, Brain, Cpu, Video, ShieldCheck, Activity } from 'lucide-react';
import { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { Skeleton } from '../ui/skeleton';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';

interface HeroSectionProps {
  heroImage: React.ReactNode;
}

export default function HeroSection({ heroImage }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  // ── Cursor micro-parallax ────────────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  const h1RotateX = useTransform(springY, [-1, 1], [0.5, -0.5]);
  const h1RotateY = useTransform(springX, [-1, 1], [-0.6, 0.6]);

  const subRotateX = useTransform(springY, [-1, 1], [0.25, -0.25]);
  const subRotateY = useTransform(springX, [-1, 1], [-0.3, 0.3]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    rawX.set(((e.clientX - cx) / rect.width) * 0.4); 
    rawY.set(((e.clientY - cy) / rect.height) * 0.4);
  }, [rawX, rawY]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  useEffect(() => {
    setMounted(true);
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Section className="relative overflow-hidden bg-transparent py-16 md:py-24 lg:py-32 w-full">
      {/* ── Ambient Mesh Glow ───────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      
      {/* Laser-sharp Glow Orbs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsla(var(--primary) / 1) 1px, transparent 1px), linear-gradient(90deg, hsla(var(--primary) / 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={mounted ? 'hidden' : 'visible'}
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 text-center lg:text-left space-y-8"
          >
            {/* Live Agentic Telemetry Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 text-primary text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_-5px_hsla(var(--primary)/0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Sparkles size={14} className="text-accent animate-pulse" />
                <span>NATIVE AI • AGENTIC WORKFORCE • GPT-5.6 LUNA</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4" ref={containerRef}>
              <motion.h1
                variants={itemVariants}
                className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-foreground"
                style={{ perspective: '1200px' }}
              >
                <motion.span
                  className="block text-gradient-hero ai-glow-text ai-light-sweep cursor-default drop-shadow-[0_10px_35px_rgba(109,40,217,0.35)]"
                  style={{ rotateX: h1RotateX, rotateY: h1RotateY, transformStyle: 'preserve-3d' }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                  {companyInfo.name}
                </motion.span>

                <motion.span
                  className="block mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-purple-300 drop-shadow-md"
                  style={{ rotateX: subRotateX, rotateY: subRotateY, transformStyle: 'preserve-3d' }}
                >
                  {companyInfo.headline}
                </motion.span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {companyInfo.description}
            </motion.p>

            {/* Model & Spec Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
              {[
                { label: 'Whisper STT', icon: Activity },
                { label: 'LangGraph Agents', icon: Brain },
                { label: 'RAG Pipeline', icon: Zap },
                { label: 'AI Media Studio', icon: Video },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/60 border border-primary/20 text-xs font-mono font-medium text-foreground/80 shadow-sm">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button size="lg" asChild className="h-14 px-8 text-lg font-bold bg-primary-gradient text-white shadow-xl shadow-primary/30 hover:shadow-primary/60 transition-all hover:-translate-y-1 animate-pulse-glow rounded-2xl">
                <Link href="/get-started">
                  <Zap className="mr-2 h-5 w-5 fill-current" /> Launch Agentic AI <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg font-bold glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all rounded-2xl">
                <Link href="/services">Explore Platforms & Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center relative w-full"
          >
            <Suspense fallback={<Skeleton className="w-full aspect-video rounded-3xl" />}>
              {heroImage}
            </Suspense>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}