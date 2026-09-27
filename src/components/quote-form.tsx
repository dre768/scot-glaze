"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const postcode = String(data.get("postcode") ?? "").trim();

    if (!name || !phone || !postcode) {
      setStatus("error");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    form.reset();
  }

  return (
    <section id="quote" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        <div>
          <p className="text-sm tracking-[0.18em] text-primary uppercase">
            Free survey
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink text-balance md:text-5xl">
            Tell us about your home.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
            Share a few details and we will call back to arrange a no-obligation
            survey anywhere in Scotland. Prefer to talk now?{" "}
            <a
              href="tel:+441412000000"
              className="text-primary underline-offset-4 hover:underline"
            >
              0141 200 0000
            </a>
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-5 border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12"
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
                className="h-11 bg-card"
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
                className="h-11 bg-card"
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
                className="h-11 bg-card"
              />
            </Field>
            <Field id="postcode" label="Postcode" required>
              <Input
                id="postcode"
                name="postcode"
                autoComplete="postal-code"
                placeholder="G1 1AA"
                required
                className="h-11 bg-card"
              />
            </Field>
          </div>

          <Field id="details" label="What do you need?">
            <Textarea
              id="details"
              name="details"
              rows={4}
              placeholder="e.g. Replace three upstairs windows and the patio door"
              className="resize-y bg-card"
            />
          </Field>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="h-12 rounded-md px-6 text-base"
            >
              {status === "loading" ? "Sending…" : "Request a free survey"}
            </Button>
            {status === "success" && (
              <p className="text-sm text-primary" role="status">
                Thanks — we will be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive" role="alert">
                Please add your name, phone, and postcode.
              </p>
            )}
          </div>
        </form>
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
      <Label htmlFor={id} className="text-foreground">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}
