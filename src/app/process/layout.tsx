import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Process",
  description: "How Ashwani Singh approaches mobile product engineering — from discovery and architecture to delivery and post-launch. A structured, founder-friendly development process.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "My Process | Ashwani Singh — Engineering Approach",
    description: "Discovery, architecture, weekly sprints, and async communication. A transparent, milestone-driven process built for startup founders.",
    url: "/process",
  },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
