import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Anton, DM_Sans, PT_Serif } from "next/font/google";

import NavBar from "@/components/NavBar";
import NavMobile from "@/components/NavMobile";
import { WhatssAppIcon } from "@/components/whatsapp";

import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leticiamartins.com.br"),
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['leticia384b@gmail.com', 'https://www.leticiamartins.com.br'],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    images: "/images/leticia-martins.png",
    title: "Leticia Martins Personal Organizer",
  },
  authors: { name: "Junior Alves" },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: ["/leticiamartins-icon.png"],
    other: [
      {
        rel: "/android-chrome-192x192.png",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  twitter: {
    title: "Leticia Martins personal organizer",
    description:
      "Leticia Martins é uma personal organizer em Maringá. Especialista em organização residencial, empresarial e pós-mudança. Transforme seus ambientes com soluções práticas, personalizadas e eficientes.",
    siteId: "prj_4IBaNnMK4MnvcPrgEFHHNSBlhINE",
    creator: "Junior Alves",
    creatorId: "lX02uwy4OteDC5MLg4V8nXvP",
    images: ["https://www.leticiamartins.com.br/images/leticia-martins.png"], // Must be an absolute URL
  },
  manifest: "/site.webmanifest",
  assets: ['https://www.leticiamartins.com.br/images'],
  category: 'Personal Organizer',
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${anton.variable} ${ptSerif.variable} ${dmSans.className} antialiased scroll-smooth`}
      >
        <div className="min-h-dvh max-w-screen bg-white">
          <NavBar />
          <NavMobile />
          {children}
          <WhatssAppIcon />
          <Analytics />
          <GoogleAnalytics gaId="G-MLEXRG2E0N" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Letícia Martins - Personal Organizer',
                image: 'https://www.leticiamartins.com.br/images/leticia-martins.png',
                '@id': 'https://www.leticiamartins.com.br',
                url: 'https://www.leticiamartins.com.br',
                telephone: '+5544998138138',
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Maringá',
                  addressRegion: 'PR',
                  addressCountry: 'BR',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: -23.4209,
                  longitude: -51.9331,
                },
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                    ],
                    opens: '08:00',
                    closes: '18:00',
                  },
                ],
                sameAs: [
                  'https://www.instagram.com/leticiamartins.organizer/',
                  'https://www.facebook.com/leticiamartinsorganizer/',
                ],
                description:
                  'Personal Organizer em Maringá especialista em organização residencial, comercial, pós-mudança e marcenaria inteligente.',
              }),
            }}
          />
        </div>
      </body>
    </html>
  );
}
