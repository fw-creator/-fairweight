import Link from 'next/link';
import DmvMapClient from '@/components/DmvMapClient';
import { CITIES } from '@/lib/cities';

import { BUSINESS, telHref } from '@/lib/business';
export const metadata = {
  alternates: {
    canonical: '/area',
    languages: {
      'en-US': '/area',
      'es-US': '/es/area',
      'x-default': '/area',
    },
  },
  title: 'Service Area — Serving the Entire DMV',
  description: `Fairweight is a mobile gold and silver buyer serving Maryland, Washington DC and Northern Virginia. Based in Hyattsville, MD. Call or text ${BUSINESS.phone.display}.`,
};

const COLS = [
  { state: 'Maryland', cities: ['Hyattsville', 'College Park', 'Silver Spring', 'Bethesda', 'Bowie', 'Laurel', 'Greenbelt', 'Rockville'] },
  { state: 'Washington, DC', cities: ['Northwest (NW)', 'Northeast (NE)', 'Southwest (SW)', 'Southeast (SE)', 'Capitol Hill', 'Georgetown'] },
  { state: 'Virginia', cities: ['Arlington', 'Alexandria', 'Fairfax', 'Falls Church', 'McLean', 'Vienna', 'Annandale'] },
];

export default function AreaPage() {
  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">Service Area</span>
        <h1>Serving the <span className="gold-text">entire DMV</span></h1>
        <p>Maryland, Washington DC, and Northern Virginia &mdash; wherever you are in the metro, we&rsquo;ll come to you. Based in Hyattsville, MD.</p>
      </section>

      <section className="band light" id="area">
        <div className="wrap area-grid">
          <div className="area-aside reveal">
            <span className="deco-label">Where We Go</span>
            <h2 className="section-title">We come to <span className="gold-text">you</span></h2>
            <p className="lede" style={{ color: 'var(--muted)', marginTop: 20, fontSize: '1.02rem', lineHeight: 1.75 }}>Fully mobile service across the DMV &mdash; your home or a place you trust, on your schedule.</p>
            <div className="map-badge">
              <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>
              <span>Based in Hyattsville, MD</span>
            </div>
          </div>
          <div className="area-cols reveal">
            {COLS.map(({ state, cities }) => (
              <div key={state} className="area-col">
                <h4>{state}</h4>
                <ul>{cities.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            ))}
            <p className="area-note">Don&rsquo;t see your neighborhood? We likely still cover it &mdash; <a href={telHref()}>call or text {BUSINESS.phone.display}</a>.</p>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 42 }}>
          <div className="map-shell reveal">
            <DmvMapClient />
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Maryland Cities</span>
            <h2 className="section-title">We buy gold &amp; silver in your town</h2>
          </div>
          <div className="area-cols reveal" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/sell-gold/${c.slug}`} className="city-link">
                Sell gold in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
