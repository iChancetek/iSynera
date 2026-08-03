
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
    <Section className="relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-1/2 h-32 bg-primary/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10">
        <PageHeader
          title="Trusted by Leading Companies & Partners"
          description=""
        />
        <div
          className={cn(
            "relative w-full overflow-hidden",
            // Fade-out edges with background color matching
            "before:absolute before:left-0 before:top-0 before:h-full before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent before:z-10",
            "after:absolute after:right-0 after:top-0 after:h-full after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent after:z-10"
          )}
        >
          <div className="flex w-max motion-safe:animate-marquee">
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 py-3 text-2xl font-bold text-muted-foreground/50 whitespace-nowrap transition-all duration-300 hover:text-primary hover:scale-105 cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}