'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sparkles, MonitorSmartphone, Palette, Video, Code, ChevronRight,
  Workflow, ArrowRight, BrainCircuit, Globe, Layers, Zap, Hexagon, MessageSquare,
  PlayCircle, PenTool, Database, LayoutGrid, X, Maximize2
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import { CarouselItem } from '@/components/ui/carousel';
import SocialWidget from '@/components/shared/SocialWidget';

// Animations
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function WebAndGraphicDesignPage() {
  const containerRef = useRef(null);
  const [activeMedia, setActiveMedia] = useState<{ src: string; title: string; type: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMedia(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBackground = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <motion.div
        style={{ y: yBackground, opacity: opacityBackground }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-cyan-600/10 blur-[150px]" />
      </motion.div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[95vh] px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">AI-Native Creative Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50 drop-shadow-sm"
          >
            Designing Intelligent <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400">
              Digital Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Where Human Creativity Meets Agentic AI. Next-generation web development, branding, motion graphics, and immersive experiences powered by the world's most advanced AI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(var(--primary),0.4)] transition-all hover:scale-105" asChild>
              <Link href="/contact">Build With ChanceTEK</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/10 backdrop-blur-sm transition-all hover:scale-105" asChild>
              <Link href="#capabilities">Explore AI Capabilities</Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating Hero UI Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] w-32 h-32 rounded-2xl bg-card border border-primary/20 shadow-2xl backdrop-blur-xl flex items-center justify-center opacity-70"
          >
            <Code className="w-12 h-12 text-blue-500" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[10%] w-40 h-40 rounded-full bg-card border border-primary/20 shadow-2xl backdrop-blur-xl flex items-center justify-center opacity-70"
          >
            <Palette className="w-16 h-16 text-violet-500" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[25%] w-24 h-24 rounded-xl bg-card border border-primary/20 shadow-2xl backdrop-blur-xl flex items-center justify-center opacity-70"
          >
            <Video className="w-10 h-10 text-cyan-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* 1.5 VIDEO GALLERY CAROUSEL */}
      <Section className="relative z-10 py-24 bg-black/20 backdrop-blur-md">
        <PageHeader
          title="AI Motion & Media Gallery"
          description="A showcase of our cinematic AI video generation, motion design, and intelligent platform walkthroughs."
        />
        <div className="max-w-7xl mx-auto mt-16 px-6">
          <AiAgentsCarousel>
            {[
              { src: "/attached-hero-image.jpg", title: "ChanceTEK Hero", type: "image" },
              { src: "/AgenticChance.mp4", title: "Agentic AI Concepts", type: "video" },
              { src: "/chancetek_1.mp4", title: "ChanceTEK Cinematic 1", type: "video" },
              { src: "/chancetek11.mp4", title: "ChanceTEK Cinematic 11", type: "video" },
              { src: "/workspaceiq_1.mp4", title: "WorkSpaceIQ Overview", type: "video" },
              { src: "/workspaceiq.mp4", title: "WorkSpaceIQ Platform", type: "video" },
              { src: "/WorkSpaceIQ1.mp4", title: "WorkSpaceIQ Features", type: "video" },
              { src: "/Chancellor_CRM_ERP2.mp4", title: "Chancellor CRM ERP", type: "video" },
              { src: "/ChancellorOS.mp4", title: "ChancellorOS", type: "video" },
              { src: "/Chancetek5.mp4", title: "ChanceTEK Intelligence", type: "video" },
              { src: "/Dogs_and_cats_202603250528.mp4", title: "The PotLuxe Media 1", type: "video" },
              { src: "/Dogs_and_cats_202603250530.mp4", title: "The PotLuxe Media 2", type: "video" },
              { src: "/iCareos1.mp4", title: "iCareOS Overview", type: "video" },
              { src: "/iSkylar.MP4", title: "iSkylar Ecosystem", type: "video" },
              { src: "/StrideIQ.mp4", title: "StrideIQ Platform", type: "video" },
              { src: "/iCareOS.mp4", title: "iCareOS Deep Dive", type: "video" },
              { src: "/Chancetek_3.mp4", title: "ChanceTEK Cinematic 3", type: "video" },
              { src: "/elitebooks1.mp4", title: "EliteBooks Showcase", type: "video" },
              { src: "/iSydney.mp4", title: "iSydney Concept", type: "video" },
              { src: "/modeliq5.mp4", title: "ModelIQ Platform", type: "video" },
              { src: "/iNavigateAi.mp4", title: "iNavigateAI Platform", type: "video" },
              { src: "/iNavigateAi2.mp4", title: "iNavigateAI Navigation", type: "video" },
              { src: "/iNavigateAi3.mp4", title: "iNavigateAI Showcase", type: "video" },
              { src: "/Famio_AI_symbol3.mp4", title: "Famio AI Symbol", type: "video" },
              { src: "/Famio_symbol_Video.mp4", title: "Famio Symbol Overview", type: "video" },
              { src: "/BobbyLiveCVArt.mp4", title: "Bobby Live CV Art", type: "video" },
              { src: "/stepthenightawayvid.mp4", title: "Step The Night Away", type: "video" },
              { src: "/MyBrotherDucheandI.mp4", title: "My Brother Duche and I", type: "video" },
              { src: "/famio.us2.mp4", title: "Famio US 2", type: "video" },
              { src: "/famio.us3.png", title: "Famio US 3", type: "image" },
              { src: "/Finesseplustek1.mp4", title: "Finesse Plus TEK", type: "video" },
              { src: "/TheMetabolicBackdoor.jpeg", title: "The Metabolic Backdoor", type: "image" },
              { src: "/famio_symbol.png", title: "Famio Symbol", type: "image" },
              { src: "/Famio Agentic AI Social Media Platform.mp4", title: "Famio Agentic AI Platform", type: "video" },
              { src: "/Metabolic Backdoor.mp4", title: "Metabolic Backdoor", type: "video" },
              { src: "/ChanceTEK21.mp4", title: "ChanceTEK 21", type: "video" },
              { src: "/ChanceTEK221.mp4", title: "ChanceTEK 221", type: "video" },
              { src: "/ChanceTEK0221.mp4", title: "ChanceTEK 0221", type: "video" },
              { src: "/ChanceTEK22221.mp4", title: "ChanceTEK 22221", type: "video" },
              { src: "/57th_Annual_Old_Timers_Reunion_202607161457.mp4", title: "57th Annual Old Timers Reunion", type: "video" },
              { src: "/iHailey.mp4", title: "iHailey", type: "video" },
              { src: "/famio221.mp4", title: "Famio 221", type: "video" },
            ].map((media, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  onClick={() => setActiveMedia(media)}
                  className="h-[400px] rounded-3xl overflow-hidden border border-border/30 bg-card relative group shadow-lg cursor-pointer"
                >
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover scale-[1.12] transition-transform duration-700 group-hover:scale-[1.18]"
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt={media.title}
                      className="absolute inset-0 w-full h-full object-cover scale-[1.12] transition-transform duration-700 group-hover:scale-[1.18]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                  
                  {/* Floating Expand/Play Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-md rounded-full p-4 border border-white/20 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      {media.type === "video" ? (
                        <PlayCircle className="w-8 h-8 text-cyan-400" />
                      ) : (
                        <Maximize2 className="w-8 h-8 text-cyan-400" />
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-bold text-white mb-1">{media.title}</h4>
                    <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {media.type === "video" ? "Play Video" : "View Image"}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </AiAgentsCarousel>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMedia(null)}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 select-none cursor-zoom-out"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMedia(null);
                }}
                className="absolute top-6 right-6 z-[10000] bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors border border-white/10 shadow-lg cursor-pointer"
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl cursor-default"
              >
                {activeMedia.type === "video" ? (
                  <video
                    src={activeMedia.src}
                    controls
                    autoPlay
                    loop
                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
                  />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
                  />
                )}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl font-bold text-white tracking-wide">{activeMedia.title}</h3>
                <p className="text-sm text-cyan-400 mt-1 font-semibold uppercase tracking-wider">
                  {activeMedia.type === "video" ? "Video Production" : "Media Design"}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      {/* 1.75 INTERACTIVE SHOWCASE */}
      <Section className="relative z-10 py-24 border-y border-border/10 overflow-hidden">
        <PageHeader
          title="Interactive Portfolio Showcase"
          description="Explore our AI-generated web experiences, motion media concepts, and enterprise SaaS interfaces."
        />
        <div className="flex gap-6 overflow-x-auto pb-8 pt-16 px-6 max-w-7xl mx-auto custom-scrollbar snap-x snap-mandatory">
          {[
            { title: "Nesto Banks", type: "Music, Books & Video Streaming", bg: "bg-gradient-to-br from-amber-900 to-orange-950", href: "https://nestobanks.us" },
            { title: "The PotLuxe", type: "AI-Native Luxury Pet Store", bg: "bg-gradient-to-br from-rose-900 to-pink-950", href: "https://petluxestore--ipetluxestore.us-east4.hosted.app/" },
            { title: "Quantum Dashboard", type: "AI Web Engineering", bg: "bg-gradient-to-br from-indigo-900 to-slate-900", href: "#" },
            { title: "Nexus Brand Identity", type: "AI Branding System", bg: "bg-gradient-to-br from-violet-900 to-fuchsia-900", href: "#" },
            { title: "Aether Motion Trailer", type: "AI Video Generation", bg: "bg-gradient-to-br from-cyan-900 to-blue-900", href: "#" },
            { title: "Vertex E-Commerce", type: "Responsive PWA", bg: "bg-gradient-to-br from-emerald-900 to-teal-900", href: "#" },
          ].map((item, i) => {
            const isLive = item.href !== "#";
            const CardWrapper = isLive ? motion.a : motion.div;

            return (
              <CardWrapper
                key={i}
                href={isLive ? item.href : undefined}
                target={isLive ? "_blank" : undefined}
                rel={isLive ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.02 }}
                className={`shrink-0 w-[300px] sm:w-[400px] h-[300px] rounded-3xl ${item.bg} border border-border/30 p-8 flex flex-col justify-end relative group overflow-hidden snap-center ${isLive ? 'cursor-pointer no-underline' : 'cursor-default'}`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                {isLive && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-xs font-semibold uppercase tracking-wider border border-white/10">
                    Live Project
                  </div>
                )}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <ArrowRight className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white relative z-10">{item.title}</h4>
                <p className="text-white/70 relative z-10">{item.type}</p>
              </CardWrapper>
            );
          })}
        </div>
      </Section>

      {/* 1.8 CYNEMORA SPOTLIGHT */}
      <Section className="relative z-10 py-24 bg-gradient-to-b from-black/40 to-background border-y border-border/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">AI Video Generation</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">CyneMora</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground font-medium">CyneMora</strong>, developed by ChanceTEK LLC, is an AI-native text-to-video cinematic platform that transforms ideas into fully produced, studio-quality videos in minutes.
              </p>
              <p>
                Turn scripts, images, presentations, and PDFs into polished visual content instantly—without cameras, crews, or editing experience. From marketing and training videos to cinematic storytelling and long-form content, CyneMora makes professional video creation simple, fast, and scalable.
              </p>
              <p className="italic text-foreground/80 font-medium pt-2">
                The first video created with CyneMora is featured below.
              </p>
            </div>

            <div className="pt-6">
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all hover:scale-105" asChild>
                <a href="https://cynemora--cynemoraai.us-east4.hosted.app/" target="_blank" rel="noopener noreferrer">
                  Experience CyneMora <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10" />
            <div className="rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-black relative group">
              <video
                src="/cynemora.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto aspect-video object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-xs font-semibold uppercase tracking-wider border border-white/10 flex items-center gap-2 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> CyneMora Creation
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. SERVICES SECTION */}
      <Section id="services" className="relative z-10 py-24">
        <PageHeader
          title="Premium Service Categories"
          description="Enterprise-grade creative solutions engineered for the modern digital landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-16 px-6">
          {[
            {
              title: "Web Design & Development",
              icon: MonitorSmartphone,
              color: "text-blue-500",
              features: ["Enterprise websites", "AI-native platforms", "Responsive PWA", "SaaS Dashboards", "API integrations"]
            },
            {
              title: "Graphic Design & Branding",
              icon: PenTool,
              color: "text-violet-500",
              features: ["Brand identity systems", "Visual storytelling", "AI-assisted creatives", "Typography systems", "Marketing graphics"]
            },
            {
              title: "Motion Graphics & AI Media",
              icon: PlayCircle,
              color: "text-cyan-500",
              features: ["AI video generation", "Motion design", "Cinematic media", "AI avatars & voice", "Interactive storytelling"]
            },
            {
              title: "AI-Enhanced Development",
              icon: BrainCircuit,
              color: "text-emerald-500",
              features: ["Agentic workflows", "Rapid prototyping", "Automated UI generation", "Full-stack AI engineering", "Smart pipelines"]
            }
          ].map((service, i) => (
            <motion.div key={i} variants={fadeInUp} initial="initial" whileInView="whileInView">
              <Card className="h-full bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className={`p-4 rounded-2xl bg-background/50 w-fit mb-4 border border-border/50 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                        <ChevronRight className="w-4 h-4 mr-2 text-primary/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. AI WORKFLOW ECOSYSTEM */}
      <Section id="workflow" className="relative z-10 py-24 bg-black/40 border-y border-border/10 backdrop-blur-xl">
        <PageHeader
          title="AI Creative Workflow Ecosystem"
          description="How ChanceTEK orchestrates intelligent systems like AntiGravity, CyneMora, and HeyGen throughout the creative lifecycle."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16 px-6"
        >
          {[
            { phase: "01. Discovery", tools: "Grok • Omni • Nano Banana", desc: "Market analysis, brand intelligence, and AI-assisted strategic planning." },
            { phase: "02. Design Gen", tools: "Ideogram • Runway • Fling AI", desc: "AI image generation, brand exploration, and visual prototyping." },
            { phase: "03. Engineering", tools: "AntiGravity • Cursor AI • Replit", desc: "Rapid full-stack development, automated UI, and intelligent coding." },
            { phase: "04. Media Prod", tools: "HeyGen • CyneMora • InVideo", desc: "AI avatars, motion media, voice synthesis, and cinematic storytelling." },
          ].map((step, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-3xl bg-gradient-to-b from-card/80 to-background border border-primary/10 hover:border-primary/30 transition-all group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Workflow className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{step.phase}</h3>
              <p className="text-sm font-semibold text-primary mb-4">{step.tools}</p>
              <p className="text-muted-foreground relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 4. FEATURED CAPABILITIES */}
      <Section id="capabilities" className="relative z-10 py-24">
        <PageHeader
          title="Featured Capabilities"
          description="Advanced functionality for modern enterprises and forward-thinking brands."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16 px-6">
          {[
            { icon: LayoutGrid, title: "AI-Powered UI/UX Systems" },
            { icon: Zap, title: "Intelligent Design Automation" },
            { icon: Globe, title: "Real-Time Creative Collaboration" },
            { icon: Video, title: "AI Video & Motion Generation" },
            { icon: Palette, title: "AI Branding Systems" },
            { icon: Layers, title: "Multimodal Content Creation" },
            { icon: MonitorSmartphone, title: "Responsive Enterprise Design" },
            { icon: Workflow, title: "Agentic Workflow Orchestration" },
            { icon: BrainCircuit, title: "Smart Content Pipelines" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="flex items-center gap-4 p-5 rounded-2xl bg-card/30 border border-border/40 hover:bg-card/60 hover:border-primary/30 transition-all cursor-default group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </Section>




      {/* 6. PROCESS TIMELINE */}
      <Section className="relative z-10 py-24 bg-gradient-to-b from-background to-card/20">
        <PageHeader
          title="AI-Native Workflow Process"
          description="A synchronized fusion of human strategy and intelligent automation."
        />
        <div className="max-w-4xl mx-auto mt-16 px-6">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {[
              "Discovery & Strategy",
              "AI Research & Ideation",
              "Intelligent Design Creation",
              "AI-Assisted Development",
              "Motion & Media Production",
              "Deployment & Scaling"
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border/50 shadow-sm group-hover:border-primary/40 group-hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-1">{step}</h4>
                  <p className="text-sm text-muted-foreground">Collaborative human oversight combined with accelerated AI execution to deliver enterprise-grade results rapidly.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. TECHNOLOGY ECOSYSTEM */}
      <Section className="relative z-10 py-24 bg-black/40 backdrop-blur-xl border-y border-border/10">
        <PageHeader
          title="Creative Technology Ecosystem"
          description="The connected infrastructure powering our intelligent digital experiences."
        />
        <div className="max-w-5xl mx-auto mt-16 px-6 relative">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay rounded-3xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React & Next.js", "Framer Motion", "Tailwind CSS", "CyneMora",
              "Google Flow", "AntiGravity", "Runway & HeyGen", "OpenAI & Grok"
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-center p-6 rounded-2xl bg-card/50 border border-primary/20 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all"
              >
                <span className="font-bold text-foreground text-center">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. TESTIMONIALS */}
      <Section className="relative z-10 py-24">
        <PageHeader
          title="Enterprise Success Stories"
          description="See what modern brands and elite startups are saying about our AI-native creative engineering."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16 px-6">
          {[
            {
              quote: "The integration of AI into their design workflow meant we launched our SaaS platform in half the time, with a UI that looks like it cost 10x more.",
              name: "Sarah Jenkins",
              role: "CTO, TechVision Solutions"
            },
            {
              quote: "ChanceTEK's motion graphics and AI avatars completely transformed our marketing. The cinematic quality they produced is simply unmatched in the industry.",
              name: "David Chen",
              role: "VP Marketing, NexaScale"
            },
            {
              quote: "Working with their team felt like working in the future. The real-time AI collaboration and rapid prototyping redefined our expectations of a digital agency.",
              name: "Elena Rodriguez",
              role: "Founder, Zenith AI"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="p-8 rounded-3xl bg-card/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 relative"
            >
              <MessageSquare className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-lg text-foreground/90 mb-8 relative z-10 font-medium italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="max-w-xl mx-auto mt-12 px-6 relative z-10">
        <SocialWidget topicId="web-and-graphic-design" />
      </div>

      {/* 9. CTA SECTION */}
      <section className="relative z-10 py-32 overflow-hidden border-t border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Transform Your Brand With <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
              AI-Native Creativity
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10"
          >
            The future of intelligent design is here. Partner with ChanceTEK to engineer breathtaking digital experiences that scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 shadow-xl" asChild>
              <Link href="/contact">Start Your AI Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-primary/50 text-primary hover:bg-primary/10 transition-all hover:scale-105" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
