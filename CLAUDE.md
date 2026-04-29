# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for the Interactive Intelligence research group at UW, built with **Astro 6** + **Starlight 0.38**. Deployed to GitHub Pages at https://research.uw-i2.org.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview built site
```

No lint or test scripts are configured — the project uses Prettier for formatting only.

## Architecture

### Content

All documentation lives in `src/content/docs/` as Markdown/MDX files. Starlight auto-generates sidebar navigation from the directory structure. Frontmatter fields (`title`, `description`, `draft`) drive sidebar labels and metadata.

Sections:
- `getting-started/` — explicit sidebar items (configured in `astro.config.mjs`)
- `ai/`, `neuroscience/`, `intersection/` — auto-generated sidebar groups

KaTeX math rendering is enabled via `remark-math` + `rehype-katex`. Use `$...$` for inline math and `$$...$$` for block math.

### Custom Components

Located in `src/components/`:
- **Hero.astro** — overrides Starlight's default homepage hero (registered in `astro.config.mjs` under `components`)
- **FlowchartDiagram.astro** — animated SVG flowchart used on the homepage; collapses to single-column on mobile
- **TopicCard.astro** — card with icon, color rotation (orange/purple/green/red), hover lift
- **UrlBadge.astro** — inline URL citation badge

### Styling

`src/styles/custom.css` defines the full theme using Starlight CSS custom properties. Accent color is `#cc88ff` (dark) / `#744bc5` (light). Animations include border spin, entrance fade, icon bounce, and arrow flow.

### Configuration

`astro.config.mjs` is the single source of truth for:
- Site URL and base path
- Starlight sidebar structure
- Custom component overrides
- KaTeX remark/rehype plugin chain
- Custom CSS injection (KaTeX + custom.css)

### Deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which builds via `withastro/action@v6` and deploys to GitHub Pages automatically.
