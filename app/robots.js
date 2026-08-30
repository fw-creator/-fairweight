import { BUSINESS } from '@/lib/business';
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BUSINESS.site.canonicalOrigin}/sitemap.xml`,
    host: BUSINESS.site.canonicalOrigin,
  };
}
