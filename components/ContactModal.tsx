"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { Mail, MessageCircle, Phone, Send, Users } from "@/components/icons";

type Status = "idle" | "submitting" | "success" | "error";

const channels = [
  { id: "telegram", label: "Telegram", placeholder: "@username" },
  { id: "max", label: "Max", placeholder: "номер телефона" },
  { id: "whatsapp", label: "WhatsApp", placeholder: "+7 …" },
  { id: "vk", label: "VK", placeholder: "@id или ссылка" },
  { id: "email", label: "Почта", placeholder: "ваш@почта.ru" },
] as const;

type ChannelId = (typeof channels)[number]["id"];

const channelIcons: Record<ChannelId, React.ReactNode> = {
  telegram: <Send className="h-3.5 w-3.5" />,
  max: <MessageCircle className="h-3.5 w-3.5" />,
  whatsapp: <Phone className="h-3.5 w-3.5" />,
  vk: <Users className="h-3.5 w-3.5" />,
  email: <Mail className="h-3.5 w-3.5" />,
};

const ContactModalContext = createContext<{ open: (subject?: string) => void }>({
  open: () => {},
});

export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [channel, setChannel] = useState<ChannelId>("telegram");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errorText, setErrorText] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  const open = useCallback((subject?: string) => {
    setIsOpen(true);
    setStatus("idle");
    setErrorText("");
    if (subject) setMessage(subject);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    nameRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setErrorText("Заполните имя и контакт");
      return;
    }
    const channelLabel = channels.find((c) => c.id === channel)?.label ?? channel;
    setStatus("submitting");
    setErrorText("");
    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact: `${channelLabel} — ${contact}`, message }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Форма заявки"
          >
<motion.div
            className="max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-t-3xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_0_var(--accent)] sm:max-h-[90vh] sm:rounded-3xl sm:p-8"
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-ink">
                    Заявка
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-heading">
                    Обсудим ваш проект?
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Закрыть"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-black bg-white text-lg font-bold text-heading transition-colors hover:bg-accent"
                >
                  ✕
                </button>
              </div>

              {status === "success" ? (
                <div className="mt-6 rounded-2xl border-2 border-black bg-accent p-6 text-center">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-ink">
                    ✓ Отправлено
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-accent-ink">
                    Заявка улетела в Telegram. Отвечу быстро — обычно в течение часа.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-5 rounded-full bg-accent-ink px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Закрыть
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="font-mono text-xs font-bold uppercase tracking-wider text-faint"
                    >
                      Имя
                    </label>
                    <input
                      ref={nameRef}
                      id="lead-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Как к вам обращаться"
                      className="mt-1.5 w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-semibold text-heading placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-contact"
                      className="font-mono text-xs font-bold uppercase tracking-wider text-faint"
                    >
Куда удобнее ответить?
                    </label>
                    <div className="mt-1.5 flex flex-wrap gap-2" role="radiogroup" aria-label="Куда удобнее ответить">
                      {channels.map((c) => (
<button
                            key={c.id}
                            type="button"
                            role="radio"
                            aria-checked={channel === c.id}
                            onClick={() => setChannel(c.id)}
                            className={`inline-flex items-center gap-1.5 rounded-full border-2 border-black px-4 py-2 text-sm font-semibold transition-colors ${
                              channel === c.id
                                ? "bg-accent-ink text-white"
                                : "bg-white text-heading hover:bg-accent"
                            }`}
                          >
                            <span className={channel === c.id ? "text-accent" : "text-accent-ink"}>
                              {channelIcons[c.id]}
                            </span>
                            {c.label}
                          </button>
                      ))}
                    </div>
                    <input
                      id="lead-contact"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={channels.find((c) => c.id === channel)?.placeholder}
                      className="mt-2.5 w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-semibold text-heading placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <p className="mt-1.5 text-xs text-faint">Связываюсь только в этих каналах — без звонков.</p>
                  </div>
                  <div>
                    <label
                      htmlFor="lead-message"
                      className="font-mono text-xs font-bold uppercase tracking-wider text-faint"
                    >
                      Расскажите о задаче
                    </label>
                    <textarea
                      id="lead-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Например: нужен интернет-магазин для бренда одежды…"
                      rows={3}
                      className="mt-1.5 w-full resize-none rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-semibold text-heading placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  {errorText ? (
                    <p className="text-sm font-semibold text-red-600">{errorText}</p>
                  ) : null}
                  {status === "error" ? (
                    <p className="text-sm font-semibold text-red-600">
                      Не получилось отправить. Напишите мне напрямую в Telegram.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-accent-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Отправляю…" : "Отправить заявку"}
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-line pt-4 text-xs font-semibold text-muted">
                    <a href={site.tg} target="_blank" rel="noopener" className="hover:text-heading">
                      {site.tgHandle}
                    </a>
                    <a href={site.max} target="_blank" rel="noopener" className="hover:text-heading">
                      Max
                    </a>
                    <a href={`mailto:${site.email}`} className="hover:text-heading">
                      {site.email}
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}