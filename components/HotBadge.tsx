export default function HotBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-black bg-accent px-2 py-0.5 font-mono text-[11px] font-extrabold uppercase tracking-wider text-accent-ink shadow-[2px_2px_0_0_#0a0a0a] ${className}`}
    >
      Хит
    </span>
  );
}