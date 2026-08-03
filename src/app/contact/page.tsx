
import { Suspense } from 'react';
import ContactPageClient from '@/components/shared/ContactPageClient';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to ChanceTEK for inquiries about our AI solutions, partnership opportunities, or to schedule a consultation. Headquartered in New York City.',
  alternates: { canonical: 'https://www.ChanceTEK.com/contact' },
  openGraph: {
    title: 'Contact Us | ChanceTEK',
    description: 'Get in touch with ChanceTEK — your AI & media solutions partner. Schedule a consultation or ask about our enterprise AI services.',
    url: 'https://www.ChanceTEK.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact ChanceTEK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | ChanceTEK',
    description: 'Get in touch with ChanceTEK — your AI & media solutions partner.',
    images: ['/og-image.png'],
  },
};

export default function ContactPage() {
  return (
    <Section>
      <PageHeader
        title="Contact Us"
        description="We're here to help. Reach out to us with your questions, project ideas, or partnership inquiries."
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPageClient />
      </Suspense>
    </Section>
  );
}
