# I2 Research Guide

A knowledge base for the Interactive Intelligence research group, built with [Astro Starlight](https://starlight.astro.build/).

---

## Adding a New Page (No Coding Required)

All content lives in the `src/content/docs/` folder. Pages are plain text files written in [Markdown](https://www.markdownguide.org/cheat-sheet/) — the same format used in Notion, GitHub, and many note-taking apps.

### Step 1 — Pick the right folder

The docs folder has four sections:

| Folder | What goes here |
| :--- | :--- |
| `getting-started/` | Onboarding, how-to-use guides, research tips |
| `ai/` | AI topics (LLMs, transformers, prompt engineering, etc.) |
| `ml/` | Machine learning topics (neural networks, optimization, etc.) |
| `neuroscience/` | Neuroscience topics (neural coding, BCIs, etc.) |

### Step 2 — Create the file

Create a new file in the appropriate folder. The file name becomes the URL slug, so use lowercase words separated by hyphens (e.g., `attention-mechanisms.md` → `/ai/attention-mechanisms`).

### Step 3 — Add a header block

Every page must start with a header block (called "frontmatter") between two sets of `---` lines:

```
---
title: Your Page Title
description: A one-sentence summary of what this page covers.
---

Your content starts here...
```

- `title` — displayed at the top of the page and in the sidebar
- `description` — shown in search results and page previews

### Step 4 — Write your content

Use standard Markdown formatting:

```
## Section Heading

Regular paragraph text goes here.

### Subsection

- Bullet point one
- Bullet point two

**Bold text**, *italic text*, `inline code`
```

### Example: adding an "Attention Mechanisms" page

1. Create the file `src/content/docs/ai/attention-mechanisms.md`
2. Paste in:

```markdown
---
title: Attention Mechanisms
description: How attention allows models to focus on relevant parts of the input.
---

Attention mechanisms let a model weigh how much each part of the input
matters when producing each part of the output...
```

3. Save the file — done. The page appears automatically in the sidebar under "AI Research."

---

## Previewing Your Changes Locally

Before submitting, you can preview exactly how the site will look.

### First-time setup

You need [Node.js](https://nodejs.org/) installed (download the LTS version).

Open a terminal in this folder and run:

```
npm install
```

This only needs to be done once.

### Start the preview server

```
npm run dev
```

Open your browser to **http://localhost:4321** — you'll see the live site. Changes to files are reflected instantly without restarting.

Press `Ctrl+C` in the terminal to stop the server.

### Verify your page looks right

1. Navigate to your new page in the sidebar.
2. Check that the title and description appear correctly.
3. Make sure any headings, lists, or formatting render as expected.
4. Check that your page appears in the correct sidebar section.

---

## Submitting Your Changes

Once you're happy with the preview, commit your new file and open a pull request on GitHub. If you're not sure how to do this, ask a team member to help — the only file you need to include is the `.md` file you created.

---

## Project Structure (for reference)

```
src/content/docs/
├── getting-started/     ← onboarding pages
├── ai/                  ← AI research pages
├── ml/                  ← ML research pages
├── neuroscience/        ← neuroscience pages
└── index.mdx            ← homepage
```

The sidebar is configured in `astro.config.mjs`. The `getting-started/` section lists pages explicitly; all other sections auto-generate from their folder contents, so new files appear automatically.

---

## All Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies (first-time setup) |
| `npm run dev` | Start local preview at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
