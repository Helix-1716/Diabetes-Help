"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Phase = "idle" | "active" | "complete";

export default function RouteProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const midTimer = useRef<number | null>(null);
  const endTimer = useRef<number | null>(null);

  useEffect(() => {
    // Trigger progress animation whenever the path changes
    setPhase("active");
    const mid = window.setTimeout(() => setPhase("complete"), 300);
    const done = window.setTimeout(() => {
      setPhase("idle");
      window.dispatchEvent(new CustomEvent("dh:loading:ended"));
    }, 650);
    return () => {
      window.clearTimeout(mid);
      window.clearTimeout(done);
    };
  }, [pathname]);

  useEffect(() => {
    const onStart = () => {
      if (midTimer.current) window.clearTimeout(midTimer.current);
      if (endTimer.current) window.clearTimeout(endTimer.current);
      setPhase("active");
    };
    const onComplete = () => {
      setPhase("complete");
      // settle to idle and notify listeners when finished
      endTimer.current = window.setTimeout(() => {
        setPhase("idle");
        window.dispatchEvent(new CustomEvent("dh:loading:ended"));
      }, 350);
    };
    window.addEventListener("dh:loading:start", onStart as EventListener);
    window.addEventListener("dh:loading:complete", onComplete as EventListener);
    return () => {
      window.removeEventListener("dh:loading:start", onStart as EventListener);
      window.removeEventListener("dh:loading:complete", onComplete as EventListener);
    };
  }, []);

  return (
    <>
      <div
        className={`route-progress ${
          phase === "active" ? "is-active" : phase === "complete" ? "is-complete" : ""
        }`}
        aria-hidden
      />
      {(phase === "active" || phase === "complete") && (
        <div className="route-overlay" aria-hidden>
          <div className="spinner" />
        </div>
      )}
    </>
  );
}


