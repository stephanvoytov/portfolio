import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const nav = [
  { href: "/landing", label: "Лендинги" },
  { href: "/catalog", label: "Каталоги" },
  { href: "/ecommerce", label: "Магазины" },
  { href: "/migrate", label: "Миграция" },
  { href: "/portfolio", label: "Работы" },
  { href: "/contacts", label: "Контакты" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-semibold text-white">
              Стефан<span className="text-violet-400">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Разработка сайтов на Next.js: интернет-магазины, каталоги с синхронизацией Ozon и
              Wildberries, лендинги. Под ключ — от идеи до запуска и поддержки.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Услуги</p>
            <nav className="mt-4 grid grid-cols-1 gap-2">
              {nav.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Связаться</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={site.tg}
                target="_blank"
                rel="noopener"
                className="text-zinc-400 hover:text-white"
              >
                Telegram {site.tgHandle}
              </a>
              <a href={site.max} target="_blank" rel="noopener" className="text-zinc-400 hover:text-white">
                Max
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Стефан — разработка сайтов для бизнеса</p>
          <p>
            Next.js · React · TypeScript · Ozon API · Wildberries API
          </p>
        </div>
      </Container>
    </footer>
  );
}
