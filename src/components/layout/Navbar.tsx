
'use client';

import Link from 'next/link';
import { Menu, X, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useUser } from '@/firebase';
import Logo from '@/components/layout/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { navLinks, type NavLink } from '@/lib/data';
import { cn } from '@/lib/utils';
import { companyInfo } from '@/lib/data';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import UserAvatar from '../auth/UserAvatar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (user) {
      user.getIdTokenResult().then(idTokenResult => {
        setIsAdmin(!!idTokenResult.claims.admin);
      });
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const renderNavLink = (link: NavLink, isMobile = false) => {
    if (link.admin && !isAdmin) {
      return null;
    }
    
    const icon = link.admin ? <Shield className="mr-2 h-4 w-4" /> : null;
    const LinkContent = () => (
      <>
        {icon}
        {link.label}
      </>
    );

    const commonProps = {
      variant: 'ghost' as const,
      className: cn(
        'text-sm font-medium transition-colors hover:text-primary',
        pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? 'text-primary' : 'text-muted-foreground',
        isMobile && 'w-full justify-start text-base py-3'
      ),
    };

    const linkComponent = (
      <Button key={link.href} asChild {...commonProps}>
        <Link href={link.href}>
          <LinkContent />
        </Link>
      </Button>
    );

    return isMobile ? (
      <SheetClose asChild key={`${link.href}-mobile`}>
        {linkComponent}
      </SheetClose>
    ) : (
      linkComponent
    );
  };
  
  const NavLinksContainer = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={cn("flex items-center gap-2", mobile && "flex-col items-start w-full mt-6")}>
      {navLinks.map(link => renderNavLink(link, mobile))}
      {mobile && (
        <SheetClose asChild>
          <Button asChild className="w-full mt-4" size="lg">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </SheetClose>
      )}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" aria-label="ChanceTEK Home" className="flex items-center gap-2">
            <Logo className="h-10 w-auto" />
             <span className="text-2xl font-bold text-foreground">{companyInfo.name}</span>
          </Link>
        </div>

        <div key="desktop-nav" className="hidden md:flex flex-1 items-center justify-center">
          <NavLinksContainer />
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
          <ThemeToggle />
          <div className="ml-4">
            <UserAvatar />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
            <Sheet key="mobile-nav-sheet">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6 flex flex-col">
                <SheetHeader className="flex flex-row justify-between items-center mb-6">
                  <SheetTitle asChild>
                    <Link href="/" aria-label="ChanceTEK Home Page" className="flex items-center gap-2">
                      <Logo className="h-8 w-auto" />
                       <span className="text-xl font-bold text-foreground">{companyInfo.name}</span>
                    </Link>
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <div className="flex-grow">
                  <NavLinksContainer mobile />
                </div>
                <div className="mt-auto pt-6 border-t flex items-center justify-between">
                  <span className="text-sm font-medium">Appearance</span>
                  <ThemeToggle />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium">Account</span>
                  <UserAvatar />
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
