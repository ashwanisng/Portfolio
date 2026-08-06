import { Metadata } from "next";
import ClientThinkingPage from "./client-page";

export const metadata: Metadata = {
  title: "Engineering Philosophy & Essays | Ashwani Singh - Mobile Product Engineer",
  description:
    "Read my technical articles and engineering principles. Thoughts on high-frequency releases, modular codebases, and why performance is a feature.",
  alternates: {
    canonical: "/thinking",
  },
  openGraph: {
    title: "Engineering Philosophy & Essays | Ashwani Singh - Mobile Product Engineer",
    description:
      "Read my technical articles and engineering principles. Thoughts on high-frequency releases, modular codebases, and why performance is a feature.",
    url: "https://ashwanisng.com/thinking",
  },
  twitter: {
    title: "Engineering Philosophy & Essays | Ashwani Singh - Mobile Product Engineer",
    description:
      "Read my technical articles and engineering principles. Thoughts on high-frequency releases, modular codebases, and why performance is a feature.",
  },
};

export default function ThinkingPage() {
  const thinkingJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Engineering Philosophy & Essays",
    "description": "Essays and articles on shipping small iterations and modular codebases.",
    "url": "https://ashwanisng.com/thinking"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thinkingJsonLd) }}
      />
      <ClientThinkingPage />
    </>
  );
}
