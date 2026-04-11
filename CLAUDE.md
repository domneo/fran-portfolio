# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A portfolio website built with Next.js 15 + TinaCMS + TypeScript. Content is managed via TinaCMS and stored as MDX files in `/content`. All pages are statically generated at build time. Deployed on Vercel.

## Commands

```bash
pnpm dev              # Start dev server (TinaCMS + Next.js) at localhost:3000
pnpm build            # Build for production (tinacms build && next build)
pnpm lint             # Run Next.js ESLint
pnpm prettier         # Format all files with Prettier
```

Pre-commit hook (Husky) automatically runs `pretty-quick --staged` on commit.

## Architecture

**Content flow:** TinaCMS UI → MDX files in `/content` → queried at build time via `GetStaticProps` → rendered by React components.

**Key layers:**

- **Pages** (`/pages`): Next.js file-based routing with `GetStaticProps`/`GetStaticPaths`. Dynamic routes: `/castlery/[slug]` and `/st-dsta/[slug]`.
- **TinaCMS schema** (`/tina/config.ts`): Defines collections (global, home, works, works_posts, caseStudies, caseStudies_posts) and block templates (Spacer, Divider, Banner, ImageSlider, TwoColumn, ThreeColumn, Section, etc.).
- **Components** (`/components`): Block-based — each Tina template maps to a component in `/components/common`. Pages compose these blocks from CMS data via `TinaMarkdown`.
- **Layout** (`/components/Layout.tsx`): Wraps all pages; receives global data (menu, footer, metadata) from `content/global/global.mdx`.
- **Password protection**: `next-password-protect` HOC applied in `_app.tsx`, controlled by `PASSWORD_PROTECT` env var.

**Content structure:** Pages → Tabs → Sections (with anchor IDs) → Blocks (flexible layouts).

## Styling

- SCSS Modules (`.module.scss`) for component-scoped styles
- Bootstrap 5 SCSS utilities for grid/responsive (custom breakpoints in `_variables.scss`)
- CSS custom properties in `:root` for color tokens (`--black`, `--bone`, `--rosetaupe`, etc.)
- Custom Ogg font family loaded via `@font-face` in `globals.scss`
- RFS (responsive font scaling) via `_rfs.scss`

## TinaCMS

- Auto-generated types in `/tina/__generated__/` — do not edit manually
- Content queries use the generated client from `tina/__generated__/client`
- `useTina` hook enables live visual editing
- Images hosted on Tina Cloud (`assets.tina.io`)
- Requires `TINA_TOKEN` and `TINA_CLIENT_ID` in `.env.local`

## Animation & Interactive

- GSAP for motion/scroll animations
- React Slick for carousels (`ImageSlider`)
- SVG wireframe components with `foreignObject` for HTML-in-SVG patterns
