'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { telHref } from '@/lib/business';
export default function MobileCTA() {
  const pathname = usePathname();
  const es = pathname.startsWith('/es');
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Reveal only once the visitor reaches the middle of the SECOND section
    // (the first section has its own CTA). Scroll-position based — not an
    // IntersectionObserver — so iOS Safari's resizing toolbar can't flicker it.
    const absTop = (el) => el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0);
    const threshold = () => {
      const main = document.querySelector('main');
      const sections = main ? Array.from(main.children).filter((el) => el.tagName === 'SECTION') : [];
      const second = sections[1];
      if (second) return absTop(second) + second.offsetHeight * 0.5;
      const hero = document.querySelector('.hero, .page-hero');
      return hero ? absTop(hero) + hero.offsetHeight : window.innerHeight;
    };

    let cut = threshold();
    let raf = 0;
    const update = () => {
      raf = 0;
      // hysteresis so it never flickers right at the boundary
      setShown((prev) => {
        const y = window.scrollY || window.pageYOffset || 0;
        if (prev) return y > cut - 80;
        return y > cut;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { cut = threshold(); onScroll(); };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <div
      className={`mobile-cta${shown ? ' show' : ''}`}
      role="region"
      aria-label={es ? 'Contacto rápido' : 'Quick contact'}
    >
      <a className="mc-call" href={telHref()}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        {es ? 'Llamar' : 'Call'}
      </a>
      <a className="mc-text" href={es ? "/es/contacto" : "/contact"}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>
        {es ? 'Agendar' : 'Schedule'}
      </a>
    </div>
  );
}
