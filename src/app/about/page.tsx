import { Metadata } from "next";
import ClientAboutPage from "./client-page";

export const metadata: Metadata = {
  title: "About Me | Ashwani Singh - Mobile Product Engineer",
  description:
    "Learn about my journey as a Mobile Product Engineer, engineering principles, and professional timeline scaling Flutter applications for startups.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Me | Ashwani Singh - Mobile Product Engineer",
    description:
      "Learn about my journey as a Mobile Product Engineer, engineering principles, and professional timeline scaling Flutter applications for startups.",
    url: "https://ashwanisng.com/about",
  },
  twitter: {
    title: "About Me | Ashwani Singh - Mobile Product Engineer",
    description:
      "Learn about my journey as a Mobile Product Engineer, engineering principles, and professional timeline scaling Flutter applications for startups.",
  },
};

export default function AboutPage() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ashwani Kumar Singh",
      "jobTitle": "Senior Mobile Product Engineer",
      "knowsAbout": ["Flutter", "Go", "AWS", "Mobile Development", "Mobile UX Architecture"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <ClientAboutPage />
    </>
  );
}
