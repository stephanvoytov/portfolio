"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Главная" },
  { href: "/#services", label: "Услуги" },
  { href: "/portfolio", label: "Работы" },
  { href: "/migrate", label: "Миграция" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#090b10]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Стефан<span className="text-violet-400">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${
                isActive(l.href) ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.tg}
            target="_blank"
            rel="noopener"
            className="ml-3 rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500"
          >
            Telegram
          </a>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <i
              className={`absolute left-0 top-0 h-0.5 w-4 rounded bg-white transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <i
              className={`absolute left-0 top-1.5 h-0.5 w-4 rounded bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <i
              className={`absolute left-0 top-3 h-0.5 w-4 rounded bg-white transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-[#0b0e15] px-4 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-3 py-3 text-base ${
                isActive(l.href) ? "text-white" : "text-zinc-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.tg}
            target="_blank"
            rel="noopener"
            className="mt-3 block rounded-full bg-violet-600 px-4 py-3 text-center text-base font-medium text-white"
          >
            Написать в Telegram
          </a>
        </nav>
      )}
    </header>
  );
}
