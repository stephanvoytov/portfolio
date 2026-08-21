import { BtnLink } from "@/components/BtnLink";

export default function NotFound() {
  return (
    <section className="hero-glow grid-bg flex min-h-[70vh] items-center justify-center px-4 pt-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          Такой страницы нет
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Возможно, ссылка устарела. Загляните на главную или посмотрите, как запустить свой
          сайт вместо маркетплейса.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <BtnLink href="/">На главную</BtnLink>
          <BtnLink href="/migrate" variant="ghost">
            Сайт вместо маркетплейса
          </BtnLink>
        </div>
      </div>
    </section>
  );
}
