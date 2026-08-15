import Reveal from "@/components/Reveal";

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-panel shadow-sm">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 0.05}>
          <details className="group p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-heading">
              {f.q}
              <span className="shrink-0 font-mono text-accent transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
