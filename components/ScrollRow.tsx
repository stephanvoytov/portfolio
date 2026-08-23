"use client";

import { useRef, type ReactNode } from "react";

interface ScrollRowProps {
  label: string;
  children: ReactNode;
}

/** Горизонтальная лента карточек со snap-скроллом и кнопками-стрелками. */
export default function ScrollRow({ label, children }: ScrollRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const nudge = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = (first?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  return (
    <div>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
      >
        {children}
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Прокрутить назад"
          className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-panel text-lg font-extrabold transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Прокрутить вперёд"
          className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-accent text-lg font-extrabold text-accent-ink transition-all duration-200 hover:-translate-y-0.5"
        >
          →
        </button>
      </div>
    </div>
  );
}
