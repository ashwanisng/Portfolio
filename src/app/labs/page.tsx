import { Metadata } from "next";
import ClientLabsPage from "./client-page";

export const metadata: Metadata = {
  title: "Technical Explorations & Open Source Labs | Ashwani Singh - Mobile Product Engineer",
  description:
    "A digital playground showcasing my open-source Dart/Flutter packages, custom Android UI libraries, Bitcoin ticker apps, and AI-enabled diagnostics explorations.",
  alternates: {
    canonical: "/labs",
  },
  openGraph: {
    title: "Technical Explorations & Open Source Labs | Ashwani Singh - Mobile Product Engineer",
    description:
      "A digital playground showcasing my open-source Dart/Flutter packages, custom Android UI libraries, Bitcoin ticker apps, and AI-enabled diagnostics explorations.",
    url: "https://ashwanisng.com/labs",
  },
  twitter: {
    title: "Technical Explorations & Open Source Labs | Ashwani Singh - Mobile Product Engineer",
    description:
      "A digital playground showcasing my open-source Dart/Flutter packages, custom Android UI libraries, Bitcoin ticker apps, and AI-enabled diagnostics explorations.",
  },
};

export default function LabsPage() {
  const labsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Technical Labs and Open Source Packages",
    "description": "Open-source Flutter packages and Android UI libraries.",
    "url": "https://ashwanisng.com/labs"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(labsJsonLd) }}
      />
      <ClientLabsPage />
    </>
  );
}
