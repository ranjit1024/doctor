import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack:{
    root: __dirname,
  },
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
        {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
