import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { technologies } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import { CarouselItem } from '@/components/ui/carousel';

const TechnologiesSection = () => {
  return (
    <Section>
      <PageHeader 
        title="Technologies We Master"
        description="Leveraging a diverse toolkit of modern AI platforms and frameworks to build exceptional solutions."
      />
      <div className="mt-12 max-w-7xl mx-auto px-12">
        <AiAgentsCarousel>
          {technologies.map((tech) => (
            <CarouselItem key={tech.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <Card className="h-full p-4 hover:shadow-lg transition-shadow duration-200">
                <CardContent className="flex flex-col items-center justify-center text-center p-0 h-full">
                  <tech.Icon className="h-10 w-10 text-primary mb-2" />
                  <p className="text-sm font-medium text-foreground">{tech.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </AiAgentsCarousel>
      </div>
    </Section>
  );
};

export default TechnologiesSection;
