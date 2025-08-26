"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";

type PlanKey = "pro" | "premium";
type BillingCycle = "monthly" | "yearly";
type PaymentMethod = "upi" | "card" | "netbanking";

const PLAN_PRICES: Record<PlanKey, number> = {
  pro: 799,
  premium: 1599,
};

export default function PaymentPage() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>((params.get("plan") as PlanKey) || "pro");
  const [selectedCycle, setSelectedCycle] = useState<BillingCycle>((params.get("cycle") as BillingCycle) || "monthly");
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Sync URL when plan/cycle changes
  useEffect(() => {
    const newUrl = `${pathname}?plan=${selectedPlan}&cycle=${selectedCycle}`;
    router.replace(newUrl);
  }, [pathname, router, selectedPlan, selectedCycle]);

  const baseAmount = useMemo(() => {
    const monthly = PLAN_PRICES[selectedPlan] ?? PLAN_PRICES.pro;
    if (selectedCycle === "yearly") {
      const yearlyTotal = monthly * 12;
      const discount = yearlyTotal * 0.16; // yearly discount to match pricing page
      return Math.round(yearlyTotal - discount);
    }
    return monthly;
  }, [selectedPlan, selectedCycle]);

  const promoDiscount = useMemo(() => {
    if (appliedPromo === "SAVE10") return Math.round(baseAmount * 0.1);
    return 0;
  }, [appliedPromo, baseAmount]);

  const subtotal = baseAmount;
  const discountTotal = promoDiscount;
  const taxableAmount = Math.max(subtotal - discountTotal, 0);
  const tax = Math.round(taxableAmount * 0.18); // 18% GST placeholder
  const grandTotal = taxableAmount + tax;

  const displayCycleSuffix = selectedCycle === "monthly" ? "/month" : "/year";

  const applyPromo = () => {
    const code = promoCodeInput.trim().toUpperCase();
    if (code === "SAVE10") {
      setAppliedPromo(code);
    } else {
      setAppliedPromo(null);
    }
  };

  const onPay = async () => {
    if (!selectedMethod || !agreedToTerms) return;
    setIsProcessing(true);
    // Placeholder payment flow. Integrate Razorpay/Stripe later.
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/account");
    }, 1200);
  };

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <div className="mb-6 flex items-center gap-2">
        <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">Checkout</span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Confirm your subscription</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 rounded-2xl border border-black/[.08] dark:border-white/[.12] bg-background/60 p-6">
          <h2 className="text-lg font-semibold">Plan details</h2>

          {/* Plan and cycle selectors */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-foreground/70">Plan</div>
              <div className="mt-2 inline-flex rounded-full border border-black/[.08] dark:border-white/[.12] p-1 bg-background/60">
                {(["pro", "premium"] as PlanKey[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPlan(p)}
                    className={`px-4 py-2 text-sm rounded-full ${selectedPlan === p ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground/90"}`}
                  >
                    {p === "pro" ? "Pro" : "Premium"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs text-foreground/70">Billing cycle</div>
              <div className="mt-2 inline-flex rounded-full border border-black/[.08] dark:border-white/[.12] p-1 bg-background/60">
                {(["monthly", "yearly"] as BillingCycle[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCycle(c)}
                    className={`px-4 py-2 text-sm rounded-full ${selectedCycle === c ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground/90"}`}
                  >
                    {c === "monthly" ? "Monthly" : "Yearly"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Promo code */}
          <div className="mt-6">
            <div className="text-xs text-foreground/70">Promo code</div>
            <div className="mt-2 flex gap-2">
              <input
                value={promoCodeInput}
                onChange={(e) => setPromoCodeInput(e.target.value)}
                placeholder="Enter code (try SAVE10)"
                className="flex-1 h-10 rounded-lg border border-black/[.08] dark:border-white/[.12] bg-background/60 px-3 text-sm"
              />
              <button
                onClick={applyPromo}
                className="h-10 px-4 rounded-lg bg-black text-white text-sm dark:bg-white dark:text-black"
              >
                Apply
              </button>
            </div>
            {appliedPromo && (
              <div className="mt-2 text-xs text-green-600">Code {appliedPromo} applied.</div>
            )}
          </div>

          {/* Payment methods */}
          <div className="mt-6">
            <div className="text-sm font-medium">Payment method</div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {([
                { key: "upi", label: "UPI" },
                { key: "card", label: "Card" },
                { key: "netbanking", label: "Net banking" },
              ] as { key: PaymentMethod; label: string }[]).map((m) => (
                <button
                  key={m.key}
                  onClick={() => setSelectedMethod(m.key)}
                  className={`h-11 rounded-xl border text-sm ${selectedMethod === m.key ? "border-primary bg-primary/10" : "border-black/[.08] dark:border-white/[.12] bg-background/60"}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="mt-6 flex items-start gap-2">
            <input
              id="agree"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="agree" className="text-xs text-foreground/80">
              I agree to the <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </label>
          </div>

          <div className="mt-6">
            <button
              onClick={onPay}
              disabled={isProcessing || !selectedMethod || !agreedToTerms}
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium h-11 flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 disabled:opacity-60 btn-shine"
            >
              {isProcessing ? "Processing..." : `Pay ${"₹" + grandTotal.toLocaleString()} ${displayCycleSuffix}`}
            </button>
            <p className="mt-3 text-xs text-foreground/70 text-center">
              This is a demo checkout screen. Payment gateway integration coming soon.
            </p>
          </div>
        </section>

        {/* Order summary */}
        <aside className="rounded-2xl border border-black/[.08] dark:border-white/[.12] bg-background/60 p-6">
          <h3 className="text-sm font-semibold">Order summary</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="capitalize">{selectedPlan} {displayCycleSuffix}</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-green-600">
              <span>Discounts</span>
              <span>-₹{discountTotal.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-foreground/70">
              <span>Tax (18% GST)</span>
              <span>₹{tax.toLocaleString()}</span>
            </div>
            <div className="pt-3 mt-2 border-t border-black/[.06] dark:border-white/[.08] flex items-center justify-between font-semibold">
              <span>Total due</span>
              <span>₹{grandTotal.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-black/[.03] dark:bg-white/[.04] p-4 text-[11px] text-foreground/70">
            Yearly cycle already includes a 16% discount compared to paying monthly.
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-medium">Need help?</h4>
            <p className="mt-2 text-xs text-foreground/80">Have questions about the plan or billing?</p>
            <Link
              href="/contact"
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-black/[.08] dark:border-white/[.12] bg-background/60 text-foreground/80 text-sm font-medium h-10 hover:bg-background/80"
            >
              Contact support
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}


