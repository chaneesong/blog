/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
