
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, type Service } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming you might want to card style paragraphs
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SocialWidget from '@/components/shared/SocialWidget';

// Helper function to find service by ID
const getService = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const service = getService('custom-ai-agent');

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.name} - iSynera AI Services`,
    description: service.description, // Use short description for meta
    openGraph: {
        title: `${service.name} - iSynera AI Services`,
        description: service.description,
        type: 'article',
        // Add other OG tags if needed, e.g., images related to the service
    }
  };
}

export default function ServiceDetailPage() {
  const service = getService('custom-ai-agent');

  if (!service) {
    notFound(); // Triggers the 404 page
  }

  const paragraphTitles = ["Overview", "Technical Approach", "Use Cases", "Benefits & Value"];

  return (
    <Section>
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </div>

      <PageHeader title={service.name} description={service.description} />

      <div className="max-w-3xl mx-auto space-y-8">
        {service.detailedDescription.map((paragraph, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{paragraphTitles[index]}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {paragraph}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-xl mx-auto mt-12 px-4">
        <SocialWidget topicId="custom-ai-agent" />
      </div>

       <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <Link href="/get-started">
            Discuss Your Project
          </Link>
        </Button>
      </div>
    </Section>
  );
}

