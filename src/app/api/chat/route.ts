import { NextResponse } from "next/server";
import { answerCustomerMessage } from "@/lib/chat-agent";
import {
  answerWithOpenAI,
  type ChatHistoryItem,
} from "@/lib/openai-chat";
import { company } from "@/lib/company";

type Body = {
  message?: string;
  history?: ChatHistoryItem[];
};

export async function POST(request: Request) {
  let body: Body;

  try {
    body = (await request.json()) as Body;
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

  const history = Array.isArray(body.history)
    ? body.history
        .filter(
          (h) =>
            h &&
            (h.role === "user" || h.role === "assistant") &&
            typeof h.content === "string"
        )
        .map((h) => ({
          role: h.role,
          content: h.content.slice(0, 2000),
        }))
        .slice(-12)
    : [];

  // Quick path for WhatsApp handoff chip
  if (/^whatsapp a person$/i.test(message)) {
    return NextResponse.json({
      ok: true,
      provider: "local",
      reply: `Opening WhatsApp to ${company.phoneDisplay}. Send your postcode and a quick note about the job — the team will reply as soon as they can.`,
      suggestions: ["Get a free quote", "Windows"],
      whatsappUrl: `${company.whatsapp}?text=${encodeURIComponent("Hi Lunox, I’d like a free quote.")}`,
    });
  }

  try {
    const ai = await answerWithOpenAI(message, history);
    if (ai) {
      return NextResponse.json({ ok: true, ...ai });
    }
  } catch (err) {
    console.error("[chat] OpenAI threw:", err);
  }

  const fallback = answerCustomerMessage(message);
  return NextResponse.json({
    ok: true,
    provider: "fallback",
    ...fallback,
  });
}
