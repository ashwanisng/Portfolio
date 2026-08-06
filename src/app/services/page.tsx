import { Metadata } from "next";
import ClientServicesPage from "./client-page";

export const metadata: Metadata = {
  title: "Engineering Services & Capabilities | Ashwani Singh - Mobile Product Engineer",
  description:
    "Hire me as a contract engineer or MVP builder. Flutter mobile app development, codebase performance tuning, AI integrations, and dedicated consulting support.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering Services & Capabilities | Ashwani Singh - Mobile Product Engineer",
    description:
      "Hire me as a contract engineer or MVP builder. Flutter mobile app development, codebase performance tuning, AI integrations, and dedicated consulting support.",
    url: "https://ashwanisng.com/services",
  },
  twitter: {
    title: "Engineering Services & Capabilities | Ashwani Singh - Mobile Product Engineer",
    description:
      "Hire me as a contract engineer or MVP builder. Flutter mobile app development, codebase performance tuning, AI integrations, and dedicated consulting support.",
  },
};

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile App Development & Architecture Consulting",
    "provider": {
      "@type": "Person",
      "name": "Ashwani Kumar Singh"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Flutter Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Convert product ideas into production-ready Flutter apps in weeks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Auditing & Re-architecture",
            "description": "Diagnosing latency and memory bottlenecks in native and Flutter codebases."
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ClientServicesPage />
    </>
  );
}
