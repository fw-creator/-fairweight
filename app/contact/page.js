import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import { FAQS_EN, faqSchema } from '@/lib/faqs';

import { BUSINESS, telHref } from '@/lib/business';
export const metadata = {
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/contact',
      'es-US': '/es/contacto',
      'x-default': '/contact',
    },
  },
  title: `Contact — Call or Text ${BUSINESS.phone.display}`,
  description: `Get a free, no-obligation quote from Fairweight. Mobile gold and silver buyer serving the DMV. Call or text ${BUSINESS.phone.display} for same-day cash.`,
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS_EN)) }} />
      <section className="page-hero">
        <span className="deco-label center">Get In Touch</span>
        <h1>Get a <span className="gold-text">free quote</span></h1>
        <p>Call or text us and we will come to you with a fair, no-pressure quote &mdash; same-day cash, anywhere in the DMV.</p>
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

      <section className="band light" id="quote">
        <div className="wrap quote-grid">
          <div className="quote-aside reveal">
            <span className="deco-label">No Obligation</span>
            <h2 className="section-title">Tell us what you have</h2>
            <p className="lede">Not sure what your items are worth? Send a few details and we will get back to you with a free, no-pressure estimate &mdash; or just call us now.</p>
            <ul className="quote-points">
              {['Free evaluation, no commitment', 'We respond fast — usually same day', 'Same-day cash, anywhere in the DMV'].map((t) => (
                <li key={t}>
                  <span className="qd"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span> {t}
                </li>
              ))}
            </ul>
            <div className="quote-phone">
              <span className="small">Call or Text</span>
              <a href={telHref()}>{BUSINESS.phone.display}</a>
            </div>
            <div className="meet">
              <div className="portrait">
                <span className="gk-border" aria-hidden="true" />
                <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '3/4', color: 'var(--muted)', fontSize: '0.62rem', letterSpacing: '0.1em' }}>PHOTO</div>
              </div>
              <div className="meet-who">
                <span className="eyebrow-sm">Meet Your Buyer</span>
                <h4>Jonathan Renderos</h4>
                <span className="role">Founder &amp; Buyer</span>
                <p>When you reach out, you deal directly with me &mdash; not a salesperson. I come to you anywhere in the DMV.</p>
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="band alt" id="faq">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Got Questions?</span>
            <h2 className="section-title">Frequently asked questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <section className="contact">
        <div className="wrap reveal">
          <span className="deco-label center">Ready When You Are</span>
          <h2 style={{ marginTop: 18 }}>Turn gold &amp; silver<br />into <span className="gold-text">cash today</span></h2>
          <p className="sub">Call or text us &mdash; we will come to you with a fair, no-pressure quote.</p>
          <a className="phone-btn" href={telHref()}>
            <span className="label">Call or Text</span>
            <span className="number">{BUSINESS.phone.display}</span>
          </a>
          <p className="loc">Hyattsville, MD &middot; Serving the DMV</p>
        </div>
      </section>
    </>
  );
}
