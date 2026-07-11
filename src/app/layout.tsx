import type { Metadata } from "next";
import { Libre_Caslon_Display, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Libre_Caslon_Display({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "House of S&G — Direct from Panipat, India",
  description:
    "House of S&G sources and ships premium cotton bedsheets and home linen direct from a Panipat weaving unit to boutique retailers in the UK. No trading house, no middlemen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
