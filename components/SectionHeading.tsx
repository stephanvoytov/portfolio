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
    <Reveal className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-ink">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {kicker}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
    </Reveal>
  );
}
