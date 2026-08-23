export default function HotBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-ink bg-accent px-2 py-0.5 font-mono text-[11px] font-extrabold uppercase tracking-wider text-accent-ink shadow-brutal-xs ${className}`}
    >
      Хит
    </span>
  );
}