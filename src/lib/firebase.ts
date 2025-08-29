"use client";

import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, browserLocalPersistence, setPersistence, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let storage: FirebaseStorage | undefined;
let analytics: Analytics | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBHrqgMzIlhFj1-UTyNE8tywyUcBnfNirA",
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "diabeteshelp-3fc33.firebaseapp.com",
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "diabeteshelp-3fc33",
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "diabeteshelp-3fc33.appspot.com",
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "725977916879",
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:725977916879:web:85a2d2e921a04c66269eba",
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-X2H5BFP4DZ",
    } as const;

    // Validate configuration
    if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
      console.error("Firebase configuration is incomplete:", firebaseConfig);
      throw new Error("Firebase configuration is incomplete. Please check your environment variables.");
    }

    app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
    
    // Log configuration for debugging (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log("Firebase initialized with domain:", firebaseConfig.authDomain);
    }
  }
  return app!;
}

export function getFirebaseAuth(): Auth {
  if (!auth) {
    auth = getAuth(getFirebaseApp());
    // Persist session across tabs and reloads
    setPersistence(auth, browserLocalPersistence).catch(() => {});
  }
  return auth;
}

export function getFirebaseStorage(): FirebaseStorage {
  if (!storage) {
    storage = getStorage(getFirebaseApp());
  }
  return storage;
}

export const googleProvider = new GoogleAuthProvider();

export async function initAnalytics(): Promise<Analytics | undefined> {
  try {
    if (!analytics && (await isSupported())) {
      analytics = getAnalytics(getFirebaseApp());
    }
  } catch {
    // ignore analytics failures
  }
  return analytics;
}

// Test function to verify Firebase Storage is working
export async function testStorageConnection(): Promise<boolean> {
  try {
    const storage = getFirebaseStorage();
    console.log("Firebase Storage initialized:", storage.app.name);
    return true;
  } catch (error) {
    console.error("Firebase Storage initialization failed:", error);
    return false;
  }
}


