# IMPLEMENTATION PLAN — Fairweight

Ordered build plan derived from `SITE_BRIEF.md`, `SEO_MAP.md` and `ASSET_AUDIT.md`.
Ordered by **damage prevented**, not by how interesting the work is.

---

## PHASE 0 — Blocked on the owner (no code possible)

Nothing here can be invented. Each item is currently either missing or wrong on
the live site.

| # | Needed | Where it lands |
|---|---|---|
| 0.1 | **Owner's real name** | Replaces `Your Brother's Name` / `El Nombre de su Hermano` on 7 live pages |
| 0.2 | **Photo of the owner** | 4 `PHOTO` boxes under "Meet Your Buyer" |
| 0.3 | **Photo of the scale** | Home + About; the brand is "honest weight" and the scale is nowhere |
| 0.4 | **Photos of real pieces / a real visit** | 5 remaining `PHOTO` boxes |
| 0.5 | Email address | Footer, Contact, structured data — none exists anywhere today |
| 0.6 | MD precious-metal dealer licence no. | Footer + About. Strongest single trust asset if held |
| 0.7 | Real reviews / GBP URL | `sameAs`, proof sections. No `aggregateRating` schema until these exist |
| 0.8 | Years in business | Cannot write "since ____" without it |
| 0.9 | Confirm hours (8am–8pm daily?) | Currently asserted in structured data as fact |
| 0.10 | Does Fairweight **sell**, or only buy? | Title says "Buy & Sell"; every page only describes buying |
| 0.11 | Is `fairweightdmv.com` owned? | Blocks all canonical/OG work in Phase 3 |
| 0.12 | Offer as % of melt — publishable? | Decides how far the Open Assay calculator can go |
| 0.13 | WhatsApp number | Likely high-value for the Spanish-speaking segment |

---

## PHASE 1 — Truthfulness and trust (do first, no owner input needed)

These are live defects. Two of them actively mislead.

### 1.1 Remove fabricated spot prices — **highest severity**
`components/Header.js` renders `FALLBACK = { XAU: 4400, XAG: 75, XPT: 2000, XPD: 1300 }`
as live spot when the fetch fails. A customer can price their gold off an invented
number on the site of a business whose entire promise is honest pricing.
→ Replace with an explicit "prices unavailable — call us" state. Never a number.

### 1.2 Single source of truth for business data
Phone `240-825-9001` is hard-coded in **18+ locations**; NAP facts are scattered
across pages and structured data.
→ Create `lib/business.js`: name, phone (display + `tel:`), email, locality,
region, country, hours, service areas, licence, socials, CTA labels.
→ Render every appearance from it. Structured data reads the same object.

### 1.3 Fix duplicated page titles
The `%s | Fairweight` template double-appends on pages whose title already ends
in "| Fairweight". Live example:
`About — Honest Weight, Fair Dealings | Fairweight | Fairweight`
→ Strip the suffix from every per-page title and let the template add it once.

### 1.4 Delete starter junk from `public/`
`file.svg` · `globe.svg` · `next.svg` · `vercel.svg` · `window.svg`

### 1.5 Audit every remaining factual claim
Anything not confirmed in Phase 0 gets removed or rewritten, not softened.

---

## PHASE 2 — Design rollout ("Assay Certificate")

Proven in `/preview`. Roll out in this order so the site is never half-dressed.

### 2.1 Palette + tokens
Replace the dark/gold token set in `globals.css` with paper / ink / gold-as-seal
plus the four metal data colours. Verify every pairing at WCAG 2.2 AA — the gold
needs a darkened variant for small text on paper.

### 2.2 Typography
Display serif with more spine than Cormorant; sturdy grotesk for text; monospace
reserved for every measured value (weights, karats, spot, prices). Load via
`next/font`. Owner approves the faces before rollout.

### 2.3 Global chrome
Header, footer and mobile CTA bar rebuilt on the new tokens. Ticker becomes the
proof element it already deserves to be.

### 2.4 Home
New hero. Assay card. Oversized measured numerals. Visit timeline.
Buyer section (real photo from 0.2).

### 2.5 `/prices` — the highest-value page
Natural home for the **Open Assay** calculator. Add karat/weight/troy-oz
conversion content — this is exactly what this audience searches, and it earns
return visits nothing else here does.

### 2.6 `/buy`, `/area`, `/about`, `/contact`
Distinct hero compositions — the framework wants at least three across the site,
all recognisably one system.

### 2.7 City pages
Keep the copy; restyle only. It already passes the no-doorway test.

### 2.8 Spanish mirror
Every change applied to `/es/*` in the same pass. Not a follow-up task.

### 2.9 Motion — "settle to balance"
One idea, applied consistently: elements arrive slightly off and settle level;
figures land on precise decimals. `prefers-reduced-motion` → instant level state.

---

## PHASE 3 — SEO and technical

### 3.1 Resolve the domain (blocked on 0.11)
`metadataBase` says `fairweightdmv.com`; the site serves from `vercel.app`.
Until fixed, canonicals and OG images point at a domain that isn't live.

### 3.2 Per-page canonicals
Currently only `/` has one.

### 3.3 hreflang
Pairing logic exists in `lib/nav.js` but is never emitted as
`alternates.languages`. Add to every page, both directions.

### 3.4 Breadcrumbs
`BreadcrumbList` + visible breadcrumbs on the 24 city pages.

### 3.5 Structured data cleanup
Read from `lib/business.js`. Add `sameAs` once 0.7 lands. Validate.
Never add ratings without real reviews.

### 3.6 Sitemap audit
Confirm all 12 EN + 12 ES city pages are included.

### 3.7 Images
Provenance confirmed, AVIF/WebP, responsive sizes, explicit dimensions,
meaningful filenames, real alt text. Hero image not lazy-loaded; everything
below the fold lazy-loaded.

---

## PHASE 4 — Conversion and forms

### 4.1 Rebuild the quote form for **buying**, not servicing
Required: name · phone · what you have (structured selector) · city or ZIP.
Optional: approximate weight, **photo upload**, preferred contact, time window,
language.
**Deliberately not asked at first contact:** full street address. Asking a
nervous seller for their home address before any human contact is the most
likely reason they abandon.

### 4.2 Form engineering
Server-side validation · client-side usability validation · honeypot · useful
errors · real success state · mobile input types · accessible keyboard flow.

### 4.3 Attribution and events
UTM capture, landing page, referrer. Track click-to-call, form start, form
success, CTA clicks. No secrets in browser code.

---

## PHASE 5 — Accessibility, performance, QA

- WCAG 2.2 AA: contrast, focus states, labels, skip nav, heading order,
  accessible mobile drawer, reduced motion
- Core Web Vitals: LCP ≤ 2.5s · INP < 200ms · CLS < 0.1
- Production build clean: no TS/lint errors, no console errors, no hydration
  warnings, no horizontal overflow at 360 / 768 / 1024 / 1440+
- Verify: every phone link, every mail link, form submission, service selector
  options, NAP consistency, unique metadata, canonicals, sitemap, robots

---

## Suggested first sprint

Everything in **Phase 1**, plus chasing the owner for **0.1 and 0.2**.

Rationale: Phase 1 removes two live defects that damage the exact thing this
business sells — a fabricated price and an unfilled name where the owner's face
should be. No amount of Phase 2 design compensates for either.
