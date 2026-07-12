import type { Metadata } from "next";
import { Libre_Caslon_Display, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Direct from Panipat, India`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "cotton bedsheets wholesale UK",
    "Panipat home textile exporter",
    "cotton percale sateen supplier",
    "comforter sets wholesale India",
    "boutique bed linen wholesale",
    "IEC registered exporter India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Direct from Panipat, India`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Direct from Panipat, India`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Panipat",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  email: "hello@houseofsandg.com",
  areaServed: ["GB", "IE", "EU"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
