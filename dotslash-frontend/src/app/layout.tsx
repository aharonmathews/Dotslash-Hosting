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

        <meta property="og:url" content="https://dot-slash-website-2025.vercel.app/" />
        <meta property="og:url" content="https://dotslashcet.in/" />
        <meta property="og:url" content="http://dotslash.cet.ac.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DotSlash 2025" />
        <meta property="og:description" content="The official website for DotSlash 2025, the techno-cultural fest of CSE CET" />
        <meta property="og:image" content="https://i.postimg.cc/qBPjg18z/card-Image.jpg" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="dot-slash-website-2025.vercel.app" />
        <meta property="twitter:domain" content="dotslashcet.in" />
        <meta property="twitter:domain" content="dotslash.cet.ac.in" />
        <meta property="twitter:url" content="https://dot-slash-website-2025.vercel.app/" />
        <meta property="twitter:url" content="https://dotslashcet.in/" />
        <meta property="twitter:url" content="http://dotslash.cet.ac.in/" />
        <meta name="twitter:title" content="DotSlash 2025" />
        <meta name="twitter:description" content="The official website for DotSlash 2025, the techno-cultural fest of CSE CET" />
        <meta name="twitter:image" content="https://i.postimg.cc/qBPjg18z/card-Image.jpg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
