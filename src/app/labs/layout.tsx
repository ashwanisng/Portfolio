import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs",
  description: "Experimental projects and prototypes by Ashwani Singh — exploring AI agents, MCP tools, RAG pipelines, and Next.js side projects.",
  alternates: { canonical: "/labs" },
  openGraph: {
    title: "Labs | Ashwani Singh — Experiments & Prototypes",
    description: "Side projects and experiments in AI agents, MCP tools, and emerging mobile technologies.",
    url: "/labs",
  },
};

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
