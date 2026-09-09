import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wdd430-portfolio",
  assetPrefix: "/wdd430-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;