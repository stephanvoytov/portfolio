"use client";

import { useEffect, useState, useRef } from "react";

export default function PageLoader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");
  const prevPath = useRef<string | null>(null);

  // Initial load
  useEffect(() => {
    const t = setTimeout(() => setPhase("out"), 700);
    return () => clearTimeout(t);
  }, []);

  // Route changes
  useEffect(() => {
    const handler = () => {
      if (prevPath.current !== window.location.pathname) {
        prevPath.current = window.location.pathname;
        setPhase("in");
        const t = setTimeout(() => setPhase("out"), 600);
        return () => clearTimeout(t);
      }
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  useEffect(() => {
    if (phase === "out") {
      const t = setTimeout(() => setPhase("done"), 500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#141416] transition-opacity duration-500 ease-out"
      style={{ opacity: phase === "out" ? 0 : 1, pointerEvents: phase === "in" ? "auto" : "none" }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-[14px] border-2 border-[#f4f4f5] bg-[#f6d860] text-xl font-extrabold leading-none text-[#0a0a0a]">
          С
        </span>
        <span className="text-2xl font-extrabold tracking-tight text-[#f4f4f5]">
          Стефан<span className="text-[#f6d860]">.</span>
        </span>
      </div>
    </div>
  );
}
