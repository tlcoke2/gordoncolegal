import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/gordoncolegal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gordoncolegal/' : '',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
};

export default nextConfig;
