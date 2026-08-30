'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_EN, NAV_ES, otherLangHref } from '@/lib/nav';

import { BUSINESS, telHref } from '@/lib/business';
const METALS = [
  { key: 'XAU', label: 'Gold' },
  { key: 'XAG', label: 'Silver' },
  { key: 'XPT', label: 'Platinum' },
  { key: 'XPD', label: 'Palladium' },
];


export default function Header() {
  const pathname = usePathname();
  const es = pathname.startsWith('/es');
  const NAV = es ? NAV_ES : NAV_EN;
  const altHref = otherLangHref(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    async function fetchPrices() {
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
          if (typeof price !== 'number' || !Number.isFinite(price)) {
            results[key] = null;
            return;
          }
          if (!base[key]) base[key] = price;
          results[key] = { price, chg: price - base[key] };
        } catch {
          // Never show an invented price. Unavailable is shown as unavailable.
          results[key] = null;
        }
      }));
      try { localStorage.setItem(baseKey, JSON.stringify(base)); } catch {}
      setPrices(results);
    }
    fetchPrices();
    const id = setInterval(fetchPrices, 90000);
    return () => clearInterval(id);
  }, []);

  const fmt = (n) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const tickRow = (key, label) => {
    const p = prices?.[key];
    return (
      <div className="tk" key={key + label}>
        <span className="tk-name">{label}</span>
        <span className="tk-price">{p ? fmt(p.price) : (!prices ? '\u00a0' : (es ? 'No disponible' : 'Unavailable'))}</span>
        {p ? (
          <span className={`tk-chg ${p.chg < 0 ? 'down' : 'up'}`}>{p.chg < 0 ? '▼' : '▲'}</span>
        ) : null}
      </div>
    );
  };

  const tickGroup = (hidden) => (
    <div className="ticker-group" aria-hidden={hidden ? 'true' : undefined}>
      {METALS.map(({ key, label }) => tickRow(key, label))}
    </div>
  );

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href={es ? '/es' : '/'} aria-label="Fairweight home">
          <Emblem size="46px" />
          <span className="brand-word">
            <span className="wordmark">FAIRWEIGHT</span>
            <span className="sub">Honest Weight &middot; Fair Dealings</span>
          </span>
        </Link>
        <nav className="nav-links">
          {NAV.map(({ label, href }) => (
            <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
          ))}
        </nav>
        <Link className="lang-toggle" href={altHref} aria-label={es ? 'Switch to English' : 'Cambiar a español'}>
          {es ? 'EN' : 'ES'}
        </Link>
        <a className="nav-cta" href={telHref()}><PhoneIcon /> {BUSINESS.phone.display}</a>
        <a className="hdr-call" href={telHref()} aria-label={es ? 'Llamar' : 'Call'}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        </a>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="bars" />
        </button>
      </div>
      <div className="ticker" id="ticker">
        <div className="ticker-track">
          {tickGroup(false)}
          {tickGroup(true)}
        </div>
      </div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">
        <nav className="mobile-links">
          {NAV.map(({ label, href }) => (
            <Link key={href} href={href} className={pathname === href ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
        </nav>
        <Link className="lang-toggle mobile" href={altHref} onClick={() => setMenuOpen(false)}>
          {es ? 'English' : 'Español'}
        </Link>
        <a className="btn-gold mobile-call" href={telHref()}><PhoneIcon /> {es ? 'Llame o Texto' : 'Call or Text'}: {BUSINESS.phone.display}</a>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>
    </svg>
  );
}

function Emblem({ size }) {
  return (
    <span className="emblem" style={{ '--em': size }} aria-hidden="true">
      <svg className="em-scales" viewBox="0 0 48 31">
        <circle cx="24" cy="3" r="1.5"/>
        <line x1="24" y1="4.4" x2="24" y2="24"/>
        <line x1="8" y1="9" x2="40" y2="9"/>
        <circle cx="24" cy="9" r="1.3"/>
        <path d="M8 9 L4 16"/><path d="M8 9 L12 16"/>
        <path d="M3.4 16 a4.6 4.6 0 0 0 9.2 0 Z"/>
        <path d="M40 9 L36 16"/><path d="M40 9 L44 16"/>
        <path d="M35.4 16 a4.6 4.6 0 0 0 9.2 0 Z"/>
        <line x1="18" y1="24" x2="30" y2="24"/>
        <line x1="20" y1="27" x2="28" y2="27"/>
      </svg>
      <span className="em-fw">FW</span>
    </span>
  );
}
