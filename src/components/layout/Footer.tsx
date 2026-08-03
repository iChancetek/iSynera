
import { companyInfo } from '@/lib/data';
import Logo from '@/components/layout/Logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', Icon: Facebook, href: '#' },
    { name: 'Twitter', Icon: Twitter, href: '#' },
    { name: 'LinkedIn', Icon: Linkedin, href: '#' },
    { name: 'Instagram', Icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <Logo className="h-10 w-auto" />
               <span className="text-xl font-bold text-foreground">{companyInfo.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{companyInfo.slogan}</p>
            <p className="text-xs text-muted-foreground mt-2">{companyInfo.subSlogan}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/partnerships" className="text-sm hover:text-primary transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/get-started" className="text-sm hover:text-primary transition-colors">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <address className="not-italic text-sm space-y-2 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">{companyInfo.hqLabel || 'Headquarters'}</p>
                <p>{companyInfo.hqAddressLine1}</p>
                <p>{companyInfo.hqAddressLine2}</p>
              </div>
              <div>
                <p>Phone: <a href={`tel:${companyInfo.phone}`} className="hover:text-primary">{companyInfo.phone}</a></p>
                <p>Email: <a href={`mailto:${companyInfo.email}`} className="hover:text-primary">{companyInfo.email}</a></p>
              </div>
            </address>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            {companyInfo.copyright}
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ name, Icon, href }) => (
              <Button key={name} variant="ghost" size="icon" asChild>
                <a href={href} aria-label={name} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
