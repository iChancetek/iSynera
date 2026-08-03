
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import ServiceCard from '@/components/shared/ServiceCard';
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import VideoSection from '@/components/sections/VideoSection';
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import { CarouselItem } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'AI Services',
  description: 'Explore the comprehensive suite of AI solutions offered by iSynera, including Agentic AI, RAG Chatbots, Voice AI, LLM Fine-Tuning, and Workflow Automation—designed to scale your business.',
  alternates: { canonical: 'https://www.iSynera.com/services' },
  openGraph: {
    title: 'AI Services | iSynera',
    description: 'Explore the comprehensive suite of AI solutions offered by iSynera, including Agentic AI, RAG Chatbots, Voice AI, LLM Fine-Tuning, and Workflow Automation.',
    url: 'https://www.iSynera.com/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'iSynera AI Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services | iSynera',
    description: 'Explore the comprehensive suite of AI solutions offered by iSynera.',
    images: ['/og-image.png'],
  },
};

export default function ServicesPage() {
  return (
    <Section>
      <PageHeader
        title="Our AI Services"
        description="We offer a comprehensive suite of AI solutions tailored to meet diverse business needs. Explore how our expertise can drive innovation and efficiency in your organization."
      />
      
      <VideoSection videoSrc="/StrideIQ.mp4" />

      <div className="mt-16 max-w-7xl mx-auto px-12">
        <AiAgentsCarousel>
          {services.map((service) => (
            <CarouselItem key={service.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
              <div id={service.id} className="scroll-mt-24 h-full"> {/* id and scroll-mt kept for potential future in-page navigation from elsewhere */}
                <ServiceCard
                  id={service.id}
                  Icon={service.Icon}
                  name={service.name}
                  description={service.description}
                  href={service.href} // This now links to the dedicated service page e.g., /services/executive-ai-assistant
                />
              </div>
            </CarouselItem>
          ))}
        </AiAgentsCarousel>
      </div>
    </Section>
  );
}
