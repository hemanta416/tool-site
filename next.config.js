/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // App Router सक्षम पार्न
  },
  images: {
    domains: [], // यदि बाहिरी images राख्न चाहानुहुन्छ भने यहाँ domain राख्नुहोस्
  },
};

module.exports = nextConfig;
