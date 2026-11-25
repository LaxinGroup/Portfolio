# Plan: add three GitHub projects to the portfolio

Approved by user: list them inside the Featured project card (under Bus Tracking).

Scope: `frontend/app/page.tsx` only.
- Add a typed `projects` array (title, description, tech, repo, optional live URL).
- Render a compact "More projects" list under the Bus Tracking repo buttons:
  title, description, tech tags, GitHub link, and live link when the repo lists one.

Content comes only from each repo's README / AGENTS.md / package.json:
1. CS-Blood-Donation-Drive-Coordinator- (live: repo homepage on Vercel)
2. MphoCleaningService ("Mupho the Cleaner" per README)
3. AgriAdvisorAI (described as a workplace support assistant, as the repo code shows; user confirmed)

Checks: `tsc --noEmit`, `eslint`, `next build`.
