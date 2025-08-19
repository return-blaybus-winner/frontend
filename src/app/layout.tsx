import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
