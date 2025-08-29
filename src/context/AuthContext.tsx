"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signOut as firebaseSignOut,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  reload,
  signInWithRedirect,
  getRedirectResult,
  type User,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import { googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { getFirebaseStorage } from "@/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

type AuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  sendEmailLink: (email: string) => Promise<void>;
  completeEmailLinkSignIn: (emailFromInput?: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, name?: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  updateUserProfile: (name?: string, photoFile?: File) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

const ACTION_CODE_SETTINGS = {
  url: typeof window !== "undefined" ? `${window.location.origin}/login` : "",
  handleCodeInApp: true,
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getFirebaseAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const mapped: AuthUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          phoneNumber: firebaseUser.phoneNumber || null,
        };
        setUser(mapped);
        try {
          // Keep legacy local profile in sync for existing UI bits
          localStorage.setItem(
            "dh_profile",
            JSON.stringify({
              name: mapped.displayName || mapped.email || "",
              email: mapped.email || "",
              photoUrl: mapped.photoURL || undefined,
            })
          );
          // Set a simple cookie for middleware gating
          const maxAge = 60 * 60 * 24 * 30; // 30 days
          document.cookie = `dh_auth=1; path=/; max-age=${maxAge}`;
        } catch {}
      } else {
        setUser(null);
        try {
          localStorage.removeItem("dh_profile");
          document.cookie = "dh_auth=; path=/; max-age=0";
        } catch {}
      }
      setLoading(false);
    });
    return () => unsub();
  }, [auth]);

  const sendEmailLink = async (email: string) => {
    await sendSignInLinkToEmail(auth, email, ACTION_CODE_SETTINGS);
    try { localStorage.setItem("dh_emailForSignIn", email); } catch {}
  };

  const completeEmailLinkSignIn = async (emailFromInput?: string) => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = emailFromInput;
      try { email = email || localStorage.getItem("dh_emailForSignIn") || undefined; } catch {}
      if (!email) throw new Error("Email required to complete sign-in");
      await signInWithEmailLink(auth, email, window.location.href);
      try { localStorage.removeItem("dh_emailForSignIn"); } catch {}
    }
  };

  const signUpWithEmail = async (email: string, password: string, name?: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = async (name?: string, photoFile?: File) => {
    const current = auth.currentUser as User | null;
    if (!current) throw new Error("No user signed in");

    console.log("Starting profile update for user:", current.uid);
    console.log("Photo file:", photoFile ? { name: photoFile.name, size: photoFile.size, type: photoFile.type } : "No file");

    let photoURL: string | undefined;
    if (photoFile) {
      try {
        console.log("Uploading photo to Firebase Storage...");
        const storage = getFirebaseStorage();
        const objectRef = ref(storage, `avatars/${current.uid}`);
        console.log("Storage reference:", objectRef.fullPath);
        const uploadResult = await uploadBytes(objectRef, photoFile);
        console.log("Upload successful:", uploadResult);
        photoURL = await getDownloadURL(uploadResult.ref);
        console.log("Download URL:", photoURL);
      } catch (err: unknown) {
        console.error("Photo upload failed:", err);
        const error = err as { code?: string; message?: string };
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        throw new Error("Failed to upload photo: " + (error?.message || "Unknown error"));
      }
    }

    try {
      console.log("Updating Firebase profile with:", { displayName: name, photoURL });
      await updateProfile(current, {
        displayName: name ?? current.displayName ?? undefined,
        photoURL: photoURL ?? current.photoURL ?? undefined,
      });
      console.log("Profile update successful");
    } catch (err: unknown) {
      console.error("Profile update failed:", err);
      const error = err as { message?: string };
      throw new Error("Failed to update profile: " + (error?.message || "Unknown error"));
    }

    // Refresh user and sync context/local storage immediately
    try {
      console.log("Reloading user data...");
      await reload(current);
      const refreshed = auth.currentUser as User | null;
      if (refreshed) {
        const mapped: AuthUser = {
          uid: refreshed.uid,
          email: refreshed.email,
          displayName: refreshed.displayName,
          photoURL: refreshed.photoURL,
          phoneNumber: refreshed.phoneNumber || null,
        };
        console.log("Updated user data:", mapped);
        setUser(mapped);
        try {
          localStorage.setItem(
            "dh_profile",
            JSON.stringify({
              name: mapped.displayName || mapped.email || "",
              email: mapped.email || "",
              photoUrl: mapped.photoURL || undefined,
            })
          );
          const maxAge = 60 * 60 * 24 * 30;
          document.cookie = `dh_auth=1; path=/; max-age=${maxAge}`;
          console.log("Local storage and cookie updated");
        } catch {}
      }
    } catch (err: unknown) {
      console.error("User reload failed:", err);
      // Don't throw here, profile update succeeded
    }
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  const signInWithGoogle = async () => {
    try {
      console.log("Starting Google sign-in process...");
      console.log("Current domain:", window.location.hostname);
      console.log("Firebase auth domain:", auth.config.authDomain);

      // Prefer popup when supported
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in successful:", result.user.email);
    } catch (error: any) {
      console.error("Google sign-in failed (popup):", error);

      // Fallback to redirect when popup isn't supported or blocked
      if (error?.code === 'auth/operation-not-supported-in-this-environment' || error?.code === 'auth/auth-domain-config-required') {
        console.log("Falling back to signInWithRedirect...");
        await signInWithRedirect(auth, googleProvider);
        return;
      }

      if (error.code === 'auth/unauthorized-domain') {
        throw new Error(`Authentication failed: Domain ${window.location.hostname} is not authorized. Please contact support.`);
      } else if (error.code === 'auth/popup-closed-by-user') {
        throw new Error("Sign-in was cancelled. Please try again.");
      } else if (error.code === 'auth/popup-blocked') {
        throw new Error("Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.");
      } else if (error.code === 'auth/network-request-failed') {
        throw new Error("Network error. Please check your internet connection and try again.");
      } else {
        throw new Error(`Authentication failed: ${error.message || 'Unknown error occurred'}`);
      }
    }
  };

  // After mounting, attempt to resolve any pending redirect result (no-op if none)
  useEffect(() => {
    (async () => {
      try {
        await getRedirectResult(auth);
      } catch (e) {
        // ignore; onAuthStateChanged will handle state
      }
    })();
  }, [auth]);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    loading,
    sendEmailLink,
    completeEmailLinkSignIn,
    signUpWithEmail,
    signInWithEmail,
    updateUserProfile,
    signOut,
    signInWithGoogle,
  }), [user, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


