"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(false);
    setError(null);
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/mdkdqgrg", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setSent(true);
        form.reset();
        // Refresh the page after successful submission
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        const json = await res.json().catch(() => undefined);
        setError(json?.errors?.[0]?.message || "Failed to send message. Please try again.");
      }
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error?.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.12] bg-gradient-to-br from-primary/5 to-sky-300/10 p-6 sm:p-8">
        <div className="absolute -top-14 -right-14 size-40 sm:size-56 rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance animate-fade-in-up">
          Contact <span className="text-gradient-animation">Us</span>
        </h1>
        <p className="mt-2 text-base sm:text-lg text-foreground/80 max-w-2xl animate-fade-in-up [animation-delay:100ms]">
          Have feedback or questions? We’d love to hear from you.
        </p>
      </div>

      {/* Contact cards */}
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a href="mailto:support@diabeteshelp.app" className="group rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 p-5 hover:border-primary/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary size-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </span>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-foreground/70 group-hover:text-foreground/90">support@diabeteshelp.app</div>
            </div>
          </div>
        </a>
        <a href="tel:+1234567890" className="group rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 p-5 hover:border-primary/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary size-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.129-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"/></svg>
            </span>
            <div>
              <div className="font-semibold">Phone</div>
              <div className="text-sm text-foreground/70 group-hover:text-foreground/90">+1 (234) 567-890</div>
            </div>
          </div>
        </a>
        <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 p-5">
          <div className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary size-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zm0 0v10m0 0C7 17 4 14.5 4 11a8 8 0 1116 0c0 3.5-3 6-8 10z"/></svg>
            </span>
            <div>
              <div className="font-semibold">Address</div>
              <div className="text-sm text-foreground/70">123 Care Street, Health City, 10001</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 max-w-xl" noValidate>
          <label className="grid gap-1">
            <span className="text-sm text-foreground/70">Your name</span>
            <input name="name" className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" placeholder="Jane Doe" required aria-label="Your name" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-foreground/70">Email</span>
            <input name="email" className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@example.com" type="email" required aria-label="Email" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-foreground/70">Message</span>
            <textarea name="message" className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 py-3 min-h-32 outline-none focus:ring-2 focus:ring-primary/30" placeholder="How can we help?" required aria-label="Message" />
          </label>
          <div className="flex items-center gap-3">
            <button type="submit" disabled={submitting} className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium disabled:opacity-60">
              {submitting ? "Sending..." : "Send"}
            </button>
            {sent && (
              <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-200/60 bg-emerald-50 text-emerald-700 px-3 py-2 text-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                Thank you! We’ll get back to you soon.
              </div>
            )}
            {error && (
              <div className="inline-flex items-center gap-2 rounded-lg border border-red-200/60 bg-red-50 text-red-700 px-3 py-2 text-sm dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
                {error}
              </div>
            )}
          </div>
        </form>

        {/* Map placeholder / office hours */}
        <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] bg-background/60 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="size-6 rounded-md bg-primary/15 text-primary inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m10-10H2"/></svg>
            </div>
            <h2 className="font-semibold">Office hours</h2>
          </div>
          <ul className="text-sm text-foreground/80 grid gap-1">
            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
            <li>Sat: 10:00 AM – 2:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
          <div className="mt-5 h-48 rounded-xl bg-gradient-to-br from-black/[.04] to-transparent dark:from-white/[.06] flex items-center justify-center text-foreground/60 text-sm">
            Map coming soon
          </div>
        </div>
      </section>
    </main>
  );
}


