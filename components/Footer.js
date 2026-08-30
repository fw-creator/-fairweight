import Link from 'next/link';

import { BUSINESS, telHref } from '@/lib/business';
const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Live Prices', href: '/prices' },
  { label: 'What We Buy', href: '/buy' },
  { label: 'About', href: '/about' },
  { label: 'Service Area', href: '/area' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <Link className="brand" href="/" aria-label="Fairweight">
          <span className="emblem" style={{ '--em': '48px' }} aria-hidden="true">
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
        </Link>
        <div className="foot-tag gold-text">
          <span>Honest Weight</span><span className="sep" />
          <span>Fair Dealings</span><span className="sep" />
          <span>Real Value</span>
        </div>
        <nav className="foot-nav">
          {NAV.map(({ label, href }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <div className="foot-meta">
          Fairweight &middot; Hyattsville, MD &middot; Serving the DMV &middot;{' '}
          <a href={telHref()}>{BUSINESS.phone.display}</a>
        </div>
      </div>
    </footer>
  );
}
