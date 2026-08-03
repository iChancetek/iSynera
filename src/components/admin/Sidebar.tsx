'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const sidebarNavLinks = [
  { href: '/admin', label: 'Dashboard', icon: Home },
  { href: '/admin/users', label: 'User Management', icon: Users },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <aside className="w-64 bg-muted/40 p-4 border-r flex-col hidden md:flex">
        <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-semibold">Admin Panel</h2>
        </div>
        <nav className="flex flex-col gap-2">
          {sidebarNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Tooltip key={link.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                      isActive && 'bg-primary/10 text-primary font-semibold'
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default AdminSidebar;
