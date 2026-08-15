import CaseSlider from "@/components/CaseSlider";
import Reveal from "@/components/Reveal";
import type { Case } from "@/lib/cases";

interface CaseCardProps {
  item: Case;
  detailed?: boolean;
}

/** Карточка кейса: заголовок, описание, слайдер скриншотов. В режиме detailed — задача, решение, результат, стек. */
export default function CaseCard({ item, detailed = false }: CaseCardProps) {
  return (
    <Reveal>
      <article className="overflow-hidden rounded-3xl border border-line bg-panel shadow-sm">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col">
            <p className="font-mono text-sm text-accent">{item.index}</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-heading">{item.title}</h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
              {item.typeLabel}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-body">{item.short}</p>

            {detailed && (
              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Задача</p>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.task}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Решение</p>
                  <ul className="mt-2 space-y-1.5">
                    {item.solution.map((s) => (
                      <li key={s} className="flex gap-2 text-sm text-body">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Результат</p>
                  <ul className="mt-2 space-y-1.5">
                    {item.result.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-zinc-700">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={item.url}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent hover:text-violet-700"
            >
              {item.urlLabel}
            </a>
          </div>

          <div className="lg:self-center">
            <CaseSlider slides={item.slides} id={item.id} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
