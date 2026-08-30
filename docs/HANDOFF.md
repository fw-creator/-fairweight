# HANDOFF — resume here

Updated 2026-08-30. **The site is live at https://fairweight.com.**

**To resume in a new session:** open this repo and say *"read docs/HANDOFF.md and continue"*.

---

## Current state

- `fairweight.com` is live and serving from Vercel. `www` 308-redirects to the apex.
- The homepage is the version the owner approved (built in a parallel session, city-led
  headline, family-led buyer section, acid-testing photograph, three-step process).
- Everything is committed and pushed to `fw-creator/-fairweight`, branch `main`.
- `npm run build` and `npm run lint` are both clean.

Two dev servers may be running: port 3001 is a production `next start` the owner launched
(does **not** hot-reload — restart it to see changes), port 3000 is the dev server.

---

## Domain and deploys — both were broken, both are fixed

**Domain.** The business owns **fairweight.com**, registered at Squarespace and managed
through Google Workspace. DNS now points at Vercel:

| Type | Name | Value |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `9a9d190febb47992.vercel-dns-017.com.` |

⚠️ **Never delete these three — they carry `fw@fairweight.com`:** `MX @ smtp.google.com`,
`TXT @` (SPF), `TXT google._domainkey` (DKIM). Verified working after the change.

**Deploys.** Pushes stopped producing deployments after the repo was transferred to
`fw-creator`. Root cause: Vercel authenticated to GitHub as `drenderos71-png`, while the repo
and the Vercel GitHub App live under `fw-creator` — a personal account, so the other identity
could not see the installation. Fixed by switching Vercel's GitHub login connection to
`fw-creator` and reconnecting the repository. Deploys now fire on push.

`gh` holds both accounts; `gh auth switch` moves between them. `fw-creator` is the one with
push access to this repo.

---

## The CSS bug worth remembering

`globals.css` had **two orphaned `@media` blocks**, each leaving one unclosed brace. Everything
after them failed to parse: the browser loaded **542 of 770 rules** and dropped the rest
silently — no error anywhere. The visible symptom was a 27px icon rendering 1124px tall,
making one section 4,629px on its own.

They were a regression from regex-based CSS edits that removed rule bodies but left the
`@media` opening lines. **After any scripted CSS edit, check `{` and `}` balance** — the
failure is completely silent.

---

## Blocked on the owner

| ID | Needed | Note |
|---|---|---|
| **C-1** | Photo of Jonathan | The acid-testing photo exists; a portrait does not. |
| **C-2** | Maryland precious-metal dealer licence number | Strongest trust asset available. |
| **C-3** | Email address for the footer / schema | `lib/business.js` has `email: null`. |
| **C-4** | Google Business Profile URL | ⚠️ The homepage shows a **Google badge with five filled stars and no rating, count or link**. It reads as a 5.0 rating that does not exist. Flagged to the owner, who chose to ship it. Replace with real data or remove. |
| **C-5** | Payment method — is same-day cash guaranteed and lawful? | All cash promises were removed pending this. |
| **C-6** | Does Fairweight sell, or only buy? | |
| **C-10** | "We Pay Off Pawned Items" — `NEEDS_LEGAL_REVIEW` | Removed from the homepage; still unresolved as a service. |

---

## Open work

1. **`hreflang` is gone from the homepage.** It was added across both locales, then lost when
   the homepage was replaced. The Spanish routes still work (`/es` returns 200) but Google
   cannot pair them. The owner is undecided on whether Spanish matters — note that
   `lib/cities.js` targets "the heavily Latino communities around Hyattsville", so the
   Spanish side is arguably the largest under-served channel.
2. **Desktop layout.** The headline and the broken stylesheet are fixed. Several sections
   (`buy-section`, `process-section`, `estimator-section`, `faq-section`, `home-final-cta`)
   are still single-column `block` at desktop width and could use real columns.
3. Analytics events — click-to-call, appointment start, ZIP check. None are tracked.
4. Convert `public/*-bars.png` to AVIF/WebP.

---

## Reference

`/Users/dizz/Claude/viking-reference` — the Viking Movers build (Brook Frameworks, owned by
the same person). Static HTML with `template.html` + `generate-site.js`, a white-label
generator. Useful for patterns: problem-first headline, appointment-status timeline, review
badges with platform logos. **Its review counts and stats are demo data and are labelled as
such — never copy those numbers.**
