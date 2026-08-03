
'use client';

import { useUser } from '@/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { Skeleton } from '@/components/ui/skeleton';
import { redirect } from 'next/navigation';

export default function AccountPage() {
  const { user, isUserLoading } = useUser();

  if (isUserLoading) {
    return (
      <Section>
        <PageHeader title="My Account" />
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-24 w-24 rounded-full" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-6 w-3/4" />
            </CardContent>
          </Card>
        </div>
      </Section>
    );
  }

  if (!user) {
    redirect('/login');
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.toUpperCase();
  }

  return (
    <Section>
      <PageHeader title="My Account" />
      <div className="max-w-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
              <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
            </Avatar>

            <div>
              <h3 className="font-semibold">Display Name</h3>
              <p className="text-muted-foreground">{user.displayName || 'Not set'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Email Address</h3>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
             <div>
              <h3 className="font-semibold">Account Created</h3>
              <p className="text-muted-foreground">
                {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Last Login</h3>
              <p className="text-muted-foreground">
                 {user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString() : 'N/A'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
