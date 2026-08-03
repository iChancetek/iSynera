
import Section from '@/components/shared/Section';
import ServiceCard from '@/components/shared/ServiceCard';
import { services } from '@/lib/data';
import PageHeader from '../shared/PageHeader';
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import { CarouselItem } from '@/components/ui/carousel';

const ServicesOverview = () => {
  // Show a selection of services, including the new Voice AI agent
  const featuredServiceIds = ['agentic-ai-systems', 'custom-ai-agent', 'ai-powered-web-apps', 'voice-ai-agents', 'rag-chatbots-service', 'model-fine-tuning-service'];
  const featuredServices = services.filter(service => featuredServiceIds.includes(service.id));

  return (
    <Section>
      <PageHeader 
        title="Our AI Services"
        description="We offer a comprehensive suite of AI solutions tailored to meet diverse business needs. Explore how our expertise can drive innovation and efficiency in your organization."
      />

      <div className="mt-16 max-w-7xl mx-auto px-12">
        <AiAgentsCarousel>
          {featuredServices.map((service) => (
            <CarouselItem key={service.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
              <ServiceCard
                id={service.id}
                Icon={service.Icon}
                name={service.name}
                description={service.description}
                href={service.href}
              />
            </CarouselItem>
          ))}
        </AiAgentsCarousel>
      </div>
    </Section>
  );
};

export default ServicesOverview;
