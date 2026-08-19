import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Case } from "@/lib/cases";

interface CaseCardProps {
  item: Case;
}

/** Карточка кейса: крупное фото-мокап, номер, заголовок, описание, KPI и ссылки. */
export default function CaseCard({ item }: CaseCardProps) {
  const preview = item.previewDesktop ?? item.previewMobile ?? item.slides[0]?.src;

  return (
    <Reveal>
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-colors duration-200 hover:border-white/20">
        <Link href={`/cases/${item.id}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
            {preview && (
              <Image
                src={preview}
                alt={`${item.title} — скриншот сайта`}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            )}
          </div>
        </Link>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-sm text-accent">{item.index}</p>
            <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs text-white/60">
              {item.typeLabel}
            </p>
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">{item.tagline}</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {item.results.slice(0, 3).map((r) => (
              <div
                key={r.label}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
              >
                <p className="text-lg font-extrabold leading-none text-accent">{r.value}</p>
                <p className="mt-1.5 text-[11px] leading-tight text-white/50">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6">
            <Link
              href={`/cases/${item.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-ink"
            >
              Подробнее о кейсе
              <span aria-hidden>→</span>
            </Link>
            <a
              href={item.url}
              target="_blank"
              rel="noopener"
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              {item.urlLabel}
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}