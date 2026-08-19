import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const rows = [
  {
    label: "Дизайн",
    builder: "Шаблон «как у всех»",
    wp: "Шаблон с правками",
    next: "Уникальный, под задачу бизнеса",
  },
  {
    label: "Скорость загрузки",
    builder: "Средняя — тяжёлые страницы",
    wp: "Зависит от плагинов, часто медленно",
    next: "Высокая: страницы открываются мгновенно",
  },
  {
    label: "SEO",
    builder: "Базовое, в рамках платформы",
    wp: "Хорошее, но хрупкое",
    next: "Полный контроль: скорость, структура, разметка",
  },
  {
    label: "Интеграции",
    builder: "Только что есть в платформе",
    wp: "Через плагины и костыли",
    next: "Любые API: Ozon, WB, оплата, боты, CRM",
  },
  {
    label: "Развитие",
    builder: "В рамках ограничений платформы",
    wp: "Можно, но растёт хрупкость",
    next: "Любые доработки без ограничений",
  },
  {
    label: "Стоимость",
    builder: "Абонплата + платные блоки",
    wp: "Плагины и правки по-штучно",
    next: "Фиксированная цена под задачу, без абонплаты",
  },
  {
    label: "Владение",
    builder: "Закрытая платформа, сайт не ваш",
    wp: "Код ваш",
    next: "Код ваш, перенос куда угодно",
  },
];

const columns = [
  { key: "builder", title: "Конструктор" },
  { key: "wp", title: "WordPress" },
  { key: "next", title: "Кастомный Next.js", hot: true },
];

export default function ComparisonTable() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          kicker="Сравнение"
          title="На чём сделать сайт"
          sub="Три частых варианта, между которыми выбирают: конструктор, WordPress или кастомная разработка. Смотрите по строкам, которые важны именно вам."
        />
        <Reveal className="mt-12">
          <div className="overflow-x-auto rounded-3xl border-2 border-black shadow-[8px_8px_0_0_#ffd900]">
            <table className="w-full min-w-[760px] border-collapse bg-white text-left">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="w-[22%] px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted sm:px-7">
                    Критерий
                  </th>
                  {columns.map((c) => (
                    <th
                      key={c.key}
                      className={`px-5 py-4 text-base font-extrabold sm:px-7 ${
                        c.hot ? "bg-accent text-accent-ink" : "text-heading"
                      }`}
                    >
                      {c.title}
                      {c.hot && (
                        <span className="ml-2 align-middle rounded-full bg-accent-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                          Мой стек
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={i !== rows.length - 1 ? "border-b border-line" : ""}
                  >
                    <th className="px-5 py-4 align-top text-sm font-bold text-heading sm:px-7 sm:text-base">
                      {r.label}
                    </th>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted sm:px-7">
                      {r.builder}
                    </td>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted sm:px-7">
                      {r.wp}
                    </td>
                    <td className="bg-accent px-5 py-4 align-top text-sm font-semibold leading-relaxed text-accent-ink sm:px-7">
                      {r.next}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            Кастомный Next.js — это то, чем я занимаюсь: сайты, которые не ограничены
            платформой, не тормозят и дорабатываются под рост бизнеса. Если сомневаетесь,
            какой вариант подходит вашему случаю — напишите, разберём на вашем примере.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}