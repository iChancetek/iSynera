
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
import { ArrowRight } from 'lucide-react';
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
      <Section className="text-center">
        <PageHeader
          title="Ready to Transform Your Business with AI?"
          description="Let's discuss how iSynera can tailor AI solutions to meet your unique challenges and goals."
        />
        <Button size="lg" asChild className="shadow-lg hover:shadow-primary/30 transition-shadow">
          <Link href="/get-started">
            Start Your AI Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </Section>
    </>
  );
}
