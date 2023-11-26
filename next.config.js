/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PASSWORD_PROTECT: "true",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
      },
    ],
  },
  transpilePackages: ["@georgedoescode/spline"],
};

module.exports = nextConfig;
