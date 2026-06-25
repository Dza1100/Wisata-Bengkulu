import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisata Bengkulu — Jelajahi Keindahan Alam Sumatera",
  description:
    "Temukan destinasi wisata terbaik di Bengkulu: Pantai Panjang, Bunga Rafflesia, Benteng Marlborough, dan masih banyak lagi.",
  keywords: "wisata bengkulu, pantai bengkulu, rafflesia, benteng marlborough, wisata sumatera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
