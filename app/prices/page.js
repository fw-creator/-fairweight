import PriceCards from '@/components/PriceCards';
import Calculator from '@/components/Calculator';

import { BUSINESS } from '@/lib/business';
export const metadata = {
  alternates: {
    canonical: '/prices',
    languages: {
      'en-US': '/prices',
      'es-US': '/es/precios',
      'x-default': '/prices',
    },
  },
  title: 'Live Gold & Silver Spot Prices',
  description: `Live gold, silver and platinum spot prices plus a value calculator. Fairweight buys gold & silver across the DMV. Call or text ${BUSINESS.phone.display}.`,
};

export default function PricesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">Live Pricing</span>
        <h1>Today&rsquo;s <span className="gold-text">spot prices</span></h1>
        <p>Live gold, silver and platinum rates, refreshed throughout the day. Use the calculator below for a quick estimate &mdash; then call or text us to lock in your offer.</p>
      </section>

      <section className="band alt" id="spot">
        <div className="wrap">
          <PriceCards />
        </div>
      </section>

      <section className="band light" id="calc">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Estimate Your Value</span>
            <h2 className="section-title">What&rsquo;s your gold &amp; silver worth?</h2>
            <p className="lede">Enter the spot price, weight, and purity for a quick ballpark. For an exact, no-obligation offer, just call or text us.</p>
          </div>
          <Calculator />
        </div>
      </section>
    </>
  );
}
