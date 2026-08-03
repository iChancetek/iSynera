import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqItems } from '@/lib/data';

const FaqSection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Ambient mesh */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container relative z-10 mx-auto px-4">
        <PageHeader 
          title="Frequently Asked Questions"
          description="Find answers to common questions about iSynera and our AI services."
        />
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-8 border-border/30">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="border-b border-border/30 last:border-b-0">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline hover:text-primary transition-colors duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default FaqSection;
