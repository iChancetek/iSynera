'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCjdYhbSLIaFtNyaPXdwp4WX_iyrAyE9Y",
  authDomain: "isynera-ai-solutions-vom6p.firebaseapp.com",
  projectId: "isynera-ai-solutions-vom6p",
  storageBucket: "isynera-ai-solutions-vom6p.firebasestorage.app",
  messagingSenderId: "1082978398382",
  appId: "1:1082978398382:web:56bc9b79cbaa1448543d3f",
  measurementId: "G-WE6Z9CD4XL"
};

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp;
    try {
      firebaseApp = initializeApp(firebaseConfig);
    } catch (e) {
      console.warn("Firebase failed to initialize with firebaseConfig", e);
      firebaseApp = initializeApp(firebaseConfig);
    }
    return getSdks(firebaseApp);
  }
  // If already initialized, return the SDKs with the already initialized App
  return getSdks(getApp());
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export { useActiveUsers } from './auth/use-user';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
