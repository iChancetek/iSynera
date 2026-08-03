
import HeroSection from '@/components/sections/HeroSection';
import HeroImage from '@/components/sections/HeroImage';
import StatsRibbon from '@/components/sections/StatsRibbon';
import AiConsoleStudio from '@/components/sections/AiConsoleStudio';
import BentoGridPlatforms from '@/components/sections/BentoGridPlatforms';
import MissionFeatures from '@/components/sections/MissionFeatures';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import FaqSection from '@/components/sections/FaqSection';
import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import PartnerTicker from '@/components/sections/PartnerTicker';
import VideoSection from '@/components/sections/VideoSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Cyberpunk HUD overlay */}
      <HeroSection heroImage={<HeroImage />} />

      {/* 2. Live Telemetry & Metrics Ribbon */}
      <StatsRibbon />

      {/* 3. Interactive Agentic AI Studio Console */}
      <AiConsoleStudio />

      {/* 4. Asymmetrical Bento Grid Showcase of Flagship Platforms */}
      <BentoGridPlatforms />

      {/* 5. Cinematic 4K Showcase 1: Agentic Chance */}
      <VideoSection videoSrc="/AgenticChance.mp4" />

      {/* 6. Architecture & Capabilities Matrix */}
      <MissionFeatures />

      {/* 7. Cinematic 4K Showcase 2: ChancellorOS */}
      <VideoSection videoSrc="/ChancellorOS.mp4" />

      {/* 8. AI Services Catalog */}
      <ServicesOverview />

      {/* 9. Technologies & Frameworks */}
      <TechnologiesSection />

      {/* 10. Client Testimonials */}
      <TestimonialsSection />

      {/* 11. FAQ Section */}
      <FaqSection />

      {/* 12. Partner Logo Ticker */}
      <PartnerTicker />

      {/* 13. Final Glassmorphic CTA Section */}
      <Section className="relative text-center overflow-hidden py-24 w-full">
        <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/12 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <PageHeader
            title="Ready to Transform Your Enterprise with Agentic AI?"
            description="Let's build your custom autonomous AI workforce, agentic web apps, and media platforms with iSynera."
          />
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="h-16 px-10 text-xl font-bold bg-primary-gradient text-white shadow-2xl shadow-primary/30 hover:shadow-primary/60 transition-all hover:-translate-y-1 animate-pulse-glow rounded-2xl">
              <Link href="/get-started">
                <Zap className="mr-2 h-6 w-6 fill-current" /> Start Your AI Journey <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild className="h-16 px-8 text-lg font-bold glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10 rounded-2xl">
              <Link href="/contact">Schedule Executive Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

