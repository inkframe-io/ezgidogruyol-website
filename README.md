# Personal Portfolio — Ezgi Doğruyol

One-page portfolio for Ezgi Doğruyol, a mobile-games Product Manager. Pure-white,
type-led design (in the lineage of tally.so / cal.com / excalidraw). Bilingual
(EN / TR), no CMS — every string lives in one typed file (`src/content.ts`).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config`)
- CSS keyframe entrance animations — respect `prefers-reduced-motion`
- **sonner** — the "email copied" toast
- **lucide-react** — icons; **next/image** — character / doodle / line art
- Fonts: **Geist** + **Geist Mono** via `next/font` (self-hosted, zero network)
- Light theme only

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run start      # serve the build
npm run lint       # eslint
npx tsc --noEmit   # typecheck
```

Runs with zero edits — it ships with realistic placeholder content.

## Edit the content

**Everything editable is in [`src/content.ts`](src/content.ts).** No other file
needs touching for a content change.

- Two locales: `en` and `tr`. They must keep the **same shape** — if you add a
  timeline entry or a skill to one, add it to the other.
- Every string is preceded by a `// GUIDE:` comment describing what belongs there.
- Placeholder studios (`Northlight Games`, `Harbor & Pike Studio`,
  `Meridian Interactive`) and all metrics are invented. Replace them. Keep impact
  bullets in the "strong verb + a number" style.
- Section count is flexible where it's an array (`work.featured`,
  `work.timeline`, `beyond.items`, `skills.groups`, `references.items`) — copy a
  block, keep the keys.

The TypeScript `SiteContent` interface at the top of the file is the contract; if
`npx tsc --noEmit` passes, both locales are structurally complete.

## Swap the CV

Replace **`public/cv.pdf`** with your own file (keep the name). The "Download CV"
buttons in the nav, hero, and footer all point at `meta.cvPath` in `content.ts` —
change that path if you rename the file.

## Change the two accent colors

Both accents are CSS custom properties in
[`src/app/globals.css`](src/app/globals.css), inside the `@theme` block:

```css
@theme {
  --color-accent-pink: #e5006e;   /* section index, icons, squiggle, markers */
  --color-accent-blue: #2563eb;   /* links, primary CTA, arrow doodle */
}
```

Edit those two values — nothing else references raw hex. Tailwind regenerates the
`text-accent-pink` / `bg-accent-blue` / `border-accent-*` utilities automatically.

## Structure

```
src/
  app/
    layout.tsx            # fonts, metadata, <LocaleProvider>, skip-link, <Toaster>
    page.tsx              # section order
    globals.css           # design tokens + base styles
  content.ts              # ← all copy, both locales, GUIDE comments
  lib/
    locale-context.tsx    # EN/TR store (localStorage, useSyncExternalStore)
    motion.ts             # shared entrance variants
    utils.ts              # cn()
  components/
    nav.tsx               # sticky nav, IntersectionObserver active state, mobile menu
    section-heading.tsx   # "01 — ABOUT" eyebrow + heading
    card.tsx              # hairline rounded card with accent icon
    doodle.tsx            # <Squiggle> + <Arrow> hand-drawn SVGs
    reveal.tsx            # entrance-animation wrappers (reduced-motion aware)
    ui/                    # button, sonner
    sections/             # hero, about, work, beyond, skills, references, footer
public/
  cv.pdf                  # ← replace with your CV
```

## Accessibility

- Landmarks: `<header>` / `<main>` / `<footer>`; every section is
  `aria-labelledby` its heading.
- Skip-to-content link, visible on focus.
- Global `:focus-visible` ring (accent-blue).
- All external links use `target="_blank" rel="noopener noreferrer"`.
- Icon-only controls have `aria-label`; decorative marks are `aria-hidden`.
- Body text `#525252` on `#FFFFFF` is AA (7.4:1); accent-blue links are AA.

## Deploy to Vercel

1. Push this repo to GitHub / GitLab / Bitbucket.
2. In [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset **Next.js** is auto-detected. No env vars, no build config.
4. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

Set `meta.siteUrl` in `content.ts` to your production URL so canonical / OG tags
are correct.

## License

MIT — do what you like with it.
# ezgidogruyol-website
