
'use client';
import AuthForm from '@/components/auth/AuthForm';
import Logo from '@/components/layout/Logo';
import { companyInfo } from '@/lib/data';

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 shadow-2xl rounded-xl overflow-hidden">
        <div className="hidden md:flex flex-col items-center justify-center bg-gray-900 text-white p-12 text-center">
          <Logo className="h-20 w-20 mb-6" />
          <h1 className="text-3xl font-bold mb-2">{companyInfo.name}</h1>
          <p className="text-gray-300">{companyInfo.slogan}</p>
        </div>
        <div className="bg-card p-6 md:p-10">
          <div className="md:hidden flex flex-col items-center text-center mb-6">
            <Logo className="h-12 w-12 mb-3" />
            <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
            <p className="text-muted-foreground text-sm">Sign in to continue</p>
          </div>
          <AuthForm mode="login" />
        </div>
      </div>
    </div>
  );
}
