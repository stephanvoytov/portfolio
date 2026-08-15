import Reveal from "@/components/Reveal";

const steps = [
  {
    num: "01",
    title: "Знакомимся",
    desc: "Пишете в Telegram или Max — разбираем задачу, я задаю вопросы, чтобы понять бизнес и цель сайта. Ничего ни к чему не обязывает.",
  },
  {
    num: "02",
    title: "Смета и сроки",
    desc: "До старта фиксирую цену и срок — около недели в зависимости от сложности. Дальше они не меняются.",
  },
  {
    num: "03",
    title: "Делаю и показываю",
    desc: "Делаю промежуточные версии — вы смотрите и просите правки по ходу, а не в конце, когда всё уже готово.",
  },
  {
    num: "04",
    title: "Запуск и поддержка",
    desc: "Запускаю сайт, учу им пользоваться. После запуска остаюсь на связи: правки и консультации — бесплатно в небольшом объёме.",
  },
];

export default function ProcessSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {steps.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.07}>
          <li className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <span className="font-mono text-sm text-violet-400">{s.num}</span>
            <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
