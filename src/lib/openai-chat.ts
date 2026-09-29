import { company } from "@/lib/company";

export const LUNOX_SYSTEM_PROMPT = `You are the Lunox Services website assistant. Reply in clear British English. Be warm, concise, and professional — like a helpful Scottish home-improvement advisor, not a corporate robot.

About Lunox Services:
- UPVC windows: casement, tilt & turn, sash (A-rated)
- Doors: fire, composite, PVC, French, sliding/patio
- Home solar: system design / engineering, CAD drawings (roof plans, electrical schematics), 3D visualisation, survey, installation, switch-on
- Also: flooring, tiling, cladding, conservatories, house extensions
- Area: Scotland and across the UK by arrangement
- Free survey / free quote, no obligation
- WhatsApp / phone: ${company.phoneDisplay}
- Email: ${company.email}
- Quote form is on this website; WhatsApp is fastest for photos
- Solar page section: #solar (design, CAD, 3D, install)

Rules:
- Answer only about Lunox products, fitting, quotes, coverage, and process
- Never invent exact prices — always say pricing follows a free survey
- If the customer wants a person, or shares a concrete job, encourage WhatsApp ${company.phoneDisplay}
- Keep replies short (2–5 short paragraphs or bullets max)
- Do not mention you are ChatGPT / OpenAI unless asked
- If unsure, offer WhatsApp or the on-page quote form

Respond with ONLY valid JSON (no markdown fences):
{"reply":"string","suggestions":["up to 4 short chip labels"],"offerWhatsApp":true|false}`;

export type ChatHistoryItem = {
  role: "user" | "assistant";
  content: string;
};

export type OpenAIChatResult = {
  reply: string;
  suggestions?: string[];
  whatsappUrl?: string;
  provider: "openai" | "fallback";
};

function extractJsonObject(text: string): unknown {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(trimmed.slice(start, end + 1));
    }
    throw new Error("No JSON object in model response");
  }
}

export async function answerWithOpenAI(
  message: string,
  history: ChatHistoryItem[] = []
): Promise<OpenAIChatResult | null> {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) return null;

  const messages = [
    { role: "system" as const, content: LUNOX_SYSTEM_PROMPT },
    ...history.slice(-12).map((h) => ({
      role: h.role,
      content: h.content,
    })),
    { role: "user" as const, content: message },
  ];

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.4,
      messages,
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("[chat] OpenAI error:", res.status, errText.slice(0, 500));
    return null;
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const content = data.choices?.[0]?.message?.content;
  if (!content) return null;

  try {
    const parsed = extractJsonObject(content) as {
      reply?: string;
      suggestions?: string[];
      offerWhatsApp?: boolean;
    };
    const reply = String(parsed.reply ?? "").trim();
    if (!reply) return null;

    const suggestions = Array.isArray(parsed.suggestions)
      ? parsed.suggestions.map((s) => String(s).trim()).filter(Boolean).slice(0, 4)
      : undefined;

    return {
      reply,
      suggestions:
        suggestions && suggestions.length > 0
          ? suggestions
          : ["Free survey", "Message on WhatsApp", "Windows", "Doors"],
      whatsappUrl: parsed.offerWhatsApp ? company.whatsapp : undefined,
      provider: "openai",
    };
  } catch (err) {
    console.error("[chat] Failed to parse OpenAI JSON:", err);
    return {
      reply: content.trim(),
      suggestions: ["Free survey", "Message on WhatsApp"],
      whatsappUrl: company.whatsapp,
      provider: "openai",
    };
  }
}
