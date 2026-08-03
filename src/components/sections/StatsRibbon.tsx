'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, ShieldCheck, Zap, Activity, Radio } from 'lucide-react';

export default function StatsRibbon() {
  const stats = [
    { label: 'Autonomous Agents', value: '9 Core', icon: Brain, color: 'text-primary' },
    { label: 'Inference Model', value: 'GPT-5.6 Luna', icon: Cpu, color: 'text-accent' },
    { label: 'Avg Latency', value: '< 12ms', icon: Activity, color: 'text-emerald-400' },
    { label: 'Privacy Standard', value: 'Zero-Retention', icon: ShieldCheck, color: 'text-purple-400' },
    { label: 'System Autonomy', value: '99.8%', icon: Zap, color: 'text-amber-400' },
  ];

  return (
    <section className="w-full relative z-20 -mt-6 mb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl border-primary/30 bg-card/80 backdrop-blur-2xl p-6 shadow-[0_0_50px_-10px_hsla(var(--primary)/0.25)] glow-border">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-border/30">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="pt-4 md:pt-0 first:pt-0 flex flex-col items-center justify-center space-y-1.5"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-muted-foreground">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span>{stat.label}</span>
                </div>
                <div className="text-2xl lg:text-3xl font-black tracking-tight text-foreground font-mono">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-foreground to-primary">
                    {stat.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
