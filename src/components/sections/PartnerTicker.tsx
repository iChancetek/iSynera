
'use client';

import Section from "@/components/shared/Section";
import PageHeader from "@/components/shared/PageHeader";
import { tickerPartners } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function PartnerTicker() {
  // To create a seamless loop, we duplicate the list of partners.
  // The animation will translate the container by -50% of its width,
  // which corresponds to the length of the original list.
  const allPartners = [...tickerPartners, ...tickerPartners];

  return (
    <Section className="bg-muted/30">
      <PageHeader
        title="Trusted by Leading Companies & Partners"
        description=""
      />
      <div
        className={cn(
          "relative w-full overflow-hidden",
          // Add a fade-out effect on the edges for a smoother appearance
          "before:absolute before:left-0 before:top-0 before:h-full before:w-16 before:bg-gradient-to-r before:from-muted/30 before:to-transparent before:z-10",
          "after:absolute after:right-0 after:top-0 after:h-full after:w-16 after:bg-gradient-to-l after:from-muted/30 after:to-transparent after:z-10"
        )}
      >
        <div className="flex w-max motion-safe:animate-marquee">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 py-2 text-2xl font-semibold text-muted-foreground whitespace-nowrap transition-colors duration-300 hover:text-primary"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

    