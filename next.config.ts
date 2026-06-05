import type { NextConfig } from "next";

// Served from https://janaakkad.github.io/jana-portfolio/ in production.
const isProd = process.env.NODE_ENV === "production";
const repo = "jana-portfolio";
// PREVIEW_LOCAL builds a root-served copy for local mobile testing.
const basePath = isProd && !process.env.PREVIEW_LOCAL ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
