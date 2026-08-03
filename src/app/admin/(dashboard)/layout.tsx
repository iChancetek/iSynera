'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import Section from '@/components/shared/Section';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const { user, isUserLoading } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isClaimsLoading, setIsClaimsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isUserLoading) {
      return;
    }
    if (!user) {
      router.replace('/login?redirect=/admin');
      return;
    }

    user.getIdTokenResult().then((idTokenResult) => {
      // Enforce that only chancellor@iSynera.com can be admin
      if (idTokenResult.claims.admin && user.email === 'chancellor@iSynera.com') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setIsClaimsLoading(false);
    });
  }, [user, isUserLoading, router]);

  if (isUserLoading || isClaimsLoading) {
    return (
      <Section>
        <div className="flex items-center justify-center h-64">
          <Skeleton className="w-full h-full" />
        </div>
      </Section>
    );
  }

  if (!isAdmin) {
    return (
        <Section>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-destructive mb-4">Access Denied</h1>
            </div>
            <div className="max-w-2xl mx-auto">
                <Alert variant="destructive">
                    <ShieldAlert className="h-4 w-4" />
                    <AlertTitle>Unauthorized Access</AlertTitle>
                    <AlertDescription>
                        You do not have the necessary permissions to view this page. This area is restricted to the administrator only.
                    </AlertDescription>
                </Alert>
            </div>
        </Section>
    );
  }

  return <>{children}</>;
}
