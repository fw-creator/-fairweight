import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import { FAQS_ES, faqSchema } from '@/lib/faqs';

import { BUSINESS, telHref } from '@/lib/business';
export const metadata = {
  title: `Contacto — Llame o Texto ${BUSINESS.phone.display}`,
  description: `Reciba una cotización gratis y sin compromiso de Fairweight. Comprador móvil de oro y plata en Maryland. Llame o texto ${BUSINESS.phone.display} para efectivo el mismo día. Hablamos español.`,
  alternates: { canonical: '/es/contacto', languages: { 'en-US': '/contact', 'es-US': '/es/contacto', 'x-default': '/contact' } },
};

export default function ContactoEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS_ES)) }} />
      <section className="page-hero">
        <span className="deco-label center">Contáctenos</span>
        <h1>Reciba una <span className="gold-text">cotización gratis</span></h1>
        <p>Llámenos o envíe un texto y vamos a usted con una cotización justa, sin presión — efectivo el mismo día, en toda Maryland.</p>
      </section>

      <section className="mobile-strip">
        <div className="wrap">
          <span className="ms-ic">
            <svg viewBox="0 0 24 24"><path d="M2 7h11v8H2z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="6" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
          </span>
          <span className="ms-text">
            <strong>Vamos a Usted &mdash; Sin Tienda Necesaria</strong>
            <span>Compra de oro y plata totalmente móvil en toda Maryland. Cotizaciones gratis en su puerta.</span>
          </span>
          <a className="ms-cta" href={telHref()}>Llame o Texto {BUSINESS.phone.display}</a>
        </div>
      </section>

      <section className="band light" id="quote">
        <div className="wrap quote-grid">
          <div className="quote-aside reveal">
            <span className="deco-label">Sin Compromiso</span>
            <h2 className="section-title">Díganos qué tiene</h2>
            <p className="lede">¿No sabe cuánto valen sus artículos? Envíe unos detalles y le respondemos con un estimado gratis, sin presión — o solo llámenos ahora.</p>
            <ul className="quote-points">
              {['Evaluación gratis, sin compromiso', 'Respondemos rápido — usualmente el mismo día', 'Efectivo el mismo día, en toda Maryland'].map((t) => (
                <li key={t}>
                  <span className="qd"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span> {t}
                </li>
              ))}
            </ul>
            <div className="quote-phone">
              <span className="small">Llame o Texto</span>
              <a href={telHref()}>{BUSINESS.phone.display}</a>
            </div>
          </div>
          <QuoteForm lang="es" />
        </div>
      </section>

      <section className="band alt" id="faq">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">¿Tiene Preguntas?</span>
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <FaqAccordion lang="es" />
        </div>
      </section>

      <section className="contact">
        <div className="wrap reveal">
          <span className="deco-label center">Cuando Esté Listo</span>
          <h2 style={{ marginTop: 18 }}>Convierta oro y plata<br />en <span className="gold-text">efectivo hoy</span></h2>
          <p className="sub">Llámenos o envíe un texto — vamos a usted con una cotización justa, sin presión.</p>
          <a className="phone-btn" href={telHref()}>
            <span className="label">Llame o Texto</span>
            <span className="number">{BUSINESS.phone.display}</span>
          </a>
          <p className="loc">Hyattsville, MD &middot; Sirviendo Maryland y el área</p>
        </div>
      </section>
    </>
  );
}
