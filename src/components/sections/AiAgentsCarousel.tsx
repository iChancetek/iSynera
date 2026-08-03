'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function AiAgentsCarousel({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000 })]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 md:-ml-8">
        {children}
      </CarouselContent>
      <CarouselPrevious className="left-0 -translate-x-1/2" />
      <CarouselNext className="right-0 translate-x-1/2" />
    </Carousel>
  );
}
