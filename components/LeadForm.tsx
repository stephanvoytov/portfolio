"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { GOALS, reachGoal } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const fieldCls =
  "w-full rounded-xl border-2 border-ink bg-bg px-4 py-3 text-base font-semibold text-heading placeholder:text-muted outline-none transition-colors focus:border-accent";

export default function LeadForm() {
  const [contact, setContact] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) {
      setError("Укажите телефон");
      return;
    }
    if (!consent) {
      setError("Поставьте галочку согласия на обработку персональных данных");
      return;
    }
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact }),
      });
      if (!res.ok) throw new Error("send failed");
      reachGoal(GOALS.leadSent);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-accent bg-bg p-6 text-center shadow-brutal-accent sm:p-8">
        <div className="text-3xl">✅</div>
        <p className="mt-3 text-lg font-bold text-heading">Заявка отправлена!</p>
        <p className="mt-1 text-sm text-body">
           Перезвоню на указанный номер или напишу в{" "}
           <a href={site.tg} target="_blank" rel="noopener" className="font-semibold text-accent underline">
             Telegram
           </a>{" "}
           или{" "}
           <a href={site.max} target="_blank" rel="noopener" className="font-semibold text-accent underline">
             Max
           </a>{" "}
           в течение 15 минут.
         </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label
          htmlFor="lead-phone"
          className="font-mono text-xs font-bold uppercase tracking-wider text-muted"
        >
          Телефон
        </label>
        <input
          id="lead-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="+7 (900) 000-00-00"
          className={fieldCls}
        />
      </div>

      {error ? <p className="text-sm font-semibold text-red-400">{error}</p> : null}

      <label className="flex items-start gap-2 text-xs leading-relaxed text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          Я даю согласие на обработку персональных данных по{" "}
          <a
            href="/privacy"
            className="font-semibold text-accent underline hover:no-underline"
          >
            политике конфиденциальности
          </a>{" "}
          (152-ФЗ).
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-ink shadow-brutal-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brutal-accent-md disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "submitting" ? "Отправляю…" : "Отправить заявку"}
      </button>
    </form>
  );
}
