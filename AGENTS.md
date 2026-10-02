<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Workflow & Speed Guidelines

## 1. Skip Intermediate Builds & 200 OK Checks
- **CRITICAL**: Do NOT run `npm run build`, dev server curl, or 200 OK status checks after individual edits.
- Apply code changes directly and immediately without intermediate terminal checks.
- Only run build verification and git checks at the very end when the user signals that all editing is complete.
- This preserves tokens, eliminates delays, and ensures maximum workflow speed.

## 2. Established Design System Rules
- **Cards**: Standardized `10px` border radius, subtle `1px solid rgba(0, 0, 0, 0.08)` border, clean elevation shadow, compact layout with zero dead space.
- **Buttons**: Standardized `42px` height, `6px` radius, bold 0.875rem font, with solid brand red (`#C41E3A`) for primary actions.
- **CTA Section**: Light background (`#FAFBFC`), brand green heading (`#00A86B`), neutral gray text, and solid brand red buttons.
- **Footer**: Deep dark background (`#1F2421`), 3px tricolor top stripe, 4-column uncrowded layout, white headings, white contact icons, and full-width red "Subscribe" button.
- **Icons**: Exclusively `react-icons/fa6` across the entire project.

## 3. Product Requirements Document (PRD) Reference
- Always refer to `PRD.md` in the project root for the approved 4-page MVP architecture, section titles, and implementation roadmap.
