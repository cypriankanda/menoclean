/** @type {import('next').NextConfig} */
const nextConfig = {
  // domains: ['plus.unsplash.com']
  // distDir: "build",
  images: {
    minimumCacheTTL: 50,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

export default nextConfig;
