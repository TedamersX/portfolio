import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default : "Mon Portfolio | Développeur Web",
    template: "%s | Mon Portfolio"
  },
  description : "Le Portfolio d'un développeur web passionné, mettant en avant ses projets, compétences et expériences en tout genre.",
  openGraph: {
    title: "Mon Portfolio | Développeur Web",
    description: "Le Portfolio d'un développeur web passionné, mettant en avant ses projets, compétences et expériences en tout genre.",
    url: "https://mon-portfolio.vercel.app/",
    siteName: "Portfolio Développeur de Tédy CROZAT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Illustration de Mon Portfolio"
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
