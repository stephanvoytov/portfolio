import Link from "next/link";

interface BtnLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
}

export function BtnLink({ href, children, variant = "primary", external = false, className = "" }: BtnLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-violet-600 text-white hover:bg-violet-500"
      : "border border-line-strong text-body hover:bg-panel-soft";
  const cls = `${base} ${styles} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
