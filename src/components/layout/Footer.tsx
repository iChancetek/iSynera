
import { companyInfo } from '@/lib/data';
import Logo from '@/components/layout/Logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Zap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', Icon: Facebook, href: '#' },
    { name: 'Twitter', Icon: Twitter, href: '#' },
    { name: 'LinkedIn', Icon: Linkedin, href: '#' },
    { name: 'Instagram', Icon: Instagram, href: '#' },
  ];

  return (
    <footer className="relative mt-auto border-t border-border/30 bg-background overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 py-16 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-5 inline-flex items-center gap-2.5 group">
              <Logo className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
               <span className="text-xl font-extrabold text-gradient">{companyInfo.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">{companyInfo.slogan}</p>
            <p className="text-xs text-muted-foreground/70 mt-2">{companyInfo.subSlogan}</p>

            {/* Social Icons */}
            <div className="flex gap-2 mt-6">
              {socialLinks.map(({ name, Icon, href }) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9 rounded-lg border border-border/40 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <a href={href} aria-label={name} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Partners', href: '/partnerships' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              {[
                { label: 'Agentic AI', href: '/services' },
                { label: 'AI Media', href: '/services' },
                { label: 'Get Started', href: '/get-started' },
              ].map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-3 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground text-xs uppercase tracking-wider">{companyInfo.hqLabel || 'Headquarters'}</p>
                <p className="mt-1">{companyInfo.hqAddressLine1}</p>
                <p>{companyInfo.hqAddressLine2}</p>
              </div>
              <div className="space-y-1">
                <p>Phone: <a href={`tel:${companyInfo.phone}`} className="hover:text-primary transition-colors">{companyInfo.phone}</a></p>
                <p>Email: <a href={`mailto:${companyInfo.email}`} className="hover:text-primary transition-colors">{companyInfo.email}</a></p>
              </div>
            </address>

            <Button asChild size="sm" className="mt-6 bg-primary-gradient text-white font-bold px-5 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
              <Link href="/contact">
                <Zap className="mr-1.5 h-3.5 w-3.5" /> Contact Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/70">
            {companyInfo.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/50">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
