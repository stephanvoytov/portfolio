import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const rows = [
  {
    label: "Стоимость разработки",
    builder: "Самому — бесплатно, но с ограничениями; со специалистом от 10 000 ₽",
    wp: "От 30 000 ₽",
    next: "От 10 000 ₽",
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
          sub="Конструктор, WordPress или кастомная разработка — у каждого варианта своя задача. Смотрите по строкам, которые важны именно вам."
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
            Честно: каждому варианту — своё место. Если сомневаетесь — напишите,
            подскажу, что подходит под вашу задачу и бюджет.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}