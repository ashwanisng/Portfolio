import { Metadata } from "next";
import ClientExperiencePage from "./client-page";

export const metadata: Metadata = {
  title: "Professional Work Experience Timeline | Ashwani Singh - Mobile Product Engineer",
  description:
    "Review my professional history as a Senior Flutter Engineer at HDFC Securities, Hudle, and MrMilkMan. Core milestones, achievements, and impact.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Professional Work Experience Timeline | Ashwani Singh - Mobile Product Engineer",
    description:
      "Review my professional history as a Senior Flutter Engineer at HDFC Securities, Hudle, and MrMilkMan. Core milestones, achievements, and impact.",
    url: "https://ashwanisng.com/experience",
  },
  twitter: {
    title: "Professional Work Experience Timeline | Ashwani Singh - Mobile Product Engineer",
    description:
      "Review my professional history as a Senior Flutter Engineer at HDFC Securities, Hudle, and MrMilkMan. Core milestones, achievements, and impact.",
  },
};

export default function ExperiencePage() {
  const experienceJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ashwani Kumar Singh's Work Experience",
    "description": "Career highlights as a mobile engineer scaling Flutter apps.",
    "url": "https://ashwanisng.com/experience"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceJsonLd) }}
      />
      <ClientExperiencePage />
    </>
  );
}
