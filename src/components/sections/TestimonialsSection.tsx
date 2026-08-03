
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Section from '@/components/shared/Section';
import { testimonials, type Testimonial } from '@/lib/data';
import PageHeader from '../shared/PageHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import { CarouselItem } from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="flex flex-col h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="pb-4">
      <Quote className="h-8 w-8 text-primary mb-2" />
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
    </CardContent>
    <CardFooter className="pt-4 border-t mt-auto">
      {/* Removed Avatar component block that showed placeholder images */}
      <div>
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
      </div>
    </CardFooter>
  </Card>
);

const TestimonialsSection = () => {
  return (
    <Section className="bg-muted/30">
      <PageHeader 
        title="What Our Clients Say"
        description="Real stories from businesses empowered by ChanceTEK's AI expertise."
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
    </Section>
  );
};

export default TestimonialsSection;
