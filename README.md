# Harshit Kumar Shrivastava — Developer Portfolio

A single-page developer portfolio built with **Vue 3 (Composition API, `<script setup>`)**, **Vite**, and **Tailwind CSS**. Design language: *Enterprise Minimal* — hairline borders, generous whitespace, indigo accent, light/dark mode.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
src/
  App.vue                 # Shell: sticky nav, dark-mode toggle, footer
  main.js                 # App entry
  style.css               # Tailwind directives + base resets
  data/portfolio.js       # Single source of truth for ALL content
  components/
    HeroSection.vue       # Name, status badge, value prop, CTAs
    ExperienceTimeline.vue # Vertical timeline + education
    ProjectGrid.vue       # Reactive category filtering (computed)
    SkillsMatrix.vue      # Semantic skill badge grids
public/
  HarshitKumarShrivastava_Resume.pdf  # Wired to the Download button
```

## Editing content

All copy lives in `src/data/portfolio.js`. Update arrays there — components are driven entirely by that data.

## Things to swap before going live

- The project/publication links currently point to your GitHub profile. Replace each `href` in `projects[].links` with the real repo or publication URL.
- Update the `linkedinHandle` / `githubHandle` display strings if you prefer different labels.

## Notes

- Dark mode uses Tailwind's `class` strategy and persists via `localStorage`, defaulting to system preference.
- Fonts: **Inter** (sans) + **Fira Code** (mono), loaded from Google Fonts in `index.html`.
- `prefers-reduced-motion` is respected; focus states are visible for keyboard users.
