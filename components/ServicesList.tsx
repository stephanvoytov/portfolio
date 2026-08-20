"use client";

import Reveal from "@/components/Reveal";
import HotBadge from "@/components/HotBadge";
import { useContactModal } from "@/components/ContactModal";
import { services } from "@/lib/services";
import { ArrowRight, Bot, PenLine, Route, ShieldCheck } from "@/components/icons";

const serviceIcons: Record<string, React.ReactNode> = {
  "01": <PenLine className="h-5 w-5" />,
  "02": <Route className="h-5 w-5" />,
  "03": <Bot className="h-5 w-5" />,
  "04": <ShieldCheck className="h-5 w-5" />,
};

export default function ServicesList() {
  const { open } = useContactModal();

  return (
    <ol className="flex flex-col gap-4">
      {services.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.05}>
          <li className="overflow-hidden rounded-2xl border border-line-strong bg-white shadow-sm" style={{ borderWidth: "1.5px" }}>
            {s.href ? (
              <a
                href={s.href}
                className="group flex flex-col gap-4 p-5 transition-colors hover:bg-accent sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-black bg-panel-soft text-heading transition-colors group-hover:bg-accent-ink group-hover:text-accent">
                  {serviceIcons[s.num]}
                </span>
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
                  <span className="text-xs uppercase tracking-wider text-faint group-hover:text-accent-ink/60">
                    {s.price}
                  </span>
                  <ArrowRight className="h-4 w-4 text-accent-ink transition-transform group-hover:translate-x-1.5" />
                </div>
              </a>
            ) : (
              <button
                type="button"
                onClick={open}
                className="group flex w-full flex-col gap-4 p-5 text-left transition-colors hover:bg-panel-soft sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-black bg-panel-soft text-heading transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                  {serviceIcons[s.num]}
                </span>
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
                  <span className="text-xs uppercase tracking-wider text-faint">
                    {s.price}
                  </span>
                  <ArrowRight className="h-4 w-4 text-accent-ink transition-transform group-hover:translate-x-1.5" />
                </div>
              </button>
            )}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
