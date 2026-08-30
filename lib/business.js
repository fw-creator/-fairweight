// Single source of truth for every business fact rendered on this site.
// Anything shown to a visitor — or written into structured data — reads from here.
// Never hard-code these values in a page or component again.

export const BUSINESS = {
  name: 'Fairweight',
  legalName: 'Fairweight',            // NEEDS_CONFIRMATION: registered legal entity name
  slogan: 'Honest Weight. Fair Dealings.',
  owner: 'Jonathan Renderos',
  ownerRole: 'Founder & Buyer',

  phone: {
    display: '240-825-9001',
    tel: '+12408259001',
    sms: 'sms:+12408259001',
  },

  // NEEDS_CONFIRMATION: no email address exists anywhere on the site or in schema.
  email: null,

  address: {
    locality: 'Hyattsville',
    region: 'MD',
    country: 'US',
    street: null,        // service-area business — no public storefront
    postalCode: null,    // NEEDS_CONFIRMATION
  },

  hours: { opens: '08:00', closes: '20:00', days: 'Mon–Sun' },

  languages: ['en', 'es'],

  areaServed: ['Maryland', 'Washington, DC', 'Northern Virginia'],

  buys: [
    'Gold Jewelry', 'Broken or Scrap Gold', 'Silver', 'Sterling Flatware',
    'Coins & Bullion', 'Platinum', 'Inherited or Estate Collections',
  ],

  // NEEDS_CONFIRMATION — none of these may be displayed until verified.
  license: null,        // Maryland secondhand precious metal dealer licence number
  insurance: null,      // whether at-home visits are insured/bonded
  yearsInBusiness: null,
  foundedYear: null,
  paymentMethods: null, // do not promise cash until confirmed and lawful

  // NEEDS_CONFIRMATION — never fabricate. No rating schema until these are real.
  reviews: { count: null, rating: null, sourceUrl: null },

  social: { googleBusinessProfile: null, facebook: null, instagram: null },

  site: {
    // The domain the business actually owns (registered at Squarespace).
    // Everything canonical, OG, sitemap and schema reads from here.
    canonicalOrigin: 'https://fairweight.com',
  },

  cta: {
    primary:   { en: 'Schedule a Private Evaluation', es: 'Agende una Evaluación Privada' },
    secondary: { en: 'Call or Text', es: 'Llame o Texto' },
  },
};

export const telHref = () => `tel:${BUSINESS.phone.tel}`;
export const phoneDisplay = () => BUSINESS.phone.display;
