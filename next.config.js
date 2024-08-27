/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/nextra_sample_ts" : "",
};

const withNextra = require('nextra')({
  theme: '@ssaitho/nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra(nextConfig);
