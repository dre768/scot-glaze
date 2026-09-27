# Lunox Services

Marketing site for Lunox Services — UPVC windows and doors installed for homeowners across Scotland.

Inspired by the structure and motion language of [Cléra Windows](https://www.clerawindows.com/) (navy / lime / sky palette, pill CTAs, scroll reveals, product + social-proof sections).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Quote form → Telegram Bot API (`/api/quote`)

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

## Telegram quotes

1. Create a bot with [@BotFather](https://t.me/BotFather) and copy the token.
2. Message the bot, then get your chat id (e.g. via `@userinfobot` or the Telegram `getUpdates` API).
3. Set in `.env.local`:

```bash
TELEGRAM_BOT_TOKEN=123456:ABC...
TELEGRAM_CHAT_ID=123456789
```

Without these variables the form still works in **mock mode** (request is logged server-side and marked as mock in the UI).

## Sections

- Hero with brand-forward pitch
- UPVC window types
- Door types
- About Lunox
- Work gallery
- Customer reviews carousel
- Why choose us
- Free quote form → Telegram
