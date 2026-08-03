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
    <Card className="flex flex-col h-full glass-card glass-card-hover rounded-2xl border-border/30 overflow-hidden group">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_-5px_hsla(var(--primary)/0.3)]">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-4 leading-relaxed">
          {description}
        </CardDescription>
        {longDescription && (
           <p className="text-xs text-muted-foreground/80 line-clamp-3">{longDescription}</p>
        )}
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button variant="outline" asChild className="w-full group/btn rounded-xl h-11 border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
          <Link href={href}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
