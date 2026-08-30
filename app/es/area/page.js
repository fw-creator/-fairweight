import Link from 'next/link';
import DmvMapClient from '@/components/DmvMapClient';
import { CITIES } from '@/lib/cities';

import { BUSINESS, telHref } from '@/lib/business';
export const metadata = {
  title: 'Área de Servicio — Sirviendo todo Maryland',
  description: `Fairweight es un comprador móvil de oro y plata que sirve Hyattsville, Langley Park, Silver Spring y todo Maryland. Con base en Hyattsville, MD. Llame o texto ${BUSINESS.phone.display}.`,
  alternates: { canonical: '/es/area', languages: { 'en-US': '/area', 'es-US': '/es/area', 'x-default': '/area' } },
};

export default function AreaEs() {
  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">Área de Servicio</span>
        <h1>Sirviendo todo <span className="gold-text">Maryland</span></h1>
        <p>Desde Hyattsville hasta Silver Spring, Langley Park y más allá — donde sea que esté en Maryland, vamos a usted. Con base en Hyattsville, MD. También servimos Virginia del Norte.</p>
      </section>

      <section className="band light" id="area">
        <div className="wrap area-grid">
          <div className="area-aside reveal">
            <span className="deco-label">A Dónde Vamos</span>
            <h2 className="section-title">Vamos a <span className="gold-text">usted</span></h2>
            <p className="lede" style={{ color: 'var(--muted)', marginTop: 20, fontSize: '1.02rem', lineHeight: 1.75 }}>Servicio totalmente móvil en toda Maryland — su casa o un lugar de confianza, en su horario.</p>
            <div className="map-badge">
              <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>
              <span>Con base en Hyattsville, MD</span>
            </div>
          </div>
          <div className="area-cols reveal" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/es/vender-oro/${c.slug}`} className="city-link">
                Compramos oro en {c.name}
              </Link>
            ))}
            <p className="area-note" style={{ gridColumn: '1 / -1' }}>¿No ve su ciudad? Probablemente la cubrimos — <a href={telHref()}>llame o texto {BUSINESS.phone.display}</a>.</p>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 42 }}>
          <div className="map-shell reveal">
            <DmvMapClient />
          </div>
        </div>
      </section>
    </>
  );
}
