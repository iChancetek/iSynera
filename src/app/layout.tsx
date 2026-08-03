import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import ClientOnlyNavbar from '@/components/layout/ClientOnlyNavbar';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { FirebaseClientProvider } from '@/firebase';
import { AutoThemeProvider } from '@/components/shared/AutoThemeProvider';
import PWARegistration from '@/components/shared/PWARegistration';
import DynamicAiWrapper from '@/components/layout/DynamicAiWrapper';
import BackgroundVideo from '@/components/sections/BackgroundVideo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#6D28D9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iSynera.com'),
  title: {
    default: 'iSynera | Your AI & Media Solutions Partner for the Agentic Future',
    template: '%s | iSynera',
  },
  description: 'iSynera builds next-generation AI-native enterprise platforms designed to think, act, and evolve alongside your business. Native AI. Agentic AI. AI-Enabled.',
  keywords: [
    'AI Solutions', 'Agentic AI', 'Generative AI', 'LLM Fine-Tuning',
    'Workflow Automation', 'iSynera', 'Enterprise AI', 'AI Agents',
    'RAG Chatbots', 'Voice AI', 'AI-Powered Web Apps',
  ],
  authors: [{ name: 'iSynera', url: 'https://www.iSynera.com' }],
  creator: 'iSynera',
  publisher: 'iSynera',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.iSynera.com',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'iSynera',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/pwa-icon.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/pwa-icon.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/pwa-icon.jpg',
  },
  openGraph: {
    title: 'iSynera | Your AI & Media Solutions Partner for the Agentic Future',
    description: 'iSynera builds next-generation AI-native enterprise platforms designed to think, act, and evolve alongside your business. Native AI. Agentic AI. AI-Enabled.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.iSynera.com',
    siteName: 'iSynera',
    images: [{
      url: 'https://www.iSynera.com/attached-hero-image.jpg',
      width: 1200,
      height: 630,
      alt: 'iSynera — Your AI & Media Solutions Partner for the Agentic Future',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iSynera',
    creator: '@iSynera',
    title: 'iSynera | Your AI & Media Solutions Partner for the Agentic Future',
    description: 'iSynera builds next-generation AI-native enterprise platforms designed to think, act, and evolve alongside your business. Native AI. Agentic AI. AI-Enabled.',
    images: [{
      url: 'https://www.iSynera.com/attached-hero-image.jpg',
      width: 1200,
      height: 630,
      alt: 'iSynera — Your AI & Media Solutions Partner for the Agentic Future',
    }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'iSynera',
  url: 'https://www.iSynera.com',
  logo: 'https://www.iSynera.com/pwa-512.png',
  image: 'https://www.iSynera.com/attached-hero-image.jpg',
  description: 'iSynera builds next-generation AI-native enterprise platforms designed to think, act, and evolve alongside your business. Native AI. Agentic AI. AI-Enabled.',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Chancellor Minus',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '447 Broadway, Suite 1110',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10013',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-646-867-3318',
    contactType: 'customer service',
    email: 'info@iSynera.com',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.iSynera.com',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apple / iMessage icons */}
        <link rel="apple-touch-icon" href="/pwa-icon.jpg" />
        <link rel="icon" type="image/jpeg" href="/pwa-icon.jpg" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="iSynera" />
        {/* JSON-LD Organization structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} suppressHydrationWarning>
        <PWARegistration />
        <BackgroundVideo />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AutoThemeProvider>
            <FirebaseClientProvider>
              <ClientOnlyNavbar />
              <main id="main-content" className="flex-grow container mx-auto px-4 md:px-6 py-8">
                {children}
              </main>
              <Footer />
              <DynamicAiWrapper />
              <Toaster />
            </FirebaseClientProvider>
          </AutoThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}