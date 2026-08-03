import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SocialWidget from '@/components/shared/SocialWidget';

interface ServiceCardProps {
  id: string;
  Icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  longDescription?: string; // If we want to show more on a dedicated service page or modal
}

const ServiceCard = ({ id, Icon, name, description, href, longDescription }: ServiceCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-4">
          {description}
        </CardDescription>
        {longDescription && (
           <p className="text-xs text-muted-foreground/80 line-clamp-3">{longDescription}</p>
        )}
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button variant="outline" asChild className="w-full group">
          <Link href={href}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <SocialWidget topicId={id} />
      </div>
    </Card>
  );
};

export default ServiceCard;
