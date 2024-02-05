const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/SwipeSum" : "",
  assetPrefix: isProd ? "/SwipeSum/" : "",
  reactStrictMode: true,
};
