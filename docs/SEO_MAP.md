# SEO MAP — Fairweight

Domain: `fairweightdmv.com` (currently deployed at `fairweight.vercel.app` — see S-4)
Locales: `en` (root) · `es` (`/es`) — full parity

---

## Live defects found

Verified against the running build, not inferred.

| ID | Defect | Evidence | Impact |
|---|---|---|---|
| **S-1** | **Doubled brand suffix in every page title.** Pages export a plain-string title already ending in `\| Fairweight`, while the root layout applies `template: '%s \| Fairweight'`. | `/about` renders `About — Honest Weight, Fair Dealings \| Fairweight \| Fairweight` | Visible in search results. Wastes ~13 characters of a ~60-character budget. Affects every page except Home. |
| **S-2** | **No canonical URLs on any page except Home.** Only `layout.js` sets `alternates.canonical`. | grep of `alternates` across `app/` | Every non-home page inherits or lacks a canonical. |
| **S-3** | **No `hreflang` annotations.** A full EN/ES parallel site exists with a working pairing function (`otherLangHref`), but that relationship is never declared to search engines. | `lib/nav.js` has the mapping; no `alternates.languages` anywhere | The single largest missed opportunity on this site. Google cannot connect the language pairs. |
| **S-4** | **Domain mismatch.** `metadataBase`, `sitemap.js` and `JsonLd.js` all hard-code `fairweightdmv.com`, but the site is served from `fairweight.vercel.app`. | `layout.js`, `sitemap.js` | Canonicals, OG URLs and sitemap all point at a domain that is not serving the site. Must be resolved before any indexing push. |
| **S-5** | **URL/locale mismatch on city pages.** English city pages live at `/sell-gold/[city]`, Spanish at `/es/vender-oro/[city]`. The area hub is `/area`. The city pages are therefore not children of the hub they belong to. | route tree | Breaks the hub-and-spoke relationship and breadcrumb logic. |
| **S-6** | **No `BreadcrumbList` structured data** anywhere, despite a genuine three-level hierarchy. | `JsonLd.js` | Missing rich-result eligibility. |
| **S-7** | **`sameAs: []`** — no Google Business Profile linked. | `JsonLd.js` | For "near me" intent, GBP is the dominant ranking factor. Highest-leverage single fix. (Brief C-4) |

---

## Page map — English

### `/` — Home

- **Purpose:** establish trust and route to a call within one screen.
- **Primary intent:** navigational + broad commercial — *"gold buyer DMV"*, *"sell gold near me"*
- **Primary topic:** mobile gold & silver buying across the DMV
- **Secondary:** honest weighing process · live spot pricing · same-day cash · bilingual service
- **Geo intent:** DMV-wide, Hyattsville-anchored
- **H1:** `We Buy & Sell Gold & Silver` — **flagged.** Depends on Brief C-6. If selling is not a real service, this H1 is inaccurate and must change to a buying-led headline.
- **Title concept:** primary service + mobile modifier + region
- **Internal links →** `/prices`, `/buy`, `/area`, `/contact`, top 3 city pages
- **CTA intent:** call / text

### `/prices` — Live Prices

- **Purpose:** the trust engine. Proves pricing is market-derived, not invented.
- **Primary intent:** informational, high volume — *"gold price today"*, *"spot price silver"*
- **Primary topic:** live spot prices for gold, silver, platinum, palladium
- **Secondary:** how melt value is calculated · karat multipliers · troy oz vs. gram vs. dwt · why offers sit below spot
- **Geo intent:** none — this is national-intent traffic converted by local proof
- **H1:** live spot pricing, plainly stated
- **Internal links →** `/buy`, `/contact`, estimator
- **CTA intent:** estimator → call
- **Note:** the highest top-of-funnel asset on the site. Visitors arrive not ready to sell and are converted by demonstrated competence. `changeFrequency: daily` is already correctly set.

### `/buy` — What We Buy

- **Purpose:** qualification. Tells people whether their item is worth a call.
- **Primary intent:** commercial investigation — *"do they buy 10k gold"*, *"sell broken jewelry"*, *"sell dental gold"*
- **Primary topic:** accepted materials and forms
- **Secondary:** karat ranges · sterling · bullion & rounds · junk silver · coins · estate jewellery · dental gold · **what is not worth selling** (plated, gold-filled)
- **H1:** the accepted-materials statement
- **Internal links →** `/prices`, `/contact`, `/about`
- **CTA intent:** call / free quote
- **Note:** the "what we *don't* buy" content is the most credibility-generating material available. Honesty about worthless plating outperforms any trust badge.

### `/about` — About

- **Purpose:** convert the "stranger at my door" fear into a named, licensed human.
- **Primary intent:** trust verification — *"is [business] legit"*, brand searches
- **Primary topic:** who Fairweight is, how the process works, why the weight is honest
- **Secondary:** the weighing procedure · testing method · licensure (Brief C-2) · years operating (C-3) · local roots
- **H1:** identity + the honest-weight promise
- **Internal links →** `/contact`, `/area`, `/prices`
- **CTA intent:** call
- **Blocked on:** C-2, C-3, C-7, C-8. Currently the weakest page relative to its importance.

### `/area` — Service Area (hub)

- **Purpose:** hub for 12 city pages; answers "do you come to me?"
- **Primary intent:** local qualification — *"gold buyer [county]"*, *"do you serve [city]"*
- **Primary topic:** coverage across PG County, Montgomery County, and the wider DMV
- **H1:** coverage statement, county-anchored
- **Internal links →** all 12 city pages, `/contact`
- **CTA intent:** call
- **Change:** city pages should become children of this hub (see S-5).

### `/sell-gold/[city]` — 12 city pages

- **Purpose:** capture local intent with genuinely local content.
- **Primary intent:** transactional local — *"sell gold [city]"*, *"cash for gold [city]"*
- **Primary topic:** selling gold & silver in that specific city
- **Secondary:** named neighbourhoods and roads · nearby cities served · language availability
- **Geo intent:** explicit, single city
- **H1:** service + city
- **Internal links →** `/area`, `/prices`, `/buy`, `/contact`, adjacent cities
- **CTA intent:** call
- **Section 18 audit — required before publication:**
  - Existing copy is individually written, names real streets (Route 1, University Blvd, Riggs Rd, Kenilworth Ave) and differs meaningfully between cities. **This currently passes.**
  - Each of the 12 must still be reviewed one by one. Any page reducible to a name swap gets consolidated into the hub or genuinely improved. None are published for URL volume alone.
  - Hyattsville is correctly flagged `primary: true` — it is the home city and should carry the strongest page.

### `/contact` — Contact / Free Quote

- **Purpose:** the conversion endpoint.
- **Primary intent:** transactional — *"gold buyer phone number"*, brand + contact
- **H1:** free quote / contact
- **Internal links →** `/area`, `/prices`
- **CTA intent:** call · text · form submission
- **Blocked on:** Brief F-1 and F-2. The form must capture server-side before this page can be considered functional.

---

## Page map — Spanish

Full mirror. **This is not a translated afterthought — for the primary customer segment it
is the main channel.**

| ES URL | EN pair | Primary intent |
|---|---|---|
| `/es` | `/` | `comprador de oro`, `compro oro cerca de mí` |
| `/es/precios` | `/prices` | `precio del oro hoy`, `precio de la plata` |
| `/es/que-compramos` | `/buy` | `venden oro 14k`, `compran joyas rotas` |
| `/es/nosotros` | `/about` | brand trust verification |
| `/es/area` | `/area` | `comprador de oro [condado]` |
| `/es/vender-oro/[city]` | `/sell-gold/[city]` | `vender oro [ciudad]`, `dónde vender oro [ciudad]` |
| `/es/contacto` | `/contact` | `teléfono comprador de oro` |

**Strategic note.** Very few local competitors operate a genuine parallel Spanish site,
and the target communities around Hyattsville, Langley Park and Adelphi are substantially
Spanish-first. Combined with **S-3** — no `hreflang` declared — this is simultaneously the
largest existing advantage and the largest unrealised one on the entire site.

Fixing `hreflang` is low effort and high return. It should be treated as the first SEO
task, ahead of any content work.

---

## Structured data plan

| Type | Status | Action |
|---|---|---|
| `JewelryStore` (LocalBusiness) | Present | Keep. Add `email` (C-1), `sameAs` (C-4). Add licence identifier if C-2 confirms. |
| `BreadcrumbList` | Missing | Add on city pages and service pages (S-6). |
| `WebSite` | Missing | Add with `inLanguage` for both locales. |
| `AggregateRating` / `Review` | Absent | **Must stay absent** until real, verifiable reviews exist (C-5). Never fabricate. |
| `Service` | Missing | Consider once the buy/sell question (C-6) is settled. |

`openingHoursSpecification` (08:00–20:00 daily) and `areaServed` are already present and
correct — keep both, and keep them driven from the same single source as the visible
content once F-5 is resolved.

---

## Priority order

1. **S-4** — resolve the domain. Everything else is provisional until canonicals point somewhere real.
2. **S-3** — `hreflang`. Cheapest, highest return on this specific site.
3. **S-1** — title suffix. One-line fix, affects every page.
4. **S-7** — link the Google Business Profile. Dominant factor for "near me".
5. **S-2** — per-page canonicals.
6. **S-5** — move city pages under the area hub.
7. **S-6** — breadcrumb structured data.
