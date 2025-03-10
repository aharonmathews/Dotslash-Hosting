import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DotSlash 2025",
  description: "The official website for DotSlash 2025, the techno-cultural fest of CSE CET",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The official website for DotSlash 2025, the techno-cultural fest of CSE CET" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DotSlash 2025" />
        <meta property="og:description" content="The official website for DotSlash 2025, the techno-cultural fest of CSE CET" />
        <meta property="og:image" content="/cardImage.webp" />
        <meta property="og:url" content="https://www.dotslashcet.in" />
        <meta name="twitter:card" content="/cardImage.webp" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
