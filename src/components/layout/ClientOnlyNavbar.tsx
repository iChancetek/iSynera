
'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

// Dynamically import the Navbar component with SSR turned off
// The Navbar component itself should be a client component ('use client')
const Navbar = dynamic(() => import('@/components/layout/Navbar'), {
  ssr: false,
  loading: () => <header className="h-20 bg-transparent" />, // Basic placeholder to prevent layout shift
});

// This wrapper component ensures that the dynamic import with ssr:false
// is handled within a client component context.
export default function ClientOnlyNavbar() {
  return <Navbar />;
}
