"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

type Msg = {
  id: string;
  role: "bot" | "user";
  text: string;
  suggestions?: string[];
  whatsappUrl?: string;
};

const welcome: Msg = {
  id: "welcome",
  role: "bot",
  text: `Hi — I’m the Lunox assistant. Ask about windows, doors, quotes, or coverage across Scotland. Available 24/7.\n\nFor a person, WhatsApp ${company.phoneDisplay}.`,
  suggestions: ["Windows", "Doors", "Get a free quote", "WhatsApp a person"],
};

export function ChatAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([welcome]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Msg = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const json = (await res.json()) as {
        error?: string;
        reply?: string;
        suggestions?: string[];
        whatsappUrl?: string;
      };

      if (!res.ok || !json.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: `e-${Date.now()}`,
            role: "bot",
            text:
              json.error ??
              `Something went wrong. Please WhatsApp us on ${company.phoneDisplay}.`,
            whatsappUrl: company.whatsapp,
          },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          role: "bot",
          text: json.reply,
          suggestions: json.suggestions,
          whatsappUrl: json.whatsappUrl,
        },
      ]);

      if (json.whatsappUrl && /whatsapp a person/i.test(trimmed)) {
        window.open(json.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `e-${Date.now()}`,
          role: "bot",
          text: `Network issue. Message us on WhatsApp: ${company.phoneDisplay}.`,
          whatsappUrl: company.whatsapp,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {open ? (
        <div
          className="flex h-[min(32rem,calc(100svh-6.5rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden border border-white/10 bg-[#1a2530] text-white shadow-[0_24px_80px_#00000066]"
          role="dialog"
          aria-label="Lunox chat assistant"
        >
          <header className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#121a22] px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wide">
                Lunox assistant
              </p>
              <p className="text-[11px] tracking-[0.14em] text-white/55 uppercase">
                Online · English · 24/7
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-8 place-items-center text-white/70 transition hover:text-white"
              aria-label="Close chat"
            >
              <span className="text-xl leading-none">×</span>
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex flex-col gap-2",
                  msg.role === "user" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[92%] whitespace-pre-wrap px-3.5 py-2.5 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-origin text-white"
                      : "bg-white/8 text-white/95"
                  )}
                >
                  {msg.text}
                </div>
                {msg.role === "bot" && msg.whatsappUrl ? (
                  <a
                    href={msg.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
                  >
                    <WhatsAppIcon className="size-3.5" />
                    Continue on WhatsApp
                  </a>
                ) : null}
                {msg.role === "bot" && msg.suggestions?.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {msg.suggestions.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        disabled={loading}
                        onClick={() => void send(chip)}
                        className="border border-white/20 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white/85 uppercase transition hover:border-white/50 hover:text-white disabled:opacity-50"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            {loading ? (
              <p className="text-xs tracking-wide text-white/45 uppercase">
                Typing…
              </p>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={onSubmit}
            className="flex gap-2 border-t border-white/10 bg-[#121a22] p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about windows, doors, quotes…"
              disabled={loading}
              className="h-11 flex-1 border border-white/15 bg-white/5 px-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-origin"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="origin-btn !px-4 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-origin px-4 py-3.5 text-sm font-semibold tracking-wide text-white uppercase shadow-[0_12px_40px_#023f8780] transition hover:brightness-110"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open Lunox assistant"}
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/70 opacity-60" />
          <span className="relative inline-flex size-2.5 rounded-full bg-white" />
        </span>
        {open ? "Close" : "Chat with us"}
      </button>
    </div>
  );
}
