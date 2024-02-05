const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/SwipeSum" : "",
  assetPrefix: isProd ? "/SwipeSum/" : "",
  reactStrictMode: true,
};
