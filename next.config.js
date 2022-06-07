/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
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
}
