import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar"; 

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
  openGraph: {
    title: "DotSlash 2025",
    description: "The official website for DotSlash 2025, the techno-cultural fest of CSE CET",
    url: "https://dotslashcet.in/",
    type: "website",
    images: "https://i.postimg.cc/qBPjg18z/card-Image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "DotSlash 2025",
    description: "The official website for DotSlash 2025, the techno-cultural fest of CSE CET",
    images: "https://i.postimg.cc/qBPjg18z/card-Image.jpg",
    site: "dotslashcet.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="landing"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}