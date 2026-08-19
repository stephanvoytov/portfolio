"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useContactModal } from "@/components/ContactModal";

const links = [
  { href: "/#services", label: "Услуги" },
  { href: "/#work", label: "Работы" },
  { href: "/#process", label: "Процесс" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { open: openContact } = useContactModal();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-heading"
          onClick={() => setOpen(false)}
        >
          Стефан<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition-colors ${
                isActive(l.href) ? "text-heading" : "text-muted hover:text-heading"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={openContact}
            className="ml-3 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#0a0a0a]"
          >
            Обсудить проект →
          </button>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-line-strong md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <i
              className={`absolute left-0 top-0 h-0.5 w-4 rounded bg-heading transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <i
              className={`absolute left-0 top-1.5 h-0.5 w-4 rounded bg-heading transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <i
              className={`absolute left-0 top-3 h-0.5 w-4 rounded bg-heading transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-panel px-4 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 rounded-xl px-3 py-3 text-base ${
                isActive(l.href) ? "text-heading" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openContact();
            }}
            className="mt-3 block rounded-full bg-accent px-4 py-3 text-center text-base font-bold text-accent-ink"
          >
            Оставить заявку
          </button>
        </nav>
      )}
    </header>
  );
}
