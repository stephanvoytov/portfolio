import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import type { Case } from "@/lib/cases";

interface CaseCardProps {
  item: Case;
}

/** Карточка кейса: номер, заголовок, описание, фото-мокап и ссылки — как в архиве WebValley. */
export default function CaseCard({ item }: CaseCardProps) {
  const preview = item.previewDesktop ?? item.previewMobile ?? item.slides[0]?.src;

  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/25 bg-black transition-colors duration-200 hover:border-white/40">
        <Link href={`/cases/${item.id}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/25">
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

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-accent">{item.index}</p>
            <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs text-white/60">
              {item.typeLabel}
            </p>
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">{item.tagline}</p>

          <ul className="mt-6 space-y-2">
            {item.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-white/70">
                <span aria-hidden className="mt-0.5 shrink-0 text-accent">
                  →
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.integrations.map((i) => (
              <span
                key={i}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-white/60"
              >
                {i}
              </span>
            ))}
          </div>

          <div className="flex-1" />

          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
            <Link
              href={`/cases/${item.id}`}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink transition-colors duration-200 hover:bg-black hover:text-white sm:w-auto"
            >
              Посмотреть кейс
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={item.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white hover:underline underline-offset-4"
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