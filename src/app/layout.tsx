import type { Metadata } from "next";
import { PT_Serif, DM_Sans, Anton } from "next/font/google";

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
    card: "summary_large_image",
    title: "Leticia Martins personal organizer",
    description:
      "Leticia Martins é uma personal organizer em Maringá. Especialista em organização residencial, empresarial e pós-mudança. Transforme seus ambientes com soluções práticas, personalizadas e eficientes.",
    siteId: "1467726470533754880",
    creator: "Junior Alves",
    creatorId: "1467726470533754880",
    images: ["https://www.leticiamartins.com.br/images/leticia-martins.png"], // Must be an absolute URL
  },
  manifest: "/site.webmanifest",
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
        </div>
      </body>
    </html>
  );
}
