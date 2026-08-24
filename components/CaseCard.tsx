import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import type { Case } from "@/lib/cases";

interface CaseCardProps {
  item: Case;
  /** Компактный вид: светлая поверхность + короткие тексты (для тёмной/плотной раскладки). */
  compact?: boolean;
  /** Крупная фотокарточка для галереи проектов: фото — главное, текст — минимум. */
  big?: boolean;
}

/** Карточка кейса: номер, заголовок, описание, фото-мокап и ссылки — как в архиве WebValley. */
export default function CaseCard({ item, compact = false, big = false }: CaseCardProps) {
  const preview = item.previewDesktop ?? item.previewMobile ?? item.slides[0]?.src;

  return (
    <Reveal className="h-full">
      <article
        className={`group flex h-full flex-col overflow-hidden rounded-3xl border transition-colors duration-200 ${
          compact || big ? "border-line bg-panel hover:border-accent/50" : "border-white/25 bg-ink hover:border-white/40"
        }`}
      >
        <Link href={`/cases/${item.id}`} className="block">
          <div
            className={`relative overflow-hidden ${
              big ? "aspect-[3/2] border-b border-line" : compact ? "aspect-[16/9] border-b border-line" : "aspect-[16/10] border-b border-white/25"
            }`}
          >
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

        <div className={`flex flex-1 flex-col ${big ? "p-3 sm:p-4" : compact ? "p-4 sm:p-5" : "p-6 sm:p-8"}`}>
          {!big && (
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-accent">{item.index}</p>
              <p
                className={`rounded-full border px-3 py-1 font-mono text-xs ${
                  compact ? "border-line bg-panel/5 text-muted" : "border-white/20 bg-panel/5 text-white/60"
                }`}
              >
                {item.typeLabel}
              </p>
            </div>
          )}
          <h3
            className={`mt-3 font-bold tracking-tight ${big ? "mt-0 text-xl text-heading sm:text-2xl" : compact ? "text-lg text-heading" : "text-2xl text-white sm:text-2xl"}`}
          >
            {item.title}
          </h3>
          <p
            className={`leading-relaxed sm:text-base ${
              big
                ? "mt-1.5 line-clamp-1 text-sm text-muted"
                : `mt-2 line-clamp-2 text-sm ${compact ? "text-muted" : "text-white/60"}`
            }`}
          >
            {item.tagline}
          </p>

          {!compact && !big && (
            <ul className="mt-3 space-y-1.5">
              {item.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2.5 text-sm leading-snug text-white/70"
                >
                  <span aria-hidden className="mt-0.5 shrink-0 text-accent">
                    →
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          {!compact && !big && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.integrations.slice(0, 3).map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/15 bg-panel/5 px-3 py-1 font-mono text-xs text-white/60"
                >
                  {i}
                </span>
              ))}
            </div>
          )}

          <div className="flex-1" />

          <div
            className={`${big ? "mt-3 pt-3" : "mt-4 pt-4"} flex flex-col gap-3 border-t sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 ${
              compact || big ? "border-line" : "border-white/10"
            }`}
          >
            <Link
              href={`/cases/${item.id}`}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink transition-colors duration-200 hover:bg-ink hover:text-white sm:w-auto"
            >
              Посмотреть кейс
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={item.url}
              target="_blank"
              rel="noopener"
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline underline-offset-4 ${
                compact ? "text-muted hover:text-heading" : "text-white/50 hover:text-white"
              }`}
            >
              {item.urlLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
