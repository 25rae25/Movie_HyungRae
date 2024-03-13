import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next1@13.2.4 Blog",
  description: "next@13.2.4 Blog 입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
