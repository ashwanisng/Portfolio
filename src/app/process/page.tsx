"use client";

import { useState } from "react";
import { 
  Search, 
  Map, 
  Layout, 
  Code, 
  Workflow, 
  ShieldCheck, 
  CheckCircle,
  HelpCircle,
  Compass
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Scope",
      icon: <Search size={20} />,
      desc: "Defining your startup's core requirements, primary user flows, and target MVP timelines.",
      deliverables: ["Product requirements brief", "Feature prioritization matrix", "Approximate milestones roadmap"]
    },
    {
      num: "02",
      title: "Product Planning",
      icon: <Map size={20} />,
      desc: "Translating features into user-stories, service definitions, data structures, and tech stack choices.",
      deliverables: ["Database entity schema blueprints", "Wireframe mapping flows", "GitHub repository architecture configuration"]
    },
    {
      num: "03",
      title: "UI Design Parity Review",
      icon: <Layout size={20} />,
      desc: "Reviewing your Figma/Adobe XD designs to plan out layout modularity and widget structures in Flutter.",
      deliverables: ["Widget directory mapping blueprints", "Interactive design token configurations (fonts, colors)", "Pixel-perfect Parity review checklist"]
    },
    {
      num: "04",
      title: "Flutter Development Sprints",
      icon: <Code size={20} />,
      desc: "Writing code in focused sprints. High-frequency commits carrying out widget creation, logic modeling, and state mapping.",
      deliverables: ["Clean BLoC structures", "Dynamic cross-platform layouts", "Repository data mockups"]
    },
    {
      num: "05",
      title: "Backend & Integrations",
      icon: <Workflow size={20} />,
      desc: "Integrating secure API payloads, JWT auth tokens, Firebase database instances, and AI prompt context pipelines.",
      deliverables: ["Rest API / GraphQL payload bindings", "Gemini API prompting layers integrations", "Attribution tracking SDKs mappings"]
    },
    {
      num: "06",
      title: "Testing & Refinement",
      icon: <ShieldCheck size={20} />,
      desc: "Validating client performance, frame rates, and database constraints under simulated conditions.",
      deliverables: ["Automated unit/widget test passes", "Latency caching checks", "QA build releases (TestFlight/Firebase App Distribution)"]
    },
    {
      num: "07",
      title: "App Store Deployments",
      icon: <CheckCircle size={20} />,
      desc: "Deploying finalized container builds to AWS and managing the app stores approval pipelines.",
      deliverables: ["Apple App Store submission passes", "Google Play Store live releases", "Production AWS ECS configurations"]
    },
    {
      num: "08",
      title: "Post-Launch Support",
      icon: <Compass size={20} />,
      desc: "Monitoring crash rates, collecting telemetry data, and refining code schemas based on real user feedback.",
      deliverables: ["Weekly analytics reports", "Patch updates and bug fixes", "Ongoing roadmap planning retainer"]
    }
  ];

  return (
    <div className="process-page-wrapper">
      <section className="process-hero">
        <div className="container">
          <span className="section-tag">COLLABORATION PROCESS</span>
          <h1>Exactly how I work</h1>
          <p className="subtitle">
            A structured, transparent roadmap designed to move your mobile product from idea to App Stores launch.
          </p>
        </div>
      </section>

      {/* Visual Timeline grid */}
      <section className="process-timeline-section">
        <div className="container">
          <div className="process-vertical-timeline">
            <div className="timeline-center-spine"></div>

            <div className="timeline-steps-list">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`timeline-step-row ${isEven ? "even" : "odd"}`}>
                    <div className="timeline-step-card card-glass reveal-on-scroll">
                      <div className="step-card-header">
                        <div className="step-num-badge">
                          <span>{step.num}</span>
                        </div>
                        <div className="step-title-col">
                          <h3>{step.title}</h3>
                          <div className="icon-row-meta">
                            {step.icon}
                            <span>Sprint Phase</span>
                          </div>
                        </div>
                      </div>
                      <p className="step-desc">{step.desc}</p>
                      
                      <div className="step-deliverables">
                        <h5>Key Outputs:</h5>
                        <ul className="outputs-list">
                          {step.deliverables.map((item, oIdx) => (
                            <li key={oIdx}>
                              <span className="out-bullet"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .process-page-wrapper {
          padding-bottom: 80px;
        }

        /* Hero */
        .process-hero {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .process-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .process-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 720px;
        }

        /* Timeline Box */
        .process-timeline-section {
          padding: 60px 0;
        }
        .process-vertical-timeline {
          position: relative;
        }
        .timeline-center-spine {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, 
            var(--border-color) 0%, 
            var(--accent-blue-border) 30%, 
            var(--accent-purple-border) 70%, 
            var(--border-color) 100%
          );
        }
        .timeline-steps-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        .timeline-step-row {
          display: flex;
          width: 100%;
        }
        .timeline-step-row.even {
          justify-content: flex-start;
          padding-right: 50%;
        }
        .timeline-step-row.odd {
          justify-content: flex-end;
          padding-left: 50%;
        }
        .timeline-step-card {
          width: calc(100% - 40px);
          max-width: 500px;
          padding: 40px;
          position: relative;
          margin: 0 20px;
        }
        
        /* Bullets on spine */
        .timeline-step-card::before {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2.5px solid var(--accent-blue);
          top: 40px;
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
        }
        .timeline-step-row.even .timeline-step-card::before {
          right: -31px;
        }
        .timeline-step-row.odd .timeline-step-card::before {
          left: -31px;
        }

        /* Card internals */
        .step-card-header {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }
        .step-num-badge {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 18px;
          color: var(--accent-blue-light);
        }
        .step-title-col h3 {
          font-size: 18px;
          color: #fff;
        }
        .icon-row-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .icon-row-meta span {
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .step-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .step-deliverables h5 {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #fff;
          margin-bottom: 12px;
        }
        .outputs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .outputs-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        .out-bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--accent-blue);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .timeline-center-spine {
            left: 20px;
            transform: none;
          }
          .timeline-step-row.even, 
          .timeline-step-row.odd {
            justify-content: flex-start;
            padding-right: 0;
            padding-left: 40px;
          }
          .timeline-step-card {
            max-width: 100%;
            width: 100%;
            margin: 0;
          }
          .timeline-step-row.even .timeline-step-card::before,
          .timeline-step-row.odd .timeline-step-card::before {
            left: -29px;
            right: auto;
          }
        }
        @media (max-width: 600px) {
          .process-hero h1 {
            font-size: 32px;
          }
          .timeline-step-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
