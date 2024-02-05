/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: isProd ? "/SwipeSum" : "",
  assetPrefix: isProd ? "/SwipeSum/" : "",
};

module.exports = nextConfig;
