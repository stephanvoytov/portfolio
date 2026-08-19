export const dynamic = "force-dynamic";

interface LeadBody {
  name?: string;
  contact?: string;
  message?: string;
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return Response.json(
      { ok: false, error: "Telegram не настроен" },
      { status: 500 },
    );
  }

  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Некорректный запрос" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const contact = (body.contact ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !contact) {
    return Response.json(
      { ok: false, error: "Имя и контакт обязательны" },
      { status: 400 },
    );
  }

  const text = [
    "Заявка с сайта:",
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    message ? `Задача: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.ok) {
    return Response.json({ ok: false, error: "Не удалось отправить" }, { status: 502 });
  }

  return Response.json({ ok: true });
}