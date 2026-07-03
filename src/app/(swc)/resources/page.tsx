import type { Metadata } from "next";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Resources | Web Design & SEO Insights — SWC",
  description: "Actionable guides, tips, and insights on web design, local SEO, and digital marketing — from a freelance web consultant who knows small business.",
  alternates: {
    canonical: "/resources/",
  },
  openGraph: {
    title: "Resources | Schwarz Web Consulting — Insights & Guides",
    description: "Explore SWC's curated collection of resources covering web design best practices, local SEO strategies, and digital marketing tactics for small businesses.",
    url: "https://hayden-js.github.io/swc-portfolio/resources",
  },
};

export default function Page() {
  return <ResourcesContent />;
}
