import Reveal from "@/components/Reveal";

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/[0.02]">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 0.05}>
          <details className="group p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white">
              {f.q}
              <span className="shrink-0 font-mono text-violet-400 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
