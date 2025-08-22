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
  const { user, signOut } = useAuth();

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
              <div className="text-sm text-foreground/70">Not signed in</div>
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


