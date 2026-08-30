import { CITIES } from '@/lib/cities';

import { BUSINESS } from '@/lib/business';
const BASE = BUSINESS.site.canonicalOrigin;

export default function sitemap() {
  const now = new Date();

  const en = ['', '/prices', '/buy', '/about', '/area', '/contact'];
  const es = ['/es', '/es/precios', '/es/que-compramos', '/es/nosotros', '/es/area', '/es/contacto'];

  const mainPages = [...en, ...es].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path.includes('precios') || path.includes('prices') ? 'daily' : 'monthly',
    priority: path === '' || path === '/es' ? 1 : 0.8,
  }));

  const cityPages = CITIES.flatMap((c) => [
    { url: `${BASE}/sell-gold/${c.slug}`, lastModified: now, changeFrequency: 'monthly', priority: c.primary ? 0.9 : 0.7 },
    { url: `${BASE}/es/vender-oro/${c.slug}`, lastModified: now, changeFrequency: 'monthly', priority: c.primary ? 0.9 : 0.7 },
  ]);

  return [...mainPages, ...cityPages];
}
