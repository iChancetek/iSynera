import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started',
  description: 'Begin your AI transformation journey with ChanceTEK. Schedule a free consultation and let us design a custom AI solution tailored to your business.',
  alternates: { canonical: 'https://www.ChanceTEK.com/get-started' },
  openGraph: {
    title: 'Get Started | ChanceTEK',
    description: 'Begin your AI transformation journey with ChanceTEK. Schedule a free consultation and let us build your custom AI solution.',
    url: 'https://www.ChanceTEK.com/get-started',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Get Started with ChanceTEK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started | ChanceTEK',
    description: 'Begin your AI transformation. Schedule a free consultation with ChanceTEK.',
    images: ['/og-image.png'],
  },
};

const steps = [
  {
    title: "1. Initial Consultation",
    description: "Share your business challenges and goals. We'll listen and understand your unique needs.",
    Icon: CheckCircle
  },
  {
    title: "2. Solution Design",
    description: "Our experts will architect a tailored AI strategy and solution proposal for your review.",
    Icon: CheckCircle
  },
  {
    title: "3. Development & Deployment",
    description: "We build, test, and deploy your custom AI solution, ensuring seamless integration.",
    Icon: CheckCircle
  },
  {
    title: "4. Ongoing Support & Optimization",
    description: "Receive continuous support and performance optimization to maximize your AI investment.",
    Icon: CheckCircle
  }
];

export default function GetStartedPage() {
  return (
    <Section>
      <PageHeader
        title="Start Your AI Transformation"
        description="Ready to leverage the power of AI for your business? Let's begin the journey together. Here’s how we can help you get started."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground">Partner with ChanceTEK</h2>
          <p className="text-muted-foreground leading-relaxed">
            At ChanceTEK, we simplify the process of integrating advanced AI into your operations. 
            Whether you're looking to automate workflows, enhance customer experiences, or unlock new data insights, 
            our team is ready to guide you every step of the way.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Contact us today for a free consultation. Let's explore the possibilities and design an AI solution 
            that drives real business value.
          </p>
          <Button size="lg" asChild className="shadow-lg hover:shadow-primary/30 transition-shadow">
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <step.Icon className="h-7 w-7 text-primary" />
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-primary/10 p-8 md:p-12 text-center rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold text-primary mb-4">
          Have a Specific Project in Mind?
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          If you have a clear idea or a complex challenge you'd like to tackle with AI,
          we're excited to hear about it. Our team thrives on innovation and building custom solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact?subject=Project Inquiry">
              Discuss Your Project
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              Explore Our Capabilities
            </Link>
          </Button>
        </div>
      </Card>
    </Section>
  );
}
