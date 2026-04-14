const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  trailingSlash: true,
  webpack: (config) => {
    // Shim that proxies Next.js's own bundled React but adds useEffectEvent,
    // which @sanity/vision requires. Uses the same React instance to avoid
    // dual-instance context errors.
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, 'src/react-shim.js'),
    }
    return config
  },
}

module.exports = nextConfig
