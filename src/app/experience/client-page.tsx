"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Briefcase } from "lucide-react";
import { logFirebaseEvent } from "../../lib/firebase";

export default function ClientExperiencePage() {
  const experiences = [
    {
      company: "HDFC Securities",
      role: "Senior Mobile Engineer",
      period: "Feb 2026 – Present",
      location: "Mumbai, India (Remote)",
      summary: "Leading mobile engineering initiatives, defining high-performance Flutter app architectures, and scaling secure mobile transactional features.",
      impact: [
        { label: "Architecture", detail: "Defined core Flutter BLoC/Repository design patterns for the primary mobile client." },
        { label: "Security", detail: "Standardized secure REST API communication boundaries and transaction state guards." }
      ],
      caseStudyUrl: null
    },
    {
      company: "RightHand",
      role: "Freelance Flutter Developer",
      period: "May 2025 – Feb 2026",
      location: "Qatar (Remote)",
      summary: "Led the complete UX/UI redesign and checkout integrations for Qatar's leading on-demand household services platform.",
      impact: [
        { label: "Payment Integration", detail: "Engineered secure checkout pipelines with Stripe and MyFatoorah, reducing transaction drops." },
        { label: "Live Tracking", detail: "Implemented map-based provider dispatching tracking with robust local caching." },
        { label: "Code Quality", detail: "Decoupled monolithic layouts into isolated Cubit state models to accelerate developer velocity." }
      ],
      caseStudyUrl: "/projects"
    },
    {
      company: "Hudle",
      role: "Mobile Engineer",
      period: "Feb 2024 – Jan 2026",
      location: "New Delhi, India (Hybrid)",
      summary: "Redesigned partner interfaces and optimized network calls for high-traffic sports venue bookings.",
      impact: [
        { label: "UX Redesign", detail: "Developed custom caching structures and layout widgets, boosting user engagement by 30%." },
        { label: "Performance Optimization", detail: "Streamlined GraphQL/REST API payloads, reducing endpoint latency by 40%." },
        { label: "Telemetry", detail: "Integrated AppsFlyer attribution layers to streamline campaign tracking conversions." }
      ],
      caseStudyUrl: "/projects"
    },
    {
      company: "SOCTR",
      role: "Freelance Flutter Developer (Sole Dev)",
      period: "Jun 2024 – Nov 2024",
      location: "India (Remote)",
      summary: "Served as the sole developer responsible for building and launching a social investing mobile application from scratch.",
      impact: [
        { label: "Real-time Sync", detail: "Integrated WebSocket streams to render technical stock market ticks at constant 60fps without lag." },
        { label: "Data Visualization", detail: "Built custom financial charting modules using Syncfusion and TradingView SDKs." },
        { label: "Config Management", detail: "Configured Firebase Remote Config feature toggles for dynamic runtime updates." }
      ],
      caseStudyUrl: "/projects"
    },
    {
      company: "MrMilkMan By EverAg",
      role: "Mobile Engineer",
      period: "May 2023 – Jan 2024",
      location: "Gurgaon, Haryana, India",
      summary: "Optimized delivery subscriptions and scaled pipeline deployments for agricultural SaaS services.",
      impact: [
        { label: "CI/CD Automation", detail: "Structured automated GitHub Actions pipelines, reducing release compile times by 60%." },
        { label: "Performance Tuning", detail: "Refactored local SQLite storage and queries, cutting data fetching delays by 35%." }
      ],
      caseStudyUrl: null
    }
  ];

  return (
    <div className="experience-page-wrapper">
      
      {/* Career Hero */}
      <section className="experience-hero">
        <div className="container">
          <span className="section-tag">CAREER HISTORY</span>
          <h1>Professional Experience</h1>
          <p className="subtitle">
            A history of senior engineering roles, technical decisions, and concrete business outcomes.
          </p>
        </div>
      </section>

      {/* Simplified, Clean Career Stack */}
      <section className="experience-list-section">
        <div className="container">
          <div className="exp-feed">
            {experiences.map((exp, idx) => (
              <div key={idx} className="exp-item card-glass">
                <div className="exp-item-header">
                  <div className="title-block">
                    <h3>{exp.role}</h3>
                    <div className="company-meta-row">
                      <span className="company-name font-mono">{exp.company}</span>
                      <span className="meta-dot">&middot;</span>
                      <span className="period-span">{exp.period}</span>
                    </div>
                  </div>
                  <div className="loc-meta">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="exp-summary">{exp.summary}</p>

                <div className="exp-impact-grid">
                  {exp.impact.map((imp, impIdx) => (
                    <div key={impIdx} className="impact-cell">
                      <span className="impact-label font-mono">{imp.label}</span>
                      <p className="impact-detail">{imp.detail}</p>
                    </div>
                  ))}
                </div>

                {exp.caseStudyUrl && (
                  <div className="exp-footer">
                    <Link 
                      href={exp.caseStudyUrl}
                      className="case-study-link"
                      onClick={() => logFirebaseEvent("click_experience_case_study", { company: exp.company })}
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .experience-page-wrapper {
          padding-bottom: 100px;
        }

        /* Hero */
        .experience-hero {
          padding: 100px 0 60px;
          border-bottom: 1px solid var(--border-color);
        }
        .experience-hero h1 {
          font-size: 48px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .experience-hero .subtitle {
          font-size: 19px;
          color: var(--text-secondary);
          max-width: 720px;
          line-height: 1.6;
        }

        /* Career Feed */
        .experience-list-section {
          padding: 60px 0;
        }
        .exp-feed {
          display: flex;
          flex-direction: column;
          gap: 32px;
          max-width: 800px;
          margin: 0 auto;
        }
        .exp-item {
          padding: 36px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.005);
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .exp-item:hover {
          border-color: rgba(59, 130, 246, 0.25);
          transform: translateY(-2px);
        }

        .exp-item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
        }
        .title-block h3 {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }
        .company-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: var(--text-secondary);
        }
        .company-name {
          color: var(--accent-blue);
          font-weight: 600;
        }
        .meta-dot {
          color: var(--text-muted);
        }
        .loc-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 20px;
        }

        .exp-summary {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Impact details grid */
        .exp-impact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          padding: 20px;
          border-radius: 12px;
        }
        .impact-cell {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .impact-label {
          font-size: 9px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .impact-detail {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Footer CTA links */
        .exp-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
          margin-top: 8px;
        }
        .case-study-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-headings);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--accent-blue);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .case-study-link:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .exp-item {
            padding: 24px;
          }
          .title-block h3 {
            font-size: 18px;
          }
          .experience-hero h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
