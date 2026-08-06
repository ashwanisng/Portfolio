import { Metadata } from "next";
import ClientProjectsPage from "./client-page";

export const metadata: Metadata = {
  title: "Case Studies & Shipped Projects | Ashwani Singh - Mobile Product Engineer",
  description:
    "Explore case studies of shipped mobile apps including Hudle, MrMilkMan, and goStops. Measured business outcomes, technical architectures, and engineering stories.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Case Studies & Shipped Projects | Ashwani Singh - Mobile Product Engineer",
    description:
      "Explore case studies of shipped mobile apps including Hudle, MrMilkMan, and goStops. Measured business outcomes, technical architectures, and engineering stories.",
    url: "https://ashwanisng.com/projects",
  },
  twitter: {
    title: "Case Studies & Shipped Projects | Ashwani Singh - Mobile Product Engineer",
    description:
      "Explore case studies of shipped mobile apps including Hudle, MrMilkMan, and goStops. Measured business outcomes, technical architectures, and engineering stories.",
  },
};

export default function ProjectsPage() {
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies of Mobile Products Shipped",
    "description": "List of production-ready mobile apps delivered for HDFC, Hudle, and MrMilkMan.",
    "url": "https://ashwanisng.com/projects"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ClientProjectsPage />
    </>
  );
}
