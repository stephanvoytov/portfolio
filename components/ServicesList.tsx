import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export default function ServicesList() {
  return (
    <ol className="divide-y divide-line rounded-2xl border border-line bg-panel shadow-sm">
      {services.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.05}>
          <li>
            <Link
              href={s.href}
              className="group flex flex-col gap-2 p-5 transition-colors hover:bg-panel-soft sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <span className="font-mono text-sm text-accent">{s.num}</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-heading group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-faint">
                  {s.meta}
                </span>
                <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
