import Link from "next/link";
import { BtnLink } from "@/components/BtnLink";

export default function NotFound() {
  return (
    <section className="grid-bg hero-glow flex min-h-[70vh] items-center justify-center px-4 pt-16">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-violet-400">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Такой страницы нет
        </h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          Возможно, ссылка устарела. Загляните на главную или в портфолио.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <BtnLink href="/">На главную</BtnLink>
          <BtnLink href="/portfolio" variant="ghost">
            Работы
          </BtnLink>
        </div>
      </div>
    </section>
  );
}
