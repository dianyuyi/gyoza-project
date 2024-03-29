/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  dangerouslyAllowSVG: true,
  images: {
    domains: [
      'images.unsplash.com',
      'scontent.ftpe8-1.fna.fbcdn.net',
      'scontent.ftpe8-2.fna.fbcdn.net',
      'scontent.ftpe8-3.fna.fbcdn.net',
      'scontent.ftpe8-4.fna.fbcdn.net',
    ],
  },
  async generateBuildId() {
    return 'gyozaStaticId'
  },
}

module.exports = nextConfig
