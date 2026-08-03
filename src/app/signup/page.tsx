
'use client';
import AuthForm from '@/components/auth/AuthForm';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export default function SignupPage() {
  return (
    <Section>
      <PageHeader title="Sign Up" description="Create a new account" />
      <div className="max-w-md mx-auto">
        <AuthForm mode="signup" />
      </div>
    </Section>
  );
}
