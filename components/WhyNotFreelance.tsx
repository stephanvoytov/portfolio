import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const columns = [
  {
    name: "Конструктор или платформа",
    sub: "Tilda, SaaS-витрины для селлеров",
    accent: false,
    points: [
      { text: "Абонплата 4–7 тыс. ₽ в месяц — пока работает сайт", bad: true },
      { text: "Сайт привязан к платформе: ушли — потеряли всё", bad: true },
      { text: "Шаблонный дизайн, как у сотен других магазинов", bad: true },
      { text: "Глубокие интеграции под ваши процессы невозможны", bad: true },
    ],
  },
  {
    name: "Фрилансер с биржи",
    sub: "«Перенесу магазин с WB за 65 тысяч»",
    accent: false,
    points: [
      { text: "Перенос каталога — это 20% задачи. Кто приведёт клиентов?", bad: true },
      { text: "Без договора: доработки «до результата» заканчиваются исчезновением", bad: true },
      { text: "Сайт сдали — и всё, поддержки нет", bad: true },
      { text: "Часто это первые проекты в портфолио — учатся на вас", bad: true },
    ],
  },
  {
    name: "Мой подход",
    sub: "Разработка + стратегия перехода",
    accent: true,
    points: [
      { text: "Договор и ТЗ: цена зафиксирована до старта и не меняется", bad: false },
      { text: "Код и сайт — ваши. Никакой абонплаты", bad: false },
      { text: "Не просто перенос: план перевода клиентов с площадок", bad: false },
      { text: "Остаюсь рядом после запуска: поддержка и развитие", bad: false },
    ],
  },
];

export default function WhyNotFreelance() {
  return (
    <section className="border-y border-line bg-panel-soft py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Честное сравнение"
          title="Почему не фриланс и не платформа"
          sub="Перенос каталога — это 20% работы. Остальные 80% — чтобы сайт начал продавать. Смотрите, чем варианты отличаются на деле."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {columns.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col rounded-3xl border-2 p-7 transition-all duration-200 hover:-translate-y-1 ${
                  c.accent
                    ? "border-black bg-white shadow-[8px_8px_0_0_var(--accent)]"
                    : "border-line bg-white shadow-sm"
                }`}
              >
                <h3 className="text-lg font-extrabold text-heading">{c.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{c.sub}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {c.points.map((pt) => (
                    <li key={pt.text} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-extrabold ${
                          pt.bad
                            ? "border border-line bg-panel-soft text-muted"
                            : "bg-accent text-accent-ink"
                        }`}
                      >
                        {pt.bad ? "✕" : "✓"}
                      </span>
                      <span className={pt.bad ? "text-muted" : "font-semibold text-heading"}>
                        {pt.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
