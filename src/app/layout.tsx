import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MiiInteractor } from "../components/MiiInteractor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tédy CROZAT | Développeur Web | Backend | Frontend | Fullstack",
  description: "Développeur Web spécialisé en Backend, Frontend et Fullstack. Découvrez mes projets et compétences en développement web ainsi que mon parcours professionnel.",
  keywords: [
    "Développeur Web",
    "Backend",
    "Frontend",
    "Fullstack",
    "Portfolio",
    "Next.js"
  ],
  authors: [{ name: "Tédy CROZAT", url: "" }],
  creator: "Tédy CROZAT",
  openGraph: {
    title: "Tédy CROZAT | Développeur Web | Backend | Frontend | Fullstack",
    description: "Développeur Web spécialisé en Backend, Frontend et Fullstack. Découvrez mes projets et compétences en développement web ainsi que mon parcours professionnel.",
    url: "",
    siteName: "Tédy CROZAT Portfolio",
    images: [],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tédy CROZAT | Développeur Web | Backend | Frontend | Fullstack",
    description: "Développeur Web spécialisé en Backend, Frontend et Fullstack. Découvrez mes projets et compétences en développement web ainsi que mon parcours professionnel.",
    images: [],
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <MiiInteractor/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
