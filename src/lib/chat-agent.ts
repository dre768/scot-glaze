import { company } from "@/lib/company";

export type ChatReply = {
  reply: string;
  suggestions?: string[];
  whatsappUrl?: string;
};

type Intent = {
  id: string;
  patterns: RegExp[];
  reply: string;
  suggestions?: string[];
  offerWhatsApp?: boolean;
};

const wa = company.whatsapp;

const intents: Intent[] = [
  {
    id: "greeting",
    patterns: [
      /^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy)\b/i,
      /\b(hi there|hello there)\b/i,
    ],
    reply: `Hello — thank you for contacting Lunox Services. We can help with UPVC windows, doors, home improvements, and free survey requests across Scotland.\n\nWhat would you like to know?`,
    suggestions: ["Windows", "Doors", "Free survey", "Message on WhatsApp"],
  },
  {
    id: "thanks",
    patterns: [/\b(thanks|thank you|cheers|appreciate)\b/i],
    reply: `You're welcome. If you'd like a free survey or quote, we can continue on WhatsApp or via the form on this page.`,
    suggestions: ["Free survey", "Message on WhatsApp"],
  },
  {
    id: "windows",
    patterns: [
      /\bwindows?\b/i,
      /\b(casement|tilt[\s-]?and[\s-]?turn|sash|double[\s-]?glaz|upvc)\b/i,
      /\breplac(e|ing).{0,20}window/i,
    ],
    reply: `We supply and fit A-rated UPVC windows for British homes, including:\n\n• Casement\n• Tilt & turn\n• Sash\n\nWe offer a free survey across Scotland. Many homeowners choose Lunox to reduce draughts, lower bills, and quieten street noise.\n\nWould you like to arrange a free quote? Share your postcode on the form, or WhatsApp us photos of your openings.`,
    suggestions: ["Free survey", "Doors", "How does it work?", "Message on WhatsApp"],
    offerWhatsApp: true,
  },
  {
    id: "doors",
    patterns: [
      /\bdoors?\b/i,
      /\b(composite|french|patio|sliding|fire\s*door|front\s*door)\b/i,
    ],
    reply: `Our door range includes:\n\n• Fire doors\n• Composite doors\n• PVC doors\n• French doors\n• Sliding / patio doors\n\nMeasured, supplied, and fitted by one team. Tell us the style you need, or arrange a free quote.`,
    suggestions: ["Composite doors", "Patio doors", "Free survey", "Message on WhatsApp"],
    offerWhatsApp: true,
  },
  {
    id: "improvements",
    patterns: [
      /\b(flooring|tiling|tiles?|cladding|conservator|extension|home\s*improve)\b/i,
    ],
    reply: `Beyond windows and doors, Lunox also handles:\n\n• Flooring\n• Tiling\n• Cladding\n• Conservatories\n• House extensions\n\nThe same survey-to-fit service across Scotland. We're happy to take details for a free consultation.`,
    suggestions: ["Free survey", "Message on WhatsApp", "Where do you cover?"],
    offerWhatsApp: true,
  },
  {
    id: "price",
    patterns: [
      /\b(price|pricing|cost|how\s*much|quote|estimate|cheap|afford|budget)\b/i,
      /\bfree\s*(quote|survey|consultation)\b/i,
    ],
    reply: `Every home is different, so we price after a free survey — with no obligation.\n\nThe quickest options:\n1. Complete the quote form on this page\n2. WhatsApp us on ${company.phoneDisplay} with your postcode and a few photos\n\nWe'll follow up promptly with next steps.`,
    suggestions: ["Open quote form", "Message on WhatsApp", "How does it work?"],
    offerWhatsApp: true,
  },
  {
    id: "area",
    patterns: [
      /\b(where|area|cover|scotland|glasgow|edinburgh|aberdeen|dundee|inverness|travel|location|postcode)\b/i,
      /\bdo you (work|fit|install|cover)\b/i,
    ],
    reply: `We survey and fit for homeowners across Scotland, and wider UK jobs by arrangement.\n\nShare your postcode and we'll confirm availability for a free survey.`,
    suggestions: ["Free survey", "Message on WhatsApp"],
    offerWhatsApp: true,
  },
  {
    id: "process",
    patterns: [
      /\b(how (does|do) (it|you)|process|steps?|timeline|how long|install|fitting|survey)\b/i,
      /\bhow to buy\b/i,
    ],
    reply: `Getting fitted products from Lunox is straightforward:\n\n1. Free consultation / survey\n2. Spec & quote\n3. Manufacture\n4. Professional fitting\n\nMost window and door projects begin with a WhatsApp message or the online quote form.`,
    suggestions: ["Free survey", "Message on WhatsApp", "Windows"],
  },
  {
    id: "hours",
    patterns: [
      /\b(hours?|open|when.*available|24\s*\/?\s*7|weekend|evening)\b/i,
    ],
    reply: `You can leave a message here anytime.\n\nOur team replies on WhatsApp during working hours — message ${company.phoneDisplay} and we'll get back to you as soon as we can.`,
    suggestions: ["Message on WhatsApp", "Free survey"],
    offerWhatsApp: true,
  },
  {
    id: "contact",
    patterns: [
      /\b(contact|phone|call|email|whatsapp|speak|human|person|manager|real\s*person)\b/i,
      /\btalk to (someone|a person|you)\b/i,
    ],
    reply: `You can reach Lunox Services here:\n\n• WhatsApp / phone: ${company.phoneDisplay}\n• Email: ${company.email}\n\nWhatsApp is usually the fastest way to share photos and arrange a quote.`,
    suggestions: ["Message on WhatsApp", "Free survey"],
    offerWhatsApp: true,
  },
  {
    id: "materials",
    patterns: [
      /\b(a-?rated|energy|u-?value|secure|security|guarantee|warranty|quality|brand)\b/i,
    ],
    reply: `We fit modern A-rated UPVC systems chosen for warmth, security, and a clean finish on British homes. Exact specifications are confirmed at survey so the units suit your property and exposure.\n\nAsk for a free survey and we'll recommend the right options.`,
    suggestions: ["Free survey", "Windows", "Message on WhatsApp"],
    offerWhatsApp: true,
  },
  {
    id: "about",
    patterns: [/\b(who are you|about (lunox|you)|your company)\b/i],
    reply: `${company.name} is a Scottish home-improvement company specialising in UPVC windows and doors, plus flooring, tiling, cladding, conservatories, and house extensions — fitted for British homes across Scotland.`,
    suggestions: ["Windows", "Doors", "Free survey"],
  },
];

const defaultReply: ChatReply = {
  reply: `We can help with windows, doors, home improvements, pricing, coverage, and how our survey works.\n\nOr message the team directly on WhatsApp — ${company.phoneDisplay}.`,
  suggestions: ["Windows", "Doors", "Free survey", "Message on WhatsApp"],
  whatsappUrl: wa,
};

function scoreIntent(text: string, intent: Intent): number {
  let score = 0;
  for (const pattern of intent.patterns) {
    if (pattern.test(text)) score += 1;
  }
  return score;
}

export function answerCustomerMessage(raw: string): ChatReply {
  const text = raw.trim().replace(/\s+/g, " ");
  if (!text) {
    return {
      reply: `Please type a short question — for example “Do you fit casement windows in Glasgow?”`,
      suggestions: ["Windows", "Doors", "Get a free quote"],
    };
  }

  // Special shortcuts from suggestion chips
  const lower = text.toLowerCase();
  if (lower === "whatsapp a person" || lower === "message on whatsapp") {
    return {
      reply: `We’ll open WhatsApp to ${company.phoneDisplay}. Please share your postcode and a short note about the work — our team will reply as soon as they can.`,
      whatsappUrl: `${wa}?text=${encodeURIComponent("Hi Lunox, I’d like a free quote.")}`,
      suggestions: ["Free survey", "Windows"],
    };
  }
  if (
    lower === "open quote form" ||
    lower === "get a free quote" ||
    lower === "free survey"
  ) {
    return {
      reply: `Please use the quote form on this page (“Tell us what you need”), or WhatsApp us if you’d prefer to share photos.`,
      suggestions: ["Message on WhatsApp", "How does it work?"],
      whatsappUrl: wa,
    };
  }

  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    const score = scoreIntent(text, intent);
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }

  if (!best || bestScore === 0) {
    return defaultReply;
  }

  return {
    reply: best.reply,
    suggestions: best.suggestions,
    whatsappUrl: best.offerWhatsApp ? wa : undefined,
  };
}
