"use client";

import Reveal from "@/components/Reveal";
import { useContactModal } from "@/components/ContactModal";
import { categories } from "@/lib/categories";

const base = "В любой категории — база: мобильная версия, быстрая загрузка, Яндекс.Метрика, SSL/HTTPS";

export default function SiteCategories() {
  const { open } = useContactModal();

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {categories.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.08}>
            <button
              type="button"
              onClick={open}
              className="group flex h-full w-full flex-col rounded-2xl border border-line bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[4px_4px_0_0_#0a0a0a] sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-sm font-bold text-accent-ink">{c.num}</span>
                <span className="text-xs font-semibold text-faint">{c.time}</span>
              </div>
              <h3 className="mt-3 text-xl font-extrabold tracking-tight text-heading">
                {c.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-accent-ink">{c.goal}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>

              <p className="mt-6 font-mono text-lg font-bold text-heading">{c.price}</p>

              <span className="mt-6 inline-flex items-center gap-2 pt-1 font-mono text-xs font-bold uppercase tracking-wider text-accent-ink">
                Обсудить
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-faint">
        {base}
      </p>
    </div>
  );
}