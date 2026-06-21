# kartik199.github.io

Personal portfolio site for Kartikeyan Sundaresan, a Backend Engineer specialising in distributed systems and event-driven architecture.

Live at: **https://kartik199.github.io**

---

## Tech Stack

- **Vite 6** + **React 19**
- **Tailwind CSS v4** (CSS-first config, no tailwind.config.js)
- **Lucide React** for icons
- **Google Fonts**: Inter (body), JetBrains Mono (terminal)

---

## Features

- Terminal hero with typewriter animation
- Cursor spotlight glow (dark mode)
- Sticky navbar with scroll-spy and active section highlighting
- Dark / light mode toggle with system preference detection
- Scroll-reveal animations on all sections
- Fully mobile responsive

---

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

---

## Project Structure

```
src/
  components/     # All UI components (Hero, Navbar, Projects, etc.)
  data/
    resume.js     # Single source of truth for all content
  hooks/          # useTheme, useScrollSpy, useScrollReveal
  index.css       # Tailwind import + CSS custom properties
public/
  favicon.svg
  resume.pdf
.github/
  workflows/
    deploy.yml    # Build and deploy to GitHub Pages on push to main
```

---

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`.
The workflow runs `npm run build` and publishes the `dist/` output via the GitHub Pages Actions deployment.

GitHub Pages is configured to use **GitHub Actions** as the source (Settings > Pages > Source).

---

## Content

All text content (experience, projects, skills, education) lives in `src/data/resume.js`.
To update any section, edit that file only.
