import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";
import ThemeDark from "@/components/ThemeDark";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Как мы собираем, храним и обрабатываем персональные данные в соответствии с 152-ФЗ.",
};

export default function PrivacyPage() {
  return (
    <>
      <ThemeDark />
      <Container>
        <article className="mx-auto max-w-3xl py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-sm text-muted">
          Дата публикации: 1 января 2026 года. Действует в отношении сайта {site.siteUrl}.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-body">
          <section>
            <h2 className="text-xl font-bold text-heading">1. Общие положения</h2>
            <p className="mt-3">
              Оператор относится к обработке персональных данных в соответствии с Федеральным законом от
              27.07.2006 №&nbsp;152-ФЗ «О персональных данных». Заполняя любую форму на сайте, вы даёте
              согласие на обработку своих персональных данных на условиях, описанных ниже.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-heading">2. Какие данные мы собираем</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>имя, которое вы указываете в форме;</li>
              <li>контакт для связи — номер телефона, никнейм в мессенджере или адрес электронной почты;</li>
              <li>текст сообщения, который вы отправляете вместе с заявкой.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-heading">3. Цели обработки</h2>
            <p className="mt-3">
              Данные используются только для ответа по вашей заявке, оказания услуг и информирования об
              их ходе. Мы не используем данные для рассылок, не продаём и не передаём их в рекламных целях.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-heading">4. Правовое основание</h2>
            <p className="mt-3">
              Обработка осуществляется на основании вашего согласия, полученного через установленную галочку
              в форме. Согласие может быть отозвано в любой момент.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-heading">5. Передача третьим лицам</h2>
            <p className="mt-3">
              Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных
              законом, либо технических исполнителей (хостинг, сервисы мессенджеров), и только в объёме,
              необходимом для ответа по заявке.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-heading">6. Хранение и защита</h2>
            <p className="mt-3">
              Данные хранятся на территории Российской Федерации, передаются по защищённому каналу (HTTPS) и
              доступны ограниченному кругу лиц. Срок хранения не превышает срок, необходимый для целей
              обработки.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-heading">7. Ваши права</h2>
            <p className="mt-3">
              Вы вправе запросить доступ к своим данным, их уточнение, блокировку, удаление, а также отозвать
              согласие на обработку. Для этого достаточно написать нам на почту, указанную ниже. Запрос
              обрабатывается в срок, установленный 152-ФЗ.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-heading">8. Контакты</h2>
            <p className="mt-3">
              По вопросам обработки персональных данных пишите на{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-accent underline hover:no-underline">
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
        </article>
      </Container>
    </>
  );
}
