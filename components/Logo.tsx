export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-[10px] border-2 border-black bg-accent text-base font-extrabold leading-none text-accent-ink shadow-[2px_2px_0_0_#0a0a0a] ${className}`}
      aria-hidden
    >
      С
    </span>
  );
}