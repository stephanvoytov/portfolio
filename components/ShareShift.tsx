import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const stages = [
  {
    when: "Старт",
    site: 0,
    note: "Все продажи на площадке. Готовим сайт: каталог, оплата, доставка.",
  },
  {
    when: "Месяц 1–2",
    site: 10,
    note: "Сайт запущен. Первые заказы приносят реклама, соцсети и вкладыши с QR в ваших посылках с площадок.",
  },
  {
    when: "Месяц 3–6",
    site: 25,
    note: "Повторные клиенты переходят на сайт — там цена ниже без комиссии площадки.",
  },
  {
    when: "Полгода и дальше",
    site: 40,
    note: "Маржинальные товары и постоянные клиенты живут на сайте. Площадки приводят новых. Дальше — по цифрам: у кого-то и 60% на сайте.",
  },
];

export default function ShareShift() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Без риска"
          title="Маркетплейсы никто не выключает"
          sub="Продажи перетекают на сайт постепенно — каждый этап оцениваем по цифрам. Не работает: останавливаемся, вы ничего не потеряли."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {stages.map((s, i) => (
            <Reveal key={s.when} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="text-sm font-extrabold text-heading">{s.when}</p>
                  <p className="font-mono text-xs font-bold text-muted">
                    площадка {100 - s.site}% · сайт {s.site}%
                  </p>
                </div>
                <div
                  className="mt-3 flex h-4 w-full overflow-hidden rounded-full border border-line"
                  role="img"
                  aria-label={`${s.when}: маркетплейс ${100 - s.site} процентов, сайт ${s.site} процентов`}
                >
                  <div className="h-full bg-black" style={{ width: `${100 - s.site}%` }} />
                  <div className="h-full bg-accent" style={{ width: `${s.site}%` }} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.note}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <p className="text-center text-xs leading-relaxed text-muted">
              Чёрное — продажи на маркетплейсе, жёлтое — на вашем сайте. Пропорции примерные:
              зависят от ниши, маржи и бюджета на привлечение.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
