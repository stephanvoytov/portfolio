"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");
  const prevPath = useRef<string | null>(null);
  const pathname = usePathname();

  // Первый заход
  useEffect(() => {
    prevPath.current = pathname;
    const t = setTimeout(() => setPhase("out"), 700);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Переход между страницами
  useEffect(() => {
    if (prevPath.current === null || pathname === prevPath.current) return;
    prevPath.current = pathname;
    setPhase("in");
    const t = setTimeout(() => setPhase("out"), 600);
    return () => clearTimeout(t);
  }, [pathname]);

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
        <img src="/images/logo-vs.png" alt="" className="h-12 w-12" />
        <span className="flex flex-col items-start leading-none">
          <span className="text-2xl font-extrabold tracking-tight text-[#f4f4f5]">VOYTOV</span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#f6d860]">studio</span>
        </span>
      </div>
    </div>
  );
}
