'use client';

import { motion } from 'framer-motion';
import { featuredPlatforms } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Zap, Shield, ArrowUpRight, Cpu, Layers, BrainCircuit, HeartPulse, Mic2, Users, BarChart3 } from 'lucide-react';
import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { cn } from '@/lib/utils';

export default function BentoGridPlatforms() {
  const mainPlatform = featuredPlatforms.find(p => p.id === 'chancellor');
  const eliteBooks = featuredPlatforms.find(p => p.id === 'elitebooks');
  const chancellorHR = featuredPlatforms.find(p => p.id === 'chancellorhr');
  const workspaceIQ = featuredPlatforms.find(p => p.id === 'workspaceiq');
  const icareOS = featuredPlatforms.find(p => p.id === 'icareos-premium') || featuredPlatforms.find(p => p.id === 'icareos');
  const remainingPlatforms = featuredPlatforms.filter(p => !['chancellor', 'elitebooks', 'chancellorhr', 'workspaceiq', 'icareos-premium'].includes(p.id));

  return (
    <Section className="relative overflow-hidden bg-background py-20 w-full">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-primary/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <PageHeader
          title="Flagship AI Ecosystem"
          description="Autonomous enterprise operating systems, specialized multi-agent workforces, and AI media platforms built for scale."
        />

        {/* Bento Grid Container */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Bento Tile 1: ChancellorOS (Hero Full-Width Card - 8 cols) */}
          {mainPlatform && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/40 bg-card/80 backdrop-blur-2xl p-8 lg:p-10 shadow-[0_0_60px_-10px_hsla(var(--primary)/0.3)] glow-border hover:border-primary/70 transition-all duration-500 min-h-[380px]"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-accent to-purple-500" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-primary/20 border border-primary/40 text-primary shadow-lg">
                      <mainPlatform.Icon className="w-8 h-8" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-mono font-bold uppercase tracking-wider text-primary">
                      ⚡ FLAGSHIP ENTERPRISE OS
                    </span>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {mainPlatform.name}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                  {mainPlatform.description}
                </p>
              </div>

              <div className="relative z-10 pt-6 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-mono text-accent">
                  <Cpu className="w-4 h-4" /> ChancellorOS Kernel v5.6
                  <span className="text-muted-foreground">•</span>
                  <Layers className="w-4 h-4" /> Multi-Agent ERP & CRM
                </div>

                <Button asChild size="lg" className="bg-primary-gradient text-white font-bold rounded-2xl px-6 shadow-lg shadow-primary/25 hover:shadow-primary/50">
                  <a href={mainPlatform.href} target="_blank" rel="noopener noreferrer">
                    Launch ChancellorOS <ArrowUpRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}

          {/* Bento Tile 2: EliteBooks (4 cols) */}
          {eliteBooks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/30 bg-card/70 backdrop-blur-xl p-8 shadow-lg hover:border-primary/60 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-accent/15 border border-accent/30 text-accent w-fit">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Autonomous Financial OS</div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{eliteBooks.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{eliteBooks.description}</p>
              </div>

              <div className="pt-6">
                <Button asChild variant="outline" className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/10 rounded-xl font-bold">
                  <a href={eliteBooks.href} target="_blank" rel="noopener noreferrer">
                    Open EliteBooks <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}

          {/* Bento Tile 3: ChancellorHR (4 cols) */}
          {chancellorHR && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="md:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/30 bg-card/70 backdrop-blur-xl p-8 shadow-lg hover:border-primary/60 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 w-fit">
                  <Users className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">9 AI HR Agents</div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{chancellorHR.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{chancellorHR.description}</p>
              </div>

              <div className="pt-6">
                <Button asChild variant="outline" className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/10 rounded-xl font-bold">
                  <a href={chancellorHR.href} target="_blank" rel="noopener noreferrer">
                    Explore ChancellorHR <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}

          {/* Bento Tile 4: WorkSpaceIQ (4 cols) */}
          {workspaceIQ && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/30 bg-card/70 backdrop-blur-xl p-8 shadow-lg hover:border-primary/60 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 w-fit">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">AI Dictation & Research</div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{workspaceIQ.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{workspaceIQ.description}</p>
              </div>

              <div className="pt-6">
                <Button asChild variant="outline" className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/10 rounded-xl font-bold">
                  <a href={workspaceIQ.href} target="_blank" rel="noopener noreferrer">
                    Open WorkSpaceIQ <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}

          {/* Bento Tile 5: iCareOS (4 cols) */}
          {icareOS && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="md:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/30 bg-card/70 backdrop-blur-xl p-8 shadow-lg hover:border-primary/60 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 w-fit">
                  <HeartPulse className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">AI Clinical OS</div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{icareOS.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{icareOS.description}</p>
              </div>

              <div className="pt-6">
                <Button asChild variant="outline" className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/10 rounded-xl font-bold">
                  <a href={icareOS.href} target="_blank" rel="noopener noreferrer">
                    Launch iCareOS <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}

        </div>

        {/* Additional Specialized Applications Grid */}
        <div className="mt-12 max-w-7xl mx-auto">
          <h4 className="text-center text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-8">
            Specialized Autonomous Applications & Assistants
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPlatforms.map((platform, i) => (
              <motion.a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-start gap-4 p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-md hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <platform.Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 font-bold text-foreground group-hover:text-primary transition-colors">
                    <span>{platform.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{platform.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
