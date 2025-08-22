"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import Meera from "@/Images/Meera.jpg";
import Ravi from "@/Images/Ravi.jpg";
import Rubina from "@/Images/Rubina.jpg";

type Slide = {
  src: StaticImageData;
  name: string;
  quote: string;
};

const slides: Slide[] = [
  { src: Rubina, name: "Rubina", quote: "My numbers are steady and I feel in control." },
  { src: Ravi, name: "Ravi", quote: "Simple reminders keep me consistent every day." },
  { src: Meera, name: "Meera", quote: "I finally understand my patterns and triggers." },
];

export default function PatientCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.12]">
      <div
        className={`flex transition-transform duration-500 ${
          index === 0 ? "translate-x-0" : index === 1 ? "-translate-x-[100%]" : "-translate-x-[200%]"
        }`}
      >
        {slides.map((s, i) => (
          <div key={i} className="min-w-full p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-6">
            <div className="h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] rounded-full bg-black/[.04] dark:bg-white/[.06] flex items-center justify-center overflow-hidden">
              <Image src={s.src} alt={s.name} width={120} height={120} className="object-cover rounded-full" />
            </div>
            <div>
              <p className="text-base sm:text-lg text-foreground/90">“{s.quote}”</p>
              <div className="mt-2 text-sm text-foreground/60">— {s.name}</div>
            </div>
          </div>
        ))}
      </div>

      <button aria-label="Previous" onClick={() => go(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur px-3 py-2 text-sm shadow">
        ‹
      </button>
      <button aria-label="Next" onClick={() => go(1)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur px-3 py-2 text-sm shadow">
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-primary" : "bg-foreground/30"}`} />)
        )}
      </div>
    </div>
  );
}


