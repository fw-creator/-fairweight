import { BUSINESS, telHref } from '@/lib/business';
export const metadata = {
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/about',
      'es-US': '/es/nosotros',
      'x-default': '/about',
    },
  },
  title: 'About — Honest Weight, Fair Dealings',
  description: `Fairweight is the DMV mobile gold and silver buyer, built on honest weight and fair dealings. Learn our story. Call or text ${BUSINESS.phone.display}.`,
};

const SCALES = (
  <svg className="scales" width="38" height="38" viewBox="0 0 48 31">
    <circle cx="24" cy="3" r="1.5"/><line x1="24" y1="4.4" x2="24" y2="24"/>
    <line x1="8" y1="9" x2="40" y2="9"/><circle cx="24" cy="9" r="1.3"/>
    <path d="M8 9 L4 16"/><path d="M8 9 L12 16"/><path d="M3.4 16 a4.6 4.6 0 0 0 9.2 0 Z"/>
    <path d="M40 9 L36 16"/><path d="M40 9 L44 16"/><path d="M35.4 16 a4.6 4.6 0 0 0 9.2 0 Z"/>
    <line x1="18" y1="24" x2="30" y2="24"/><line x1="20" y1="27" x2="28" y2="27"/>
  </svg>
);

const Photo = ({ label }) => (
  <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>{label}</div>
);

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">About Fairweight</span>
        <h1>Built on trust, <span className="gold-text">driven by integrity</span></h1>
        <p>Fairweight was founded on a simple principle: an honest scale and a fair price. We bring transparency to buying and selling gold &amp; silver &mdash; and we come to you.</p>
      </section>

      <section className="band light">
        <div className="wrap story-grid">
          <div className="story-media reveal">
            <span className="gk-border" aria-hidden="true" />
            <Photo label="PHOTO" />
          </div>
          <div className="story-copy reveal">
            <span className="deco-label">Who We Are</span>
            <h2 className="section-title">A fair deal,<br /><span className="gold-text">every time</span></h2>
            <p>Fairweight is the DMV&rsquo;s mobile gold &amp; silver buyer. We started Fairweight because too many people walk away from a sale unsure whether they got a fair shake. We do it differently &mdash; we weigh everything in front of you, explain exactly how the offer is built from the live market price, and never pressure anyone.</p>
            <p>Whether it&rsquo;s a single broken chain or an entire estate, you get the same honest treatment, a free quote, and same-day cash. No storefront markups, no games &mdash; just fair dealings, brought to your door.</p>
            <div className="meet">
              <div className="portrait">
                <span className="gk-border" aria-hidden="true" />
                <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '3/4', color: 'var(--muted)', fontSize: '0.62rem', letterSpacing: '0.1em' }}>PHOTO</div>
              </div>
              <div className="meet-who">
                <span className="eyebrow-sm">Meet Your Buyer</span>
                <h4>Jonathan Renderos</h4>
                <span className="role">Founder &amp; Buyer</span>
                <p>You deal directly with me &mdash; not a salesperson. Honest assessments, fair prices, and I come to you anywhere in the DMV.</p>
              </div>
            </div>
          </div>
        </div>
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

      <section className="band alt" id="why">
        <div className="wrap why-grid">
          <div className="why-aside reveal">
            <span className="deco-label">Why Choose Fairweight</span>
            <h2 className="section-title">&amp; most important,<br /><span className="gold-text">we are fair.</span></h2>
            <p className="lede">No pressure, no games &mdash; just straightforward dealings you can trust, backed by an honest scale and a fair price.</p>
            <div className="seal">
              <span className="scales-wrap" aria-hidden="true">{SCALES}</span>
              <span><span className="t1">Honest Weight.<br />Fair Dealings.</span><span className="t2">Our Promise</span></span>
            </div>
          </div>
          <div className="why-list">
            {[
              { h: 'Free in-person quotes', p: 'We assess your items on the spot at no cost, with zero obligation to sell.' },
              { h: 'Honest & fair pricing', p: 'Transparent weighing and competitive rates based on real, current value.' },
              { h: 'Mobile across the DMV', p: 'We travel to you — convenient, private, and on your schedule.' },
              { h: 'Instant cash payment', p: 'Get paid in full, in cash, the moment you accept our offer.' },
            ].map(({ h, p }) => (
              <div key={h} className="why-item reveal">
                <span className="check">
                  <svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg>
                </span>
                <div><h4 dangerouslySetInnerHTML={{ __html: h }} /><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band light" id="stats">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Why People Call Us</span>
            <h2 className="section-title">The Fairweight promise</h2>
          </div>
          <div className="stats-grid reveal">
            {[
              { big: '100%', lbl: 'Honest Weight', sub: 'Weighed in front of you' },
              { big: '$0', lbl: 'In-Person Quotes', sub: 'Always free, no obligation' },
              { big: 'Same-Day', lbl: 'Cash Paid', sub: 'The moment you accept' },
              { big: 'All DMV', lbl: 'We Come To You', sub: 'MD · DC · VA' },
            ].map(({ big, lbl, sub }) => (
              <div key={lbl} className="stat">
                <div className="big">{big}</div>
                <div className="lbl">{lbl}</div>
                <div className="sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scripture">
        <div className="wrap inner reveal">
          <span className="scales-lg" aria-hidden="true">
            <svg className="scales" width="58" height="58" viewBox="0 0 24 24"><path d="M12 6.2C10 4.6 7 4.4 4 5v13c3-.6 6-.4 8 1.2"/><path d="M12 6.2C14 4.6 17 4.4 20 5v13c-3-.6-6-.4-8 1.2"/><line x1="12" y1="6.2" x2="12" y2="19.2"/><path d="M6.4 8.4c1.4-.3 2.8-.3 3.8.2M6.4 11c1.4-.3 2.8-.3 3.8.2M13.8 8.6c1-.5 2.4-.5 3.8-.2M13.8 11.2c1-.5 2.4-.5 3.8-.2"/></svg>
          </span>
          <span className="scripture-label">Proverbs 11:1</span>
          <blockquote>&ldquo;A false balance is abomination to the Lord: but a <span className="gold-text">just weight</span> is his delight.&rdquo;</blockquote>
          <cite>Honest Weight &middot; Fair Dealings</cite>
        </div>
      </section>
    </>
  );
}
