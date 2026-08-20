import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const rows = [
  {
    label: "Нагрузка с продажи",
    mp: "35–55% суммарно: комиссия, логистика, реклама, эквайринг, хранение",
    site: "~2–3% за приём платежей, остальное ваше",
  },
  {
    label: "Клиенты и данные",
    mp: "Покупатель «гуляет», базы контактов нет",
    site: "База клиентов ваша: повторные покупки, боты, рассылки",
  },
  {
    label: "Витрина и бренд",
    mp: "Шаблонная полка рядом с дешёвыми аналогами",
    site: "Ваш бренд, ваш дизайн, ваши правила",
  },
  {
    label: "Доставка и логистика",
    mp: "Готовая логистика: склады, ПВЗ, курьеры по всей стране",
    site: "СДЭК, Почта, курьеры — интеграции настраиваются под вас",
  },
  {
    label: "Трафик и реклама",
    mp: "Покупатели уже внутри — но конкуренция за каждый клик",
    site: "Реклама, SEO, соцсети — приводим сами, клиенты остаются вашими",
  },
  {
    label: "Зависимость",
    mp: "Алгоритмы, штрафы, блокировки — не вы управляете",
    site: "Правила ваши; маркетплейсы — только один из каналов",
  },
  {
    label: "Риски",
    mp: "Весь бизнес держится на одной площадке",
    site: "Канал диверсифицирован, обрывов не будет",
  },
];

export default function MarketplaceVsSite() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Сравнение"
          title="Маркетплейс или свой сайт?"
          sub="Честно, без прикрас: обе стороны имеют смысл. Сайт не отменяет маркетплейс — он делает вас от него независимым."
        />
        <Reveal className="mt-12">
          <div className="overflow-x-auto rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0_0_#d4af37]">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="sticky left-0 z-10 w-[22%] border-r border-line bg-white px-4 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted sm:px-7">
                    Критерий
                  </th>
                  <th className="px-4 py-4 text-base font-extrabold text-heading sm:px-7">
                    Ozon / Wildberries
                  </th>
                  <th className="bg-accent px-4 py-4 text-base font-extrabold text-accent-ink sm:px-7">
                    Свой сайт
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i !== rows.length - 1 ? "border-b border-line" : ""}>
                    <th className="sticky left-0 z-10 border-r border-line bg-white px-4 py-4 align-top text-sm font-bold text-heading sm:px-7 sm:text-base">
                      {r.label}
                    </th>
                    <td className="px-4 py-4 align-top text-sm leading-relaxed text-muted sm:px-7">
                      {r.mp}
                    </td>
                    <td className="bg-accent px-4 py-4 align-top text-sm font-semibold leading-relaxed text-accent-ink sm:px-7">
                      {r.site}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}