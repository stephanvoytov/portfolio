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

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const loop = () => {
      smooth.x += (pos.x - smooth.x) * 0.12;
      smooth.y += (pos.y - smooth.y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.left = `${smooth.x}px`;
        dotRef.current.style.top = `${smooth.y}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, input, textarea, [data-cursor], summary"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed -left-4 -top-4 rounded-full"
      style={{
        width: hovering ? 56 : 28,
        height: hovering ? 56 : 28,
        background: "white",
        mixBlendMode: "difference",
        opacity: visible ? 1 : 0,
        transition: "width 0.3s ease-out, height 0.3s ease-out, opacity 0.2s",
        zIndex: 2147483647,
      }}
    />
  );
}
