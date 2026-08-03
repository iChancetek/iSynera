
'use client';

import { motion } from 'framer-motion';
import { featuredPlatforms } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Zap } from 'lucide-react';
import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SocialWidget from '@/components/shared/SocialWidget';

export default function FeaturedPlatforms() {
  return (
    <Section className="relative overflow-hidden bg-background">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary/8 blur-[140px] rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/6 blur-[150px] rounded-full pointer-events-none opacity-25" />
      
      <div className="container relative z-10 mx-auto px-4">
        <PageHeader
          title="Featured Platforms"
          description="Explore our flagship AI-native applications redefining business operations with cutting-edge intelligence."
        />

        <div className="mt-16 max-w-7xl mx-auto px-12">
          <Carousel
            plugins={[Autoplay({ delay: 5000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {featuredPlatforms.map((platform, index) => (
                <CarouselItem key={platform.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative flex flex-col h-full overflow-hidden rounded-2xl transition-all duration-500",
                platform.isPremium 
                  ? "glass-card border-primary/30 hover:border-primary/60 shadow-[0_0_60px_-12px_hsla(var(--primary)/0.2)]" 
                  : "glass-card glass-card-hover border-border/30"
              )}
            >
              {/* Premium gradient overlay */}
              {platform.isPremium && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/5 opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
                </>
              )}
              
              <CardHeader className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={cn(
                    "p-3 w-fit rounded-xl border transition-all duration-500 group-hover:scale-110",
                    platform.isPremium 
                      ? "bg-primary/15 border-primary/30 shadow-[0_0_25px_-5px_hsla(var(--primary)/0.35)] group-hover:shadow-[0_0_35px_-5px_hsla(var(--primary)/0.5)]" 
                      : "bg-primary/10 border-primary/20 group-hover:shadow-[0_0_20px_-5px_hsla(var(--primary)/0.25)]"
                  )}>
                    <platform.Icon className={cn("w-8 h-8", platform.isPremium ? "text-primary" : "text-primary/80")} />
                  </div>
                  {platform.isPremium && (
                    <div className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 animate-pulse-glow">
                      <Sparkles className="h-3 w-3 text-primary" />
                      <span className="text-gradient">Premium</span>
                    </div>
                  )}
                </div>
                
                <CardTitle className={cn(
                  "font-black mb-4 transition-colors duration-300",
                  platform.isPremium ? "text-3xl group-hover:text-primary" : "text-2xl group-hover:text-primary"
                )}>
                  {platform.name}
                </CardTitle>
                
                <CardDescription className="text-base text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-4">
                  {platform.description}
                </CardDescription>
              </CardHeader>
              
              <div className="p-8 pt-0 mt-auto relative z-10">
                <Button 
                  asChild 
                  className={cn(
                    "w-full transition-all duration-300 rounded-xl h-14 text-lg font-bold",
                    platform.isPremium 
                      ? "bg-primary-gradient text-white shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-0.5" 
                      : "border-border/40 hover:border-primary/40 hover:bg-primary/5"
                  )}
                  variant={platform.isPremium ? "default" : "outline"}
                >
                  <a href={platform.href} target="_blank" rel="noopener noreferrer">
                    {platform.isPremium && <Zap className="mr-2 h-5 w-5" />}
                    {platform.id === 'isydney' ? 'Experience iSydney' : `Experience ${platform.name}`} <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="px-4 pb-4">
                <SocialWidget topicId={platform.id} />
              </div>
            </motion.div>
          </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>
        </div>
      </div>
    </Section>
  );
}
