import { BUSINESS } from '@/lib/business';
export const metadata = {
  title: 'Nosotros — Peso Honesto, Tratos Justos',
  description: `Fairweight es el comprador móvil de oro y plata de Maryland, construido sobre peso honesto y tratos justos. Conozca nuestra historia. Llame o texto ${BUSINESS.phone.display}.`,
  alternates: { canonical: '/es/nosotros', languages: { 'en-US': '/about', 'es-US': '/es/nosotros', 'x-default': '/about' } },
};

export default function NosotrosEs() {
  return (
    <>
      <section className="page-hero">
        <span className="deco-label center">Sobre Fairweight</span>
        <h1>Construido sobre confianza, <span className="gold-text">guiado por la integridad</span></h1>
        <p>Fairweight nació de un principio simple: una balanza honesta y un precio justo. Traemos transparencia a la compra y venta de oro y plata — y vamos a usted.</p>
      </section>

      <section className="band light">
        <div className="wrap story-grid">
          <div className="story-media reveal">
            <span className="gk-border" aria-hidden="true" />
            <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>FOTO</div>
          </div>
          <div className="story-copy reveal">
            <span className="deco-label">Quiénes Somos</span>
            <h2 className="section-title">Un trato justo,<br /><span className="gold-text">cada vez</span></h2>
            <p>Fairweight es el comprador móvil de oro y plata de Maryland. Empezamos Fairweight porque demasiada gente sale de una venta sin saber si recibió un trato justo. Lo hacemos diferente — pesamos todo frente a usted, explicamos exactamente cómo se construye la oferta a partir del precio del mercado, y nunca presionamos a nadie.</p>
            <p>Ya sea una sola cadena rota o una herencia completa, recibe el mismo trato honesto, una cotización gratis, y efectivo el mismo día. Sin sobreprecios de tienda, sin trucos — solo tratos justos, llevados a su puerta. Hablamos español.</p>
            <div className="meet">
              <div className="portrait">
                <span className="gk-border" aria-hidden="true" />
                <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '3/4', color: 'var(--muted)', fontSize: '0.62rem', letterSpacing: '0.1em' }}>FOTO</div>
              </div>
              <div className="meet-who">
                <span className="eyebrow-sm">Conozca a su Comprador</span>
                <h4>Jonathan Renderos</h4>
                <span className="role">Fundador y Comprador</span>
                <p>Trata directamente conmigo — no con un vendedor. Evaluaciones honestas, precios justos, y voy a usted en toda Maryland.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band alt" id="why">
        <div className="wrap why-grid">
          <div className="why-aside reveal">
            <span className="deco-label">Por Qué Elegir Fairweight</span>
            <h2 className="section-title">Y lo más importante,<br /><span className="gold-text">somos justos.</span></h2>
            <p className="lede">Sin presión, sin trucos — solo tratos directos en los que puede confiar, respaldados por una balanza honesta y un precio justo.</p>
          </div>
          <div className="why-list">
            {[
              ['Cotizaciones gratis en persona', 'Evaluamos sus artículos en el momento sin costo, sin obligación de vender.'],
              ['Precios honestos y justos', 'Pesaje transparente y tasas competitivas basadas en el valor real y actual.'],
              ['Móvil en toda Maryland', 'Viajamos a usted — cómodo, privado, y en su horario.'],
              ['Pago instantáneo en efectivo', 'Reciba el pago completo, en efectivo, al momento de aceptar nuestra oferta.'],
            ].map(([h, p]) => (
              <div key={h} className="why-item reveal">
                <span className="check"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scripture">
        <div className="wrap inner reveal">
          <span className="scripture-label">Proverbios 11:1</span>
          <blockquote>&ldquo;El peso falso es abominación a Jehová; mas la <span className="gold-text">pesa cabal</span> le agrada.&rdquo;</blockquote>
          <cite>Peso Honesto &middot; Tratos Justos</cite>
        </div>
      </section>
    </>
  );
}
