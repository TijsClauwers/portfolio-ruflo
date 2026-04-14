/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
    unoptimized: true, // required for static export
  },
  trailingSlash: true,
}

module.exports = nextConfig
