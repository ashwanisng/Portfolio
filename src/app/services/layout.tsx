import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Flutter MVP development, product modernization, AI feature integration, and ongoing engineering support for startups. Fixed-price and retainer engagement models.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Ashwani Singh — Flutter & Mobile Engineering",
    description: "MVP builds, product modernization, AI integration, and performance optimization for startup teams. Flexible project-based and retainer models.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
