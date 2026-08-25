/* eslint-disable @next/next/no-img-element */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/logo-vs.png"
      alt=""
      aria-hidden
      className={`h-8 w-8 shrink-0 ${className}`}
    />
  );
}
