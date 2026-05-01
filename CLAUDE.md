# Claude Instructions — Dr. Mariana Neves Website

## Project Overview
A landing page website for Dr. Mariana Neves, a medical doctor specializing in cannabinoid/CBD treatments. Hosted on GitHub Pages, built with Astro. The goal is a single-page (or simple multi-section) site that converts visitors into consultation bookings.

## Context Folder
All research, copy drafts, doctor info, and design references live in:
`../_context/` (one level up from this site folder)

Always read that folder before making design or content decisions. Key subfolders:
- `market-research/` — competitor sites, market notes
- `target-clients/` — patient personas and motivations
- `doctor-info/` — Dr. Mariana's bio, credentials, services
- `design-inspiration/` — visual direction, palette, fonts
- `content-copy/` — actual text for the site

## Tech Stack
- **Framework**: Astro (currently installed)
- **Hosting**: GitHub Pages via GitHub Actions
- **Language**: TypeScript + Astro components
- **Styling**: TBD — likely Tailwind CSS (add if not present)

## Constraints & Rules
- This is a medical website. All copy must be factually accurate and not make unsubstantiated health claims.
- Legal disclaimers are required — cannabinoid medicine legality varies by country. Always include a note that consultations are subject to applicable local laws.
- No dark patterns. CTAs should be clear and honest.
- The site must be accessible (WCAG AA minimum): proper contrast, semantic HTML, alt text on all images.
- Keep it fast — this is a static site, keep bundle size minimal.
- Mobile-first design.

## Key Pages / Sections (landing page structure)
1. Hero — headline + subheadline + primary CTA ("Book a Consultation")
2. About Dr. Mariana — credibility + human story
3. What is cannabinoid medicine — brief explainer
4. Conditions treated — card or list format
5. How it works — 3-step process
6. FAQ — legality, safety, side effects
7. Contact / Booking — form or external scheduling link

## Development Workflow
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- GitHub Actions handles deployment to GitHub Pages on push to main

## Design Principles
- Trust and medical legitimacy are the primary conversion levers
- Tone: professional but warm — this is a doctor, not a wellness brand
- Avoid cannabis/marijuana leaf imagery — keep it clinical and clean
- Imagery: doctor in professional setting, calm patients, nature/plant macro if needed
