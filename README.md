# Lunox Services

Marketing site for Lunox Services — UPVC windows, doors, and home improvements for British homes across Scotland.

Visual direction inspired by [Origin Global](https://origin-global.com): Bodoni-style display type, Origin blue (`#023f87`), photography-led sections.

## What’s on the site

- **Windows:** casement, tilt & turn, sash (with samples)
- **Doors:** fire, composite, PVC, French, sliding, patio (with samples)
- **Home improvements:** flooring, tiling, cladding, conservatories, house extensions (with samples)
- Quote form → WhatsApp (`+44 7468 039026`) with all client details pre-filled

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Quote form → WhatsApp via `/api/quote` + `wa.me`

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

## Quote form → WhatsApp

When a client submits the form, the site opens WhatsApp to **+44 7468 039026** with their name, phone, email, postcode, interest, and project details already filled in. They tap **Send** to deliver the message.
