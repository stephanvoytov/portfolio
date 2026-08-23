import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const rows = [
  {
    label: "Стоимость разработки",
    builder: "Самому — бесплатно, но с ограничениями; со специалистом от 10 000 ₽",
    wp: "От 30 000 ₽",
    next: "От 15 000 ₽",
  },
  {
    label: "Скорость загрузки",
    builder: "60–75 PageSpeed",
    wp: "40–85, зависит от плагинов",
    next: "95–100 PageSpeed",
  },
  {
    label: "SEO",
    builder: "Базовое",
    wp: "Отличное через плагины",
    next: "Полный контроль",
  },
  {
    label: "Гибкость",
    builder: "Только из каталога платформы",
    wp: "Через плагины, есть пределы",
    next: "Любые API, кастомная логика",
  },
  {
    label: "Владение кодом",
    builder: "Сайт у платформы, перенос невозможен",
    wp: "Код ваш",
    next: "Код ваш",
  },
];

const columns = [
  { key: "builder" as const, title: "Конструктор" },
  { key: "wp" as const, title: "WordPress" },
  { key: "next" as const, title: "Кастомный Next.js", hot: true },
];

function HotBadge() {
  return (
    <span className="ml-1.5 align-middle rounded-full bg-accent-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
      Для магазинов
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          num="06"
          kicker="Сравнение"
          title="На чём сделать сайт"
          sub="Конструктор, WordPress или кастомная разработка — у каждого варианта своя задача. Смотрите по строкам, которые важны именно вам."
        />
        <Reveal className="mt-12">
          <div className="space-y-4 sm:hidden">
            {rows.map((r) => (
              <div key={r.label} className="rounded-2xl border border-line bg-panel p-5 shadow-sm">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  {r.label}
                </p>
                <div className="mt-3 space-y-2">
                  {columns.map((c) => (
                    <div
                      key={c.key}
                      className={c.hot ? "rounded-xl bg-accent px-3 py-2.5" : "px-1 py-1"}
                    >
                      <p
                        className={`font-mono text-[11px] font-bold uppercase tracking-wider ${
                          c.hot ? "text-accent-ink/70" : "text-faint"
                        }`}
                      >
                        {c.title}
                        {c.hot && <HotBadge />}
                      </p>
                      <p
                        className={`mt-1 text-sm leading-snug ${
                          c.hot ? "font-semibold text-accent-ink" : "text-muted"
                        }`}
                      >
                        {r[c.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="hidden overflow-x-auto rounded-3xl border-2 border-ink shadow-brutal-accent-lg sm:block">
            <table className="w-full min-w-[760px] border-collapse bg-panel text-left">
              <thead>
                <tr className="border-b-2 border-ink">
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
                      {c.hot && <HotBadge />}
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
            Честно: каждому варианту — своё место. Я разрабатываю и на WordPress, и на
            Next.js — посоветую стек под вашу задачу и бюджет, а не под свой удобный шаблон.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}