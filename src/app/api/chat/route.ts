import { NextResponse } from "next/server";
import { answerCustomerMessage } from "@/lib/chat-agent";

export async function POST(request: Request) {
  let body: { message?: string };

  try {
    body = (await request.json()) as { message?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const message = String(body.message ?? "").trim();
  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }
  if (message.length > 1000) {
    return NextResponse.json(
      { error: "Please keep messages under 1000 characters." },
      { status: 400 }
    );
  }

  // Small pause so the UI feels like a live assistant
  await new Promise((r) => setTimeout(r, 350 + Math.random() * 400));

  const result = answerCustomerMessage(message);
  return NextResponse.json({ ok: true, ...result });
}
