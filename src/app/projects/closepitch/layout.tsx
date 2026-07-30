import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClosePitch Case Study",
  description: "ClosePitch — AI-powered sales productivity platform built with Flutter and Go microservices on AWS. Case study covering architecture, Redis caching, and LLM integration.",
  alternates: { canonical: "/projects/closepitch" },
  openGraph: {
    title: "ClosePitch Case Study | Ashwani Singh",
    description: "How I built an AI pitch generation platform with Flutter, Go microservices, Redis caching, and AWS infrastructure.",
    url: "/projects/closepitch",
  },
};

export default function ClosePitchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
