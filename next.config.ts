import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/xurshid-mohinur/:path*',
        destination: 'https://xurshid-mohinur-pink.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
