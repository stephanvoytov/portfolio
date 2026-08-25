import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { ModalCta } from "@/components/ModalCta";
import type { Pkg } from "@/lib/packages";

export default function PkgCard({
  p,
  context = "site",
}: {
  p: Pkg;
  context?: "site" | "migrate";
}) {
  const subject =
    context === "migrate"
      ? `Тариф «${p.name}» (${p.price}) — миграция с маркетплейсов`
      : `Пакет «${p.name}» (${p.price})`;
  return (
    <Reveal className="h-full" delay={p.hot ? 0 : 0.06}>
      <div
        className={`relative flex h-full flex-col rounded-3xl border-2 p-6 transition-all duration-200 hover:-translate-y-1 ${
          p.hot
            ? "border-line bg-accent shadow-brutal-accent-lg"
            : "border-line bg-panel shadow-sm hover:border-accent hover:shadow-brutal-accent-md"
        }`}
      >
        {p.hot && (
          <span className="absolute -top-3 left-6 rounded-full bg-[#141416] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f4f4f5]">
            Чаще всего выбирают
          </span>
        )}
        <div className="flex items-baseline justify-between gap-3">
          <h3 className={`text-lg font-bold ${p.hot ? "text-accent-ink" : "text-heading"}`}>{p.name}</h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-bold ${
              p.hot ? "border-accent-ink/30 text-accent-ink/80" : "border-line text-muted"
            }`}
          >
            {p.days}
          </span>
        </div>
        <p className={`mt-3 text-3xl font-extrabold sm:text-4xl ${p.hot ? "text-accent-ink" : "text-heading"}`}>
          {p.price}
        </p>
        {p.note && (
          <p className={`mt-1 text-xs font-semibold ${p.hot ? "text-accent-ink/80" : "text-muted"}`}>
            {p.note}
          </p>
        )}
        <ul className={`mt-6 flex-1 space-y-2.5 text-sm font-semibold ${p.hot ? "text-accent-ink" : "text-heading"}`}>
          {p.items.map((i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-extrabold ${
                  p.hot ? "bg-[#141416] text-[#f4f4f5]" : "bg-accent text-accent-ink"
                }`}
              >
                ✓
              </span>
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <Magnetic full>
            <ModalCta variant={p.hot ? "primary" : "yellow"} block subject={subject}>
              Обсудить задачу
            </ModalCta>
          </Magnetic>
        </div>
      </div>
    </Reveal>
  );
}
