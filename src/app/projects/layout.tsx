import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected Flutter engineering case studies — Hudle, MrMilkman, goStops. Real business outcomes: +30% engagement, -40% API latency, 99.5% crash-free rate.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Ashwani Singh — Flutter Engineering Case Studies",
    description: "Production Flutter apps shipped for India's leading startups. Detailed engineering stories covering architecture, performance, and business impact.",
    url: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
