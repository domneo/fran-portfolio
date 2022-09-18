/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PASSWORD_PROTECT: true,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

const withTM = require("next-transpile-modules")(["@georgedoescode/spline"]); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);
