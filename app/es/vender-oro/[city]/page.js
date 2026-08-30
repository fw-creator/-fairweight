import { notFound } from 'next/navigation';
import { CITIES, getCity } from '@/lib/cities';
import CityPage from '@/components/CityPage';

import { BUSINESS } from '@/lib/business';
export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const title = `Compramos Oro y Plata en ${city.name}, MD`;
  const description = `${city.es.lede} Comprador móvil de oro y plata en ${city.name}, ${city.county}. Llame o texto ${BUSINESS.phone.display}.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/es/vender-oro/${city.slug}`,
      languages: {
        'en-US': `/sell-gold/${city.slug}`,
        'es-US': `/es/vender-oro/${city.slug}`,
        'x-default': `/sell-gold/${city.slug}`,
      },
    },
    openGraph: { title, description, url: `${BUSINESS.site.canonicalOrigin}/es/vender-oro/${city.slug}`, locale: 'es_US' },
  };
}

export default async function Page({ params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Compra de oro y plata',
    provider: {
      '@type': 'JewelryStore',
      name: 'Fairweight',
      telephone: `+1-${BUSINESS.phone.display}`,
      url: BUSINESS.site.canonicalOrigin,
      address: { '@type': 'PostalAddress', addressLocality: 'Hyattsville', addressRegion: 'MD', addressCountry: 'US' },
    },
    areaServed: { '@type': 'City', name: `${city.name}, MD` },
    availableLanguage: ['Spanish', 'English'],
    url: `${BUSINESS.site.canonicalOrigin}/es/vender-oro/${city.slug}`,
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BUSINESS.site.canonicalOrigin}/es` },
      { '@type': 'ListItem', position: 2, name: 'Área de Servicio', item: `${BUSINESS.site.canonicalOrigin}/es/area` },
      { '@type': 'ListItem', position: 3, name: `Compramos Oro en ${city.name}`, item: `${BUSINESS.site.canonicalOrigin}/es/vender-oro/${city.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CityPage city={city} lang="es" />
    </>
  );
}
