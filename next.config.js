/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: "/nextra_sample_ts",
};

const withNextra = require("nextra")({
  theme: "@ssaitho/nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra(nextConfig);

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
