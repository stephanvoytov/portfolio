import Link from "next/link";
import { Container } from "@/components/Container";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";
import { Mail, MessageCircle, Send } from "@/components/icons";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
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
            <p className="flex items-center gap-2.5 text-lg font-semibold text-heading">
              <Logo />
              <span className="flex flex-col items-start leading-none">
                <span className="text-lg font-bold">VOYTOV</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">studio</span>
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Разработка сайтов на Next.js и WordPress: интернет-магазины, каталоги с
              синхронизацией Ozon и Wildberries, лендинги. Под ключ — от идеи до запуска и
              поддержки.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Навигация</p>
            <nav className="mt-4 grid grid-cols-1 gap-1">
              {nav.map((l) => (
                <Link key={l.href} href={l.href} className="-mx-2 rounded-lg px-2 py-2 text-sm text-muted hover:text-heading">
                  {l.label}
                </Link>
              ))}
              <Link href="/migrate" className="-mx-2 rounded-lg px-2 py-2 text-sm text-muted hover:text-heading">
                Второй канал продаж
              </Link>
              <Link href="/blog" className="-mx-2 rounded-lg px-2 py-2 text-sm text-muted hover:text-heading">
                Блог
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Связаться</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={site.tg}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2.5 py-1.5 text-muted transition-colors hover:text-heading"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-panel-soft text-heading transition-colors group-hover:border-accent group-hover:bg-accent">
                  <Send className="h-3.5 w-3.5" />
                </span>
                Telegram {site.tgHandle}
              </a>
              <a href={site.max} target="_blank" rel="noopener" className="group inline-flex items-center gap-2.5 py-1.5 text-muted transition-colors hover:text-heading">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-panel-soft text-heading transition-colors group-hover:border-accent group-hover:bg-accent">
                  <MessageCircle className="h-3.5 w-3.5" />
                </span>
                Max
              </a>
              <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-2.5 py-1.5 text-muted transition-colors hover:text-heading">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-panel-soft text-heading transition-colors group-hover:border-accent group-hover:bg-accent">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VOYTOV STUDIO — разработка сайтов для бизнеса</p>
          <p>Next.js · React · TypeScript</p>
        </div>
      </Container>
    </footer>
  );
}
