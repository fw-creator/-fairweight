'use client';
import { useEffect, useRef, useState } from 'react';

import { telHref } from '@/lib/business';
const KARATS = [
  { k: '10k', f: 0.4167 },
  { k: '14k', f: 0.5833 },
  { k: '18k', f: 0.75 },
  { k: '22k', f: 0.9167 },
  { k: '24k', f: 0.999 },
];
const FALLBACK = { gold: 4400, silver: 75 };
// Conservative share of current metal value used for the "offers start
// around" figure. Low end of the real range, so the in-person offer usually
// beats it (underpromise / overdeliver). One number to change if needed.
const PAYOUT_RATE = 0.70;

const T = {
  en: {
    eyebrow: 'Try it', title: "What's it worth?",
    sub: 'Slide your weight and karat for a live estimate. Educational estimate — not a purchase offer.',
    gold: 'Gold', silver: 'Silver', sterling: 'Sterling .925',
    weight: 'Weight', grams: 'grams', est: 'Offers start around',
    badge: 'Educational estimate — not a purchase offer', caption: 'Not your final price — your real offer is set in person.',
    cta: 'Get your exact offer', note: 'A starting estimate based on today’s market rate — your exact offer depends on testing and verifying your items. In-person quotes are always free.',
  },
  es: {
    eyebrow: 'Pruébelo', title: '¿Cuánto vale?',
    sub: 'Deslice el peso y los quilates para un estimado en vivo. Estimado educativo — no es una oferta de compra.',
    gold: 'Oro', silver: 'Plata', sterling: 'Esterlina .925',
    weight: 'Peso', grams: 'gramos', est: 'Ofertas desde aprox.',
    badge: 'Estimado educativo — no es una oferta de compra', caption: 'No es el precio final — su oferta real se define en persona.',
    cta: 'Obtenga su oferta exacta', note: 'Un estimado inicial según la tasa del mercado de hoy — su oferta exacta depende de la prueba y verificación de sus artículos. Las cotizaciones en persona siempre son gratis.',
  },
};

export default function Estimator({ lang = 'en' }) {
  const t = T[lang];
  const [metal, setMetal] = useState('gold');
  const [karat, setKarat] = useState('14k');
  const [weight, setWeight] = useState(10);
  const [spot, setSpot] = useState(FALLBACK);
  const [display, setDisplay] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    let on = true;
    Promise.all([
      fetch('https://api.gold-api.com/price/XAU').then((r) => r.json()).catch(() => null),
      fetch('https://api.gold-api.com/price/XAG').then((r) => r.json()).catch(() => null),
    ]).then(([g, s]) => {
      if (!on) return;
      setSpot({
        gold: g?.price ?? FALLBACK.gold,
        silver: s?.price ?? FALLBACK.silver,
      });
    });
    return () => { on = false; };
  }, []);

  const purity = metal === 'silver' ? 0.925 : (KARATS.find((x) => x.k === karat)?.f ?? 0.5833);
  const price = metal === 'silver' ? spot.silver : spot.gold;
  const target = (weight / 31.1035) * purity * price * PAYOUT_RATE;

  // animate display toward target
  useEffect(() => {
    cancelAnimationFrame(raf.current);
    const start = display;
    const t0 = performance.now();
    const dur = 500;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(start + (target - start) * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    // safety: if rAF is throttled (hidden tab), still land on the value
    const safety = setTimeout(() => setDisplay(target), 700);
    return () => { cancelAnimationFrame(raf.current); clearTimeout(safety); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const usd = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="estimator reveal">
      <span className="deco-label center">{t.eyebrow}</span>
      <h2 className="est-title">{t.title}</h2>
      <p className="est-sub">{t.sub}</p>

      <div className="est-chips" role="group" aria-label="metal">
        <button type="button" className={`est-chip${metal === 'gold' ? ' on' : ''}`} onClick={() => setMetal('gold')}>{t.gold}</button>
        <button type="button" className={`est-chip${metal === 'silver' ? ' on' : ''}`} onClick={() => setMetal('silver')}>{t.silver}</button>
      </div>

      {metal === 'gold' ? (
        <div className="est-chips est-karats" role="group" aria-label="karat">
          {KARATS.map(({ k }) => (
            <button key={k} type="button" className={`est-chip sm${karat === k ? ' on' : ''}`} onClick={() => setKarat(k)}>{k}</button>
          ))}
        </div>
      ) : (
        <div className="est-sterling">{t.sterling}</div>
      )}

      <div className="est-weight">
        <div className="est-weight-row">
          <span>{t.weight}</span>
          <span className="est-grams"><b>{weight}</b> {t.grams}</span>
        </div>
        <input type="range" min="1" max="200" step="1" value={weight} onChange={(e) => setWeight(Number(e.target.value))} aria-label={t.weight} />
      </div>

      <div className="est-value-wrap">
        <span className="est-badge">{t.badge}</span>
        <span className="est-value-label">{t.est}</span>
        <span className="est-value gold-text">~{usd(display)}</span>
        <span className="est-caption">{t.caption}</span>
      </div>

      <a className="btn-gold est-cta" href={telHref()}>{t.cta}</a>
      <p className="est-note">{t.note}</p>
    </div>
  );
}
