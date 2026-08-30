import Link from 'next/link';

import { BUSINESS, telHref } from '@/lib/business';
export const metadata = {
  title: 'Qué Compramos — Oro, Plata y Platino',
  description: `Fairweight compra oro, plata y platino en cualquier forma — monedas, lingotes, joyas, cadenas, chatarra y piezas rotas — en toda Maryland. Llame o texto ${BUSINESS.phone.display}.`,
  alternates: { canonical: '/es/que-compramos', languages: { 'en-US': '/buy', 'es-US': '/es/que-compramos', 'x-default': '/buy' } },
};

const GALLERY = [
  ['Monedas y Lingotes', 'Eagles · Krugerrands · Barras'],
  ['Joyas y Cadenas', 'Anillos · Collares · Pulseras'],
  ['Viejo y Roto', 'Chatarra · Aretes sueltos · Dental'],
  ['Plata y Cubiertos', 'Esterlina · Juegos · Monedas'],
];

const VERIFY = [
  'Pureza probada y confirmada antes de cualquier oferta',
  'Pesado abiertamente en una balanza calibrada',
  'Valorado al precio spot en vivo — mostrado a usted',
  'Sin presión, sin sorpresas, pagado en efectivo',
];

export default function QueCompramosEs() {
  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">Qué Compramos</span>
        <h1>Oro y plata, <span className="gold-text">en cualquier forma</span></h1>
        <p>Desde una sola cadena rota hasta una herencia completa — tráigalo. Compramos oro, plata y platino en toda condición, nuevo o viejo.</p>
        <div className="ornament"><i /><span className="dia" /><i /></div>
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

      <section className="band light" id="buy">
        <div className="wrap">
          <div className="gallery-grid">
            {GALLERY.map(([cap, sub]) => (
              <div key={cap} className="gphoto reveal">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', border: '1px solid var(--line)', color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>FOTO</div>
                <span className="cap">{cap}<small>{sub}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band precision" id="precision">
        <div className="wrap precision-grid">
          <div className="precision-plate reveal">
            <span className="gk-border" aria-hidden="true" />
            <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>FOTO</div>
          </div>
          <div className="precision-copy reveal">
            <span className="deco-label">Probado y Transparente</span>
            <h2 className="section-title">Pesado y verificado<br /><span className="gold-text">frente a usted</span></h2>
            <p className="lede">Sin adivinanzas y sin trucos. Probamos la pureza de sus artículos y los pesamos en una balanza calibrada frente a usted, luego valoramos todo al precio spot en vivo — así usted ve exactamente cómo se calcula su oferta.</p>
            <ul className="precision-list">
              {VERIFY.map((item) => (
                <li key={item}>
                  <span className="pc-check"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span> {item}
                </li>
              ))}
            </ul>
            <div className="bullion-actions" style={{ marginTop: 28 }}>
              <a className="btn-gold" href={telHref()}>Cotización Gratis</a>
              <Link className="btn-ghost" href="/es/precios">Estimar Valor</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band light">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Cómo Funciona</span>
            <h2 className="section-title">Tres pasos simples</h2>
            <div className="ornament"><i /><span className="dia" /><i /></div>
          </div>
          <div className="steps">
            {[
              ['01', 'Contáctenos', `Llame o texto al ${BUSINESS.phone.display} y díganos qué tiene.`],
              ['02', 'Vamos a Usted', 'Lo encontramos, pesamos sus artículos abiertamente, y damos una cotización justa.'],
              ['03', 'Reciba Efectivo', 'Acepte la oferta y váyase con efectivo en mano — la misma visita.'],
            ].map(([n, h, p]) => (
              <div key={n} className="step reveal">
                <span className="num">{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
