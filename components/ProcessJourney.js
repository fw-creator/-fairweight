'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ease = value => 1 - Math.pow(1 - value, 3);
const BANDS = [
  { number: '01', title: 'Tested Openly', detail: 'Watch every item being checked.', meta: 'ACID TESTED', direction: -1, tone: 'ivory', image: '/images/process/acid-test.png', alt: 'Gold acid test on a jeweler touchstone' },
  { number: '02', title: 'Weighed in Front of You', detail: 'The scale always faces you.', meta: 'VISIBLE SCALE', direction: 1, tone: 'gold', image: '/images/process/visible-scale.png', alt: 'Gold ring on a digital jewelry scale' },
  { number: '03', title: 'You Decide', detail: 'Hear the offer. No pressure to sell.', meta: 'NO OBLIGATION', direction: -1, tone: 'espresso', image: '/images/process/your-decision.png', alt: 'Gold jewelry beside a private evaluation card' },
];

export default function ProcessJourney() {
  const storyRef = useRef(null);
  const stageRef = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;
    let frame = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reduced.matches) return setProgress(1);
        const rect = story.getBoundingClientRect();
        const stage = stageRef.current;
        const anchor = window.innerHeight * 0.42;
        const stickyTop = stage ? Number.parseFloat(window.getComputedStyle(stage).top) || 0 : 0;
        const stageHeight = stage?.offsetHeight || window.innerHeight * 0.72;
        // End progress at the exact point the sticky stage releases. This avoids
        // a dead scroll tail after every card has already finished animating.
        const distance = Math.max(1, rect.height - stageHeight + anchor - stickyTop);
        setProgress(clamp((anchor - rect.top) / distance));
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    reduced.addEventListener?.('change', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      reduced.removeEventListener?.('change', update);
    };
  }, []);

  const titleProgress = ease(clamp(progress / 0.2));
  const ctaProgress = ease(clamp((progress - 0.78) / 0.22));
  return (
    <div className="scrub-story" ref={storyRef}>
      <div className="scrub-stage" ref={stageRef}>
        <div className="scrub-glow" style={{ opacity: 0.12 + progress * 0.44 }} aria-hidden="true" />
        <div className="scrub-heading" style={{ transform: `translateY(${(1 - titleProgress) * 18}px)`, opacity: 0.48 + titleProgress * 0.52 }}>
          <p className="section-eyebrow">How It Works</p>
          <h2>Nothing happens<br />out of sight.</h2>
          <p>Three transparent steps. You stay in control.</p>
        </div>
        <div className="scrub-bands">
          {BANDS.map((band, index) => {
            const starts = [0.08, 0.25, 0.4];
            const durations = [0.45, 0.55, 0.6];
            const local = ease(clamp((progress - starts[index]) / durations[index]));
            const x = band.direction * (1 - local) * 112;
            const rotate = band.direction * (1 - local) * 2.6;
            return (
              <article className={`scrub-band scrub-${band.tone}`} key={band.number} style={{ transform: `translate3d(${x}%,0,0) rotate(${rotate}deg)`, opacity: 0.16 + local * 0.84 }}>
                <span className="scrub-number">{band.number}</span>
                <div className="scrub-band-copy"><span className="scrub-meta">{band.meta}</span><h3>{band.title}</h3><p>{band.detail}</p></div>
                <div className="scrub-visual"><Image src={band.image} alt={band.alt} fill sizes="82px" /></div>
              </article>
            );
          })}
        </div>
        <div className="scrub-action" style={{ transform: `translateY(${(1 - ctaProgress) * 22}px)`, opacity: ctaProgress }}>
          <Link className="home-primary" href="/contact">Schedule an Evaluation <span>→</span></Link>
          <small>No obligation. No pressure.</small>
        </div>
      </div>
    </div>
  );
}
