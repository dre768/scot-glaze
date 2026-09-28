import { NextResponse } from "next/server";
import { company } from "@/lib/company";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  postcode?: string;
  interest?: string;
  details?: string;
};

const WHATSAPP_NUMBER = company.phoneTel.replace(/\D/g, "");

export async function POST(request: Request) {
  let body: QuotePayload;

  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const postcode = String(body.postcode ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const details = String(body.details ?? "").trim();

  if (!name || !phone || !postcode) {
    return NextResponse.json(
      { error: "Name, phone, and postcode are required." },
      { status: 400 }
    );
  }

  const message = [
    "New Lunox quote request",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Postcode: ${postcode}`,
    interest ? `Interest: ${interest}` : null,
    details ? `Details: ${details}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  console.info("[quote] WhatsApp handoff prepared for", WHATSAPP_NUMBER);

  return NextResponse.json({
    ok: true,
    whatsappUrl,
  });
}
