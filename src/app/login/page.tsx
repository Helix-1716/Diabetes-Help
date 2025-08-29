"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { } from "firebase/auth";
import { } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading, signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth();
  const [mode, setMode] = useState<"emailPassword" | "signUp">("signUp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  // Phone auth state removed

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  // Phone auth helpers removed

  // Phone auth helpers removed

  // Phone auth helpers removed

  // Phone auth removed

  // Phone auth removed

  // Phone auth removed

  // Phone auth removed

  // removed magic link flow

  // Add a timeout wrapper to surface friendly timeout errors
  const withTimeout = async <T,>(promise: Promise<T>, ms = 20000): Promise<T> => {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms)) as Promise<T>,
    ]);
  };

  // Google sign in
  const onGoogle = async () => {
    if (isGoogleLoading) return;
    setError(null); setMessage(null);
    try {
      setIsGoogleLoading(true);
      await withTimeout(signInWithGoogle());
      router.replace("/");
    } catch (err: unknown) {
      const error = err as { message?: string };
      const msg = (error?.message || "").toLowerCase();
      if (msg.includes("timeout") || msg.includes("deadline") || msg.includes("network")) {
        setError("Request timed out. Please check your connection and try again.");
      } else {
        setError(error?.message || "Failed to sign in with Google");
      }
    }
    setIsGoogleLoading(false);
  };

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null); setMessage(null);
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    try {
      setIsSubmitting(true);
      await withTimeout(signInWithEmail(email, password));
      router.replace("/");
    } catch (err: unknown) {
      const error = err as { message?: string };
      const msg = (error?.message || "").toLowerCase();
      if (msg.includes("timeout") || msg.includes("deadline") || msg.includes("network")) {
        setError("Request timed out. Please try again.");
      } else {
        setError(error?.message || "Failed to sign in");
      }
    }
    setIsSubmitting(false);
  };

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null); setMessage(null);
    
    // Validate required fields
    if (!name.trim() || !surname.trim() || !email.trim() || !password.trim() || !age.trim() || !phone.trim()) {
      setError("All fields are required");
      return;
    }

    if (parseInt(age) < 1 || parseInt(age) > 120) {
      setError("Please enter a valid age (1-120)");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const fullName = `${name.trim()} ${surname.trim()}`;
      setIsSubmitting(true);
      await withTimeout(signUpWithEmail(email, password, fullName));
      setMessage("Account created successfully! You are now signed in.");
      setTimeout(() => {
        router.replace("/account");
      }, 1500);
    } catch (err: unknown) {
      const error = err as { message?: string };
      const msg = (error?.message || "").toLowerCase();
      if (msg.includes("timeout") || msg.includes("deadline") || msg.includes("network")) {
        setError("Request timed out. Please try again.");
      } else if (msg.includes("email")) {
        setError("This email may already be in use or invalid.");
      } else {
        setError(error?.message || "Failed to sign up");
      }
    }
    setIsSubmitting(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <main className="mx-auto max-w-md px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Welcome to DiabetesHelp</h1>
      <p className="mt-2 text-foreground/80">Create your account to get started.</p>

      <div className="mt-6 rounded-2xl border border-black/[.06] dark:border-white/[.08] p-5 sm:p-6 shadow-sm bg-background/60">
        <div className="flex gap-2 mb-5">
          <button
            className={`px-3 py-1.5 rounded-lg text-sm ${mode === "signUp" ? "bg-primary text-primary-foreground" : "bg-black/[.04] dark:bg-white/[.06]"}`}
            onClick={() => setMode("signUp")}
          >Create Account</button>
          <button
            className={`px-3 py-1.5 rounded-lg text-sm ${mode === "emailPassword" ? "bg-primary text-primary-foreground" : "bg-black/[.04] dark:bg-white/[.06]"}`}
            onClick={() => setMode("emailPassword")}
          >Sign In</button>
          
        </div>

        {/* Social sign in */}
        <div className="mb-5">
          <button
            type="button"
            onClick={onGoogle}
            disabled={isGoogleLoading}
            className="w-full h-11 rounded-full border border-black/[.08] dark:border-white/[.12] bg-white dark:bg-background/60 text-sm font-medium flex items-center justify-center gap-2 hover:bg-black/[.02] disabled:opacity-60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-5">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 6 .8 8.2 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 19.5-8.9 19.5-20c0-1.1-.1-2.1-.3-3.1z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16.1 18.9 13 24 13c3.1 0 6 .8 8.2 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.9 8.4 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.3-5.2l-6.1-5.1C29 35.2 26.6 36 24 36c-5.2 0-9.6-3.6-11.2-8.5l-6.5 5C9.9 39.6 16.3 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.3-4.6 5.5-8.3 5.5-5.2 0-9.6-3.6-11.2-8.5l-6.5 5C9.9 39.6 16.3 44 24 44c11.1 0 19.5-8.9 19.5-20 0-1.1-.1-2.1-.3-3.1z"/>
            </svg>
            {isGoogleLoading ? "Signing in..." : "Continue with Google"}
          </button>
        </div>

        {mode === "signUp" && (
          <form onSubmit={onSignUp} className="grid gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-foreground/70" htmlFor="name">Name *</label>
                <input 
                  id="name" 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 w-full" 
                />
              </div>
              <div>
                <label className="text-sm text-foreground/70" htmlFor="surname">Surname *</label>
                <input 
                  id="surname" 
                  required 
                  value={surname} 
                  onChange={(e) => setSurname(e.target.value)} 
                  className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 w-full" 
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm text-foreground/70" htmlFor="email">Email *</label>
              <input 
                id="email" 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 w-full" 
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-foreground/70" htmlFor="age">Age *</label>
                <input 
                  id="age" 
                  type="number" 
                  min="1" 
                  max="120" 
                  required 
                  value={age} 
                  onChange={(e) => setAge(e.target.value)} 
                  className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 w-full" 
                />
              </div>
              <div>
                <label className="text-sm text-foreground/70" htmlFor="phone">Phone Number *</label>
                <input 
                  id="phone" 
                  type="tel" 
                  required 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="+91 9XXXXXXXXX"
                  className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 w-full" 
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-foreground/70" htmlFor="password">Password *</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 pr-10 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 w-full"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 15.874 7.244 19 12 19c1.564 0 3.05-.314 4.39-.883l-1.78-1.78A8.5 8.5 0 0 1 12 17.5c-3.61 0-6.67-2.146-8.066-5.5a8.53 8.53 0 0 1 1.63-2.62l-1.584-1.157Z" />
                      <path d="M8.53 9.47A3.5 3.5 0 0 0 12 15.5c.8 0 1.54-.26 2.13-.7l-1.43-1.43A1.75 1.75 0 0 1 10.63 11.8L8.53 9.7v-.23Z" />
                      <path d="M20.03 15.777A10.477 10.477 0 0 0 22.066 12C20.774 8.126 16.756 5 12 5c-1.564 0-3.05.314-4.39.883l1.78 1.78A8.5 8.5 0 0 1 12 6.5c3.61 0 6.67 2.146 8.066 5.5a8.53 8.53 0 0 1-1.63 2.62l1.584 1.157Z" />
                      <path d="M15.47 14.53 9.47 8.53 8.53 9.47l6 6 .94-.94Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M1.934 12C3.226 8.126 7.244 5 12 5s8.774 3.126 10.066 7c-1.292 3.874-5.31 7-10.066 7S3.226 15.874 1.934 12Zm10.066 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="grid gap-2 mt-2">
              <button type="submit" disabled={isSubmitting} className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium disabled:opacity-60">
                {isSubmitting ? "Creating..." : "Create Account"}
              </button>
            </div>
          </form>
        )}

        {mode === "emailPassword" && (
          <form onSubmit={onSignIn} className="grid gap-3">
            <label className="text-sm text-foreground/70" htmlFor="email2">Email</label>
            <input id="email2" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" />
            <label className="text-sm text-foreground/70" htmlFor="password1">Password</label>
            <div className="relative">
              <input
                id="password1"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 pr-10 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 w-full"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 15.874 7.244 19 12 19c1.564 0 3.05-.314 4.39-.883l-1.78-1.78A8.5 8.5 0 0 1 12 17.5c-3.61 0-6.67-2.146-8.066-5.5a8.53 8.53 0 0 1 1.63-2.62l-1.584-1.157Z" />
                    <path d="M8.53 9.47A3.5 3.5 0 0 0 12 15.5c.8 0 1.54-.26 2.13-.7l-1.43-1.43A1.75 1.75 0 0 1 10.63 11.8L8.53 9.7v-.23Z" />
                    <path d="M20.03 15.777A10.477 10.477 0 0 0 22.066 12C20.774 8.126 16.756 5 12 5c-1.564 0-3.05.314-4.39.883l1.78 1.78A8.5 8.5 0 0 1 12 6.5c3.61 0 6.67 2.146 8.066 5.5a8.53 8.53 0 0 1-1.63 2.62l1.584 1.157Z" />
                    <path d="M15.47 14.53 9.47 8.53 8.53 9.47l6 6 .94-.94Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M1.934 12C3.226 8.126 7.244 5 12 5s8.774 3.126 10.066 7c-1.292 3.874-5.31 7-10.066 7S3.226 15.874 1.934 12Zm10.066 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                  </svg>
                )}
              </button>
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium mt-1 disabled:opacity-60">{isSubmitting ? "Signing in..." : "Sign in"}</button>
          </form>
        )}

        

        {message && <div className="mt-4 text-sm text-green-600">{message}</div>}
        {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
      </div>
    </main>
  );
}


