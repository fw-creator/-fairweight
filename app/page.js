import Image from 'next/image';
import Link from 'next/link';
import Estimator from '@/components/Estimator';
import FaqAccordion from '@/components/FaqAccordion';
import { BUSINESS, telHref } from '@/lib/business';

export const metadata = {
  title: 'Sell Gold & Silver in Silver Spring, MD | Mobile Gold Buyer',
  description: `Fairweight is a mobile gold and silver buyer serving Silver Spring, Maryland. We come to you for transparent evaluations with no pressure or obligation. Call or text ${BUSINESS.phone.display}.`,
  keywords: ['sell gold Silver Spring MD', 'gold buyer Silver Spring', 'cash for gold Silver Spring Maryland', 'silver buyer Silver Spring MD', 'mobile gold buyer Silver Spring', 'sell jewelry Silver Spring'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Fairweight — Mobile Gold & Silver Buyer in Silver Spring, MD',
    description: 'Gold and silver evaluations brought to you in Silver Spring and across Maryland, Northern Virginia, and Washington, DC.',
    url: '/',
  },
};

const BUY_CARDS = [
  { symbol: 'Au', title: 'Gold Jewelry', detail: 'Chains, rings, bracelets and earrings', meta: '10K–24K' },
  { symbol: 'Au', title: 'Broken Gold', detail: 'Snapped chains, single earrings and scrap', meta: 'Any condition' },
  { symbol: 'Ag', title: 'Sterling Silver', detail: 'Jewelry, flatware and household silver', meta: '.925 & coin silver' },
  { symbol: '¢', title: 'Coins', detail: 'Gold and silver coins and collections', meta: 'Single or estate' },
  { symbol: 'Pt', title: 'Platinum', detail: 'Bands, settings and precious-metal scrap', meta: 'Tested on site' },
  { symbol: '◆', title: 'Estate Collections', detail: 'Mixed inherited jewelry reviewed piece by piece', meta: 'No rush' },
];

const SERVICE_AREAS = [
  ['Silver Spring', '/sell-gold/silver-spring'], ['Takoma Park', '/sell-gold/takoma-park'],
  ['Wheaton', '/sell-gold/wheaton'], ['Hyattsville', '/sell-gold/hyattsville'],
  ['College Park', '/sell-gold/college-park'], ['Bowie', '/sell-gold/bowie'],
];

export default function HomePage() {
  return (
    <>
      <section className="home-intro" id="hero">
        <div className="wrap home-intro-inner">
          <div className="home-intro-copy">
            <p className="home-kicker">We Come to You</p>
            <h1>We Buy Gold &amp; Silver<br />in <span>Silver Spring, MD.</span></h1>
            <p className="home-lede">Sell <strong>gold jewelry</strong>, <strong>broken gold</strong>, <strong>sterling silver</strong> and <strong>coins</strong> from the comfort of home. Serving Maryland, Northern Virginia, and Washington, DC.</p>
            <div className="home-actions">
              <Link className="home-primary" href="/contact">Schedule a Private Evaluation</Link>
              <a className="home-secondary" href={telHref()}><PhoneIcon />Call or Text</a>
            </div>
            <div className="hero-trust" aria-label="Fairweight trust highlights">
              <div className="hero-trust-card google-trust"><span className="google-mark" aria-hidden="true">G</span><span><strong aria-label="Five stars">★★★★★</strong><small>Reviews on Google</small></span></div>
              <div className="hero-trust-card testing-trust"><ShieldIcon /><span><strong>Transparent Testing</strong><small>Weighed in front of you</small></span></div>
            </div>
          </div>
          <div className="evaluation-card">
            <Image src="/evaluation-acid-test.png" alt="Fairweight mobile gold buyer testing gold jewelry during a private evaluation in Silver Spring, Maryland" fill priority fetchPriority="high" sizes="(max-width: 760px) calc(100vw - 40px), 540px" quality={88} />
            <span className="come-to-you-badge"><span aria-hidden="true">⌂</span><strong>We Come<br />to You</strong></span>
          </div>
        </div>
      </section>

      <section className="ease-strip" aria-label="Why Fairweight feels easier">
        <div className="wrap ease-grid">
          <div><EyeIcon /><span><strong>Open Testing</strong><small>Watch every item</small></span></div>
          <div><ScaleIcon /><span><strong>Visible Scale</strong><small>The display faces you</small></span></div>
          <div><ShieldIcon /><span><strong>No Obligation</strong><small>You decide</small></span></div>
          <div><PersonIcon /><span><strong>Family-Led</strong><small>Direct local service</small></span></div>
        </div>
      </section>

      <section className="home-section buyer-section">
        <div className="wrap buyer-grid">
          <div className="buyer-mark" aria-hidden="true"><span>FW</span><small>Honest Weight</small></div>
          <div className="buyer-copy"><p className="section-eyebrow">Meet the People Behind Fairweight</p><h2>A local, family-led service.</h2><p>Your appointment is handled directly by <strong>Jonathan or his wife</strong>—and for some evaluations, they come together. You are dealing with the family behind Fairweight, not a commissioned salesperson. Your items are tested openly, the weight is visible, and every part of the offer is explained.</p><div className="buyer-promises"><span>Family-led</span><span>English &amp; Spanish</span><span>No pressure</span></div><Link className="text-link" href="/about">Learn more about Fairweight <span>→</span></Link></div>
        </div>
      </section>

      <section className="home-section buy-section" id="what-we-buy">
        <div className="wrap">
          <SectionHeading eyebrow="What We Buy" title="Gold, silver, broken or forgotten." text="If it contains precious metal, it may still have value. We test every item and explain what you have." />
          <div className="buy-rail" aria-label="Items Fairweight buys">
            {BUY_CARDS.map((item) => <article className="buy-card" key={item.title}><div className="buy-symbol">{item.symbol}</div><span className="buy-meta">{item.meta}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}
          </div>
          <div className="section-actions"><Link className="home-secondary compact" href="/buy">See Everything We Buy</Link><a className="text-link" href={telHref()}>Not sure what you have? Call or text us <span>→</span></a></div>
        </div>
      </section>

      <section className="home-section process-section" id="how-it-works">
        <div className="wrap">
          <SectionHeading eyebrow="Simple From Start to Finish" title="A private gold evaluation in three steps." />
          <div className="process-grid">
            <article><span className="process-num">01</span><h3>Call or Schedule</h3><p>Tell us roughly what you have and choose a convenient time and meeting place.</p></article>
            <article><span className="process-num">02</span><h3>We Test &amp; Weigh</h3><p>Every item is checked in front of you. The scale stays visible throughout the evaluation.</p></article>
            <article><span className="process-num">03</span><h3>You Decide</h3><p>We explain the offer clearly. Accept it or keep your items—there is no obligation.</p></article>
          </div>
          <Link className="home-primary process-cta" href="/contact">Schedule an Evaluation</Link>
        </div>
      </section>

      <section className="home-section estimator-section">
        <div className="wrap">
          <SectionHeading eyebrow="Know Before We Meet" title="See what the live market is doing." text="Use the same current market reference shown in the ticker above. Your final offer depends on purity, weight and the individual item." />
          <Estimator lang="en" />
        </div>
      </section>

      <section className="home-section local-section">
        <div className="wrap local-grid">
          <div className="local-copy"><p className="section-eyebrow">Mobile Gold Buyer Near You</p><h2>Based in Maryland. Serving the wider DMV.</h2><p>Fairweight provides mobile gold and silver evaluations in Silver Spring and communities throughout Maryland, Northern Virginia, and Washington, DC. We meet at your home or another location you prefer.</p><Link className="home-secondary compact" href="/area">View Our Full Service Area</Link></div>
          <div className="city-links" aria-label="Popular service locations">{SERVICE_AREAS.map(([name, href]) => <Link href={href} key={name}><span>{name}</span><span>→</span></Link>)}</div>
        </div>
      </section>

      <section className="home-section faq-section">
        <div className="wrap"><SectionHeading eyebrow="Before You Sell" title="Questions people ask us." text="Straight answers about testing, appointments, items we buy and what happens during an evaluation." /><FaqAccordion lang="en" /></div>
      </section>

      <section className="home-final-cta">
        <div className="wrap"><p className="section-eyebrow">Ready When You Are</p><h2>Find out what your gold is worth.</h2><p>Call, text, or schedule a mobile evaluation in Silver Spring and the surrounding region.</p><div className="home-actions final-actions"><Link className="home-primary" href="/contact">Schedule an Evaluation</Link><a className="home-secondary dark" href={telHref()}><PhoneIcon />{BUSINESS.phone.display}</a></div></div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, text }) { return <div className="home-section-head"><p className="section-eyebrow">{eyebrow}</p><h2>{title}</h2>{text ? <p>{text}</p> : null}</div>; }
function PhoneIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>; }
function ShieldIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>; }
function EyeIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.6"/></svg>; }
function ScaleIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M6 19l1.2-9h9.6l1.2 9M9 10a3 3 0 0 1 6 0"/><path d="m12 10 2-2"/></svg>; }
function PersonIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M5.5 20c.7-4 3-6 6.5-6s5.8 2 6.5 6"/></svg>; }
