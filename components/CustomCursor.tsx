"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;

    const pos = { x: -100, y: -100 };
    const smooth = { x: -100, y: -100 };
    let raf = 0;
    let shown = false;
    let running = false;

    // rAF-цикл работает только пока точка догоняет курсор; в покое — останавливается
    const loop = () => {
      const dx = pos.x - smooth.x;
      const dy = pos.y - smooth.y;
      if (Math.abs(dx) < 0.3 && Math.abs(dy) < 0.3) {
        smooth.x = pos.x;
        smooth.y = pos.y;
        running = false;
        return;
      }
      smooth.x += dx * 0.2;
      smooth.y += dy * 0.2;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${smooth.x}px, ${smooth.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const wake = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!shown) {
        shown = true;
        smooth.x = pos.x;
        smooth.y = pos.y;
        setVisible(true);
      }
      wake();
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, input, textarea, [data-cursor], summary"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    raf = requestAnimationFrame(loop);
    running = true;
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[2147483647]"
      style={{
        width: hovering ? 56 : 28,
        height: hovering ? 56 : 28,
        background: "white",
        mixBlendMode: "difference",
        opacity: visible ? 1 : 0,
        transition: "width 0.25s ease-out, height 0.25s ease-out, opacity 0.2s",
        willChange: "transform",
      }}
    />
  );
}
