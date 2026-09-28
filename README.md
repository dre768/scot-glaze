# Lunox Services

Marketing site for Lunox Services — UPVC windows, doors, and home improvements for British homes across Scotland.

Visual direction inspired by [Origin Global](https://origin-global.com): Bodoni-style display type, Origin blue (`#023f87`), photography-led sections.

## What’s on the site

- **Windows:** casement, tilt & turn, sash (with samples)
- **Doors:** fire, composite, PVC, French, sliding, patio (with samples)
- **Home improvements:** flooring, tiling, cladding, conservatories, house extensions (with samples)
- Quote form → Telegram Bot API

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

```bash
TELEGRAM_BOT_TOKEN=123456:ABC...
TELEGRAM_CHAT_ID=123456789
```

Without these variables the form works in mock mode.
