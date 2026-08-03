
'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Cpu, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  Search, 
  Activity,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import Section from '@/components/shared/Section';
import { Card, CardContent } from '@/components/ui/card';
import VideoSection from '@/components/sections/VideoSection';

const OutcomeItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 p-4 bg-background border border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-primary text-primary-foreground p-1.5 rounded-full flex-shrink-0">
      <CheckCircle2 size={18} />
    </div>
    <span className="font-bold text-foreground">{text}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="bg-card/50 backdrop-blur-sm border-primary/5 hover:border-primary/20 transition-all hover:-translate-y-1">
    <CardContent className="p-6 space-y-3">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default function MissionFeatures() {
  return (
    <Section className="bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-8 leading-tight"
          >
            Intelligent Systems. <span className="text-primary italic">Real Outcomes.</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Through a unified ecosystem of custom AI agents, AI-native applications, and enterprise-grade AI SaaS platforms, ChanceTEK enables organizations to operate with intelligence, speed, and autonomy at scale.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <OutcomeItem text="Automate complex workflows" />
            <OutcomeItem text="Augment high-stakes decisions" />
            <OutcomeItem text="Reduce operational costs" />
            <OutcomeItem text="Unlock exponential productivity" />
          </div>
          <div className="mt-12 inline-block p-6 bg-primary text-primary-foreground rounded-2xl shadow-lg">
            <p className="text-lg md:text-xl font-bold italic">
              "This is not AI as a feature. This is AI as the operating layer of your business."
            </p>
          </div>
        </div>

        {/* Intro Video */}
        <div className="mb-24">
          <VideoSection videoSrc="/StrideIQ.mp4" />
        </div>

        {/* Architecture Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built on Advanced AI Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platforms integrate the full spectrum of modern AI capabilities, powered by advanced Context Engineering, Vibe Coding, and Agentic Coding methodologies. Our development lifecycle is driven by PRD (Production Requirements Development) and our PIV framework — Planning, Implementation, Validation, and Iterating — ensuring every system is designed, built, tested, and continuously improved with precision and speed. This AI-native development approach allows us to rapidly deliver intelligent software, autonomous AI agent systems, voice AI platforms, and enterprise automation solutions that scale efficiently across cloud, web, and mobile environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={BrainCircuit}
              title="Large Reasoning Models"
              description="Deep, step-by-step problem solving for complex enterprise challenges."
            />
            <FeatureCard 
              icon={Layers}
              title="Optimized LLM/SLM"
              description="Frontier models and Small Language Models optimized for performance."
            />
            <FeatureCard 
              icon={Search}
              title="Grounded RAG"
              description="Retrieval-Augmented Generation for accurate, real-time intelligence."
            />
            <FeatureCard 
              icon={Zap}
              title="Precision Fine-Tuning"
              description="Customized accuracy tailored to your specific business domain."
            />
            <FeatureCard 
              icon={Activity}
              title="Multimodal Intelligence"
              description="Intelligence spanning text, image, data, and real-world perception."
            />
            <FeatureCard 
              icon={Workflow}
              title="Agentic Automation"
              description="Intelligent workflow orchestration driven by autonomous agents."
            />
          </div>
        </div>

        {/* Performance Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-12 items-center bg-primary/5 rounded-[3rem] p-8 md:p-16 border border-primary/10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
              <Rocket size={16} /> Scalable. Performant. Enterprise-Ready.
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">A Hybrid AI <span className="text-primary">Advantage</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We leverage high-performance inference frameworks such as vLLM and Llama.cpp to deliver low-latency, high-throughput AI systems. 
              Our hybrid approach blends frontier innovation with open flexibility, enabling model interoperability and secure, enterprise-grade deployments.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-primary mt-1" size={20} />
                <span className="font-medium text-foreground">Secure, enterprise-grade deployments across cloud and edge.</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1" size={20} />
                <span className="font-medium text-foreground">Cost-efficient scaling for massive enterprise workloads.</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="text-primary mt-1" size={20} />
                <span className="font-medium text-foreground">Precision, control, and performance at any scale.</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-square lg:aspect-auto h-full min-h-[300px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden flex items-center justify-center p-12">
             <div className="text-center space-y-6">
                <h3 className="text-4xl md:text-6xl font-black text-primary opacity-20 select-none">AGENTIC</h3>
                <h3 className="text-4xl md:text-6xl font-black text-foreground opacity-40 select-none">NATIVE</h3>
                <h3 className="text-4xl md:text-6xl font-black text-primary opacity-20 select-none">INTELLIGENCE</h3>
             </div>
             {/* Decorative lines */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mt-32 text-center max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-foreground text-background rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
            
            <h2 className="text-3xl md:text-4xl font-black mb-6 italic uppercase tracking-tighter">The Future of Enterprise is Agentic</h2>
            <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed mb-8">
              We are entering a new era where software doesn’t just support decisions—it makes them, refines them, and acts on them.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center font-black tracking-widest text-sm uppercase text-primary">
              <span>Native AI</span>
              <span className="hidden md:inline">•</span>
              <span>Agentic Enterprise</span>
              <span className="hidden md:inline">•</span>
              <span>ChanceTEK</span>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
