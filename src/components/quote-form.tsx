"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { company } from "@/lib/company";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [mockNote, setMockNote] = useState(false);
  const [invalid, setInvalid] = useState({
    name: false,
    phone: false,
    postcode: false,
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    setMockNote(false);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      postcode: String(data.get("postcode") ?? "").trim(),
      interest: String(data.get("interest") ?? "").trim(),
      details: String(data.get("details") ?? "").trim(),
    };

    const nextInvalid = {
      name: !payload.name,
      phone: !payload.phone,
      postcode: !payload.postcode,
    };
    setInvalid(nextInvalid);

    if (nextInvalid.name || nextInvalid.phone || nextInvalid.postcode) {
      setStatus("error");
      setError("Please add your name, phone, and postcode.");
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { error?: string; mock?: boolean };

      if (!res.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setMockNote(Boolean(json.mock));
      setStatus("success");
      setInvalid({ name: false, phone: false, postcode: false });
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section id="quote" className="bg-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            Free consultation
          </p>
          <h2 className="mt-4 font-display-italic text-4xl text-black md:text-5xl lg:text-6xl">
            Tell us what you need — get a free quote today.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground md:text-lg">
            Share a few details and we’ll follow up quickly. Or message us on
            WhatsApp if you prefer a faster chat.
          </p>
          <p className="mt-6">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-origin hover:underline"
            >
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              WhatsApp {company.phoneDisplay}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="space-y-5 bg-white p-6 shadow-[0_12px_40px_#0000000d] md:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name" required>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Jordan MacLeod"
                  required
                  aria-invalid={invalid.name || undefined}
                  className="h-11 rounded-none bg-mist"
                />
              </Field>
              <Field id="phone" label="Phone" required>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="07xxx xxx xxx"
                  required
                  aria-invalid={invalid.phone || undefined}
                  className="h-11 rounded-none bg-mist"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="email" label="Email">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="h-11 rounded-none bg-mist"
                />
              </Field>
              <Field id="postcode" label="Postcode" required>
                <Input
                  id="postcode"
                  name="postcode"
                  autoComplete="postal-code"
                  placeholder="G1 1AA"
                  required
                  aria-invalid={invalid.postcode || undefined}
                  className="h-11 rounded-none bg-mist"
                />
              </Field>
            </div>

            <Field id="interest" label="I’m interested in">
              <select
                id="interest"
                name="interest"
                defaultValue="Windows"
                className="h-11 w-full rounded-none border border-input bg-mist px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option>Windows</option>
                <option>Doors</option>
                <option>Windows & doors</option>
                <option>Flooring</option>
                <option>Tiling</option>
                <option>Cladding</option>
                <option>Conservatory</option>
                <option>House extension</option>
                <option>Not sure yet</option>
              </select>
            </Field>

            <Field id="details" label="Project details">
              <Textarea
                id="details"
                name="details"
                rows={4}
                placeholder="e.g. Replace three upstairs windows and the patio door"
                className="resize-y rounded-none bg-mist"
              />
            </Field>

            {status === "error" ? (
              <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
                {error}
              </p>
            ) : null}

            {status === "success" ? (
              <p className="border border-secondary bg-secondary/40 px-4 py-3 text-sm font-medium text-origin" role="status">
                {mockNote
                  ? "Quote received. Add Telegram credentials in .env.local to deliver to your bot."
                  : "Sent to Telegram. We’ll be in touch shortly."}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="origin-btn origin-btn-dark w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Sending…" : "Send my free quote"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-ink">
        {label}
        {required ? <span className="text-origin"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}
