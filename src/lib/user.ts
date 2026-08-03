
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { useFirestore } from '@/firebase'; // Use the hook to get firestore instance

/**
 * Creates a new user document in the `users` collection in Firestore.
 * This function should run on the client-side after a user signs up.
 * Admin claims should be handled separately by a secure backend process.
 * @param user The Firebase Auth user object from the client.
 */
export async function createNewUser(user: User) {
  if (!user) return;
  
  // Note: We cannot get the firestore instance via getFirestore() here
  // because this file is not a React component. We must pass it in or
  // have another way to access it. For now, this function is being
  // refactored to be called within a context where `db` is available.
  // The logic has been moved to AuthForm.tsx to use the `useFirestore` hook.

  console.log("This function `createNewUser` is being deprecated in favor of inline logic in AuthForm.tsx");
}
