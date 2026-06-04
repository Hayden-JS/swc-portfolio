import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Schwarz Web Consulting — Let's Talk",
  description: "Ready to elevate your online presence? Reach out to Schwarz Web Consulting for a free consultation on web design, local SEO, and digital marketing.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact SWC | Start Your Web Consulting Project",
    description: "Have a project in mind? Let's talk. Contact Schwarz Web Consulting to discuss your website, SEO, or digital marketing goals.",
    url: "https://hayden-js.github.io/swc-portfolio/contact",
  },
};

export default function Page() {
  return <ContactContent />;
}
