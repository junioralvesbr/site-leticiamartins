import type { Metadata } from "next";
import { PT_Serif, DM_Sans, Anton } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
})

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
})

export const metadata: Metadata = {
  title: "Leticia Martins",
  description: "Leticia Martins personal organizer. Profissional especializada em organização residencial, empresarial e pós-mudança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${anton.variable} ${ptSerif.variable} ${dmSans.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
