# Prana Physio — Clinic Website

Premium physiotherapy, Pilates & acupuncture clinic website for Prana Physio, Vijay Nagar, Indore.

**Stack:** Next.js (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · lucide-react

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero config required.

## Structure

- `app/` — layout (fonts, metadata, LocalBusiness JSON-LD), page assembly, global styles & design tokens
- `components/` — one component per page section (announcement bar, nav, hero, testimonials, CTA, image cards, about, services, info cards, contact form, footer, accreditations, insurance row, shared scroll-reveal)
- `lib/content.ts` — all copy and data in one place; edit clinic details here
- `public/images/` — photography (Unsplash/Pexels, free licenses)

## Editing content

All clinic details (phone, email, address, testimonials, services, founder story) live in `lib/content.ts`. The contact form currently composes an email via `mailto:` — wire a backend route at `app/api/contact/route.ts` when ready.
