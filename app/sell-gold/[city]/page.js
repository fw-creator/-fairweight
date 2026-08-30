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
  const title = `Sell Gold & Silver in ${city.name}, MD`;
  const description = `${city.en.lede} Mobile gold & silver buyer serving ${city.name}, ${city.county}. Call or text ${BUSINESS.phone.display}.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/sell-gold/${city.slug}`,
      languages: {
        'en-US': `/sell-gold/${city.slug}`,
        'es-US': `/es/vender-oro/${city.slug}`,
        'x-default': `/sell-gold/${city.slug}`,
      },
    },
    openGraph: { title, description, url: `${BUSINESS.site.canonicalOrigin}/sell-gold/${city.slug}` },
  };
}

export default async function Page({ params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Gold and silver buying',
    provider: {
      '@type': 'JewelryStore',
      name: 'Fairweight',
      telephone: `+1-${BUSINESS.phone.display}`,
      url: BUSINESS.site.canonicalOrigin,
      address: { '@type': 'PostalAddress', addressLocality: 'Hyattsville', addressRegion: 'MD', addressCountry: 'US' },
    },
    areaServed: { '@type': 'City', name: `${city.name}, MD` },
    availableLanguage: ['English', 'Spanish'],
    url: `${BUSINESS.site.canonicalOrigin}/sell-gold/${city.slug}`,
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BUSINESS.site.canonicalOrigin}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Area', item: `${BUSINESS.site.canonicalOrigin}/area` },
      { '@type': 'ListItem', position: 3, name: `Sell Gold in ${city.name}`, item: `${BUSINESS.site.canonicalOrigin}/sell-gold/${city.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CityPage city={city} lang="en" />
    </>
  );
}
