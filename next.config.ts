import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    qualities: [25, 50, 75, 100]
  }
};

export default nextConfig;
