import { Metadata } from "next";
import ClientProcessPage from "./client-page";

export const metadata: Metadata = {
  title: "My Development Process & Workflow | Ashwani Singh - Mobile Product Engineer",
  description:
    "An overview of my structured engineering process from Discovery & Scoping to Architecture, Development, Release, and Handover support.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "My Development Process & Workflow | Ashwani Singh - Mobile Product Engineer",
    description:
      "An overview of my structured engineering process from Discovery & Scoping to Architecture, Development, Release, and Handover support.",
    url: "https://ashwanisng.com/process",
  },
  twitter: {
    title: "My Development Process & Workflow | Ashwani Singh - Mobile Product Engineer",
    description:
      "An overview of my structured engineering process from Discovery & Scoping to Architecture, Development, Release, and Handover support.",
  },
};

export default function ProcessPage() {
  const processJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Mobile Product Engineering Process",
    "description": "The exact multi-stage delivery process I use to build Flutter apps.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Discovery & Scope",
        "text": "Defining your startup's core requirements and prioritisations."
      },
      {
        "@type": "HowToStep",
        "name": "Architecture & Specs",
        "text": "Drafting database schemas, API payloads, and state models."
      },
      {
        "@type": "HowToStep",
        "name": "Iterative Development",
        "text": "Building production features in 2-week sprints with active CI/CD."
      },
      {
        "@type": "HowToStep",
        "name": "Testing & QA",
        "text": "Writing unit tests and performing regression runs on Android & iOS."
      },
      {
        "@type": "HowToStep",
        "name": "Release & Monitoring",
        "text": "Deploying to App Store and Play Store with analytics pipelines."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processJsonLd) }}
      />
      <ClientProcessPage />
    </>
  );
}
