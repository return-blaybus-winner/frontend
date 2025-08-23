import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "http://35.206.125.156/api/:path*",
    },
  ],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://t1.kakaocdn.net https://developers.kakao.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
