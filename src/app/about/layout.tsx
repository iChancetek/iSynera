import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about iSynera — an AI-native enterprise platform company founded by Chancellor Minus, headquartered in New York City. 25+ years of enterprise technology heritage via iSynera LLC.',
  alternates: { canonical: 'https://www.iSynera.com/about' },
  openGraph: {
    title: 'About Us | iSynera',
    description: 'iSynera delivers AI-Native, Agentic AI applications that transform business operations. Founded by Chancellor Minus. Headquartered in New York City.',
    url: 'https://www.iSynera.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About iSynera' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | iSynera',
    description: 'iSynera delivers AI-Native, Agentic AI applications that transform business operations.',
    images: ['/og-image.png'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
