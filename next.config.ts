import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "http://35.206.125.156/api/:path*",
    },
  ],
};

export default nextConfig;
