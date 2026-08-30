'use client';
import { useState } from 'react';

import { BUSINESS, telHref } from '@/lib/business';
const L = {
  en: {
    name: 'Your name', namePh: 'First & last name',
    phone: 'Phone', area: 'Your area', areaPh: 'e.g. Silver Spring, MD',
    items: 'What do you have?', itemsPh: 'e.g. a few gold chains, some silver coins, a class ring…',
    text: 'Text My Request', call: 'Call Instead',
    note: `Tapping “Text My Request” opens your messaging app with your details pre-filled to ${BUSINESS.phone.display}. Your info is never shared.`,
    intro: "Hi Fairweight, I'd like a quote.",
  },
  es: {
    name: 'Su nombre', namePh: 'Nombre y apellido',
    phone: 'Teléfono', area: 'Su área', areaPh: 'ej. Hyattsville, MD',
    items: '¿Qué tiene?', itemsPh: 'ej. unas cadenas de oro, monedas de plata, un anillo…',
    text: 'Enviar por Texto', call: 'Llamar',
    note: `Al tocar “Enviar por Texto” se abre su app de mensajes con sus datos ya escritos al ${BUSINESS.phone.display}. Su información nunca se comparte.`,
    intro: 'Hola Fairweight, quisiera una cotización.',
  },
};

export default function QuoteForm({ lang = 'en' }) {
  const t = L[lang];
  const [form, setForm] = useState({ name: '', phone: '', area: '', items: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const labels = lang === 'es'
    ? { n: 'Nombre', p: 'Teléfono', a: 'Área', i: 'Artículos' }
    : { n: 'Name', p: 'Phone', a: 'Area', i: 'Items' };
  const body = `${t.intro}\n${labels.n}: ${form.name}\n${labels.p}: ${form.phone}\n${labels.a}: ${form.area}\n${labels.i}: ${form.items}`;
  const smsHref = `sms:+12408259001?body=${encodeURIComponent(body)}`;
  const onText = (e) => { e.preventDefault(); window.location.href = smsHref; };

  return (
    <form className="quote-form reveal" onSubmit={onText}>
      <div className="field"><label>{t.name}</label><input type="text" placeholder={t.namePh} value={form.name} onChange={set('name')} /></div>
      <div className="field"><label>{t.phone}</label><input type="tel" placeholder="(240) 000-0000" value={form.phone} onChange={set('phone')} /></div>
      <div className="field"><label>{t.area}</label><input type="text" placeholder={t.areaPh} value={form.area} onChange={set('area')} /></div>
      <div className="field"><label>{t.items}</label><textarea placeholder={t.itemsPh} value={form.items} onChange={set('items')} /></div>
      <div className="quote-actions">
        <button className="btn-gold" type="submit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          {t.text}
        </button>
        <a className="btn-ghost" href={telHref()}>{t.call}</a>
      </div>
      <p className="form-note">{t.note}</p>
    </form>
  );
}
