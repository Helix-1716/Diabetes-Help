"use client";



import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

function getInitials(nameOrEmail: string) {
  const parts = nameOrEmail.trim().split(/\s+/).filter(Boolean);
  if (parts.length > 1) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  const name = parts[0] || "";
  return (name[0] || "").toUpperCase();
}

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const { user, signOut, signInWithGoogle } = useAuth();

  const displayName = user?.displayName || user?.email || "";
  const initials = displayName ? getInitials(displayName) : "";

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center size-9 rounded-full border border-black/[.06] dark:border-white/[.08] bg-background text-foreground/80 hover:text-primary overflow-hidden"
      >
        {user?.photoURL ? (
          <img src={user.photoURL} alt={displayName} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="text-xs font-semibold">{initials}</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm-3 12.75A6.75 6.75 0 0 1 11.25 12h1.5A6.75 6.75 0 0 1 19.5 18.75v.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-.75Z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-black/[.06] dark:border-white/[.08] bg-background shadow-lg">
          <div className="p-3 border-b border-black/[.06] dark:border-white/[.08]">
            {user ? (
              <div>
                <div className="text-sm font-medium">{displayName}</div>
                <div className="text-xs text-foreground/60">{user.email}</div>
              </div>
            ) : (
              <div className="grid gap-2">
                <div className="text-sm text-foreground/70">Not signed in</div>
                <button
                  type="button"
                  onClick={async () => { await signInWithGoogle(); setOpen(false); }}
                  className="inline-flex items-center justify-center gap-2 h-9 rounded-lg border border-black/[.08] dark:border-white/[.12] bg-white dark:bg-background/60 text-xs font-medium hover:bg-black/[.02]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-4">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 6 .8 8.2 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 19.5-8.9 19.5-20c0-1.1-.1-2.1-.3-3.1z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16.1 18.9 13 24 13c3.1 0 6 .8 8.2 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.9 8.4 6.3 14.7z"/>
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.3-5.2l-6.1-5.1C29 35.2 26.6 36 24 36c-5.2 0-9.6-3.6-11.2-8.5l-6.5 5C9.9 39.6 16.3 44 24 44z"/>
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.3-4.6 5.5-8.3 5.5-5.2 0-9.6-3.6-11.2-8.5l-6.5 5C9.9 39.6 16.3 44 24 44c11.1 0 19.5-8.9 19.5-20 0-1.1-.1-2.1-.3-3.1z"/>
                  </svg>
                  Continue with Google
                </button>
              </div>
            )}
          </div>
          <div className="py-1">
            <Link href={user ? "/account" : "/login"} className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary" onClick={() => setOpen(false)}>
              {user ? "View profile" : "Sign in"}
            </Link>
            {user && (
              <button
                className="w-full text-left block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary"
                onClick={async () => {
                  await signOut();
                  setOpen(false);
                }}
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


