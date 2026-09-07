# Ayush Alag — personal website

A minimal personal home built with React, TypeScript, Vite, and Tailwind CSS.

## Develop

```sh
npm ci
npm run dev
```

## Content

- `src/content.ts`: personal links and entries for work, writing, and news.
- `src/App.tsx`: introduction and biography.
- `src/index.css`: design, responsive layout, and interaction states.
- `public/profile.jpg`: portrait.
- `index.html`: search and sharing metadata.

Writing and news sections stay hidden until entries are added. Their navigation links and section numbers update automatically. See [HOW-TO-UPDATE.md](HOW-TO-UPDATE.md) for the entry format.

## Check

```sh
npm run build
npm run lint
npm run preview
```

## Publishing

The existing GitHub Actions workflow deploys pushes to `main` to GitHub Pages at `www.ayushalag.com`. Work on a separate branch to review changes before merging.

The `.openai/hosting.json` configuration identifies a separate private Sites review deployment. It does not change the GitHub Pages domain or deployment workflow.
