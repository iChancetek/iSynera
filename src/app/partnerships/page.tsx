
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { partners } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Partners',
  description: 'Learn about the official partners collaborating with iSynera — including tBrexa Bio Inc. and StreamliningPM — to drive innovation in AI and technology.',
  alternates: { canonical: 'https://www.iSynera.com/partnerships' },
  openGraph: {
    title: 'Our Partners | iSynera',
    description: 'iSynera partners with forward-thinking organizations like tBrexa Bio Inc. and StreamliningPM to drive AI innovation across industries.',
    url: 'https://www.iSynera.com/partnerships',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'iSynera Partners' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Partners | iSynera',
    description: 'iSynera partners with leading organizations to drive AI innovation.',
    images: ['/og-image.png'],
  },
};

const PartnerCard = ({ partner }: { partner: typeof partners[0] }) => (
  <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <div className="text-center sm:text-left">
        <CardTitle className="text-2xl">{partner.name}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription>{partner.summary}</CardDescription>
    </CardContent>
    <CardFooter>
      <Button asChild className="w-full">
        <Link href={partner.website} target="_blank" rel="noopener noreferrer">
          Visit Website
        </Link>
      </Button>
    </CardFooter>
  </Card>
);


export default function PartnershipsPage() {
  return (
    <Section>
      <PageHeader
        title="Our Partners"
        description="We collaborate with industry leaders to push the boundaries of AI and deliver exceptional value to our clients."
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </Section>
  );
}
