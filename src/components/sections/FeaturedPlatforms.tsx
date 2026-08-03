
'use client';

import { motion } from 'framer-motion';
import { featuredPlatforms } from '@/lib/data';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Zap, ShieldCheck } from 'lucide-react';
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
    <Section className="relative overflow-hidden bg-background py-20 w-full">
      {/* Ambient Cyber Background */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/8 blur-[160px] rounded-full pointer-events-none opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <PageHeader
          title="Featured AI-Native Platforms"
          description="Explore our ecosystem of autonomous enterprise platforms, tailored AI systems, and generative media tools."
        />

        <div className="mt-14 max-w-7xl mx-auto px-4 sm:px-10">
          <Carousel
            plugins={[Autoplay({ delay: 5000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {featuredPlatforms.map((platform, index) => (
                <CarouselItem key={platform.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    key={platform.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={cn(
                      "group relative flex flex-col h-full overflow-hidden rounded-3xl transition-all duration-500 border bg-card/70 backdrop-blur-xl",
                      platform.isPremium 
                        ? "border-primary/40 shadow-[0_0_50px_-10px_hsla(var(--primary)/0.25)] hover:border-primary/70 hover:shadow-[0_0_70px_-5px_hsla(var(--primary)/0.4)] glow-border" 
                        : "border-border/40 hover:border-primary/40 hover:shadow-[0_0_35px_-10px_hsla(var(--primary)/0.15)]"
                    )}
                  >
                    {/* Top Accent Gradient Bar */}
                    <div className={cn(
                      "h-1.5 w-full bg-gradient-to-r",
                      platform.isPremium ? "from-primary via-accent to-purple-500" : "from-primary/40 to-accent/40"
                    )} />
                    
                    <CardHeader className="relative z-10 p-7">
                      <div className="flex items-center justify-between mb-5">
                        <div className={cn(
                          "p-3.5 rounded-2xl border transition-all duration-500 group-hover:scale-110",
                          platform.isPremium 
                            ? "bg-primary/20 border-primary/40 shadow-[0_0_20px_-3px_hsla(var(--primary)/0.4)] text-primary" 
                            : "bg-primary/10 border-primary/20 text-accent"
                        )}>
                          <platform.Icon className="w-7 h-7" />
                        </div>

                        {platform.isPremium && (
                          <div className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 text-primary shadow-sm">
                            <Sparkles className="h-3 w-3 text-accent animate-pulse" />
                            <span>ENTERPRISE OS</span>
                          </div>
                        )}
                      </div>
                      
                      <CardTitle className={cn(
                        "font-extrabold mb-3 text-foreground transition-colors duration-300 group-hover:text-primary",
                        platform.isPremium ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                      )}>
                        {platform.name}
                      </CardTitle>
                      
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-4 font-normal">
                        {platform.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <div className="p-7 pt-0 mt-auto relative z-10">
                      <Button 
                        asChild 
                        className={cn(
                          "w-full transition-all duration-300 rounded-xl h-13 text-base font-bold",
                          platform.isPremium 
                            ? "bg-primary-gradient text-white shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-0.5" 
                            : "border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                        )}
                        variant={platform.isPremium ? "default" : "outline"}
                      >
                        <a href={platform.href} target="_blank" rel="noopener noreferrer">
                          {platform.isPremium && <Zap className="mr-2 h-4 w-4 fill-current" />}
                          <span>Experience {platform.name}</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
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
            <CarouselPrevious className="left-0 -translate-x-1/2 border-primary/30 bg-card/80 backdrop-blur-md" />
            <CarouselNext className="right-0 translate-x-1/2 border-primary/30 bg-card/80 backdrop-blur-md" />
          </Carousel>
        </div>
      </div>
    </Section>
  );
}

