import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't pick up a stray lockfile in a parent
  // directory (e.g. ~/package-lock.json).
  turbopack: {
    root: __dirname,
  },
  // Allow the dev server to be reached over the LAN / 127.0.0.1 during local
  // testing. Harmless in production (dev-only setting).
  allowedDevOrigins: ["localhost", "127.0.0.1"],
};

export default nextConfig;
