"use client";

import Reveal from "@/components/Reveal";
import HotBadge from "@/components/HotBadge";
import { useContactModal } from "@/components/ContactModal";
import { services } from "@/lib/services";

export default function ServicesList() {
  const { open } = useContactModal();

  return (
    <ol className="divide-y divide-line rounded-2xl border border-line bg-white shadow-sm">
      {services.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.05}>
          <li>
            {s.href ? (
              <a
                href={s.href}
                className="group flex flex-col gap-2 p-5 transition-colors hover:bg-accent sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <span className="font-mono text-sm font-bold text-accent-ink">{s.num}</span>
                <div className="flex-1">
                  {s.hot ? (
                    <div className="mb-1.5">
                      <HotBadge />
                    </div>
                  ) : null}
                  <h3 className="text-lg font-bold text-heading group-hover:text-accent-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted group-hover:text-accent-ink/70">
                    {s.desc}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-faint group-hover:text-accent-ink/60">
                    {s.price}
                  </span>
                  <span className="text-accent-ink transition-transform group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </a>
            ) : (
              <button
                type="button"
                onClick={open}
                className="group flex w-full flex-col gap-2 p-5 text-left transition-colors hover:bg-panel-soft sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <span className="font-mono text-sm font-bold text-accent-ink">{s.num}</span>
                <div className="flex-1">
                  {s.hot ? (
                    <div className="mb-1.5">
                      <HotBadge />
                    </div>
                  ) : null}
                  <h3 className="text-lg font-bold text-heading">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-faint">
                    {s.price}
                  </span>
                  <span className="text-accent-ink transition-transform group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </button>
            )}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
