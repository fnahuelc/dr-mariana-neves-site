# dr-mariana-neves-site

Starter Astro para uma marca médica pessoal com foco em consulta online no Brasil.

## Stack

- Astro
- Site estático
- Deploy em GitHub Pages via GitHub Actions

## Estrutura

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

## Como rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalização rápida

- Atualize dados de marca, CRM, contatos e links em `src/data/site.ts`
- Substitua os placeholders de favicon e Open Graph em `public/`
- Insira o embed real do Typebot em `src/components/TypebotPlaceholder.astro`
- Revise o conteúdo legal em `src/pages/privacy-policy.astro` e `src/pages/terms.astro`
- Se o repositório ou usuário do GitHub mudarem, ajuste `astro.config.mjs`

## GitHub Pages

O workflow em `.github/workflows/deploy.yml` faz o build estático e publica a pasta `dist/` no GitHub Pages quando houver push para `main`.
