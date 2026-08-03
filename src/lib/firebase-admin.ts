
import admin from 'firebase-admin';

// This logic ensures that the SDK is initialized only once.
if (!admin.apps.length) {
  try {
    // When running in a Google Cloud environment (like App Hosting),
    // the SDK can automatically detect the service account credentials.
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    console.log('Firebase Admin initialized with default application credentials.');
  } catch (e: any) {
    // In a local environment, it falls back to using environment variables.
    console.warn('Default credentials failed, trying environment variables:', e.message);
    const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

    if (projectId && clientEmail && privateKey) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
      });
      console.log('Firebase Admin initialized successfully from environment variables.');
    } else {
      console.error('Firebase Admin initialization failed. Required environment variables are missing.');
      // Avoid throwing an error here to not crash the server during build,
      // but log that it's not configured.
    }
  }
}

const adminAuth = admin.auth();
const adminDb = admin.firestore();

export { adminAuth, adminDb };
