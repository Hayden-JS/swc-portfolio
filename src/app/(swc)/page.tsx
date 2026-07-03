import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Schwarz Web Consulting | Freelance Web Consultant & Local SEO",
  description: "Premium web design, local SEO, and digital marketing for small businesses. Partner with a freelance web consultant who delivers results.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Schwarz Web Consulting — Web Design & Local SEO for Small Business",
    description: "Strategic web consulting and digital marketing services tailored to help your business grow online. From site design to Google Business Profile management.",
    url: "https://hayden-js.github.io/swc-portfolio/",
  },
};

export default function Page() {
  return <HomeContent />;
}
