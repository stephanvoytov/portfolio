import Reveal from "@/components/Reveal";

function withGolosDigits(text: string) {
  return text.split(/(\d+)/).map((part, i) =>
    /^\d+$/.test(part) ? (
      <span key={i} className="font-sans">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  sub?: string;
  num?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  kicker,
  title,
  sub,
  num,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {num && (
        <p className="font-mono text-sm font-bold tracking-[0.35em] text-accent">
          {withGolosDigits(num)}
        </p>
      )}
      {kicker && (
        <p
          className={`inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] ${
            dark ? "text-accent" : "text-accent-ink"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          {withGolosDigits(kicker)}
        </p>
      )}
      <h2
        className={`mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl ${
          dark ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/60" : "text-muted"
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
