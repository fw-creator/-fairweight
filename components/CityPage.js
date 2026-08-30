import Link from 'next/link';

import { BUSINESS, telHref } from '@/lib/business';
const T = {
  en: {
    eyebrow: 'Maryland · We Come To You',
    h1a: 'Sell Gold & Silver in',
    sub: 'Honest weight, fair prices, same-day cash — anywhere in',
    callBtn: `Call or Text: ${BUSINESS.phone.display}`,
    quoteBtn: 'Get a Free Quote',
    weBuyTitle: 'What we buy in',
    weBuy: ['Gold jewelry & chains', 'Gold & silver coins', 'Bullion bars & rounds', 'Broken & scrap gold', 'Sterling silver & flatware', 'Platinum & dental gold'],
    howTitle: 'How it works',
    steps: [
      ['Call or text', `Tell us what you have at ${BUSINESS.phone.display}.`],
      ['We come to you', 'We meet you and weigh everything openly.'],
      ['Get paid cash', 'Accept the offer and walk away with cash.'],
    ],
    nearbyTitle: 'Also serving nearby',
    ctaTitle: 'Ready for a fair offer in',
    ctaSub: 'Call or text — we come to you with a free, no-pressure quote.',
    backArea: 'See our full service area',
  },
  es: {
    eyebrow: 'Maryland · Vamos a Usted',
    h1a: 'Compramos Oro y Plata en',
    sub: 'Peso honesto, precios justos, efectivo el mismo día — en todo',
    callBtn: `Llame o Texto: ${BUSINESS.phone.display}`,
    quoteBtn: 'Cotización Gratis',
    weBuyTitle: 'Qué compramos en',
    weBuy: ['Joyas y cadenas de oro', 'Monedas de oro y plata', 'Lingotes y barras', 'Oro roto y chatarra', 'Plata esterlina y cubiertos', 'Platino y oro dental'],
    howTitle: 'Cómo funciona',
    steps: [
      ['Llame o texto', `Díganos qué tiene al ${BUSINESS.phone.display}.`],
      ['Vamos a usted', 'Lo encontramos y pesamos todo abiertamente.'],
      ['Reciba efectivo', 'Acepte la oferta y váyase con su dinero.'],
    ],
    nearbyTitle: 'También servimos cerca',
    ctaTitle: '¿Listo para una oferta justa en',
    ctaSub: 'Llame o texto — vamos a usted con una cotización gratis, sin presión.',
    backArea: 'Vea toda nuestra área de servicio',
  },
};

export default function CityPage({ city, lang = 'en' }) {
  const t = T[lang];
  const c = city[lang];
  const areaHref = lang === 'es' ? '/es/area' : '/area';

  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">{t.eyebrow}</span>
        <h1>{t.h1a} <span className="gold-text">{city.name}</span></h1>
        <p>{t.sub} {city.name}, {city.county}. {c.lede}</p>
        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 28 }}>
          <a className="btn-gold" href={telHref()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            {t.callBtn}
          </a>
        </div>
        <div className="ornament" style={{ marginTop: 30 }}><i /><span className="dia" /><i /></div>
      </section>

      <section className="mobile-strip">
        <div className="wrap">
          <span className="ms-ic">
            <svg viewBox="0 0 24 24"><path d="M2 7h11v8H2z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="6" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
          </span>
          <span className="ms-text">
            <strong>{city.name}</strong>
            <span>{c.body}</span>
          </span>
          <a className="ms-cta" href={telHref()}>{BUSINESS.phone.display}</a>
        </div>
      </section>

      <section className="band light">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">{t.weBuyTitle} {city.name}</span>
            <h2 className="section-title">{c.lede}</h2>
          </div>
          <div className="cards-4">
            {t.weBuy.map((item) => (
              <div key={item} className="card reveal" style={{ alignItems: 'flex-start' }}>
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span>
                <h3 style={{ fontSize: '1.2rem' }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">{t.howTitle}</span>
          </div>
          <div className="steps">
            {t.steps.map(([h, p], i) => (
              <div key={h} className="step reveal">
                <span className="num">{`0${i + 1}`}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="wrap reveal">
          <span className="deco-label center">{t.nearbyTitle}</span>
          <p className="sub" style={{ marginTop: 14 }}>{c.nearby}</p>
          <h2 style={{ marginTop: 28 }}>{t.ctaTitle} <span className="gold-text">{city.name}?</span></h2>
          <p className="sub">{t.ctaSub}</p>
          <a className="phone-btn" href={telHref()}>
            <span className="label">{lang === 'es' ? 'Llame o Texto' : 'Call or Text'}</span>
            <span className="number">{BUSINESS.phone.display}</span>
          </a>
          <p className="loc"><Link href={areaHref} style={{ color: 'var(--gold)' }}>{t.backArea} →</Link></p>
        </div>
      </section>
    </>
  );
}
