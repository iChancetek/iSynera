
'use server';

import { revalidatePath } from 'next/cache';
import { adminAuth, adminDb } from '@/lib/firebase-admin';
import * as admin from 'firebase-admin';

// Helper function to verify admin status from an ID token
async function verifyAdmin(idToken: string | undefined): Promise<admin.auth.DecodedIdToken> {
    if (!idToken) {
        throw new Error('Authentication token not provided.');
    }
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    if (!decodedToken.admin) {
        throw new Error('User is not authorized to perform this action.');
    }
    return decodedToken;
}

interface UserFormData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: 'user' | 'admin';
  disabled: boolean;
}

export async function upsertUser(formData: UserFormData, idToken: string | undefined) {
  try {
    const adminUser = await verifyAdmin(idToken);
    
    const { id, firstName, lastName, email, password, role, disabled } = formData;
    
    const userPayload: admin.auth.UpdateRequest = { 
        email, 
        displayName: `${firstName} ${lastName}`, 
        disabled,
    };
    
    if (password) {
        userPayload.password = password;
    }

    let userRecord;
    let isNewUser = false;
    if (id) {
      // Update existing user
      userRecord = await adminAuth.updateUser(id, userPayload);
    } else {
      // Create new user
      if (!password) {
        throw new Error('Password is required for new users.');
      }
      userRecord = await adminAuth.createUser(userPayload as any);
      isNewUser = true;
    }

    // Set custom claim for role
    await adminAuth.setCustomUserClaims(userRecord.uid, { admin: role === 'admin' });

    // Create/Update user document in Firestore
    const userDocRef = adminDb.collection('users').doc(userRecord.uid);
    const firestoreData: any = {
      id: userRecord.uid,
      email: userRecord.email,
      firstName,
      lastName,
      profilePictureUrl: userRecord.photoURL || '',
      roles: role === 'admin' ? ['admin'] : [],
      disabled, // Also store disabled status in firestore if needed for UI
    };

    if (isNewUser) {
        firestoreData.signUpDate = admin.firestore.FieldValue.serverTimestamp();
        // Automatically grant admin role to the specified user upon creation
        if (userRecord.email === 'chancellor@iSynera.com') {
            await adminAuth.setCustomUserClaims(userRecord.uid, { admin: true });
            firestoreData.roles = ['admin']; // Ensure roles array is correct
            console.log(`Admin claims automatically set for ${userRecord.email}`);
        }
    } else {
        firestoreData.lastUpdated = admin.firestore.FieldValue.serverTimestamp();
    }
    
    await userDocRef.set(firestoreData, { merge: true });

    revalidatePath('/admin/users');
    return { success: true, message: `User ${isNewUser ? 'created' : 'updated'} successfully.` };

  } catch (error: any) {
    console.error('Error in upsertUser:', error);
    return { success: false, message: error.message };
  }
}

export async function deleteUser(userId: string, idToken: string | undefined) {
    try {
        const adminUser = await verifyAdmin(idToken);

        // Delete from Firebase Auth
        await adminAuth.deleteUser(userId);

        // Delete from Firestore
        await adminDb.collection('users').doc(userId).delete();
        
        revalidatePath('/admin/users');
        return { success: true, message: 'User deleted successfully.' };

    } catch (error: any) {
        console.error('Error in deleteUser:', error);
        return { success: false, message: error.message };
    }
}
