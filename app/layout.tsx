import type { Metadata } from "next";
import { Playfair_Display, Lato, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
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
      className={`${playfair.variable} ${lato.variable} ${geistMono.variable}`}
    >
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
