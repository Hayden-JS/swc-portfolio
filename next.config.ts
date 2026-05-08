import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/swc-portfolio',
  assetPrefix: '/swc-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
