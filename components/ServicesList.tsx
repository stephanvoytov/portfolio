import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export default function ServicesList() {
  return (
    <ol className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/[0.02]">
      {services.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.05}>
          <li>
            <Link
              href={s.href}
              className="group flex flex-col gap-2 p-5 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <span className="font-mono text-sm text-violet-400">{s.num}</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-violet-300">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  {s.meta}
                </span>
                <span className="text-violet-400 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
