/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: "loose"
  },
  env: {
    API_URL: process.env.API_URL,
    NODE_ENV: process.env.NODE_ENV
  },
  compiler: {
    // Example: strip console logs in production
    removeConsole: isProd
  }
};

export default nextConfig;

