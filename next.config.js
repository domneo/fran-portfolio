/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PASSWORD_PROTECT: true,
  },
  transpilePackages: ["@georgedoescode/spline"],
};

module.exports = nextConfig;
