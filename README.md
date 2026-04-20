# dr-mariana-neves-site

Astro starter for a premium personal doctor brand focused on online consultations in Brazil.

## Stack

- Astro
- Static site
- GitHub Pages deployment via GitHub Actions

## Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── og-placeholder.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Quick customization

- Update brand data, CRM, contact details, and links in `src/data/site.ts`
- Replace the favicon and Open Graph placeholders in `public/`
- Insert the real Typebot embed in `src/components/TypebotPlaceholder.astro`
- Review the legal content in `src/pages/privacy-policy.astro` and `src/pages/terms.astro`
- If the repository name or GitHub username changes, update `astro.config.mjs`

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the static site and publishes the `dist/` folder to GitHub Pages on pushes to `main`.
