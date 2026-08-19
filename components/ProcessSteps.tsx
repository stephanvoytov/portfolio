import Reveal from "@/components/Reveal";

const steps = [
  {
    num: "01",
    title: "Брифинг",
    desc: "Разбираем цели и задачи: зачем вам сайт, кто ваши клиенты, какие страницы нужны. Присылаете референсы — формируем структуру. Ничего ни к чему не обязывает.",
  },
  {
    num: "02",
    title: "Смета, договор и ТЗ",
    desc: "До старта фиксирую цену и срок — и дальше они не меняются. Подписываем договор и техническое задание: что делаем, в какие сроки и за сколько.",
  },
  {
    num: "03",
    title: "Старт: предоплата 20%",
    desc: "Вносите предоплату 20% — и я приступаю. Делаю промежуточные версии: вы смотрите и просите правки по ходу, а не в конце, когда всё уже готово.",
  },
  {
    num: "04",
    title: "Запуск и сдача",
    desc: "Запускаю сайт, учу им пользоваться. Подписываем акт приёма-передачи, вы вносите остаток — и я передаю код и все доступы. После запуска остаюсь на связи: правки и консультации — бесплатно в небольшом объёме.",
  },
];

export default function ProcessSteps() {
  return (
    <div>
      <ol className="grid gap-4 sm:grid-cols-2">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.07}>
            <li className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[6px_6px_0_0_#ffd900]">
              <span className="font-mono text-sm font-bold text-accent-ink">{s.num}</span>
              <h3 className="mt-3 text-lg font-bold text-heading">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <p className="mt-6 text-center text-sm text-muted sm:text-left">
        Работаю официально: договор, техническое задание, акт приёма-передачи и чеки из «Мой налог» — для компаний и ИП.
      </p>
    </div>
  );
}
