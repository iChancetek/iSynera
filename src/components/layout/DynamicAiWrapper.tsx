'use client';

import dynamic from 'next/dynamic';

// Dynamically import AI components with ssr: false 
// This must be done inside a Client Component in Next.js App Router
const AiAssistant = dynamic(() => import('@/components/layout/AiAssistant'), { ssr: false });
const SiteReader = dynamic(() => import('@/components/shared/SiteReader'), { ssr: false });

export default function DynamicAiWrapper() {
  return (
    <>
      <AiAssistant />
      <SiteReader />
    </>
  );
}
