import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "4+ years of professional Flutter mobile engineering experience at HDFC Securities, Hudle, MrMilkman by EverAg, and Squareboat. Production apps serving 100K+ users.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience | Ashwani Singh — Mobile Engineer",
    description: "Senior Mobile Engineer at HDFC Securities. Previously at Hudle, EverAg, and Squareboat. 4+ years shipping production Flutter apps.",
    url: "/experience",
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
