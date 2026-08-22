import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Блог — разработка сайтов, e-commerce и переход с маркетплейсов",
  description:
    "Заметки и гайды от практика: разработка на Next.js, интернет-магазины, интеграции с Ozon и Wildberries, переход с маркетплейсов на свой сайт.",
  path: "/blog",
});

const posts = [
  {
    href: "/blog/kak-razdelit-prodazhi-sait-i-marketpleisy",
    kicker: "Гайд · 9 минут",
    title: "Как селлеру маркетплейсов разделить продажи и перевести часть клиентов на свой сайт",
    desc: "Что переводить на сайт в первую очередь, как легально перенаправлять клиентов через QR-вкладыши, доставка, реклама и реалистичные цели на 3–6 месяцев.",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-28 pb-20 sm:pt-36">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Блог
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">
            Блог
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Заметки о разработке сайтов, e-commerce и переходе с маркетплейсов — из реальных
            проектов.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[6px_6px_0_0_var(--accent)]"
            >
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {post.kicker}
              </p>
              <h2 className="mt-4 text-xl font-extrabold leading-snug text-heading group-hover:text-accent-ink">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.desc}</p>
              <span className="mt-5 font-semibold text-accent-ink">Читать →</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
