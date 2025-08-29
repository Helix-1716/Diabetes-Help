"use client";

import { useEffect, useMemo, useRef } from "react";

type OtpInputProps = {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  className?: string;
};

export default function OtpInput({
  length = 6,
  value,
  onChange,
  onComplete,
  disabled,
  className,
}: OtpInputProps) {
  const digits = useMemo(() => {
    const clean = (value || "").replace(/\D/g, "").slice(0, length);
    return Array.from({ length }, (_, i) => clean[i] || "");
  }, [value, length]);

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (value && value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  const focusInput = (index: number) => {
    const input = inputsRef.current[index];
    input?.focus();
    input?.select();
  };

  const setCharAt = (str: string, index: number, chr: string) => {
    const arr = (str || "").split("");
    while (arr.length < length) arr.push("");
    arr[index] = chr;
    const next = arr.join("").replace(/\s/g, "").slice(0, length);
    return next;
  };

  const handleChange = (idx: number, chr: string) => {
    const digit = chr.replace(/\D/g, "").slice(-1) || "";
    const next = setCharAt(value, idx, digit);
    onChange(next);
    if (digit && idx < length - 1) focusInput(idx + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace") {
      if (!digits[idx] && idx > 0) {
        e.preventDefault();
        const next = setCharAt(value, idx - 1, "");
        onChange(next);
        focusInput(idx - 1);
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      e.preventDefault();
      focusInput(idx - 1);
    } else if (e.key === "ArrowRight" && idx < length - 1) {
      e.preventDefault();
      focusInput(idx + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!text) return;
    onChange(text);
    if (text.length < length) focusInput(text.length);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-center gap-2">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
            aria-label={`Digit ${i + 1}`}
            className="w-10 h-12 text-center text-lg rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 outline-none focus:ring-2 focus:ring-primary/30"
            value={d}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
            disabled={disabled}
            maxLength={1}
          />
        ))}
      </div>
    </div>
  );
}


