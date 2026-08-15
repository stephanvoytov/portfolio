"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseSlide } from "@/lib/cases";

export default function CaseSlider({ slides, id }: { slides: CaseSlide[]; id: string }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((i + d + slides.length) % slides.length);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-panel-soft shadow-sm">
        {slides.map((s, idx) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === i ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover object-top"
              priority={idx === 0}
            />
          </div>
        ))}
        <span className="absolute left-4 top-4 rounded-full border border-line-strong bg-white/85 px-3 py-1 font-mono text-xs text-zinc-700 backdrop-blur">
          {slides[i].label}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-sm text-faint">
          {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Предыдущий скриншот"
            className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-zinc-600 transition-colors hover:bg-panel-soft"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Следующий скриншот"
            className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-zinc-600 transition-colors hover:bg-panel-soft"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
