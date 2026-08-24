"use client";

import { ReactNode, useRef } from "react";

interface MagneticProps {
  children: ReactNode;
  /** Сила притяжения к курсору (доля смещения). */
  strength?: number;
  /** Занять всю ширину родителя (для блочных кнопок). */
  full?: boolean;
  className?: string;
}

/** Обёртка, притягивающая дочерний элемент к курсорю при наведении. */
export default function Magnetic({ children, strength = 0.35, full = false, className = "" }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`${full ? "block w-full" : "inline-block"} transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </span>
  );
}
