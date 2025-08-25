import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/:path*`,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "34-120-0-121.nip.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://t1.kakaocdn.net https://developers.kakao.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
