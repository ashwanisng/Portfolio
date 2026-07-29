"use client";

import Link from "next/link";
import { ArrowRight, Check, Shield, Zap, Target, Briefcase, HelpCircle } from "lucide-react";

export default function Services() {
  const serviceOfferings = [
    {
      title: "MVP Development",
      statement: "Build a complete, store-ready cross-platform mobile application to validate your product thesis.",
      value: "Reduces time-to-market by 50% using a shared codebase and scalable cloud defaults.",
      deliverables: [
        "Pixel-perfect responsive iOS and Android app (Flutter)",
        "Serverless or microservices backend structure (Go/PostgreSQL/Firebase)",
        "Secure User Authentication & Profile management",
        "Third-party API integrations (Payments, mapping, search)",
        "Core Analytics dashboards & Push Notification pipelines",
        "App Store (Apple) & Google Play Store release submissions"
      ]
    },
    {
      title: "Product Modernization",
      statement: "Refactor legacy mobile architectures, resolve performance leaks, and secure core dependencies.",
      value: "Restores codebase maintainability, decreases crash rates, and prepares your product for feature scale.",
      deliverables: [
        "Complete package dependency upgrades and deprecations resolve",
        "Refactoring state management to clean BLoC / Repository design patterns",
        "Decoupling tightly bound components and modularizing repositories",
        "Standardizing API communication layers and payload schema mappings",
        "Integrating Git feature-branching workflows and automated builds"
      ]
    },
    {
      title: "Add Practical AI Capabilities",
      statement: "Embed intelligent workflow assistance and localized context parsing into existing products.",
      value: "Enhances user retention and opens high-value monetization capabilities.",
      deliverables: [
        "Gemini API / OpenAI SDK secure integrations",
        "Localized prompt engineering and dynamic context injection",
        "Structured JSON schema parsing output validations in backend APIs",
        "RAG integration with device-level caching",
        "AI-assisted chat components and autocomplete forms"
      ]
    },
    {
      title: "Improve App Performance & UX",
      statement: "Profile, benchmark, and resolve latency lag, memory leaks, and interface shifts.",
      value: "Improves conversion funnels and ensures user satisfaction (Lighthouse/Store benchmarks).",
      deliverables: [
        "Endpoint response latency caching implementations (Redis/SQLite)",
        "Widget tree optimizations resolving redundant build cycles",
        "Asset compression, localized caching, and bundle size reduction",
        "Crash-analytics telemetry logging (Firebase/Sentry)",
        "Elimination of interface layout shifts and lag frames"
      ]
    },
    {
      title: "Ongoing Engineering Support",
      statement: "Partner as your dedicated contract engineer executing sprint roadmaps.",
      value: "Gives you reliable execution velocity without the overhead of a full-time hire.",
      deliverables: [
        "20 to 40 hours per week of dedicated development capacity",
        "Active participation in daily standups and weekly reviews",
        "Fast feature scoping, estimations, and code review reviews",
        "Regular store updates and bug-fix deployments",
        "Direct Slack, Discord, and Loom async syncs"
      ]
    }
  ];

  return (
    <div className="services-page-wrapper">
      <section className="services-intro">
        <div className="container">
          <span className="section-tag">SERVICES</span>
          <h1>Value-Driven Engineering Offerings</h1>
          <p className="subtitle">
            I don't sell hours. I sell outcomes. I partner with startups to deliver production-grade applications that drive real business results.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list-details">
        <div className="container service-cards-col">
          {serviceOfferings.map((service, idx) => (
            <div key={idx} className="detailed-service-card card-glass reveal-on-scroll">
              <div className="service-info-col">
                <span className="offering-number">0{idx + 1}</span>
                <h2>{service.title}</h2>
                <p className="statement">{service.statement}</p>
                <div className="value-box">
                  <span className="val-lbl">Business Value:</span>
                  <span className="val-text">{service.value}</span>
                </div>
                <Link href={`/contact?service=${service.title.toLowerCase().replace(/ /g, "-")}`} className="btn btn-outline btn-sm m-t-20">
                  Discuss this service
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="service-deliverables-col">
                <h4>What You Receive (Deliverables)</h4>
                <ul className="deliverables-checklist">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx}>
                      <span className="check-icon-badge">
                        <Check size={12} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="engagement-models-section">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-tag">ENGAGEMENT MODELS</span>
            <h2 className="section-title">Ways We Can Work Together</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Choose the model that best fits your startup's development budget and speed requirements.
            </p>
          </div>

          <div className="models-grid m-t-40">
            <div className="model-card card-glass reveal-on-scroll">
              <div className="icon-wrapper">
                <Target size={20} className="text-blue" />
              </div>
              <h3>Project-Based</h3>
              <p>Best for launching brand new MVPs with a defined scope. You get a locked budget, clear timelines, and a fully functional application ready for users.</p>
            </div>

            <div className="model-card card-glass reveal-on-scroll reveal-delay-1">
              <div className="icon-wrapper">
                <Briefcase size={20} className="text-purple" />
              </div>
              <h3>Retainer Contracts</h3>
              <p>Best for startups with an existing product needing ongoing feature development. Reserve 20 or 40 hours of development capacity weekly with active standup syncs.</p>
            </div>

            <div className="model-card card-glass reveal-on-scroll reveal-delay-2">
              <div className="icon-wrapper">
                <Shield size={20} className="text-green" />
              </div>
              <h3>Technical Consulting</h3>
              <p>Best for founders seeking architectural blueprints, code reviews, performance audits, or feasibility reviews before writing code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Won't Do Section */}
      <section className="boundaries-section">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-tag section-tag-orange">BOUNDARIES</span>
            <h2 className="section-title">What I Won't Do</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              To maintain high engineering standards and deliver successful products, I set clear boundaries on how I work.
            </p>
          </div>

          <div className="boundaries-grid m-t-40">
            <div className="boundary-card card-glass reveal-on-scroll">
              <span className="boundary-icon">×</span>
              <h3>No Unscoped Builds</h3>
              <p>I don't start development or write code without a defined scope, user flow diagrams, or clear business requirements to prevent scope creep.</p>
            </div>

            <div className="boundary-card card-glass reveal-on-scroll reveal-delay-1">
              <span className="boundary-icon">×</span>
              <h3>No Compromised Deadlines</h3>
              <p>I don't commit to artificial, rushed, or unrealistic deadlines that compromise the app's structural stability, security, or performance.</p>
            </div>

            <div className="boundary-card card-glass reveal-on-scroll reveal-delay-2">
              <span className="boundary-icon">×</span>
              <h3>No Fragile Hacks</h3>
              <p>I don't write fragile, undocumented workarounds or cut corners. I prioritize clean, modular, and maintainable architectures that stand the test of time.</p>
            </div>

            <div className="boundary-card card-glass reveal-on-scroll reveal-delay-3">
              <span className="boundary-icon">×</span>
              <h3>No Transactional Work</h3>
              <p>I don't treat partnerships as transactional, one-off code handovers. I focus on building long-term product collaborations where I can contribute to product strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page-wrapper {
          padding-bottom: 80px;
        }

        /* Intro */
        .services-intro {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .services-intro h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .services-intro .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 720px;
        }

        /* Detailed cards */
        .services-list-details {
          padding: 60px 0;
        }
        .service-cards-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .detailed-service-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 48px;
          align-items: start;
        }
        .offering-number {
          font-family: var(--font-headings);
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-blue);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 12px;
        }
        .service-info-col h2 {
          font-size: 28px;
          margin-bottom: 16px;
        }
        .service-info-col .statement {
          font-size: 16px;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .value-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 16px;
          border-radius: 10px;
          font-size: 13px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .val-lbl {
          font-weight: 700;
          color: var(--accent-blue-light);
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 0.05em;
        }
        .val-text {
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Deliverables Col */
        .service-deliverables-col h4 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .deliverables-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .deliverables-checklist li {
          display: flex;
          align-items: start;
          gap: 12px;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .check-icon-badge {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent-blue-glow);
          border: 1px solid var(--accent-blue-border);
          color: var(--accent-blue-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Engagement Models */
        .engagement-models-section {
          padding: 60px 0 100px;
          border-top: 1px solid var(--border-color);
        }
        .models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .model-card {
          padding: 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .model-card h3 {
          font-size: 18px;
          margin-bottom: 12px;
        }
        .model-card p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

         /* Boundaries Section */
        .boundaries-section {
          padding: 80px 0 100px;
          border-top: 1px solid var(--border-color);
        }
        .section-tag-orange {
          color: #f97316 !important;
          background: rgba(249, 115, 22, 0.08) !important;
          border: 1px solid rgba(249, 115, 22, 0.15) !important;
        }
        .boundaries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .boundary-card {
          padding: 36px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(249, 115, 22, 0.05) !important;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .boundary-card:hover {
          transform: translateY(-4px);
          border-color: rgba(249, 115, 22, 0.2) !important;
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.05);
        }
        .boundary-icon {
          font-size: 28px;
          font-weight: 700;
          color: #ef4444;
          line-height: 1;
          margin-bottom: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .boundary-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 12px;
        }
        .boundary-card p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .detailed-service-card {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 32px 24px;
          }
          .models-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .boundaries-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 600px) {
          .services-intro h1 {
            font-size: 32px;
          }
          .boundaries-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
