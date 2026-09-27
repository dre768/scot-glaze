"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [mockNote, setMockNote] = useState(false);

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

    if (!payload.name || !payload.phone || !payload.postcode) {
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
      const json = (await res.json()) as {
        error?: string;
        mock?: boolean;
      };

      if (!res.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setMockNote(Boolean(json.mock));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section id="quote" className="bg-midnight px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-lime uppercase">
            Free consultation
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mt-4 max-w-md text-white/75 md:text-lg">
            Tell us about your windows or doors and we’ll send your request
            straight to the Lunox team on Telegram — usually with a same-day
            callback.
          </p>
          <p className="mt-6 text-sm text-white/60">
            Prefer to talk now?{" "}
            <a href="tel:+441412000000" className="font-semibold text-lime hover:underline">
              0141 200 0000
            </a>
          </p>
        </Reveal>

        <Reveal delay={1}>
          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-3xl bg-white p-6 text-midnight shadow-[0_20px_50px_#00000033] md:p-8"
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
                  className="h-11 bg-smoke"
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
                  className="h-11 bg-smoke"
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
                  className="h-11 bg-smoke"
                />
              </Field>
              <Field id="postcode" label="Postcode" required>
                <Input
                  id="postcode"
                  name="postcode"
                  autoComplete="postal-code"
                  placeholder="G1 1AA"
                  required
                  className="h-11 bg-smoke"
                />
              </Field>
            </div>

            <Field id="interest" label="I’m interested in">
              <select
                id="interest"
                name="interest"
                defaultValue="Windows"
                className="h-11 w-full rounded-lg border border-input bg-smoke px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option>Windows</option>
                <option>Doors</option>
                <option>Windows & doors</option>
                <option>Not sure yet</option>
              </select>
            </Field>

            <Field id="details" label="Project details">
              <Textarea
                id="details"
                name="details"
                rows={4}
                placeholder="e.g. Replace three upstairs windows and the patio door"
                className="resize-y bg-smoke"
              />
            </Field>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                type="submit"
                disabled={status === "loading"}
                className="pill h-12 bg-lime px-6 text-base font-semibold text-midnight hover:bg-sky hover:text-white"
              >
                {status === "loading" ? "Sending…" : "Send my free quote"}
              </Button>
              {status === "success" && (
                <p className="text-sm text-sky" role="status">
                  {mockNote
                    ? "Received locally — add Telegram credentials to deliver to your bot."
                    : "Sent to Telegram. We’ll be in touch shortly."}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}
            </div>
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
      <Label htmlFor={id} className="text-midnight">
        {label}
        {required ? <span className="text-sky"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}
