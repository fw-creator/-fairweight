/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first, WebP as the fallback, before the original PNG.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 390, 640, 828, 1080, 1280, 1440, 1920],
  },
};

export default nextConfig;
