/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PASSWORD_PROTECT: true,
  },
  images: {
    domains: ["assets.tina.io"],
  },
  transpilePackages: ["@georgedoescode/spline"],
};

module.exports = nextConfig;
