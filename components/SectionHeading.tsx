import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ kicker, title, sub, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">{kicker}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{sub}</p>}
    </Reveal>
  );
}
