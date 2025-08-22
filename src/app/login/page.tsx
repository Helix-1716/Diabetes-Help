"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading, sendEmailLink, completeEmailLinkSignIn, signInWithEmail, signUpWithEmail } = useAuth();
  const [mode, setMode] = useState<"emailLink" | "emailPassword" | "signUp">("signUp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    // Complete email link sign in if applicable
    completeEmailLinkSignIn().catch(() => {});
  }, [completeEmailLinkSignIn]);

  const onSendLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setMessage(null);
    try {
      await sendEmailLink(email);
      setMessage("Magic sign-in link sent. Check your email.");
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error?.message || "Failed to send email link");
    }
  };

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setMessage(null);
    try {
      await signInWithEmail(email, password);
      router.replace("/");
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error?.message || "Failed to sign in");
    }
  };

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
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

    try {
      const fullName = `${name.trim()} ${surname.trim()}`;
      await signUpWithEmail(email, password, fullName);
      setMessage("Account created successfully! You are now signed in.");
      setTimeout(() => {
        router.replace("/account");
      }, 1500);
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error?.message || "Failed to sign up");
    }
  };

  return (
    <main className="mx-auto max-w-md px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Welcome to DiabetesHelp</h1>
      <p className="mt-2 text-foreground/80">Create your account to get started.</p>

      <div className="mt-6 rounded-2xl border border-black/[.06] dark:border-white/[.08] p-4 sm:p-6">
        <div className="flex gap-2 mb-6">
          <button
            className={`px-3 py-1.5 rounded-lg text-sm ${mode === "signUp" ? "bg-primary text-primary-foreground" : "bg-black/[.04] dark:bg-white/[.06]"}`}
            onClick={() => setMode("signUp")}
          >Create Account</button>
          <button
            className={`px-3 py-1.5 rounded-lg text-sm ${mode === "emailPassword" ? "bg-primary text-primary-foreground" : "bg-black/[.04] dark:bg-white/[.06]"}`}
            onClick={() => setMode("emailPassword")}
          >Sign In</button>
          <button
            className={`px-3 py-1.5 rounded-lg text-sm ${mode === "emailLink" ? "bg-primary text-primary-foreground" : "bg-black/[.04] dark:bg-white/[.06]"}`}
            onClick={() => setMode("emailLink")}
          >Email Link</button>
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

            <button type="submit" className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium mt-2">
              Create Account
            </button>
          </form>
        )}

        {mode === "emailPassword" && (
          <form onSubmit={onSignIn} className="grid gap-3">
            <label className="text-sm text-foreground/70" htmlFor="email2">Email</label>
            <input id="email2" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" />
            <label className="text-sm text-foreground/70" htmlFor="password1">Password</label>
            <div className="relative">
              <input
                id="password1"
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
            <button type="submit" className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium mt-1">Sign in</button>
          </form>
        )}

        {mode === "emailLink" && (
          <form onSubmit={onSendLink} className="grid gap-3">
            <label className="text-sm text-foreground/70" htmlFor="email1">Email</label>
            <input id="email1" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" />
            <button type="submit" className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium mt-1">Send sign-in link</button>
          </form>
        )}

        {message && <div className="mt-4 text-sm text-green-600">{message}</div>}
        {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
      </div>
    </main>
  );
}


