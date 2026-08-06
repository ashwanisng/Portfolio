import { Metadata } from "next";
import ClientContactPage from "./client-page";

export const metadata: Metadata = {
  title: "Start a Project | Ashwani Singh - Mobile Product Engineer",
  description:
    "Get in touch to build a production-grade Flutter MVP, modernize your legacy architecture, or hire me for contract product engineering support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Start a Project | Ashwani Singh - Mobile Product Engineer",
    description:
      "Get in touch to build a production-grade Flutter MVP, modernize your legacy architecture, or hire me for contract product engineering support.",
    url: "https://ashwanisng.com/contact",
  },
  twitter: {
    title: "Start a Project | Ashwani Singh - Mobile Product Engineer",
    description:
      "Get in touch to build a production-grade Flutter MVP, modernize your legacy architecture, or hire me for contract product engineering support.",
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Ashwani Kumar Singh",
    "url": "https://ashwanisng.com/contact"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ClientContactPage />
    </>
  );
}
