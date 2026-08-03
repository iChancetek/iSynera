
'use client';
import { useMemo, useState, useEffect } from 'react';
import { useFirebase } from '@/firebase/provider';
import { User, onIdTokenChanged } from 'firebase/auth';
import { useAuth, useMemoFirebase } from '@/firebase';
import { collection, query, where, onSnapshot, Timestamp, orderBy, limit, DocumentData } from 'firebase/firestore';
import { useCollection } from '../firestore/use-collection';

/**
 * Interface for the return value of the useUser hook.
 * This provides the User object, loading status, and any auth errors.
 */
export interface UserHookResult {
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

/**
 * Hook specifically for accessing the authenticated user's state.
 * @returns {UserHookResult} Object with user, isUserLoading, userError.
 */
export const useUser = (): UserHookResult => {
  const auth = useAuth();
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [userError, setUserError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth,
      (newUser) => {
        setUser(newUser);
        setIsUserLoading(false);
      },
      (error) => {
        setUserError(error);
        setIsUserLoading(false);
      }
    );
    return () => unsubscribe();
  }, [auth]);

  return { user, isUserLoading, userError };
};


/**
 * Hook to get the list of active users.
 * An active user is defined as someone with a 'lastSeen' timestamp in the last 5 minutes.
 */
export const useActiveUsers = () => {
    const { firestore } = useFirebase();

    const activeUsersQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        
        const fiveMinutesAgo = Timestamp.fromMillis(Date.now() - 5 * 60 * 1000);
        return query(
            collection(firestore, 'users'),
            where('lastSeen', '>', fiveMinutesAgo)
        );
    }, [firestore]);

    const { data: activeUsers, isLoading } = useCollection<DocumentData>(activeUsersQuery);

    return { activeUsers, isLoading };
}
