# SITE BRIEF — Fairweight

Mobile gold & silver buyer · Hyattsville, MD · serving the DMV

---

## 0. Verified facts vs. gaps

Everything below is built only on facts found in the existing codebase. Anything not
verifiable is marked and must not appear on the site until confirmed.

### Verified

| Fact | Value | Source |
|---|---|---|
| Public name | Fairweight | `layout.js`, `JsonLd.js` |
| Slogan | Honest Weight. Fair Dealings. | `JsonLd.js`, `Footer.js` |
| Phone | 240-825-9001 | 22 files (see gap G-1) |
| Base | Hyattsville, MD | `JsonLd.js` |
| Business type | Service-area (no storefront) | no street address anywhere |
| Hours | 08:00–20:00, 7 days | `JsonLd.js` |
| Languages | English + Spanish | full `/es` route tree |
| Buys | Gold, silver, platinum, bullion, coins, estate jewelry | `JsonLd.js` |
| Target markets | 12 cities, PG + Montgomery County MD | `lib/cities.js` |
| Intended domain | fairweightdmv.com | `metadataBase` |

### NEEDS_CONFIRMATION — do not publish until answered

| ID | Question | Why it matters |
|---|---|---|
| C-1 | Email address? | None exists anywhere. Footer, contact page and schema all need one. |
| C-2 | Maryland Secondhand Precious Metal Object Dealer licence number? | Maryland regulates this trade. A licence number is the single strongest trust asset this business could display — and likely a legal requirement to operate. |
| C-3 | Years in business / founded date? | "Serving Hyattsville since ____" is worth more than any adjective. |
| C-4 | Google Business Profile URL? | `sameAs` is empty. GBP is the #1 local ranking factor for "near me" intent. |
| C-5 | Real reviews — how many, what rating, where? | No review data exists. Nothing may be invented. |
| C-6 | Do you actually SELL, or only buy? | Title says "We Buy & Sell" but 100% of content is buying. See finding F-3. |
| C-7 | Insurance / bonding? | Directly answers the "stranger coming to my house" fear. |
| C-8 | Photos: you, the scale, the tester, a real transaction? | Zero real imagery exists. See finding F-4. |

---

## 1. Business personality

Fairweight is not a jeweller, not a pawnshop, and not a financial institution. It is
**one operator with a calibrated scale, a tester and a live spot-price feed, who drives
to you and does the whole transaction in the open.**

The entire brand thesis is contained in the name. *Fairweight* — the weight is fair.
*Honest Weight, Fair Dealings* — the two things customers are afraid of, answered.

This business exists in an industry with a genuinely bad reputation: mall kiosks,
mail-in gold envelopes, pawnshops that quote 40% of melt. Fairweight's whole position
is **being the visible opposite of that.** Transparency is not a value statement here.
It is the product.

Personality: **plain-spoken, precise, unhurried, local.** Confident enough not to shout.
The tone of someone who will happily explain exactly how they arrived at the number,
because the number holds up.

---

## 2. Target customer

Two genuinely different people. The current site treats them as one. It should not.

### A. The necessity seller (primary volume)

Family in Hyattsville, Langley Park, Adelphi, Chillum. Often Spanish-first. Selling
personal or inherited jewellery — chains, rings, a class ring, broken pieces — because
cash is needed now.

- **Device:** phone, almost exclusively. Android share is high in these communities.
- **Journey:** searches on the phone, wants to talk to a human within minutes.
- **Language:** Spanish is not a translation courtesy here. It is the primary channel.
- **Fear:** being cheated by someone who knows more than they do.
- **What wins:** speaking their language, weighing in front of them, cash today, no pressure.

### B. The estate seller (higher ticket)

Silver Spring, Wheaton, Bowie, Takoma Park. Inherited a coin collection, a parent's
jewellery box, some bullion. Not desperate — deliberate. Will get two or three offers
and compare.

- **Device:** desktop research, then calls from the phone.
- **Journey:** reads the Live Prices page, checks how melt value is calculated, compares.
- **Fear:** not knowing what they have, and being taken advantage of because of it.
- **What wins:** showing the maths, live spot rate, competence with hallmarks and coins,
  evidence of licensure.

**Design implication:** the site must serve a fast, Spanish-capable, phone-first path
*and* a slower, evidence-hungry, calculation-driven path — without either feeling like
an afterthought.

---

## 3. Conversion actions

**Primary: a free in-person quote, initiated by phone call or text to 240-825-9001.**

This is a mobile, same-day, cash business. The phone is the transaction. Everything on
the site funnels there.

**Secondary: a real captured lead form** — one that stores the enquiry server-side, with
optional photo upload so a piece can be pre-assessed before the visit.

This does not currently exist. See finding F-1 — the existing form captures nothing.

**Tertiary: the value estimator.** "What is my gold worth?" is the question every single
visitor arrives with. A calculator that answers it honestly is both the strongest trust
device on the site and the most natural lead capture point.

---

## 4. Customer anxieties (ranked)

These drive the design more than any aesthetic decision.

1. **"They'll lowball me."** — The dominant fear. Answered by: live spot price shown
   publicly, the melt-value maths shown openly, weighing in front of the customer.
2. **"How do I know the scale is honest?"** — Answered by: the scale itself made visible,
   the weighing described as a procedure, ideally a photo of the actual calibrated scale.
3. **"Is it safe to let a stranger into my home?"** — Answered by: a named human with a
   face, a licence number, local roots, the option to meet in a public place.
4. **"I don't know what I have."** — Answered by: karat/hallmark education, the estimator,
   explicit "bring everything, we'll sort it" copy.
5. **"They'll pressure me."** — Answered by: "free quote, no obligation, walk away" stated
   plainly and repeatedly.
6. **"Will they even speak to me?"** — Answered by: Spanish as a first-class path.
7. **"Is this legal?"** — Answered by: licence number (C-2), the Maryland regulatory
   framework acknowledged rather than hidden.

---

## 5. Buying motivations

- Immediate cash need — rent, bills, an emergency.
- Gold is at a historic high. People who have been sitting on jewellery for years are
  motivated to act **now**. This is a real, current market tailwind worth reflecting.
- Decluttering an estate; broken jewellery with no sentimental use.
- Convenience — no travelling, no waiting rooms, no mailing valuables away.

---

## 6. Actual differentiators

Only claims that are true and defensible:

| Differentiator | Why it is real |
|---|---|
| **Mobile — we come to you** | Structural. Competitors are storefronts. |
| **Weighed and tested in front of you** | A procedure, not a promise. Ownable. |
| **Priced from the live market, shown publicly** | The site literally displays live spot. Very few local competitors do. |
| **No storefront overhead** | An actual economic argument for paying more — not a slogan. |
| **Bilingual, genuinely** | Full parallel Spanish site, not a translate widget. |
| **Hyattsville-based** | Local, not a franchise. Named neighbourhoods, real streets. |
| **Same-day cash** | Concrete, verifiable at the point of transaction. |

---

## 7. Trade vocabulary

Use these words. They are how someone who does this work actually speaks. Their presence
signals competence to the estate seller and reassures the necessity seller.

**Weight:** troy ounce, pennyweight (dwt), gram, grain
**Purity:** 10K, 14K, 18K, 22K, 24K, .925 sterling, .999 fine, .9999, hallmark, purity stamp
**Assessment:** acid test, touchstone, XRF analyser, specific gravity, magnet test, assay
**Market:** spot price, melt value, bid/ask, premium over spot, London fix
**Material:** scrap, bullion, rounds, junk silver, 90% silver, estate jewellery, dental gold,
gold-filled, rolled gold, plated, karat gold vs. gold-tone

**Critical distinction to teach:** gold-filled and plated are not gold. Explaining this
honestly — including telling someone their piece is worth little — is the single most
credible thing this business can do in public.

---

## 8. Visual direction — "THE OPEN SCALE"

### The concept

A balance scale does one thing: it makes value **visible and undeniable**. It cannot be
argued with. That is the entire brand.

So the site is not decorated with a scale icon. The site is **built as one.**

- Compositions resolve as **two masses balancing across a fulcrum** — the thing you have
  on one side, what it is worth on the other. Asymmetric, but visibly in equilibrium.
- **Numbers are the hero.** Weights, karats, spot prices, dollar figures — set enormous,
  in tabular figures, treated as the primary display element rather than as data.
- **Nothing is hidden.** No content behind interaction. The maths is shown, not summarised.

### The anti-pattern this must avoid

Every competitor in this trade makes the same mistake: **they drown the page in gold.**
Gold gradients, gold glows, gold everything. It reads as cheap, and worse, it reads as a
scam — the exact signal this business must not send.

**Fairweight inverts it. Gold is rationed.** The page is graphite, bone and steel. Gold
appears only where it means something: the live price, the primary CTA, the active state.

Restraint is the trust signal. A business confident in its numbers does not need to shout
in gold leaf.

### Brutalist seasoning (~15%)

- **Struck hallmarks.** Purity marks (`.999`, `14K`, `925`) set as small, hard-edged,
  stamped typographic artifacts in the margins and as section markers. Precise, tiny,
  unapologetic — like a mark punched into metal.
- **Oversized numerals** for spot prices and weights, allowed to break the grid.
- **Hard rules and exposed structure** — visible baselines, unrounded corners on data
  surfaces, borders that behave like the edge of a bar rather than a card.
- **Tabular data treated as design**, not chrome. The ticker is identity, not a widget.

---

## 9. Colour logic

Derived from the physical materials, not from "premium website" convention.

| Role | Direction | Reasoning |
|---|---|---|
| **Dark neutral** | Deep near-black, warm cast | Current `#15110a` is a sound instinct — a vault, not a tech startup. Keep the warmth. |
| **Light neutral** | Bone / uncoated paper | The colour of an assay certificate, not `#ffffff`. |
| **Primary — gold** | Desaturated toward brass/ochre | The colour of *unpolished 14K*, not of a gradient. Metal, not glitter. |
| **Structural — silver** | Cool grey | Actual `.925` colour. Carries rules, borders, secondary type. |
| **Signal — market** | Green / red | Reserved exclusively for live price movement. |

**The key decision:** gold is the *brand* colour but green/red is the *data truth* colour.
Separating them means the live ticker reads as real market data rather than as decoration —
which is precisely the credibility the business needs.

Gold's jobs, and only these: primary CTA, the live spot figure, active nav state, the
struck hallmark marks. Nothing else.

All pairings must clear WCAG 2.2 AA. Gold on near-black needs verification — many
"premium gold" tones fail badly on contrast.

---

## 10. Typography logic

Current stack is Cormorant Garamond + Jost. Cormorant is a reasonable instinct — it
reaches for the heirloom register — but it is delicate where this business needs
authority, and Jost is a Futura revival that reads fashion-adjacent rather than
trustworthy.

### Proposed

**Display — engraved authority.** A high-contrast serif with banknote and certificate
DNA. Currency, share certificates and assay documents all share this lettering
tradition, and it is exactly the register a precious-metals buyer should occupy.
Candidate: **Bodoni Moda**. Alternative if it reads too cold: **Fraunces**, which keeps
the authority but adds a worked, hand-cut warmth.

**Body and data — instrument precision.** This site is made of numbers, so proper
**tabular figures are a hard requirement, not a nicety.** A typeface designed for
technical and data contexts, whose faintly mechanical quality reads as *measuring
instrument* — literally the trade. Candidate: **IBM Plex Sans**, with **IBM Plex Mono**
from the same superfamily carrying the struck hallmark marks and ticker figures.

Two families. The mono is a same-superfamily utility, not a third voice.

Explicitly rejected: Inter, Poppins, Montserrat, Roboto. None of them mean anything here.

---

## 11. Motion concept — "SETTLE"

One signature behaviour, derived from the trade: **a balance beam coming to rest.**

When paired elements enter, they do not fade up. They **settle** — converging on a shared
baseline with damped physical easing, a slight overshoot, then rest. The motion of weight
finding equilibrium.

Applied:

- **Hero:** the live spot figure and its counterweight settle into balance.
- **Section entries:** paired masses converge to a shared baseline rather than fading.
- **Price ticker:** figures roll and settle; they never pop.
- **CTA hover/press:** a small downward give, like pressure on a stamp.
- **Hallmark marks:** the counterpoint — these do not settle, they are **struck.** Fast,
  hard, a tiny scale-down, no fade. Instant. This is the brutalist beat in motion.

Constraints: transform and opacity only, must survive on a mid-range Android, must fully
honour `prefers-reduced-motion`, must never delay or obstruct a CTA.

---

## 12. Navigation strategy

The existing structure is already sound and within the 5–7 rule:

`Home · Live Prices · What We Buy · About · Service Area · Contact` + language toggle

Changes:

- **Live Prices earns its prominence.** It is simultaneously the strongest trust device
  and a genuine traffic magnet. Keep it high.
- **Service Area becomes a proper hub** for the 12 cities rather than a flat list.
- **The language toggle must be unmissable.** For segment A it is not a preference, it is
  the difference between a lead and a bounce. Currently it is a small `ES` chip.
- **Mobile:** persistent `Call | Free Quote` bar. Non-negotiable for a phone-first audience.
- **A proof destination is missing** — blocked entirely on assets (C-8). Do not build a
  gallery until real photography exists. An empty or stock-filled gallery is worse than none.

Navigation must answer, above the fold: *what they buy, where they come, why they can be
trusted, and how to reach them in one tap.*

---

## 13. Site architecture

```
/                        Home                     /es
/prices                  Live Prices              /es/precios
/buy                     What We Buy              /es/que-compramos
/about                   About                    /es/nosotros
/area                    Service Area (hub)       /es/area
/area/[city]  ← proposed move from /sell-gold/[city]
/contact                 Contact / Free Quote     /es/contacto
```

Full EN/ES parity is preserved. 12 cities × 2 languages = 24 location pages.

**Doorway-page risk is real but currently survivable.** The existing city copy is
individually written, names actual streets and neighbourhoods, and differs meaningfully
between cities. It must be audited page by page against Section 18 — any city whose page
is only a name swap gets consolidated or genuinely improved, not published for URL volume.

---

## 14. SEO architecture

**Primary intents (EN):** `sell gold [city]`, `gold buyer near me`, `cash for gold [city]`,
`sell silver [city]`, `where to sell gold jewelry`

**Primary intents (ES):** `vender oro [ciudad]`, `compro oro cerca de mí`,
`dónde vender oro`, `comprador de oro`

**The Spanish opportunity is the single largest under-served channel here.** Very few
local competitors run a genuine parallel Spanish site, and the target communities are
substantially Spanish-first. This is a structural advantage that should be pressed hard.

**Live Prices is the top-of-funnel asset.** "Gold price today" style intent brings people
who are not yet ready to sell, and the page converts them by demonstrating competence.

---

## 15. Lead conversion strategy

1. **Phone, everywhere.** Header, hero, sticky mobile bar, every section break, footer.
   One tap, always visible, never buried.
2. **A real form that actually captures.** Name, phone, email, area, what they have,
   preferred contact method — stored server-side, with validation, honeypot, success
   state and analytics events. Replaces the current SMS hand-off (finding F-1).
3. **Photo upload.** Enormously valuable in this trade — lets a piece be pre-assessed
   before anyone drives anywhere, and qualifies the lead.
4. **The estimator as the hook.** Answer "what is it worth?" honestly and the trust is
   won before contact is ever made.
5. **Spanish path in parallel** at every one of these points.

Explicitly rejected: pop-ups, countdowns, fake scarcity, forced chat. This business sells
calm. Desperate conversion tactics would actively destroy the one thing it has.

---

## 16. Findings in the existing build

| ID | Finding | Severity |
|---|---|---|
| **F-1** | The quote form captures nothing. It builds an SMS body and hands off to the device's messaging app. If the customer does not press send, the lead is invisible — Fairweight never learns it existed. No validation, honeypot, success state, attribution or analytics. | **Critical** |
| **F-2** | The SMS URI is `sms:+12408259001&body=…`. The first parameter separator should be `?`. On Android this commonly fails to prefill, and may fail to open correctly — on the exact devices segment A is most likely to use. | **Critical** |
| **F-3** | Title and hero claim "We Buy & Sell", but every page, the nav and the schema describe only buying. Either selling is a real service and is entirely missing, or the claim is inaccurate and should be dropped. (C-6) | **High** |
| **F-4** | Zero real photography. Three stock-style bullion PNGs and five leftover Next.js template SVGs. For a trust-driven trade this is the largest single credibility gap on the site. | **High** |
| **F-5** | The phone number is hard-coded in 22 files. Section 14 requires one source of truth. A number change today means 22 edits and near-certain NAP drift. | **High** |
| **F-6** | No email address exists anywhere. (C-1) | **Medium** |
| **F-7** | Bullion images are PNG at 118–235 KB. Should be AVIF/WebP with responsive sizes. | **Medium** |
| **F-8** | `sameAs` is empty — no Google Business Profile, no social. For local SEO this is the highest-leverage missing item. (C-4) | **Medium** |
| **F-9** | Dead template assets shipping in `public/`: `next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`. | **Low** |

### Added after cross-check with the parallel session

Two live defects that this brief originally missed. Both were verified directly
against the running site and both are now fixed.

| ID | Finding | Status |
|---|---|---|
| **F-10** | **Fabricated spot prices.** `Header.js` held `FALLBACK = { XAU: 4400, XAG: 75, XPT: 2000, XPD: 1300 }` and rendered those as the live quote whenever the price fetch failed, with a change of `0` and no indication anything was wrong. Gold sits near $4,456 today, so $4,400 was plausible enough that no visitor would question it. A customer could price their gold off an invented number on the site of a business whose entire promise is honest pricing. | ✅ **Fixed** — an unavailable quote now renders as `—`, never as a number. |
| **F-11** | **Placeholder owner name shipped live.** `Your Brother's Name` / `El Nombre de su Hermano` appeared under "Founder & Buyer" on 5 files across both languages, beneath the line "You deal directly with me — not a salesperson." | ⛔ **Blocked** — needs the real name (C-9). |

**C-9 — the owner's real name.** Cannot be invented, and cannot be guessed from the
account records: the company Google account reads *Jonathan Renderos*, the Vercel
display name reads *David*, and the placeholder itself says *brother*. Must be confirmed.

---

## 17. What must be answered before build

Design work can proceed on everything above. **Publication** is blocked on:

- **C-2 (licence number)** — the strongest available trust asset, and a likely legal
  requirement to display.
- **C-6 (buy vs. sell)** — determines the site's core positioning and every headline.
- **C-8 (photography)** — determines whether a proof section can exist at all.
- **C-1 (email)** — required by the footer, contact page and structured data.

Everything else can ship with the claim omitted rather than invented.
