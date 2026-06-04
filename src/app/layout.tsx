import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hayden-js.github.io/swc-portfolio/"),
  title: {
    default: "Schwarz Web Consulting | Freelance Web Consultant & Local SEO",
    template: "%s | Schwarz Web Consulting",
  },
  description: "Premium web design, local SEO, and digital marketing for small businesses. Partner with a freelance web consultant who delivers results.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Schwarz Web Consulting — Web Design & Local SEO for Small Business",
    description: "Strategic web consulting and digital marketing services tailored to help your business grow online. From site design to Google Business Profile management.",
    url: "https://hayden-js.github.io/swc-portfolio/",
    siteName: "Schwarz Web Consulting",
    locale: "en_US",
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
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
