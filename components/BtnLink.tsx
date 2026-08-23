"use client";

import Link from "next/link";
import { reachGoal } from "@/lib/analytics";

interface BtnLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "yellow";
  external?: boolean;
  block?: boolean;
  className?: string;
  /** Идентификатор цели Метрики — отправляется по клику. */
  goal?: string;
}

export function BtnLink({
  href,
  children,
  variant = "primary",
  external = false,
  block = false,
  className = "",
  goal,
}: BtnLinkProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
    block ? "w-full" : ""
  }`;
  const styles =
    variant === "primary"
      ? "bg-black text-white shadow-sm hover:shadow-lg hover:shadow-black/20"
      : variant === "yellow"
        ? "bg-accent text-accent-ink shadow-sm hover:shadow-lg hover:shadow-[4px_4px_0_0_rgb(var(--accent-rgb)_/_0.4)]"
        : "border border-line-strong bg-white text-body hover:border-black hover:text-heading";
  const cls = `${base} ${styles} ${className}`;
  const onClick = goal ? () => reachGoal(goal) : undefined;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}