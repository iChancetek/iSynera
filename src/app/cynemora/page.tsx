'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, Sparkles, Video } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import { CarouselItem } from '@/components/ui/carousel';

export default function CynemoraPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <Section className="relative z-10 pt-32 pb-24 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">AI-Native Video Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Introducing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500">
                CyneMora
              </span>
            </h1>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">CyneMora</strong>, developed by iSynera LLC, is an AI-native text-to-video cinematic platform that transforms ideas into fully produced, studio-quality videos in minutes.
              </p>
              <p>
                Turn scripts, images, presentations, PDFs, and creative concepts into polished visual storytelling instantly—without cameras, film crews, complex software, or advanced editing experience. CyneMora combines advanced AI, cinematic scene generation, intelligent voiceovers, motion design, and automated production workflows to streamline the entire video creation process from concept to final render.
              </p>
              <p>
                Whether creating marketing campaigns, social media content, business presentations, product demos, training materials, educational content, cinematic storytelling, or long-form video productions, CyneMora enables creators, businesses, and organizations to produce high-quality video content faster, smarter, and at scale.
              </p>
              <p>
                Designed for the next generation of AI-powered media production, CyneMora removes the traditional barriers of time, cost, and technical complexity—making professional cinematic video creation accessible, scalable, and effortless.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 shadow-xl" asChild>
                <a href="https://cynemora--cynemoraai.us-east4.hosted.app/" target="_blank" rel="noopener noreferrer">
                  Launch CyneMora <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-primary/30 hover:bg-primary/10 transition-all" asChild>
                <a href="/iSynera5.mp4" target="_blank" rel="noopener noreferrer">
                  Watch Demo <PlayCircle className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Video Showcase */}
          <motion.div
            id="demo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10 blur-xl" />
            <div className="rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-black relative group">
              <video
                src="/cynemora.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto aspect-[16/9] object-cover"
              />
              <div className="absolute top-6 left-6">
                <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/10 flex items-center gap-2 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" /> The first video created with CyneMora
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* CyneMora Video Showcase Carousel */}
      <Section className="relative z-10 py-24 bg-black/20 backdrop-blur-md border-t border-border/10">
        <PageHeader
          title="CyneMora Cinematic Gallery"
          description="A collection of fully produced, AI-generated cinematic visual stories."
        />
        <div className="max-w-7xl mx-auto mt-16 px-6">
          <AiAgentsCarousel>
            {[
              { src: "/cynemora2.mp4", title: "CyneMora Vision" },
              { src: "/cynemora3.mp4", title: "Cinematic Generation" },
              { src: "/iSynera5.mp4", title: "iSynera Intelligence" },
            ].map((media, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-[400px] rounded-3xl overflow-hidden border border-border/30 bg-card relative group shadow-lg">
                  <video
                    src={media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-bold text-white mb-2">{media.title}</h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </AiAgentsCarousel>
        </div>
      </Section>
    </div>
  );
}
