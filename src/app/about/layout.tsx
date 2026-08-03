import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ChanceTEK — an AI-native enterprise platform company founded by Chancellor Minus, headquartered in New York City. 25+ years of enterprise technology heritage via ChanceTEK LLC.',
  alternates: { canonical: 'https://www.ChanceTEK.com/about' },
  openGraph: {
    title: 'About Us | ChanceTEK',
    description: 'ChanceTEK delivers AI-Native, Agentic AI applications that transform business operations. Founded by Chancellor Minus. Headquartered in New York City.',
    url: 'https://www.ChanceTEK.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About ChanceTEK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | ChanceTEK',
    description: 'ChanceTEK delivers AI-Native, Agentic AI applications that transform business operations.',
    images: ['/og-image.png'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
