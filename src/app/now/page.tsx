import { Metadata } from "next";
import ClientNowPage from "./client-page";

export const metadata: Metadata = {
  title: "What I'm Doing Now | Ashwani Singh - Mobile Product Engineer",
  description:
    "A snapshot of my current professional commitments, coding goals, current reads, and areas of active technical research.",
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    title: "What I'm Doing Now | Ashwani Singh - Mobile Product Engineer",
    description:
      "A snapshot of my current professional commitments, coding goals, current reads, and areas of active technical research.",
    url: "https://ashwanisng.com/now",
  },
  twitter: {
    title: "What I'm Doing Now | Ashwani Singh - Mobile Product Engineer",
    description:
      "A snapshot of my current professional commitments, coding goals, current reads, and areas of active technical research.",
  },
};

export default function NowPage() {
  const nowJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "What I'm Doing Now",
    "description": "Active technical research, current books, and coding priorities of Ashwani Singh.",
    "url": "https://ashwanisng.com/now"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nowJsonLd) }}
      />
      <ClientNowPage />
    </>
  );
}
