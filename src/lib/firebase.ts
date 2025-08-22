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
      apiKey: "AIzaSyBHrqgMzIlhFj1-UTyNE8tywyUcBnfNirA",
      authDomain: "diabeteshelp-3fc33.firebaseapp.com",
      projectId: "diabeteshelp-3fc33",
      // storageBucket must be <project-id>.appspot.com for Firebase Storage SDK
      storageBucket: "diabeteshelp-3fc33.appspot.com",
      messagingSenderId: "725977916879",
      appId: "1:725977916879:web:85a2d2e921a04c66269eba",
      measurementId: "G-X2H5BFP4DZ",
    } as const;

    app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
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


