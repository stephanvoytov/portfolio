"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseSlide } from "@/lib/cases";
import { ChevronLeft, ChevronRight } from "@/components/icons";

export default function CaseSlider({
  slides,
  url,
}: {
  slides: CaseSlide[];
  url?: string;
}) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((i + d + slides.length) % slides.length);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-line bg-panel-soft shadow-sm">
        {url && (
          <div className="flex items-center gap-2 border-b border-line bg-panel px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-line-strong" />
            <span className="h-3 w-3 rounded-full bg-line-strong" />
            <span className="h-3 w-3 rounded-full bg-line-strong" />
            <span className="ml-4 truncate rounded-lg bg-panel px-4 py-1.5 font-mono text-xs text-faint ring-1 ring-line-strong">
              {url}
            </span>
          </div>
        )}
        <div className="relative aspect-[16/10]">
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
              preload={idx === 0}
            />
          </div>
        ))}
        <span className="absolute left-4 top-4 rounded-full border border-line-strong bg-panel/85 px-3 py-1 font-mono text-xs text-heading backdrop-blur">
          {slides[i].label}
        </span>
      </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-faint">
          {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Предыдущий скриншот"
            className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:bg-panel-soft"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Следующий скриншот"
            className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:bg-panel-soft"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
