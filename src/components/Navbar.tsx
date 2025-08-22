"use client";

import Link from "next/link";
import { useState } from "react";
import AccountMenu from "@/components/AccountMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDietOpen, setIsDietOpen] = useState(false);
  const [isDietMobileOpen, setIsDietMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-base sm:text-lg font-semibold tracking-tight">
            <span className="text-gradient-animation">Diabetes</span>Help
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors link-underline"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                onClick={() => setIsDietOpen((v) => !v)}
                className="inline-flex items-center gap-1 text-sm bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors"
              >
                Diet
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`size-4 transition-transform ${isDietOpen ? "rotate-180" : "rotate-0"}`}>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
                </svg>
              </button>
              {isDietOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-black/[.06] dark:border-white/[.08] bg-background shadow-lg">
                  <div className="py-2">
                    <Link href="/diet/ai-plan" className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary">Diet plan by AI</Link>
                    <Link href="/diet/doctors-help" className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary">Doctor&apos;s Help</Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/pricing"
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium h-9 px-4 flex items-center hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 btn-shine mr-3"
            >
              Pro
            </Link>
            <Link
              href="/tools"
              className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium h-9 px-4 flex items-center hover:from-green-600 hover:to-emerald-600 transition-colors btn-shine"
            >
              Get Started
            </Link>
            <AccountMenu />
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-black/[.04] dark:hover:bg-white/[.06]"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-black/[.06] dark:border-white/[.08] bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/90 hover:text-primary link-underline"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <button
                type="button"
                className="w-full flex items-center justify-between text-left text-sm bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => setIsDietMobileOpen((v) => !v)}
                aria-controls="mobile-diet-submenu"
              >
                <span>Diet</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`size-4 transition-transform ${isDietMobileOpen ? "rotate-180" : "rotate-0"}`}>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
                </svg>
              </button>
              {isDietMobileOpen && (
                <div id="mobile-diet-submenu" className="mt-2 ml-3 flex flex-col gap-2">
                  <Link href="/diet/ai-plan" className="text-sm text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Diet plan by AI</Link>
                  <Link href="/diet/doctors-help" className="text-sm text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Doctor&apos;s Help</Link>
                </div>
              )}
            </div>
            <Link
              href="/pricing"
              className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium h-9 px-4 flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 btn-shine"
              onClick={() => setIsOpen(false)}
            >
              Pro
            </Link>
            <Link
              href="/tools"
              className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium h-9 px-4 flex items-center justify-center hover:from-green-600 hover:to-emerald-600 transition-colors btn-shine mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
            <div className="pt-2">
              <AccountMenu />
            </div>
          </div>
        </div>
      )}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </header>
  );
}


