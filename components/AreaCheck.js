'use client';
import { useState } from 'react';
import Link from 'next/link';

import { BUSINESS, telHref } from '@/lib/business';
const L = {
  en: {
    eyebrow: 'Start here',
    title: 'Check if we come to you.',
    lede: 'Three answers and we’ll tell you whether we cover your area. This is a coverage check only — nothing is booked and nothing is sent yet.',
    zip: 'ZIP code', zipPh: 'e.g. 20783',
    item: 'What do you have?', itemPh: 'Choose one',
    contact: 'Best way to reach you', contactPh: 'Choose one',
    button: 'Check Availability',
    note: 'Coverage check only. We never ask for your full address to answer this.',
    covered: 'Yes — we cover',
    coveredBody: 'That’s inside our service area. The next step is picking a time and place that suits you.',
    unknown: 'We may still reach you',
    unknownBody: 'That ZIP is outside the towns we list, but we travel across the DMV. Call or text and we’ll tell you straight away.',
    next: 'Request an appointment',
    call: `Call or Text ${BUSINESS.phone.display}`,
    again: 'Check another ZIP',
    invalid: 'Enter a 5-digit ZIP code.',
    items: ['Gold Jewelry', 'Broken or Scrap Gold', 'Silver', 'Coins & Bullion', 'Platinum', 'Inherited or Estate Collection', 'Other'],
    contacts: ['Phone call', 'Text message', 'Either is fine'],
  },
  es: {
    eyebrow: 'Empiece aquí',
    title: '¿Vamos a su área?',
    lede: 'Tres respuestas y le decimos si cubrimos su zona. Esto es solo una consulta de cobertura — no se agenda ni se envía nada todavía.',
    zip: 'Código postal', zipPh: 'ej. 20783',
    item: '¿Qué tiene?', itemPh: 'Elija una opción',
    contact: 'Cómo prefiere que lo contactemos', contactPh: 'Elija una opción',
    button: 'Ver Disponibilidad',
    note: 'Solo consulta de cobertura. Nunca pedimos su dirección completa para responder esto.',
    covered: 'Sí — cubrimos su zona',
    coveredBody: 'Está dentro de nuestra área. El siguiente paso es elegir hora y lugar.',
    unknown: 'Puede que igual lleguemos',
    unknownBody: 'Ese código está fuera de las ciudades que listamos, pero viajamos por toda el área. Llámenos o mande un texto y le decimos al momento.',
    next: 'Solicitar una cita',
    call: `Llame o Texto ${BUSINESS.phone.display}`,
    again: 'Consultar otro código',
    invalid: 'Escriba un código postal de 5 dígitos.',
    items: ['Joyas de Oro', 'Oro Roto o Chatarra', 'Plata', 'Monedas y Lingotes', 'Platino', 'Colección Heredada', 'Otro'],
    contacts: ['Llamada', 'Mensaje de texto', 'Cualquiera'],
  },
};

// ZIP prefixes for the Maryland counties Fairweight actually serves.
// NEEDS_CONFIRMATION: full verified ZIP list for DC and Northern Virginia.
const COVERED = ['20701','20705','20706','20707','20708','20710','20712','20715','20716','20720','20721','20722','20737','20740','20742','20770','20781','20782','20783','20784','20785','20787','20788','20812','20895','20901','20902','20903','20904','20906','20910','20912','20915'];

export default function AreaCheck({ lang = 'en' }) {
  const t = L[lang];
  const [zip, setZip] = useState('');
  const [item, setItem] = useState('');
  const [contact, setContact] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const check = (e) => {
    e.preventDefault();
    if (!/^\d{5}$/.test(zip)) { setError(t.invalid); setResult(null); return; }
    setError('');
    setResult(COVERED.includes(zip) ? 'covered' : 'unknown');
  };

  const contactHref = lang === 'es' ? '/es/contacto' : '/contact';

  if (result) {
    const ok = result === 'covered';
    return (
      <div className={`ac-result ${ok ? 'ok' : 'maybe'}`} role="status" aria-live="polite">
        <p className="acr-head">{ok ? t.covered : t.unknown}{ok ? ` ${zip}.` : ''}</p>
        <p className="acr-body">{ok ? t.coveredBody : t.unknownBody}</p>
        <div className="acr-actions">
          <Link className="btn-gold" href={contactHref}>{t.next}</Link>
          <a className="btn-ghost" href={telHref()}>{t.call}</a>
        </div>
        <button className="acr-again" type="button" onClick={() => { setResult(null); setZip(''); }}>
          {t.again}
        </button>
      </div>
    );
  }

  return (
    <form className="areacheck" onSubmit={check} noValidate>
      <div className="ac-fields">
        <div className="ac-field">
          <label className="ac-label" htmlFor="ac-zip">{t.zip}</label>
          <input
            id="ac-zip" className="ac-input" type="text" inputMode="numeric"
            autoComplete="postal-code" maxLength={5} placeholder={t.zipPh}
            value={zip} onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
            aria-invalid={!!error} aria-describedby={error ? 'ac-err' : undefined}
          />
        </div>
        <div className="ac-field">
          <label className="ac-label" htmlFor="ac-item">{t.item}</label>
          <select id="ac-item" className="ac-input ac-select" value={item} onChange={(e) => setItem(e.target.value)}>
            <option value="">{t.itemPh}</option>
            {t.items.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div className="ac-field">
          <label className="ac-label" htmlFor="ac-contact">{t.contact}</label>
          <select id="ac-contact" className="ac-input ac-select" value={contact} onChange={(e) => setContact(e.target.value)}>
            <option value="">{t.contactPh}</option>
            {t.contacts.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      {error && <p className="ac-error" id="ac-err">{error}</p>}
      <div className="ac-submit">
        <button className="btn-gold" type="submit">{t.button}</button>
        <p className="ac-note">{t.note}</p>
      </div>
    </form>
  );
}
