/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placekitten.com"],
  },
};

const withTM = require("next-transpile-modules")(["@georgedoescode/spline"]); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);
