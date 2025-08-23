import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryProvider } from "./_providers/query-provider";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "400 500 600 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "무브텀 - 일상을 바꾸는 예술가들의 첫 걸음",
  description: "일상을 바꾸는 예술가들의 첫 걸음",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.6/kakao.min.js"
          integrity="sha384-WAtVcQYcmTO/N+C1N+1m6Gp8qxh+3NlnP7X1U7qP6P5dQY/MsRBNTh+e1ahJrkEm"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className={`${pretendard.variable} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
