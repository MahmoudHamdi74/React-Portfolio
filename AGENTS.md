# AGENTS.md — Assistant instructions for this repo

Purpose
- Short guidance for AI coding agents to be productive in this repository.

How to run
- Dev: `npm run dev` (vite)
- Build: `npm run build` (vite build)
- Preview: `npm run preview` (vite preview)
- Lint: `npm run lint` (eslint .)

Key files & locations
- Entry: `src/main.jsx`, `src/App.jsx`
- Pages: `src/lib/Pages/`
- Components: `src/components/`
- Routes: `src/routes/index.jsx`
- Styles: `src/index.css`, `tailwind.config.js`, `postcss.config.cjs`
- Public assets: `public/`
- Content/data: `src/content/`

Tech stack & conventions
- Vite + React (SWC plugin configured in `package.json`)
- Tailwind CSS + PostCSS; prefer utility-first classes and small, reusable components
- ESLint is configured; run `npm run lint` before proposing style changes
- No tests present; run `npm run build` to verify production build

Agent behavior guidance
- Link, don't copy: reference existing docs (see README.md) instead of embedding large sections
- Small, focused changes: prefer separate PRs for feature/fix and style updates
- Always run `npm run build` locally (or in CI) before suggesting production changes
- Do not commit `dist/` or other generated assets

Links
- Main README: ./README.md
- package.json scripts: ./package.json

Next suggestions
- Add a short `.github/copilot-instructions.md` or expand this file with per-area instructions (frontend, content).
- Create automated checks (lint + build) in CI and document them here.

