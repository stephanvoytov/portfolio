export default function FlameBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-grid h-5 w-5 shrink-0 place-items-center rounded-full border border-black bg-accent shadow-[2px_2px_0_0_#0a0a0a] ${className}`}
      title="Популярная услуга"
      aria-label="Популярная услуга"
    >
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="#0a0a0a" aria-hidden="true">
        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zm-1.79 18.33c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
      </svg>
    </span>
  );
}