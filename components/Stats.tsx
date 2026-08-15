import Reveal from "@/components/Reveal";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "5+", label: "проектов запущено" },
  { value: "3", label: "года опыта в разработке" },
  { value: "5+", label: "интеграций с API" },
  { value: "~1 нед", label: "средний срок запуска" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <div className="rounded-2xl border border-line bg-panel p-5 shadow-sm">
            <p className="font-mono text-2xl font-semibold text-heading sm:text-3xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
