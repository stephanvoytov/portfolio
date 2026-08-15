"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line-strong bg-panel px-4 py-3 text-sm text-heading placeholder-faint outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/10";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") ?? "",
      contact: fd.get("contact") ?? "",
      message: fd.get("message") ?? "",
      website: fd.get("website") ?? "",
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean };
      setStatus(data.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-emerald-300 bg-emerald-50 p-8">
        <p className="text-2xl font-bold text-heading">Заявка отправлена!</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Спасибо за сообщение. Отвечу в ближайшее время — обычно в течение дня.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
            Имя
          </label>
          <input id="name" name="name" type="text" required placeholder="Как к вам обращаться?" className={inputCls} />
        </div>
        <div>
          <label htmlFor="contact" className="mb-1.5 block text-sm text-muted">
            Телефон, email или Telegram
          </label>
          <input id="contact" name="contact" type="text" required placeholder="@username или +7…" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          О проекте
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Что нужно сделать? Например: интернет-магазин с синхронизацией с Wildberries…"
          className={`${inputCls} resize-none`}
        />
      </div>
      {/* Honeypot: скрытое поле для ботов */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-violet-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-violet-500 disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Отправляю…" : "Отправить заявку"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500">
          Не получилось отправить. Попробуйте ещё раз или напишите напрямую в Telegram.
        </p>
      )}
    </form>
  );
}
