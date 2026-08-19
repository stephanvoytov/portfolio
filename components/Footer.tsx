import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/cases", label: "Кейсы" },
  { href: "/#services", label: "Услуги" },
  { href: "/#work", label: "Работы" },
  { href: "/#process", label: "Процесс" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-semibold text-heading">
              Стефан<span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Разработка сайтов на Next.js: интернет-магазины, каталоги с синхронизацией Ozon и
              Wildberries, лендинги. Под ключ — от идеи до запуска и поддержки.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Навигация</p>
            <nav className="mt-4 grid grid-cols-1 gap-2">
              {nav.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-heading">
                  {l.label}
                </Link>
              ))}
              <Link href="/migrate" className="text-sm text-muted hover:text-heading">
                Уход с маркетплейсов
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Связаться</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={site.tg}
                target="_blank"
                rel="noopener"
                className="text-muted hover:text-heading"
              >
                Telegram {site.tgHandle}
              </a>
              <a href={site.max} target="_blank" rel="noopener" className="text-muted hover:text-heading">
                Max
              </a>
              <a href={`mailto:${site.email}`} className="text-muted hover:text-heading">
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Стефан — разработка сайтов для бизнеса</p>
          <p>Next.js · React · TypeScript</p>
        </div>
      </Container>
    </footer>
  );
}
