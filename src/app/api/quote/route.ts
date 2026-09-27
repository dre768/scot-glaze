import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  postcode?: string;
  interest?: string;
  details?: string;
};

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
    "🪟 New Lunox quote request",
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

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.info("[quote] Telegram not configured. Mock delivery:\n", message);
    return NextResponse.json({
      ok: true,
      mock: true,
      message: "Quote received (Telegram not configured — mock mode).",
    });
  }

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
  const telegramRes = await fetch(telegramUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  if (!telegramRes.ok) {
    const errText = await telegramRes.text();
    console.error("[quote] Telegram error:", errText);
    return NextResponse.json(
      { error: "Could not deliver quote to Telegram." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
