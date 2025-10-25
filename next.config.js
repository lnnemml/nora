/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
