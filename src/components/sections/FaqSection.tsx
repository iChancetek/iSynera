import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqItems } from '@/lib/data';

const FaqSection = () => {
  return (
    <Section className="bg-muted/30">
      <PageHeader 
        title="Frequently Asked Questions"
        description="Find answers to common questions about ChanceTEK and our AI services."
      />
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="border-b border-border last:border-b-0">
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default FaqSection;
