const withTwin = require("./withTwin.js");
const nextra = require("nextra");
// const nextConfig = { output: "export" };
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["nowblockchain.io"],
  },
  // pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    // images: {
    //   unoptimized: true,
    // },
    // forceSwcTransforms: true,
  },
  redirects: async () => [
    {
      source: "/docs/welcome",
      destination: "/docs/about/welcome",
      permanent: true,
    },
  ],
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  // options
  flexsearch: true,
  staticImage: true,
  defaultShowCopyCode: true,
});

module.exports = withTwin(withNextra(nextConfig));
