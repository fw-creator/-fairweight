'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const METALS = [
  { key: 'XAU', card: 'gold', label: 'Gold', labelEs: 'Oro', img: '/gold-bars.png' },
  { key: 'XAG', card: 'silver', label: 'Silver', labelEs: 'Plata', img: '/silver-bars.png' },
  { key: 'XPT', card: 'platinum', label: 'Platinum', labelEs: 'Platino', img: '/platinum-bars.png' },
];

const STR = {
  en: { grams: 'Price in Grams', ounces: 'Price in Ounces', live: (m) => `Live ${m} Price`, sell: (m) => `Sell Your ${m} →`, note: (u) => `Indicative · USD per ${u} · call to lock your price`, ozt: 'troy oz', gram: 'gram' },
  es: { grams: 'Precio por Gramo', ounces: 'Precio por Onza', live: (m) => `Precio de ${m} en Vivo`, sell: (m) => `Venda su ${m} →`, note: (u) => `Indicativo · USD por ${u} · llame para fijar su precio`, ozt: 'onza troy', gram: 'gramo' },
};

export default function PriceCards({ lang = 'en' }) {
  const t = STR[lang];
  const [unit, setUnit] = useState('ozt');
  const [prices, setPrices] = useState(null);
  const [grow, setGrow] = useState(0);
  const grewRef = useRef(false);

  // odometer count-up the first time prices land
  useEffect(() => {
    if (!prices || grewRef.current) return;
    grewRef.current = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setGrow(1));
      return () => cancelAnimationFrame(id);
    }
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 900);
      setGrow(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const safety = setTimeout(() => setGrow(1), 1100);
    return () => { cancelAnimationFrame(raf); clearTimeout(safety); };
  }, [prices]);

  useEffect(() => {
    async function fetch_() {
      const today = new Date().toDateString();
      const baseKey = 'fw_base_' + today;
      let base = {};
      try { base = JSON.parse(localStorage.getItem(baseKey) || '{}'); } catch {}
      const results = {};
      await Promise.all(METALS.map(async ({ key }) => {
        try {
          const r = await fetch(`https://api.gold-api.com/price/${key}`);
          const d = await r.json();
          const price = d.price ?? d.Price ?? d.ask;
          if (typeof price !== 'number' || !Number.isFinite(price)) { results[key] = null; return; }
          if (!base[key]) base[key] = price;
          results[key] = { price, open: base[key] };
        } catch {
          // Never invent a price. Unavailable is shown as unavailable.
          results[key] = null;
        }
      }));
      try { localStorage.setItem(baseKey, JSON.stringify(base)); } catch {}
      setPrices(results);
    }
    fetch_();
    const id = setInterval(fetch_, 90000);
    return () => clearInterval(id);
  }, []);

  const conv = (p) => unit === 'g' ? p / 31.1035 : p;
  const fmt = (p) => '$' + conv(p).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const pct = (price, open) => {
    if (!open) return '+0.00%';
    const c = ((price - open) / open) * 100;
    return (c >= 0 ? '+' : '') + c.toFixed(2) + '%';
  };

  return (
    <>
      <div className="spot-head-row">
        <div className="spot-toggle" role="group" aria-label="Price unit">
          <button type="button" className={unit === 'g' ? 'on' : ''} onClick={() => setUnit('g')}>{t.grams}</button>
          <button type="button" className={unit === 'ozt' ? 'on' : ''} onClick={() => setUnit('ozt')}>{t.ounces}</button>
        </div>
      </div>
      <div className="price-cards">
        {METALS.map(({ key, card, label, labelEs, img }) => {
          const p = prices?.[key];
          const up = p ? p.price >= p.open : true;
          const name = lang === 'es' ? labelEs : label;
          return (
            <div key={key} className={`price-card ${card}`}>
              <div className="pc-bars"><Image src={img} alt="" aria-hidden="true" width={246} height={164} sizes="246px" /></div>
              <span className="pc-metal">{name}</span>
              <div className="pc-mid">
                <div className="pc-price-row">
                  <span className="card-price">
                    {p
                      ? fmt(p.price * grow)
                      : !prices
                        ? <span className="price-loading" aria-label={lang === 'es' ? 'Cargando precio' : 'Loading price'}>&nbsp;</span>
                        : (lang === 'es' ? 'Temporalmente no disponible' : 'Temporarily unavailable')}
                  </span>
                  {p ? <span className={`card-chg ${up ? 'up' : 'down'}`}>({pct(p.price, p.open)})</span> : null}
                </div>
                <span className="pc-live">{t.live(name)}</span>
              </div>
              <a className="pc-cta" href={lang === 'es' ? '/es/contacto' : '/contact'}>{t.sell(name)}</a>
            </div>
          );
        })}
      </div>
      <p className="spot-note">{t.note(unit === 'g' ? t.gram : t.ozt)}</p>
    </>
  );
}
