"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { BrandMark } from "@/components/brand-logo";
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
  text: `Hello — thank you for contacting Lunox Services.\n\nHow can we help today? We can advise on windows, doors, home improvements, or arrange a free survey.`,
  suggestions: ["Windows", "Doors", "Free survey", "Message on WhatsApp"],
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
      const history = messages
        .filter((m) => m.id !== "welcome")
        .slice(-12)
        .map((m) => ({
          role: (m.role === "user" ? "user" : "assistant") as
            | "user"
            | "assistant",
          content: m.text,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
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
              `We’re sorry — something went wrong. Please reach us on WhatsApp at ${company.phoneDisplay}.`,
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

      if (
        json.whatsappUrl &&
        /whatsapp a person|message on whatsapp/i.test(trimmed)
      ) {
        window.open(json.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `e-${Date.now()}`,
          role: "bot",
          text: `We couldn’t send that just now. Please message us on WhatsApp: ${company.phoneDisplay}.`,
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
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-7 md:bottom-7">
      {open ? (
        <div
          className="flex h-[min(34rem,calc(100svh-7rem))] w-[min(23.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#d7e0ea] bg-[#f7f9fb] text-ink shadow-[0_28px_70px_rgba(18,36,56,0.22)]"
          role="dialog"
          aria-label="Lunox Services chat"
        >
          <header className="flex items-center justify-between gap-3 bg-gradient-to-br from-[#023f87] to-[#0a5699] px-4 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                <BrandMark className="size-6 text-white" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[15px] font-semibold tracking-wide">
                  Lunox Services
                </p>
                <p className="flex items-center gap-1.5 text-[12px] text-white/80">
                  <span className="size-1.5 rounded-full bg-[#7ddea3]" />
                  Here to help with your enquiry
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-8 place-items-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <span className="text-xl leading-none">×</span>
            </button>
          </header>

          <div className="flex-1 space-y-3.5 overflow-y-auto px-3.5 py-4">
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
                    "max-w-[90%] whitespace-pre-wrap px-3.5 py-2.5 text-[13.5px] leading-relaxed shadow-sm",
                    msg.role === "user"
                      ? "rounded-2xl rounded-br-md bg-origin text-white"
                      : "rounded-2xl rounded-bl-md border border-[#e4ebf2] bg-white text-[#2f3a42]"
                  )}
                >
                  {msg.text}
                </div>
                {msg.role === "bot" && msg.whatsappUrl ? (
                  <a
                    href={msg.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf8ef] px-3 py-1.5 text-xs font-semibold text-[#1f8f4c] transition hover:bg-[#dff3e6]"
                  >
                    <WhatsAppIcon className="size-3.5 text-[#25D366]" />
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
                        className="rounded-full border border-[#c9d7e6] bg-white px-3 py-1.5 text-xs font-medium text-origin transition hover:border-origin hover:bg-[#eef4fa] disabled:opacity-50"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            {loading ? (
              <p className="px-1 text-xs text-[#8a949c]">Lunox is typing…</p>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={onSubmit}
            className="border-t border-[#e4ebf2] bg-white p-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-[#d5dee8] bg-[#f7f9fb] px-2 py-1.5 focus-within:border-origin/50 focus-within:ring-2 focus-within:ring-origin/15">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                disabled={loading}
                className="h-9 flex-1 bg-transparent px-2.5 text-sm text-ink outline-none placeholder:text-[#9aa3ab]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-full bg-origin px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
              >
                Send
              </button>
            </div>
            <p className="mt-2 px-1 text-center text-[10px] text-[#9aa3ab]">
              Or WhatsApp {company.phoneDisplay}
            </p>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2.5 rounded-full bg-origin px-5 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_14px_36px_rgba(2,63,135,0.35)] transition hover:brightness-110"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open Lunox chat"}
      >
        {!open ? (
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/60 opacity-70" />
            <span className="relative inline-flex size-2.5 rounded-full bg-[#7ddea3]" />
          </span>
        ) : null}
        {open ? "Close" : "Can we help?"}
      </button>
    </div>
  );
}
