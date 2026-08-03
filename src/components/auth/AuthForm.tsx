
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Loader2, Chrome } from 'lucide-react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { useFirebaseApp, useFirestore } from '@/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';


const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const signupSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

const formSchema = z.union([loginSchema, signupSchema]);
type FormValues = z.infer<typeof formSchema>;

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);
  const router = useRouter();
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const firestore = useFirestore();

  const currentSchema = mode === 'login' ? loginSchema : signupSchema;

  const form = useForm<FormValues>({
    resolver: zodResolver(currentSchema),
    defaultValues:
      mode === 'login'
        ? { email: '', password: '' }
        : { fullName: '', email: '', password: '' },
  });

  // Client-side function to create user document in Firestore
  const createUserDocument = async (user: User) => {
    if (!user || !firestore) return;
    const userRef = doc(firestore, 'users', user.uid);
    const [firstName, ...lastNameParts] = user.displayName?.split(' ') || ['', ''];
    const lastName = lastNameParts.join(' ');

    const userData = {
      id: user.uid,
      email: user.email,
      firstName: firstName || '',
      lastName: lastName || '',
      profilePictureUrl: user.photoURL || '',
      signUpDate: serverTimestamp(),
      lastLogin: serverTimestamp(),
      roles: [], // Roles (like admin) must be set by a backend process
    };
    await setDoc(userRef, userData, { merge: true });
  };


  const handleGoogleSignIn = async () => {
    setIsGoogleSubmitting(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Check if user is new and create a document in Firestore
      if (user.metadata.creationTime === user.metadata.lastSignInTime) {
        await createUserDocument(user);
      }

      // Force refresh the token to get new custom claims
      await user.getIdToken(true);
      console.log('Token refreshed after Google sign-in');

      toast({
        title: 'Logged in successfully!',
        description: 'Welcome back.',
      });
      router.push('/');
    } catch (error: any) {
      toast({
        title: 'Google Sign-In Failed',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsGoogleSubmitting(false);
    }
  };

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      if (mode === 'signup' && 'fullName' in data) {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        await updateProfile(userCredential.user, { displayName: data.fullName });
        await createUserDocument(userCredential.user);
        
        // Force refresh token on signup as well
        await userCredential.user.getIdToken(true);
        console.log('Token refreshed after signup');
        
        toast({
          title: 'Account Created!',
          description: "You've been successfully signed up.",
        });
        router.push('/');
      } else if (mode === 'login') {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        
        // Force refresh the token to get new custom claims
        await userCredential.user.getIdToken(true);
        console.log('Token refreshed after email/password login');

        toast({
          title: 'Logged In!',
          description: 'Welcome back.',
        });
        router.push('/');
      }
    } catch (error: any) {
      toast({
        title: mode === 'login' ? 'Login Failed' : 'Sign-up Failed',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{mode === 'login' ? 'Login' : 'Create an Account'}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {mode === 'signup' && (
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || isGoogleSubmitting}>
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isSubmitting ? 'Submitting...' : (mode === 'login' ? 'Login' : 'Sign Up')}
            </Button>
          </form>
        </Form>
        <Separator className="my-6" />
        <Button
          variant="outline"
          className="w-full"
          size="lg"
          onClick={handleGoogleSignIn}
          disabled={isSubmitting || isGoogleSubmitting}
        >
          {isGoogleSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Chrome className="mr-2 h-4 w-4" />
          )}
          {isGoogleSubmitting ? 'Redirecting...' : 'Sign in with Google'}
        </Button>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
          <Button variant="link" asChild>
            <Link href={mode === 'login' ? '/signup' : '/login'}>
              {mode === 'login' ? 'Sign up' : 'Login'}
            </Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
