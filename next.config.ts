import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true, // so you can debug
  webpack(config, { dev }) {
    // Optional: disable minification altogether
    if (!dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

export default nextConfig;
