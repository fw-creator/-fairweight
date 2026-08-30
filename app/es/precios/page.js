import PriceCards from '@/components/PriceCards';
import Calculator from '@/components/Calculator';

import { BUSINESS } from '@/lib/business';
export const metadata = {
  title: 'Precios del Oro y la Plata en Vivo',
  description: `Precios spot en vivo de oro, plata y platino más una calculadora de valor. Fairweight compra oro y plata en Maryland. Llame o texto ${BUSINESS.phone.display}.`,
  alternates: { canonical: '/es/precios', languages: { 'en-US': '/prices', 'es-US': '/es/precios', 'x-default': '/prices' } },
};

export default function PreciosEs() {
  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">Precios en Vivo</span>
        <h1>Precios <span className="gold-text">spot de hoy</span></h1>
        <p>Tasas en vivo de oro, plata y platino, actualizadas durante el día. Use la calculadora para un estimado rápido — luego llámenos para fijar su oferta.</p>
      </section>

      <section className="band alt" id="spot">
        <div className="wrap">
          <PriceCards lang="es" />
        </div>
      </section>

      <section className="band light" id="calc">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Estime su Valor</span>
            <h2 className="section-title">¿Cuánto vale su oro y plata?</h2>
            <p className="lede">Ingrese el precio spot, el peso y la pureza para un estimado rápido. Para una oferta exacta y sin compromiso, solo llámenos.</p>
          </div>
          <Calculator lang="es" />
        </div>
      </section>
    </>
  );
}
