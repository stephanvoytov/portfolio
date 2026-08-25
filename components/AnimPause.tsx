"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ставит бесконечные CSS-анимации (marquee, hero-float и т.п.) на паузу,
 * когда их элементы вне вьюпорта — чтобы не жечь CPU/GPU впустую.
 */
export default function AnimPause() {
  const pathname = usePathname();

  useEffect(() => {
    const selector = ".marq, .hero-float, .hero-float-phone, .float-slow, .float-slower, .pulse-dot";
    let io: IntersectionObserver | null = null;

    const raf = requestAnimationFrame(() => {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            (e.target as HTMLElement).classList.toggle("is-offscreen", !e.isIntersecting);
          }
        },
        { rootMargin: "100px" }
      );
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => io!.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
