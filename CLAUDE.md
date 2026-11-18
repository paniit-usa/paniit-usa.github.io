# CLAUDE.md — PANIIT USA site

Static HTML/CSS/JS, no build step, served by GitHub Pages. Each section is a folder with its own `index.html`. Pushing to `main` publishes the site.

## House rules
- **PANIIT is always all caps.** Never "Pan-IIT" or "PanIIT" in new text.
- **No "coming soon" or placeholder wording** on public pages. Leave a section out rather than announce it.
- **Stated limits stay exactly as given** (Show & Tell talks: 15 minutes; mentorship: 7 weeks). "Softer wording" means friendlier phrasing, never a weaker rule. Don't suggest changing a program's length, format or sign-up flow unless asked.
- Mirror the source document or the existing page; don't invent formats (e.g. assuming demos or Colab in an outline).
- `bridge/` is maintained by non-technical managers through Google Docs: keep its pages simple to edit.

## Working here
- Source PDFs/PPTX and draft docs in `docs/`, `mentorships/`, `services/`, `slides/` are gitignored on purpose; don't commit them.
- Check every changed page in a browser before committing. After moving JS, grep for a stray `${` outside backtick strings.
