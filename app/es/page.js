import Image from 'next/image';
import Link from 'next/link';
import AreaCheck from '@/components/AreaCheck';
import PriceCards from '@/components/PriceCards';
import Estimator from '@/components/Estimator';

import { BUSINESS, telHref } from '@/lib/business';
export const metadata = {
  title: 'Compramos y Vendemos Oro y Plata — Móvil, Maryland',
  description: `Fairweight compra y vende oro y plata en Maryland y el área. Servicio móvil, cotizaciones gratis en persona, peso honesto y efectivo el mismo día. Llame o texto ${BUSINESS.phone.display}. Hablamos español.`,
  alternates: { canonical: '/es', languages: { 'en-US': '/', 'es-US': '/es', 'x-default': '/' } },
};

export default function HomeEs() {
  return (
    <>
      <section className="hero" id="hero" data-hero="photo">
        <div className="hero-bg-grad" aria-hidden="true" />
        <div className="hero-variant v-split-photo">
          <div className="wrap hsp-grid">
            <div className="hsp-copy">
            <span className="deco-label">El Comprador Móvil de Oro y Plata del Área</span>
            <h1>Compra Privada de Oro y Plata, <span className="gold-text">en su Casa.</span></h1>
            <p className="hero-lede">Vamos a su casa o al lugar que usted prefiera, probamos y pesamos sus artículos con usted presente, y le explicamos su oferta con claridad. Sin presión. Sin compromiso.</p>
            <p className="hero-micro">Sirviendo Maryland, Washington DC y el Norte de Virginia</p>
            <div className="hero-actions">
              <Link className="btn-gold" href="/es/contacto">Agende una Evaluación Privada</Link>
              <a className="btn-ghost btn-call" href={telHref()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                <span>Llame o Texto:&nbsp;<span className="num">{BUSINESS.phone.display}</span></span>
              </a>
            </div>
            </div>

            <div className="hsp-frame">
              <Image
                src="/hero-evaluation.png"
                alt="Una cadena de oro, un anillo solitario de diamante y una alianza de oro sobre tela color crema"
                width={1701}
                height={925}
                priority
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 46vw"
                quality={82}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="wrap">
          <ul>
            <li><span className="ts-k">Vamos a Usted</span><span className="ts-d">Su casa, o donde prefiera reunirse.</span></li>
            <li><span className="ts-k">Probado y Pesado Frente a Usted</span><span className="ts-d">La balanza mira hacia usted. Nada pasa fuera de su vista.</span></li>
            <li><span className="ts-k">Oferta Sin Compromiso</span><span className="ts-d">Diga que no y nos damos la mano y nos vamos.</span></li>
            <li><span className="ts-k">Servicio Local</span><span className="ts-d">Con base en Hyattsville, MD.</span></li>
          </ul>
        </div>
      </section>

      <section className="appt-starter">
        <div className="wrap">
          <span className="deco-label">Empiece aquí</span>
          <h2 className="section-title">¿Vamos a su área?</h2>
          <AreaCheck lang="es" />
        </div>
      </section>

      <section className="mobile-strip">
        <div className="wrap">
          <span className="ms-ic">
            <svg viewBox="0 0 24 24"><path d="M2 7h11v8H2z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="6" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
          </span>
          <span className="ms-text">
            <strong>Vamos a Usted &mdash; Sin Tienda Necesaria</strong>
            <span>Compra de oro y plata totalmente móvil en toda Maryland y el área. Cotizaciones gratis en su puerta.</span>
          </span>
          <a className="ms-cta" href={telHref()}>Llame o Texto {BUSINESS.phone.display}</a>
        </div>
      </section>

      <section className="band calc-band">
        <div className="wrap">
          <div className="calc-head">
            <span className="deco-label">¿Cuánto vale?</span>
            <h2 className="section-title">Haga las cuentas antes de que nos veamos.</h2>
            <p className="calc-sub">Calculado con el mismo precio de mercado en vivo que ve arriba.</p>
          </div>
          <Estimator lang="es" />
        </div>
      </section>

      <section className="band light" id="about-intro">
        <div className="wrap story-grid">
          <div className="story-copy reveal">
            <span className="deco-label">Establecidos en Maryland</span>
            <h2 className="section-title">Distribuidores de Confianza.<br /><span className="gold-text">Precios Justos.</span></h2>
            <p>Bienvenido a Fairweight — el comprador móvil de oro y plata de Maryland, con base en Hyattsville. Compramos y vendemos oro, plata y platino con un compromiso de total transparencia, y vamos a usted.</p>
            <p>Pesamos y probamos cada artículo frente a usted, y lo valoramos según el precio del mercado en vivo — sin adivinanzas, sin presión, sin sorpresas. Solo peso honesto y tratos justos.</p>
            <div className="bullion-actions" style={{ marginTop: 30 }}>
              <Link className="btn-gold" href="/es/nosotros">Nuestra Historia</Link>
              <Link className="btn-ghost" href="/es/contacto">Contáctenos</Link>
            </div>
            <div className="meet">
              <div className="portrait">
                <span className="gk-border" aria-hidden="true" />
                <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '3/4', color: 'var(--muted)', fontSize: '0.62rem', letterSpacing: '0.1em' }}>FOTO</div>
              </div>
              <div className="meet-who">
                <span className="eyebrow-sm">Conozca a su Comprador</span>
                <h4>Jonathan Renderos</h4>
                <span className="role">Fundador y Comprador</span>
                <p>Cuando nos contacta, trata directamente conmigo — no con un vendedor. Evaluaciones honestas, precios justos, y voy a usted en toda Maryland.</p>
              </div>
            </div>
          </div>
          <div className="story-media reveal">
            <span className="gk-border" aria-hidden="true" />
            <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>FOTO</div>
          </div>
        </div>
      </section>

      <section className="band alt" id="spot">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Precios en Vivo</span>
            <h2 className="section-title">Precios del metal de hoy</h2>
          </div>
          <PriceCards lang="es" />
          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <Link className="btn-ghost" href="/es/precios">Ver precios en vivo y calculadora</Link>
          </div>
        </div>
      </section>

      <section className="band light" id="what">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Qué Hacemos</span>
            <h2 className="section-title">Servicio de confianza, a su manera</h2>
            <div className="ornament"><i /><span className="dia" /><i /></div>
          </div>
          <div className="cards-4">
            {[
              ['Vamos<br />a Usted', 'Servicio totalmente móvil en toda Maryland. Lo encontramos en su casa o un lugar de confianza — sin manejar.'],
              ['Prueba y Peso<br />Transparentes', 'Cada pieza se prueba y se pesa donde usted puede verlo, y se valora al precio del mercado en vivo.'],
              ['Nuevo, Usado,<br />Viejo y Roto', 'Compramos oro y plata en cualquier condición — monedas, cadenas, anillos, chatarra y piezas rotas.'],
              ['Monedas, Plata<br />y Más', 'Cubiertos de plata esterlina, monedas de plata, lingotes, colecciones heredadas y platino — no solo oro.'],
            ].map(([h, p]) => (
              <div key={h} className="card reveal">
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span>
                <h3 dangerouslySetInnerHTML={{ __html: h }} />
                <p dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt" id="how">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Cómo Funciona</span>
            <h2 className="section-title">Cómo funciona una evaluación privada</h2>
            <div className="ornament"><i /><span className="dia" /><i /></div>
          </div>
          <div className="steps steps-5">
            <span className="steps-rail" aria-hidden="true"><i className="steps-mark" /></span>
            <div className="step reveal">
              <span className="num">01</span>
              <h3>Contacte a Fairweight</h3>
              <p>Llame o mande un texto al {BUSINESS.phone.display} y díganos más o menos qué tiene.</p>
            </div>
            <div className="step reveal">
              <span className="num">02</span>
              <h3>Elija Hora y Lugar</h3>
              <p>Su casa, o donde prefiera reunirse. Usted decide.</p>
            </div>
            <div className="step reveal">
              <span className="num">03</span>
              <h3>Probamos y Pesamos Frente a Usted</h3>
              <p>La balanza mira hacia usted. Cada pieza se prueba donde usted puede ver.</p>
            </div>
            <div className="step reveal">
              <span className="num">04</span>
              <h3>Le Explicamos su Oferta</h3>
              <p>Qué es cada artículo, qué no es, y cómo se llegó al número.</p>
            </div>
            <div className="step reveal">
              <span className="num">05</span>
              <h3>Usted Decide &mdash; Sin Presión</h3>
              <p>Acepte o no. De cualquier forma nos damos la mano y nos vamos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="scripture">
        <div className="wrap inner reveal">
          <span className="scripture-label">Proverbios 11:1</span>
          <blockquote>&ldquo;El peso falso es abominación a Jehová; mas la <span className="gold-text">pesa cabal</span> le agrada.&rdquo;</blockquote>
          <cite>Peso Honesto &middot; Tratos Justos</cite>
        </div>
      </section>

      <section className="contact">
        <div className="wrap reveal">
          <span className="deco-label center">Cuando Esté Listo</span>
          <h2 style={{ marginTop: 18 }}>Descubra cuánto<br /><span className="gold-text">vale de verdad</span></h2>
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
