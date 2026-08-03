
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Section from '@/components/shared/Section';
import { testimonials, type Testimonial } from '@/lib/data';
import PageHeader from '../shared/PageHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import { CarouselItem } from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="flex flex-col h-full glass-card glass-card-hover rounded-2xl border-border/30 overflow-hidden group">
    <CardHeader className="pb-4">
      <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 w-fit transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_-5px_hsla(var(--primary)/0.3)]">
        <Quote className="h-6 w-6 text-primary" />
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
    </CardContent>
    <CardFooter className="pt-4 border-t border-border/30 mt-auto">
      {/* Removed Avatar component block that showed placeholder images */}
      <div>
        <p className="font-bold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
      </div>
    </CardFooter>
  </Card>
);

const TestimonialsSection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Ambient mesh */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <PageHeader 
          title="What Our Clients Say"
          description="Real stories from businesses empowered by iSynera's AI expertise."
        />
        <div className="max-w-7xl mx-auto px-10">
          <AiAgentsCarousel>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </AiAgentsCarousel>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
