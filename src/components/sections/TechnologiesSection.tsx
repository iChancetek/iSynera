import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { technologies } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import { CarouselItem } from '@/components/ui/carousel';

const TechnologiesSection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <PageHeader 
          title="Technologies We Master"
          description="Leveraging a diverse toolkit of modern AI platforms and frameworks to build exceptional solutions."
        />
        <div className="mt-12 max-w-7xl mx-auto px-12">
          <AiAgentsCarousel>
            {technologies.map((tech) => (
              <CarouselItem key={tech.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <Card className="h-full p-4 glass-card glass-card-hover rounded-xl border-border/30 group overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center text-center p-0 h-full">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 mb-3 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_-5px_hsla(var(--primary)/0.3)]">
                      <tech.Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{tech.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </AiAgentsCarousel>
        </div>
      </div>
    </Section>
  );
};

export default TechnologiesSection;
