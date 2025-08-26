"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  // Calculate yearly prices (16% discount compared to monthly * 12)
  const getYearlyPrice = (monthlyPrice: number) => {
    const yearlyTotal = monthlyPrice * 12;
    const discount = yearlyTotal * 0.16;
    return (yearlyTotal - discount).toFixed(2);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-md bg-purple-500/10 text-purple-500 px-2 py-1 text-xs font-medium">Premium</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
          <span className="text-gradient-animation">DiabetesHelp Pro</span>
        </h1>
      </div>
      
      <p className="mt-3 text-base sm:text-lg text-foreground/80 max-w-3xl">
        Unlock premium features and personalized support with DiabetesHelp Pro. Choose the plan that works best for you.
      </p>

      {/* Billing toggle */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center rounded-full border border-black/[.08] dark:border-white/[.12] p-1 bg-background/60">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 text-sm rounded-full ${billingCycle === "monthly" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground/90"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 text-sm rounded-full ${billingCycle === "yearly" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground/90"}`}
          >
            Yearly <span className={`text-xs font-medium ${billingCycle === "yearly" ? "text-white" : "text-green-500"}`}>Save 16%</span>
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free plan */}
        <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Free</h2>
            <p className="mt-1 text-sm text-foreground/70">Basic diabetes management tools</p>
          </div>
          <div className="mb-6">
            <div className="text-3xl font-bold">₹0</div>
            <div className="text-sm text-foreground/60">Forever free</div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-green-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Basic glucose tracking</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-green-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Simple medication reminders</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-green-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Basic meal planning</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-green-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Educational articles</span>
            </li>
          </ul>
          <Link 
            href="#get-started" 
            className="w-full rounded-lg border border-black/[.08] dark:border-white/[.12] bg-background/60 text-foreground/80 text-sm font-medium h-10 flex items-center justify-center hover:bg-background/80 transition-colors"
          >
            Current Plan
          </Link>
        </div>

        {/* Pro plan */}
        <div className="rounded-2xl border-2 border-purple-500 p-6 bg-background/60 relative md:scale-105 z-10 shadow-lg">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Pro</h2>
            <p className="mt-1 text-sm text-foreground/70">Advanced features for better management</p>
          </div>
          <div className="mb-6">
            <div className="text-3xl font-bold">
              {billingCycle === "monthly" ? "₹799" : `₹${getYearlyPrice(799)}`}
              <span className="text-sm font-normal text-foreground/60">{billingCycle === "monthly" ? "/month" : "/year"}</span>
            </div>
            {billingCycle === "yearly" && (
              <div className="text-sm text-green-500">Save ₹1,534 per year</div>
            )}
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-purple-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span><strong>Everything in Free</strong></span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-purple-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Advanced glucose analytics</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-purple-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Personalized meal recommendations</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-purple-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Priority doctor appointments</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-purple-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>AI-powered diet planning</span>
            </li>
          </ul>
          <Link 
            href={`/payment?plan=pro&cycle=${billingCycle}`} 
            className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium h-10 flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 transition-colors btn-shine"
          >
            Subscribe Now
          </Link>
        </div>

        {/* Premium plan */}
        <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Premium</h2>
            <p className="mt-1 text-sm text-foreground/70">Complete diabetes care solution</p>
          </div>
          <div className="mb-6">
            <div className="text-3xl font-bold">
              {billingCycle === "monthly" ? "₹1,599" : `₹${getYearlyPrice(1599)}`}
              <span className="text-sm font-normal text-foreground/60">{billingCycle === "monthly" ? "/month" : "/year"}</span>
            </div>
            {billingCycle === "yearly" && (
              <div className="text-sm text-green-500">Save ₹3,071 per year</div>
            )}
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-indigo-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span><strong>Everything in Pro</strong></span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-indigo-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>24/7 chat with diabetes specialists</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-indigo-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Quarterly virtual consultations</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-indigo-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Family account (up to 5 members)</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-indigo-500 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>Premium health reports</span>
            </li>
          </ul>
          <Link 
            href={`/payment?plan=premium&cycle=${billingCycle}`} 
            className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-medium h-10 flex items-center justify-center hover:from-indigo-700 hover:to-blue-700 transition-colors btn-shine"
          >
            Subscribe Now
          </Link>
        </div>
      </div>

      {/* FAQ section */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-5 bg-background/60">
            <h3 className="font-medium">Can I switch between plans?</h3>
            <p className="mt-2 text-sm text-foreground/80">Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.</p>
          </div>
          
          <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-5 bg-background/60">
            <h3 className="font-medium">Is there a free trial for Pro or Premium plans?</h3>
            <p className="mt-2 text-sm text-foreground/80">Yes, we offer a 14-day free trial for both Pro and Premium plans. You can cancel anytime during the trial period without being charged.</p>
          </div>
          
          <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-5 bg-background/60">
            <h3 className="font-medium">How does the yearly billing discount work?</h3>
            <p className="mt-2 text-sm text-foreground/80">When you choose yearly billing, you get a 16% discount compared to paying monthly for 12 months. This helps you save while enjoying all the benefits of your chosen plan.</p>
          </div>
          
          <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-5 bg-background/60">
            <h3 className="font-medium">What payment methods do you accept?</h3>
            <p className="mt-2 text-sm text-foreground/80">We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our payment partners.</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="mt-16 text-center">
        <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8 bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to take control of your diabetes?</h2>
          <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">Join thousands of users who have improved their diabetes management with DiabetesHelp Pro.</p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/payment?plan=pro&cycle=${billingCycle}`} 
              className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium px-6 py-3 flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 transition-colors btn-shine"
            >
              Get Started with Pro
            </Link>
            <Link 
              href="/contact" 
              className="rounded-lg border border-black/[.08] dark:border-white/[.12] bg-background/60 text-foreground/80 text-sm font-medium px-6 py-3 flex items-center justify-center hover:bg-background/80 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}