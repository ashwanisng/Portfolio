import { Metadata } from "next";
import ClientClosePitchPage from "./client-page";

export const metadata: Metadata = {
  title: "ClosePitch Case Study: AI Sales Platform | Ashwani Singh - Mobile Product Engineer",
  description:
    "An in-depth technical case study of building and scaling ClosePitch. Learn about the Flutter frontend architecture, Go backend microservices, and AWS deployment pipelines.",
  alternates: {
    canonical: "/projects/closepitch",
  },
  openGraph: {
    title: "ClosePitch Case Study: AI Sales Platform | Ashwani Singh - Mobile Product Engineer",
    description:
      "An in-depth technical case study of building and scaling ClosePitch. Learn about the Flutter frontend architecture, Go backend microservices, and AWS deployment pipelines.",
    url: "https://ashwanisng.com/projects/closepitch",
  },
  twitter: {
    title: "ClosePitch Case Study: AI Sales Platform | Ashwani Singh - Mobile Product Engineer",
    description:
      "An in-depth technical case study of building and scaling ClosePitch. Learn about the Flutter frontend architecture, Go backend microservices, and AWS deployment pipelines.",
  },
};

export default function ClosePitchPage() {
  const closepitchJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "ClosePitch AI Sales Platform Case Study",
    "author": {
      "@type": "Person",
      "name": "Ashwani Kumar Singh"
    },
    "description": "Case study of building and scaling ClosePitch, an AI-powered sales platform built with Flutter, Go, and AWS.",
    "url": "https://ashwanisng.com/projects/closepitch"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(closepitchJsonLd) }}
      />
      <ClientClosePitchPage />
    </>
  );
}
