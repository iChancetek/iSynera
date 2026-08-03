import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  disablePadding?: boolean;
}

const Section = ({ className, as: Comp = 'section', disablePadding = false, ...props }: SectionProps) => {
  return (
    <Comp
      className={cn(!disablePadding && 'py-12 md:py-16 lg:py-20', className)}
      {...props}
    />
  );
};

export default Section;
