import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactBody {
  name?: string;
  contact?: string;
  message?: string;
  website?: string;
}

function clean(v: string | undefined, max = 500): string {
  return (v ?? "").trim().slice(0, max);
}

/** Экранирование HTML для Telegram (parse_mode=HTML). */
function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  // Honeypot: боты заполняют скрытое поле — молча игнорируем.
  if (body.website) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const name = clean(body.name);
  const contact = clean(body.contact, 200);
  const message = clean(body.message, 2000);

  if (!name || !contact || !message) {
    return NextResponse.json({ ok: false, error: "required" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Telegram ещё не подключён (нет env) — не падаем, но помечаем, что доставки не было.
    console.warn("[contact] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы — заявка не доставлена");
    return NextResponse.json({ ok: true, delivered: false });
  }

  const text = [
    "📩 Новая заявка с сайта",
    "",
    `👤 Имя: ${escapeHtml(name)}`,
    `📞 Контакт: ${escapeHtml(contact)}`,
    `💬 Сообщение: ${escapeHtml(message)}`,
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Telegram sendMessage failed:", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "telegram" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Telegram request error:", err);
    return NextResponse.json({ ok: false, error: "telegram" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
