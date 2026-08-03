'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '@/components/shared/Section';
import { companyInfo } from '@/lib/data';
import { ArrowRight, Sparkles, Zap, Brain, Cpu } from 'lucide-react';
import { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { Skeleton } from '../ui/skeleton';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';

interface HeroSectionProps {
  heroImage: React.ReactNode;
}

export default function HeroSection({ heroImage }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  // ── Cursor micro-parallax — ≤2% movement threshold ───────────────────────
  const containerRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  // Primary line: ±0.4deg rotation (imperceptible max, scale ≤ 1.01)
  const h1RotateX = useTransform(springY, [-1, 1], [0.4, -0.4]);
  const h1RotateY = useTransform(springX, [-1, 1], [-0.5, 0.5]);

  // Subtitle: half the factor for depth separation
  const subRotateX = useTransform(springY, [-1, 1], [0.2, -0.2]);
  const subRotateY = useTransform(springX, [-1, 1], [-0.25, 0.25]);

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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
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
    <Section className="relative overflow-hidden bg-transparent py-20 md:py-32 lg:py-40">
      {/* ── Mesh Gradient Background ───────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      
      {/* Primary glow orbs */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[700px] h-[700px] bg-accent/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/4 rounded-full blur-[120px] pointer-events-none" />

      {/* Neural shimmer atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none ai-neural-shimmer"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 30% 50%, hsla(217,100%,60%,0.04) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 40% 30% at 70% 40%, hsla(280,100%,65%,0.03) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(hsla(var(--foreground) / 1) 1px, transparent 1px), linear-gradient(90deg, hsla(var(--foreground) / 1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={mounted ? 'hidden' : 'visible'}
            animate="visible"
            variants={containerVariants}
            className="text-center md:text-left space-y-8"
          >
            {/* Status Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-xs font-bold tracking-widest uppercase">
                <Sparkles size={14} className="animate-pulse-glow" />
                {companyInfo.subSlogan}
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-accent text-xs font-bold tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AI-Powered
              </div>
            </motion.div>

            {/* ── AI Animated Text Layer ────────────────────────────────────────── */}
            <div className="space-y-4" ref={containerRef}>
              <motion.h1
                variants={itemVariants}
                className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-foreground"
                style={{ perspective: '1200px' }}
              >
                <motion.span
                  className="block text-gradient-hero ai-glow-text ai-light-sweep cursor-default"
                  style={{ rotateX: h1RotateX, rotateY: h1RotateY, transformStyle: 'preserve-3d' }}
                  whileHover={{ scale: 1.008 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                  {companyInfo.name}
                </motion.span>

                <motion.span
                  className="block italic mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold opacity-90 tracking-tight ai-subtitle-text"
                  style={{ rotateX: subRotateX, rotateY: subRotateY, transformStyle: 'preserve-3d' }}
                >
                  {companyInfo.headline}
                </motion.span>
              </motion.h1>
            </div>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
              {companyInfo.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" asChild className="h-14 px-8 text-lg font-bold bg-primary-gradient text-white shadow-xl shadow-primary/25 hover:shadow-primary/50 transition-all hover:-translate-y-1 animate-pulse-glow">
                <Link href="/get-started">
                  <Zap className="mr-2 h-5 w-5" /> Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg font-bold glass-card border-border/50 hover:border-primary/40 transition-all hover:bg-primary/5">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center md:justify-start pt-2">
              {[
                { icon: Brain, label: 'Agentic AI' },
                { icon: Cpu, label: 'AI Media' },
                { icon: Sparkles, label: 'GPT-5.6 Luna' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground/70 font-medium uppercase tracking-wider">
                  <Icon className="h-3.5 w-3.5 text-primary/60" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-primary/15 blur-[100px] rounded-full scale-75 -z-10 animate-pulse" />
            <div className="absolute inset-0 bg-accent/10 blur-[80px] rounded-full scale-50 -z-10 animate-float-subtle" />
            <Suspense fallback={<Skeleton className="w-full aspect-video rounded-3xl" />}>
              {heroImage}
            </Suspense>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}