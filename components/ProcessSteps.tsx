import Reveal from "@/components/Reveal";

const steps = [
  {
    num: "01",
    title: "Брифинг",
    desc: "Разбираем цели и задачи, собираем структуру. Ничего ни к чему не обязывает.",
  },
  {
    num: "02",
    title: "Смета, договор и ТЗ",
    desc: "Фиксирую цену и срок — дальше они не меняются.",
  },
  {
    num: "03",
    title: "Старт: предоплата 20%",
    desc: "Делаю промежуточные версии — правки по ходу, а не в конце.",
  },
  {
    num: "04",
    title: "Запуск и сдача",
    desc: "Запускаю, учу пользоваться, передаю код и доступы.",
  },
];

export default function ProcessSteps() {
  return (
    <div>
      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.num} className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[6px_6px_0_0_var(--accent)]">
            <Reveal delay={i * 0.07}>
              <span className="text-sm font-bold text-accent-ink">{s.num}</span>
              <h3 className="mt-3 text-lg font-bold text-heading">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-center text-sm text-muted sm:text-left">
        Работаю официально: договор · ТЗ · акт · чеки из «Мой налог».
      </p>
    </div>
  );
}
