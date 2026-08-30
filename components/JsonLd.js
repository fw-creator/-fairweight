import { BUSINESS as B } from '@/lib/business';

// Every value here comes from lib/business.js. Facts that are still unverified
// are omitted rather than invented — notably reviews, licence and email.
export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: B.name,
    description:
      'Mobile gold & silver buyer based in Hyattsville, serving Maryland, Washington DC and Northern Virginia. We come to you, test and weigh in front of you, and explain the offer. Se habla español.',
    slogan: B.slogan,
    url: B.site.canonicalOrigin,
    telephone: B.phone.tel,
    priceRange: '$$',
    image: `${B.site.canonicalOrigin}/hero-evaluation.png`,
    founder: { '@type': 'Person', name: B.owner, jobTitle: B.ownerRole },
    address: {
      '@type': 'PostalAddress',
      addressLocality: B.address.locality,
      addressRegion: B.address.region,
      addressCountry: B.address.country,
    },
    areaServed: B.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    knowsLanguage: B.languages,
    knowsAbout: B.buys,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: B.hours.opens,
      closes: B.hours.closes,
    },
    // Only emitted once the corresponding fact is confirmed in lib/business.js.
    ...(B.email ? { email: B.email } : {}),
    ...(Object.values(B.social).some(Boolean)
      ? { sameAs: Object.values(B.social).filter(Boolean) }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
