import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Ashwani Kumar Singh — Mobile Product Engineer with 4+ years building Flutter apps for 100K+ users. Currently Senior Mobile Engineer at HDFC Securities.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ashwani Singh | Mobile Product Engineer",
    description: "4+ years building production-grade Flutter apps. Led interface redesign at Hudle (+30% engagement), automated CI/CD at EverAg (-60% build time), shipped apps with 99.5% crash-free rate.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
