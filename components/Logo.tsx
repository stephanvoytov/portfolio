export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-[10px] border-2 border-ink bg-accent text-base font-extrabold leading-none text-accent-ink shadow-brutal-xs ${className}`}
      aria-hidden
    >
      С
    </span>
  );
}