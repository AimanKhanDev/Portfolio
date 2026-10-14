# Portfolio — Aiman Khan

A premium, dark-first developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Motion (Framer Motion)**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build (type-checks + lints)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Structure

```
src/
├── app/
│   ├── globals.css      # design tokens, component/utility classes
│   ├── layout.tsx       # fonts, metadata/SEO
│   └── page.tsx         # page composition
├── components/
│   ├── Navbar / Hero / About / Skills
│   ├── Projects / ProjectCard / ProjectVisual
│   ├── GitHubSection / Journey / Contact / Footer
│   ├── Reveal           # scroll-reveal wrapper (motion)
│   ├── SectionHeading   # section heading + wrapper
│   └── icons.tsx        # inline SVG icons
└── data/
    ├── projects.ts      # featured + other projects, site info
    └── skills.ts        # grouped skill sets
```

## Notes

- All projects shown are real, public repositories from [github.com/AimanKhanDev](https://github.com/AimanKhanDev).
- Project visuals are CSS-crafted previews (no screenshots were available).
- Respects `prefers-reduced-motion` for both CSS and JS animations.
