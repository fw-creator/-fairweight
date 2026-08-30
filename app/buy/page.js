import Link from 'next/link';

import { BUSINESS, telHref } from '@/lib/business';
export const metadata = {
  alternates: {
    canonical: '/buy',
    languages: {
      'en-US': '/buy',
      'es-US': '/es/que-compramos',
      'x-default': '/buy',
    },
  },
  title: 'What We Buy — Gold, Silver & Platinum',
  description: `Fairweight buys gold, silver and platinum in any form — coins, bullion, jewelry, chains, scrap and broken pieces — across the DMV. Call or text ${BUSINESS.phone.display}.`,
};

const GALLERY = [
  { cap: 'Coins & Bullion', sub: 'Eagles · Krugerrands · Bars' },
  { cap: 'Jewelry & Chains', sub: 'Rings · Necklaces · Bracelets' },
  { cap: 'Old & Broken', sub: 'Scrap · Single earrings · Dental' },
  { cap: 'Silver & Flatware', sub: 'Sterling · Sets · Coins' },
];

const VERIFY = [
  'Purity tested & confirmed before any offer',
  'Weighed openly on a calibrated scale',
  'Priced from the live spot rate — shown to you',
  'No pressure, no surprises, paid in cash',
];

const PhotoPlate = () => (
  <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>PHOTO</div>
);

export default function BuyPage() {
  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">What We Buy</span>
        <h1>Gold &amp; silver, <span className="gold-text">in any form</span></h1>
        <p>From a single broken chain to an entire estate &mdash; bring it on. We buy gold, silver and platinum in every condition, new or old.</p>
        <div className="ornament"><i /><span className="dia" /><i /></div>
      </section>

      <section className="mobile-strip">
        <div className="wrap">
          <span className="ms-ic">
            <svg viewBox="0 0 24 24"><path d="M2 7h11v8H2z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="6" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
          </span>
          <span className="ms-text">
            <strong>We Come To You &mdash; No Storefront Needed</strong>
            <span>Fully mobile gold &amp; silver buying across the entire DMV. Free in-person quotes at your door.</span>
          </span>
          <a className="ms-cta" href={telHref()}>Call or Text {BUSINESS.phone.display}</a>
        </div>
      </section>

      <section className="band light" id="buy">
        <div className="wrap">
          <div className="gallery-grid">
            {GALLERY.map(({ cap, sub }) => (
              <div key={cap} className="gphoto reveal">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', border: '1px solid var(--line)', color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>PHOTO</div>
                <span className="cap">{cap}<small>{sub}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt" id="bullion">
        <div className="wrap bullion-grid">
          <div className="bullion-plate reveal">
            <span className="gk-border" aria-hidden="true" />
            <PhotoPlate />
          </div>
          <div className="bullion-copy reveal">
            <span className="deco-label">Gold Bars &amp; Coins</span>
            <h2 className="section-title">We buy &amp; sell<br /><span className="gold-text">premium bullion</span></h2>
            <p className="lede">From 1&nbsp;oz bars to American Gold Eagles, Krugerrands, and Maple Leafs &mdash; we deal in the world&rsquo;s most trusted gold and silver products. Bring yours in for a live, spot-based offer, or let us help you buy.</p>
            <div className="bullion-actions">
              <a className="btn-gold" href={telHref()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                Sell or Buy Bullion
              </a>
              <Link className="btn-ghost" href="/prices">Estimate Value</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band precision" id="precision">
        <div className="wrap precision-grid">
          <div className="precision-plate reveal">
            <span className="gk-border" aria-hidden="true" />
            <PhotoPlate />
          </div>
          <div className="precision-copy reveal">
            <span className="deco-label">Tested &amp; Transparent</span>
            <h2 className="section-title">Weighed &amp; verified<br /><span className="gold-text">in front of you</span></h2>
            <p className="lede">No guesswork and no sleight of hand. We test your items for purity and weigh them on a calibrated scale right in front of you, then price everything against the live spot rate &mdash; so you see exactly how your offer is calculated.</p>
            <ul className="precision-list">
              {VERIFY.map((item) => (
                <li key={item}>
                  <span className="pc-check"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band light">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">How It Works</span>
            <h2 className="section-title">Three simple steps</h2>
            <div className="ornament"><i /><span className="dia" /><i /></div>
          </div>
          <div className="steps">
            <div className="step reveal">
              <span className="num">01</span>
              <span className="step-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg></span>
              <h3>Contact Us</h3>
              <p>Call or text {BUSINESS.phone.display} and tell us what you have.</p>
            </div>
            <div className="step reveal">
              <span className="num">02</span>
              <span className="step-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg></span>
              <h3>We Come To You</h3>
              <p>We meet you, weigh your items openly, and give a fair quote.</p>
            </div>
            <div className="step reveal">
              <span className="num">03</span>
              <span className="step-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="1.6"/><circle cx="12" cy="12" r="2.7"/></svg></span>
              <h3>Get Paid Cash</h3>
              <p>Accept the offer and walk away with cash in hand &mdash; same visit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
