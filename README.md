# Clay on Campus

Landing page for **Clay on Campus** — UT Austin's first-ever GTM Ambassador Club, powered by [Clay](https://clay.com).

A single-page, fully responsive marketing site built with Next.js 14, TypeScript, and Tailwind CSS. Design takes cues from clay.com: a soft light-blue backdrop, rounded geometric type, claymation-inspired arches, and Clay's signature color palette with a UT burnt-orange accent.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Inter** via `next/font` (self-hosted, no layout shift)
- Scroll-reveal animations via a lightweight `IntersectionObserver` component (no animation library — keeps the bundle small for a 95+ Lighthouse score)

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx      Root layout, metadata, Inter font
  page.tsx        All page sections (single-page scroll)
  globals.css     Tailwind layers + scroll-reveal + reduced-motion
  icon.svg        Favicon (colored arch)
components/
  Nav.tsx         Sticky nav (wordmark + Apply CTA)
  Arches.tsx      Claymation-style stacked arches (SVG)
  Reveal.tsx      Scroll fade-in wrapper (IntersectionObserver)
tailwind.config.ts  Brand palette, shadows, animations
```

## Brand palette

| Token        | Hex       | Usage                              |
| ------------ | --------- | ---------------------------------- |
| `clay-bg`    | `#E8EEFB` | Light-blue page background         |
| `clay-sky`   | `#5FC3E7` | Sky blue                           |
| `clay-coral` | `#F26D6D` | Coral red — primary CTA            |
| `clay-yellow`| `#FFD84D` | Warm yellow                        |
| `clay-ut`    | `#BF5700` | UT burnt orange (used sparingly)   |
| `clay-ink`   | `#1A1A1A` | Near-black text                    |

## Things to swap before launch

- **Apply / interest-form links** — the nav `Apply` button, the hero `Apply to join` button, and the CTA `Fill out the interest form` button point at `#apply` / `#`. Replace with the Google Form URL.
- **Instagram link** — footer link points at `https://instagram.com`; swap in the real handle.
- **Contact email** — `clayoncampusut@gmail.com` is a placeholder.

## Deployment (Vercel)

The site deploys to Vercel with zero configuration.

```bash
# from the project root, first time (links / creates the project)
vercel

# deploy to production
vercel --prod
```

When prompted, name the project **`clay-on-campus`**. Vercel auto-detects Next.js — no build settings needed.

You can also connect the Git repo in the Vercel dashboard for automatic deploys on every push.

## Accessibility & performance

- Semantic landmarks (`header`, `main`, `footer`, `nav`), a single `h1`, and ordered heading hierarchy.
- `aria-label` on the primary nav; decorative SVGs marked `aria-hidden`.
- Visible focus rings on every interactive element.
- `prefers-reduced-motion` disables scroll animations and floating.
- Smooth scroll with `scroll-padding-top` so anchored sections clear the sticky nav.
