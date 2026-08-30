# ASSET AUDIT — Fairweight

Complete inventory of every visual asset currently in the project, with a production
verdict for each.

**Headline finding: there is no photography of this business.** Not the owner, not the
scale, not a test being performed, not a single transaction. For a trade whose entire
value proposition is *"watch me weigh it in front of you"*, this is the largest gap in
the project — larger than any design or code issue.

---

## 1. Logo and brand marks

| Asset | Form | Verdict |
|---|---|---|
| Primary logo | **Inline SVG** — a balance-scale drawing plus the letters `FW`, hard-coded in `components/Header.js` | ⚠️ **Needs extraction** |
| Full logo file | — | ❌ **Does not exist** |
| Compact mark | — | ❌ **Does not exist** |
| Light / dark variants | — | ❌ **Do not exist** |
| `favicon.ico` | Static file in `app/` | ✅ Present |
| `icon.js` | Generated at build | ✅ Present |
| `apple-icon.js` | Generated at build | ✅ Present |
| `opengraph-image.js` / `twitter-image.js` | Generated at build | ✅ Present |

**Assessment.** The mark itself is a good idea — a balance scale is exactly right, and it
carries the brand thesis without explanation. But it exists only as markup inside one
component. There is no reusable logo file, which means:

- it cannot be handed to a sign printer, a vehicle wrap shop, or a business-card designer
- it cannot be used on an invoice, a receipt, or the Google Business Profile
- light/dark and compact variants cannot be produced without editing React code

**Action.** Extract the mark to real SVG files — full lockup, compact mark, light, dark.
Keep the inline version rendering from the same geometry so nothing drifts. This is
brand infrastructure, not a website task, and it is worth doing properly once.

**Do not** attempt to "vectorise" anything that does not already exist as vector. The
current mark is already clean vector geometry, so this is extraction, not recreation.

---

## 2. Photography

| Category | Count | Verdict |
|---|---|---|
| Owner / team | **0** | ❌ Missing |
| The scale (the actual calibrated instrument) | **0** | ❌ Missing |
| Testing in progress (acid, XRF, touchstone) | **0** | ❌ Missing |
| Real customer items | **0** | ❌ Missing |
| Completed transactions | **0** | ❌ Missing |
| Location / service area | **0** | ❌ Missing |

**This is the priority-one gap for the entire project.**

Brief §4 ranks customer anxieties. The top three — *they'll lowball me*, *how do I know
the scale is honest*, *is it safe to let a stranger in* — are all answered far more
effectively by one honest photograph than by any amount of copy.

### What is actually needed

Ranked by conversion impact, not by how pretty they'd look:

1. **The owner's face.** A person, named, looking at the camera. This single asset does
   more for the "stranger at my door" fear than every trust badge ever designed.
2. **The scale, close up.** The real instrument, ideally showing a calibration mark or
   certification. This *is* the brand.
3. **A test being performed** — acid on a touchstone, or an XRF reading. Demonstrates
   competence, and is genuinely interesting to look at.
4. **A weighing in progress**, item on the pan, figure legible. The procedure made visible.
5. **Cash counted out**, honestly framed. Same-day payment, proven.
6. **Real items** — a mixed lot of chains, a class ring, junk silver — as actually received.

### Standards, once shot

- Shot on a modern phone in daylight is entirely acceptable and often *more* credible than
  a studio shoot. Authenticity outranks polish for this trade.
- Never present a stock or generated image as real work. Brief §13 and §21 make this
  non-negotiable, and in a trust business it is also commercially self-defeating.
- Each production image: cropped intentionally, responsive sizes generated, AVIF/WebP,
  explicit dimensions, meaningful filename, real alt text, sensible focal point.
- Hero/LCP image must not be lazy-loaded. Everything below the fold must be.

**Until real photography exists, no gallery or proof section should be built.** An empty
gallery is bad; a gallery of stock bullion presented as work is worse.

---

## 3. Existing images

| File | Dimensions | Weight | Verdict |
|---|---|---|---|
| `gold-bars.png` | 492 × 327 | 224 KB | ⚠️ Usable, needs work |
| `platinum-bars.png` | 483 × 449 | 236 KB | ⚠️ Usable, needs work |
| `silver-bars.png` | 437 × 273 | 120 KB | ⚠️ Usable, needs work |

**These have the worst of both problems simultaneously.**

- **Too small to display large.** At 492 px wide, on a 2× display this can only fill about
  246 CSS pixels before it softens. That is thumbnail scale. They cannot be used as hero
  or feature imagery.
- **Too heavy for what they are.** 224 KB for 492 × 327 is roughly 1.4 bytes per pixel —
  extremely inefficient. The same image as AVIF should land around 15–25 KB. **Roughly 90%
  of the bytes are waste.**

**Also:** these are generic bullion product shots, not Fairweight's own material. They are
acceptable as decorative material references on the price cards — which is how they are
currently used — but they must never be positioned as the business's own work or inventory.

**Action.** Convert to AVIF with WebP fallback, generate responsive sizes, serve through
`next/image`, and keep their role strictly decorative.

---

## 4. Dead assets

Leftover scaffolding from `create-next-app`, still shipping in `public/`:

| File | Size | Verdict |
|---|---|---|
| `next.svg` | 1.3 KB | ❌ Delete |
| `vercel.svg` | 128 B | ❌ Delete |
| `file.svg` | 391 B | ❌ Delete |
| `globe.svg` | 1.0 KB | ❌ Delete |
| `window.svg` | 385 B | ❌ Delete |

Unreferenced anywhere in `app/` or `components/`. Harmless in weight, but they are
publicly reachable and signal an unfinished template build to anyone who looks.

---

## 5. Icons and illustration

All icons are **hand-authored inline SVG** — trucks, cameras, scales, currency marks,
bars — drawn directly in `app/page.js` and `components/Header.js`.

**Verdict: ✅ genuinely good, and worth protecting.**

This is the opposite of the generic-outline-icon problem Brief §7 warns about. They are
drawn for this business, they share a consistent stroke weight, and the scales motif
recurs meaningfully rather than decoratively.

**Action.** Do not replace these with an icon library. Extract them into a small shared
icon module so the stroke weight and viewBox stay consistent as the site grows — but keep
the drawings exactly as they are. They are a real brand asset.

---

## 6. Typography assets

| Family | Role | Verdict |
|---|---|---|
| Cormorant Garamond | Display | ⚠️ Reconsider — see Brief §10 |
| Jost | Body / UI | ⚠️ Replace — see Brief §10 |

Both are loaded correctly through `next/font/google` with `display: swap` and CSS
variables. **The delivery mechanism is right**; only the type choices are in question.

Note: neither family provides the **tabular figures** this site genuinely needs. Every
page is built on numbers — spot prices, weights, karats, dollar figures — and figures that
shift width as they update will visibly jitter in the live ticker. This is a functional
requirement, not a refinement.

---

## 7. Implementation defects found

| ID | Defect | Location | Severity |
|---|---|---|---|
| **A-1** | Raw `<img>` instead of `next/image` — no optimisation, no responsive sizes, no explicit dimensions, so it contributes to layout shift. Confirmed by lint. | `components/PriceCards.js:89` | **High** |
| **A-2** | React error: `setState` called synchronously inside an effect, causing cascading renders. Confirmed by lint (`react-hooks/set-state-in-effect`). | `components/PriceCards.js:26` | **High** |
| **A-3** | `next/image` imported but never used — dead import. | `app/page.js:2` | Low |
| **A-4** | Images served as PNG where AVIF/WebP should be used. ~90% byte waste. | `public/*.png` | Medium |
| **A-5** | No logo source files exist outside React markup. | `components/Header.js` | Medium |

---

## 8. Readiness summary

| Category | Ready | Needs work | Unusable / missing |
|---|---|---|---|
| Logo & marks | Favicon set | Extract to real files, build variants | Full lockup, compact mark |
| Photography | — | — | **Everything** |
| Metal imagery | — | All three: convert, resize, optimise | — |
| Icons | All | Extract to shared module | — |
| Typography | Loading setup | Family selection, tabular figures | — |
| Template leftovers | — | — | 5 files to delete |

---

## 9. Ordered actions

**Blocking — must happen before launch**

1. **Shoot the six photographs** in §2. Nothing else on this list matters as much. A phone
   camera and good daylight are sufficient.
2. Extract the logo to real SVG files with light/dark and compact variants.
3. Resolve Brief C-2 (licence) and C-1 (email) — both surface as visible assets.

**High**

4. Fix A-1 and A-2 — both are confirmed by lint and both affect real users.
5. Convert the three PNGs to AVIF/WebP with responsive sizes.

**Medium**

6. Settle the typography question, prioritising tabular figures.
7. Extract the inline icons to a shared module without altering them.

**Low**

8. Delete the five template SVGs.
9. Remove the unused `next/image` import.
