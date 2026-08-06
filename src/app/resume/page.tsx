import { Metadata } from "next";
import ClientResumePage from "./client-page";

export const metadata: Metadata = {
  title: "Online Resume & PDF CV | Ashwani Singh - Mobile Product Engineer",
  description:
    "Review my online resume or download my standard engineering CV. Core skill sets, experience bullets, and awards list.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Online Resume & PDF CV | Ashwani Singh - Mobile Product Engineer",
    description:
      "Review my online resume or download my standard engineering CV. Core skill sets, experience bullets, and awards list.",
    url: "https://ashwanisng.com/resume",
  },
  twitter: {
    title: "Online Resume & PDF CV | Ashwani Singh - Mobile Product Engineer",
    description:
      "Review my online resume or download my standard engineering CV. Core skill sets, experience bullets, and awards list.",
  },
};

export default function ResumePage() {
  const resumeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ashwani Kumar Singh's Curriculum Vitae",
    "description": "Professional qualifications, technical skills matrix, and corporate career path.",
    "url": "https://ashwanisng.com/resume"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />
      <ClientResumePage />
    </>
  );
}
