import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | Web Design, Local SEO & Digital Marketing",
  description: "Explore SWC's full-service offerings: website design & management, local SEO services, digital marketing, and Google Business Profile management.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "SWC Services | Web Design, Local SEO & Digital Marketing Agency",
    description: "From custom website builds to local search optimization, we deliver the tools your business needs to compete and convert online.",
    url: "https://hayden-js.github.io/swc-portfolio/services",
  },
};

export default function Page() {
  return <ServicesContent />;
}
