import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Schwarz Web Consulting — Freelance Web Consultant",
  description: "Meet the independent web consultant behind SWC. Specializing in local SEO, web design, and digital strategy for small and mid-size businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Schwarz Web Consulting | Local SEO & Web Design Expert",
    description: "Built on a passion for clean design and measurable results. Schwarz Web Consulting helps businesses establish a confident, professional online presence.",
    url: "https://hayden-js.github.io/swc-portfolio/about",
  },
};

export default function Page() {
  return <AboutContent />;
}
