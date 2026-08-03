
import HeroSection from '@/components/sections/HeroSection';
import HeroImage from '@/components/sections/HeroImage';
import MissionFeatures from '@/components/sections/MissionFeatures';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import FaqSection from '@/components/sections/FaqSection';
import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import PartnerTicker from '@/components/sections/PartnerTicker';
import VideoSection from '@/components/sections/VideoSection';
import FeaturedPlatforms from '@/components/sections/FeaturedPlatforms';

export default function HomePage() {
  return (
    <>
      <HeroSection heroImage={<HeroImage />} />
      <FeaturedPlatforms />
      <VideoSection videoSrc="/AgenticChance.mp4" />
      <MissionFeatures />
      <VideoSection videoSrc="/ChancellorOS.mp4" />
      <ServicesOverview />
      <TestimonialsSection />
      <TechnologiesSection />
      <FaqSection />
      <PartnerTicker />

      {/* ── Final CTA Section ────────────────────────────────────────────────── */}
      <Section className="relative text-center overflow-hidden">
        {/* Ambient mesh */}
        <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <PageHeader
            title="Ready to Transform Your Business with AI?"
            description="Let's discuss how iSynera can tailor AI solutions to meet your unique challenges and goals."
          />
          <Button size="lg" asChild className="h-14 px-8 text-lg font-bold bg-primary-gradient text-white shadow-xl shadow-primary/25 hover:shadow-primary/50 transition-all hover:-translate-y-1 animate-pulse-glow">
            <Link href="/get-started">
              <Zap className="mr-2 h-5 w-5" /> Start Your AI Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
