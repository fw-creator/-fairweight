# HANDOFF — resume here

Written 2026-08-29, updated later the same day. Everything below is **uncommitted and local**. The live site at
`fairweight.vercel.app` still shows the OLD version and has not been touched.

**To resume in a new session:** open this repo and say *"read docs/HANDOFF.md and continue"*.

---

## How to get running

```bash
cd /Users/dizz/Claude/fairweight && npm run dev
```

Dev server on `localhost:3000`. Production build is green: `npm run build` → 46 pages, no errors.
`npm run lint` is clean — no errors, no warnings.

---

## What changed, and why

### Truthfulness fixes — these were live defects

| What | Where | Note |
|---|---|---|
| **Fabricated spot prices removed** | `components/Header.js` | Held `FALLBACK = { XAU: 4400, … }` and rendered it as the live quote whenever the price fetch failed. A customer could price their gold off an invented number. Now renders `Unavailable` / `No disponible`. Never a number. |
| **`$0` placeholder removed** | `components/Header.js` | Rendered `$0` as the gold price while loading. |
| **Placeholder owner name replaced** | 5 files, EN + ES | `Your Brother's Name` / `El Nombre de su Hermano` shipped live under "Founder & Buyer". Now **Jonathan Renderos**. |
| **"Often higher" claim removed** | `Calculator.js`, `Estimator.js` | Both told visitors the in-person offer "is often higher". No data supports it; the brief forbids it. |
| **Calculator relabelled** | `Calculator.js`, `Estimator.js` | Now `Educational estimate — not a purchase offer`. |
| **"Get Paid Cash" step removed** | `app/page.js` | Promised cash payment. Payment method is unconfirmed (see C-5). |

### SEO fixes

- **Doubled brand suffix** — every page rendered `… | Fairweight | Fairweight`. Fixed across
  11 static pages **and** the 24 dynamic city pages (`sell-gold/[city]`, `es/vender-oro/[city]`).
- **Broken SMS link** — `sms:+1240…&body=` → `?body=`. The `&` commonly fails to prefill on
  Android, which is what much of the Hyattsville/Langley Park audience uses.
- **Structured data** now reads from `lib/business.js` and omits unverified facts instead of
  inventing them.

### Design

- **Palette** is the brief's exact spec: ivory `#F6F1E8`, charcoal `#242220`, CTA gold `#B9812C`,
  bronze `#8C6938`, stone `#D8CFC1`, muted `#726C63`. No black anywhere. Metallic button
  gradients removed.
- **Hero rebuilt** as a two-column layout — copy column left, image panel right. This was the
  owner's explicit direction (he sent a mockup). It replaced an earlier full-bleed background
  approach that let the jewellery sit behind the headline.
- **Hero image** `public/hero-evaluation.png` (1701×925) via `next/image` with `priority`,
  `fetchPriority="high"`, explicit dimensions, AVIF/WebP configured in `next.config.mjs`.
  ⚠️ The brief described an image with *dark* negative space on the left and coins, a watch and
  a scale. **The supplied image is different** — light cream negative space, and only a chain,
  a solitaire and a band. The treatment was inverted accordingly (dark text on light, no dark
  overlay). If a photo matching the brief's description turns up later, revisit this.
- **Hero copy** is the brief's exact text: eyebrow, H1 *"Private Gold & Silver Buying, Brought to
  You."*, supporting paragraph, microcopy. Primary CTA is now **Schedule a Private Evaluation**;
  the phone dropped to secondary.
- **Trust strip** — four specific signals on soft black, 2×2 on mobile.
- **Appointment starter** (`components/AreaCheck.js`) — ZIP + item category + contact preference
  → *Check Availability*. Coverage check is clearly separated from an appointment request and
  submits nothing. Copy states we never ask for a full address.
- **How It Works** rebuilt as the brief's five steps, with a signature animation: a struck
  hallmark travels the rail as the section enters. Uses `animation-timeline: view()` and is
  fully disabled under `prefers-reduced-motion`.
- **Mobile bar** — exactly two actions: Call + Schedule.
- **Deleted** five leftover `create-next-app` SVGs from `public/`.

### New files

- `lib/business.js` — single source of truth. **The phone number was hard-coded in 22 files.**
  New work must read from here.
- `components/AreaCheck.js`
- `docs/SITE_BRIEF.md`, `docs/SEO_MAP.md`, `docs/ASSET_AUDIT.md`, `docs/IMPLEMENTATION.md`

---

## Domain — fairweight.com

The business owns **fairweight.com**, registered at **Squarespace** (it was serving a
Squarespace "Coming Soon" parking page). `fairweightdmv.com` was configured in Vercel but its
DNS was never pointed, so it never resolved — nothing to migrate, no redirects to preserve.

Added to the Vercel project (2026-08-29):

| Domain | Behaviour |
|---|---|
| `fairweight.com` | Production. Apex is primary — the apex→www redirect was deliberately **off** so it matches the canonical in the code. |
| `www.fairweight.com` | 308 permanent redirect → `fairweight.com` |

**DNS is done** (2026-08-29). At Squarespace, the "Squarespace Defaults" preset was deleted
(the four A records and the www CNAME that served the parking page) and replaced with:

| Type | Name | Value |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `9a9d190febb47992.vercel-dns-017.com.` |

**fairweight.com is live and serving the site.** `www` 308-redirects to the apex.

⚠️ **The domain is managed through Google Workspace and carries the company email.** These
three records were deliberately left untouched and must never be deleted — removing any of them
breaks `fw@fairweight.com`:

| Type | Name | Purpose |
|---|---|---|
| MX | `@` | `smtp.google.com` — mail delivery |
| TXT | `@` | SPF |
| TXT | `google._domainkey` | DKIM |

Verified after the change: all three still resolve correctly.

`fairweightdmv.com` remains in the Vercel project with no DNS. It can be removed whenever.

⚠️ The Squarespace domain auth-code was exposed in a screenshot during this session. It should
be regenerated in Squarespace.

## Blocked on the owner — nothing here may be invented

| ID | Needed | Blocks |
|---|---|---|
| **C-1** | **Photo of Jonathan** + short bio | `PHOTO` placeholder blocks are still visible on the homepage and About. Either fill them or delete the section — they must not ship. |
| **C-2** | **Maryland secondhand precious-metal dealer licence number** | The strongest trust asset available, and likely a legal requirement to display. Nothing is claimed without it. |
| **C-3** | **Email address** | None exists anywhere. Footer, contact page and schema all want one. |
| **C-4** | **Google Business Profile URL** | `sameAs` is empty. Highest-leverage single item for "near me" ranking. |
| **C-5** | **Payment method** — is same-day cash guaranteed and lawful? | All cash promises were removed pending this. |
| **C-6** | **Does Fairweight sell, or only buy?** | Page title still says "We Buy & Sell" while every page and the new hero describe only buying. |
| **C-7** | **Real reviews** — count, rating, source | No review UI and no `aggregateRating` schema until these exist. Never fabricate. |
| **C-8** | **Insurance / bonding** for at-home visits | Directly answers the "stranger in my home" fear. Not claimed. |
| ~~C-9~~ | ~~Domain~~ | ✅ **RESOLVED.** The business owns **fairweight.com** (registered at Squarespace). All 17 hard-coded `fairweightdmv.com` references now read from `BUSINESS.site.canonicalOrigin`. Still to do: point the DNS at Vercel. |
| **C-10** | **"We Pay Off Pawned Items"** — `NEEDS_LEGAL_REVIEW` | Still on the homepage, untouched. Materially different service with compliance exposure. The brief says move it to its own page or drop it. |

---

## Done in the second session

- ✅ **`hreflang` + per-page canonicals** on every route — the 11 static pages, both homepages
  and all 24 city pages, each with `x-default`. Verified in the rendered HTML. The Spanish pages
  already had partial annotations; the English side had none.
- ✅ **Spanish parity** — `app/es/page.js` now has the same five-step "How It Works" and the
  trust strip.
- ✅ **Phone wired to `lib/business.js`** across 23 files. **Zero hard-coded numbers remain**
  anywhere in `app/` or `components/`.
- ✅ **`PriceCards.js` fully repaired** — it carried its own copy of the fabricated-price bug
  (`fallback: 4400 / 75 / 2000`) that was fixed in `Header.js` but missed here. It also rendered
  `$0` while loading, used a raw `<img>`, and called `setState` synchronously inside an effect.
  All four fixed. **Lint is now completely clean** for the first time.
- ✅ **Loading and failure are now distinct states**, as the brief requires: a neutral shimmer
  while a quote is in flight, `Temporarily unavailable` when the feed fails. Never a number.
- ✅ **Mobile hero overlap fixed** — `app/effects.css` zeroed `.hero` padding under 760px because
  the old absolutely-positioned photo variant carried its own. The new grid layout needed it back.

## Done in the third session — homepage refinement brief

- ✅ **Mobile edge-touching fixed.** Root cause: `.hsp-grid` used the `padding` shorthand, which
  wiped `.wrap`'s horizontal padding. Now uses `padding-block`. Verified at 390px: no overflow,
  proper gutters.
- ✅ **Hero is one composition.** The image panel's border, radius and shadow are gone; a
  `mask-image` dissolves its left edge into the ivory page so the fabric blends.
- ✅ **Mobile hero** — image is exactly 390×240 with `object-position` keeping the ring in frame,
  H1 reduced, both CTAs stacked full-width.
- ✅ **Fixed bar no longer covers content** — `body` carries bottom padding under 900px.
- ✅ **Both `PHOTO` placeholders removed.** No real portrait exists, so: a typographic **JR
  monogram** (a mark, not a fabricated likeness) in Meet Your Buyer, and a soft-black
  **statement panel** where the large image slot was.
- ✅ **"Trusted Dealers. Fair Prices." → "Straight Answers. Fair Dealings."** The plural
  misrepresented an owner-led business.
- ✅ **Homepage reordered** to the brief's flow: hero → trust → what we buy → how it works →
  calculator → why → meet your buyer → live prices → service area/ZIP → scripture → CTA.
- ✅ **Calculator promoted** into a soft-black section with its own heading.
- ✅ **New "What We Buy" section** — editorial menu keyed by element symbols (Au/Ag/Pt), six
  verified categories, plus the "what we will not pretend is gold" honesty block. No fake
  imagery: with no real photography, a typographic composition was chosen over placeholders.
- ✅ **Unverified claims removed, EN and ES:**
  - "We Pay Off Pawned Items" pillar taken off the homepage (still `NEEDS_LEGAL_REVIEW`, C-10).
  - "Instant payment in cash, on the spot. No checks, no holds" → describes testing and weighing.
  - Final CTA "Turn gold & silver into cash today" → "Find out what it's actually worth".

## Next, in priority order

1. **Spanish parity for the new homepage sections** — `app/es/page.js` has the truthfulness
   fixes and the five-step process, but not the reordered flow, the What We Buy section, the
   monogram or the statement panel.
2. **Convert `public/*-bars.png`** to AVIF/WebP — now served through `next/image`, so Next
   optimises them on demand, but the sources are still oversized PNGs.
3. **Analytics events** — click-to-call, click-to-text, appointment start, ZIP check,
   calculator engagement, language switch. None are tracked.
4. **Move city pages under the area hub** — `/sell-gold/[city]` should be `/area/[city]` so the
   hub-and-spoke and breadcrumbs make sense. Redirect the old paths.
5. **Section 18 doorway audit** — review all 12 city pages individually. The existing copy is
    genuinely local (named streets and neighbourhoods) so it currently passes, but it has not
    been audited page by page.

---

## Known, not yet fixed

- **`npm run lint` is clean.** No known code defects outstanding.
- ⚠️ **Never delete `.next` while the dev server is running.** Doing so corrupts the Turbopack
  cache and produces misleading `ReferenceError` failures that look like source bugs. Stop the
  server first.
- The homepage `<title>` still says "We Buy & Sell Gold & Silver" while the H1 no longer does.
  Waiting on **C-6**.
- `docs/IMPLEMENTATION.md` was written by a parallel session and predates most of this work.
  Where the two disagree, this file is newer.

---

## Publishing

Nothing has been pushed. When the owner approves:

```bash
git add -A && git commit -m "Refocus on private mobile evaluations; ivory palette; truthfulness fixes"
```

Then push to `fw-creator/-fairweight` — Vercel deploys `main` automatically.

**Before pushing, confirm C-1** (the `PHOTO` placeholders are still in the markup) — shipping
those repeats the exact problem that made the live site look unfinished.
