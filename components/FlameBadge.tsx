export default function FlameBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 ${className}`}
      role="img"
      aria-label="Популярная услуга"
    >
      <title>Популярная услуга</title>
      <path
        d="M12 2C7 6 5.5 8.5 5.5 11.5 5.5 15.1 8.4 18 12 18s6.5-2.9 6.5-6.5C18.5 8.5 17 6 12 2z"
        fill="#FF7A00"
      />
      <path
        d="M12 7c-2.5 2.5-3.2 3.8-3.2 6 0 2.4 1.4 4 3.2 4s3.2-1.6 3.2-4c0-2.2-.7-3.5-3.2-6z"
        fill="#FFC400"
      />
      <circle cx="12" cy="13.8" r="1.6" fill="#FFE082" />
    </svg>
  );
}