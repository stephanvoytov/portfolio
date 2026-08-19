import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const mpRows = [
  { name: "Комиссия площадки", pct: "20%", rub: "400 ₽" },
  { name: "Логистика", pct: "10%", rub: "200 ₽" },
  { name: "Эквайринг", pct: "2%", rub: "40 ₽" },
  { name: "Реклама", pct: "12%", rub: "240 ₽" },
  { name: "Хранение", pct: "3%", rub: "60 ₽" },
];

const siteRows = [
  { name: "Эквайринг", pct: "~2%", rub: "~40 ₽" },
  { name: "Хостинг и домен", pct: "~0,5–1%", rub: "~10–20 ₽" },
  { name: "Доставка СДЭК", pct: "~6–16%", rub: "~125–310 ₽" },
  { name: "Реклама", pct: "~5–15%", rub: "~100–300 ₽" },
];

const notes = [
  "Доставка: тариф СДЭК «Посылка» от 125 ₽ за посылку до 3 кг (пример СДЭК: 872 → 310 ₽). Реклама — по желанию: SEO, соцсети и QR-коды в посылках дают трафик бесплатно.",
  "Разработка — разовая, 30–150 тыс. ₽ (в пересчёте при 100 продажах в месяц — около 3% с товара за 2 000 ₽).",
];

function TotalRow({ label, pct, rub }: { label: string; pct: string; rub: string }) {
  return (
    <tr className="border-t-2 border-black bg-accent">
      <td className="px-4 py-3.5 text-sm font-extrabold text-accent-ink sm:px-6 sm:text-base">
        {label}
      </td>
      <td className="px-3 py-3.5 text-right font-mono text-sm font-extrabold text-accent-ink sm:text-base">
        {pct}
      </td>
      <td className="px-4 py-3.5 text-right font-mono text-sm font-extrabold text-accent-ink sm:px-6 sm:text-base">
        {rub}
      </td>
    </tr>
  );
}

function RemainRow({ label, pct, rub }: { label: string; pct: string; rub: string }) {
  return (
    <tr className="border-t border-line">
      <td className="px-4 py-3.5 text-sm font-extrabold text-heading sm:px-6 sm:text-base">
        {label}
      </td>
      <td className="px-3 py-3.5 text-right font-mono text-sm font-extrabold text-heading sm:text-base">
        {pct}
      </td>
      <td className="px-4 py-3.5 text-right font-mono text-sm font-extrabold text-heading sm:px-6 sm:text-base">
        {rub}
      </td>
    </tr>
  );
}

function BodyRow({ name, pct, rub }: { name: string; pct: string; rub: string }) {
  return (
    <tr className="border-b border-line">
      <td className="px-4 py-3 text-sm font-medium text-body sm:px-6 sm:text-base">{name}</td>
      <td className="px-3 py-3 text-right font-mono text-sm font-bold text-heading sm:text-base">
        {pct}
      </td>
      <td className="px-4 py-3 text-right font-mono text-sm font-bold text-heading sm:px-6 sm:text-base">
        {rub}
      </td>
    </tr>
  );
}

export default function CommissionBreakdown() {
  return (
    <section className="border-y border-line bg-panel-soft py-24">
      <Container>
        <SectionHeading
          kicker="Сколько реально забирает площадка"
          title="35–55% от цены товара"
          sub="С каждой продажи: комиссия, логистика, реклама, эквайринг, хранение."
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0_0_#0a0a0a]">
              <div className="border-b-2 border-black bg-black px-4 py-4 text-white sm:px-6">
                <h3 className="text-base font-extrabold sm:text-xl">Маркетплейс (FBO)</h3>
                <p className="mt-0.5 text-xs font-medium text-white/60 sm:text-sm">
                  Товар за 2 000 ₽
                </p>
              </div>
              <table className="w-full border-collapse text-left">
                <tbody>
                  {mpRows.map((r) => (
                    <BodyRow key={r.name} {...r} />
                  ))}
                  <TotalRow label="ИТОГО удержано" pct="47%" rub="940 ₽" />
                  <RemainRow label="Остаётся вам" pct="53%" rub="1 060 ₽" />
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0_0_#ffd900]">
              <div className="border-b-2 border-black bg-accent px-4 py-4 sm:px-6">
                <h3 className="text-base font-extrabold text-accent-ink sm:text-xl">
                  Кастомный сайт
                </h3>
                <p className="mt-0.5 text-xs font-medium text-accent-ink/70 sm:text-sm">
                  Тот же товар за 2 000 ₽
                </p>
              </div>
              <table className="w-full border-collapse text-left">
                <tbody>
                  {siteRows.map((r) => (
                    <BodyRow key={r.name} {...r} />
                  ))}
                  <TotalRow label="ИТОГО удержано" pct="~13–34%" rub="~275–670 ₽" />
                  <RemainRow label="Остаётся вам" pct="~66–87%" rub="~1 330–1 725 ₽" />
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="rounded-2xl border-2 border-black bg-accent px-6 py-5 shadow-[5px_5px_0_0_#0a0a0a] sm:px-8">
            <p className="text-base font-bold text-accent-ink sm:text-lg">
              Маркетплейс забирает 47% (940 ₽) — доставка и реклама уже внутри. Сайт: ~13–34%
              (275–670 ₽). И клиенты при этом ваши.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <ul className="space-y-2">
            {notes.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 font-mono font-bold text-accent-ink">—</span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}