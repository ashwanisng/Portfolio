"use client";

import availability from "../../config/availability.json";
import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Target, 
  Briefcase, 
  Shield, 
  Clock, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Cpu,
  TrendingUp,
  Activity,
  FileText
} from "lucide-react";
import { logFirebaseEvent } from "../../lib/firebase";

export default function ClientServicesPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceOfferings = [
    {
      title: "MVP Development",
      timeline: "6 – 10 Weeks",
      bestFor: "Seed & Early-Stage Startups",
      outcome: "Launch faster with a scalable, production-ready application that impresses investors and first users.",
      proof: "Shipped Qatar home services app (RightHand) with Stripe, maps, and real-time alerts.",
      deliverables: [
        "Pixel-perfect responsive iOS and Android app (Flutter)",
        "Serverless or microservices backend structure (Go/PostgreSQL/Firebase)",
        "Secure User Authentication & Profile management",
        "Third-party API integrations (Payments, mapping, search)",
        "App Store (Apple) & Google Play Store release submissions"
      ],
      colorTheme: "theme-blue"
    },
    {
      title: "AI Feature Integration",
      timeline: "2 – 4 Weeks",
      bestFor: "SaaS products seeking intelligent automation",
      outcome: "Enhance user retention and open high-value monetization capabilities through context-aware AI.",
      proof: "Built ClosePitch pitchdeck parsing tools using Gemini models.",
      deliverables: [
        "Gemini API / OpenAI SDK secure integrations",
        "Localized prompt engineering and dynamic context injection",
        "Structured JSON schema parsing output validations in backend APIs",
        "RAG integration with device-level caching",
        "AI-assisted chat components and autocomplete forms"
      ],
      colorTheme: "theme-purple"
    },
    {
      title: "Product Modernization",
      timeline: "2 – 6 Weeks",
      bestFor: "Startups with legacy mobile architectures",
      outcome: "Restore codebase maintainability, decrease crash rates, and prepare your product for engineering scale.",
      proof: "Refactored Hudle B2B Partner app codebase to clean BLoC patterns, reducing API latency by 40%.",
      deliverables: [
        "Complete package dependency upgrades and deprecations resolve",
        "Refactoring state management to clean BLoC / Repository design patterns",
        "Decoupling tightly bound components and modularizing repositories",
        "Standardizing API communication layers and payload schema mappings",
        "Integrating Git feature-branching workflows and automated builds"
      ],
      colorTheme: "theme-emerald"
    },
    {
      title: "Performance & UX Tuning",
      timeline: "1 – 3 Weeks",
      bestFor: "Apps with interface lag or high load drop-offs",
      outcome: "Improve conversion funnels, eliminate interface layout shifts, and guarantee 60fps responsiveness.",
      proof: "Achieved 60fps constant stock ticker rendering for SOCTR Fintech app.",
      deliverables: [
        "Endpoint response latency caching implementations (Redis/SQLite)",
        "Widget tree optimizations resolving redundant build cycles",
        "Asset compression, localized caching, and bundle size reduction",
        "Crash-analytics telemetry logging (Firebase/Sentry)",
        "Elimination of interface layout shifts and lag frames"
      ],
      colorTheme: "theme-red"
    },
    {
      title: "Fractional Mobile Lead",
      timeline: "Monthly Retainer",
      bestFor: "Founders seeking dedicated engineering velocity",
      outcome: "Gain immediate execution capacity and senior oversight without the overhead of a full-time hire.",
      proof: "Partnered with sports and dairy brands supporting 10K+ daily orders.",
      deliverables: [
        "20 to 40 hours per week of dedicated development capacity",
        "Active participation in daily standups and weekly reviews",
        "Fast feature scoping, estimations, and code reviews",
        "Regular store updates and bug-fix deployments",
        "Direct Slack, Discord, and Loom async syncs"
      ],
      colorTheme: "theme-green"
    }
  ];

  const activeService = serviceOfferings[activeIdx] || serviceOfferings[0];

  const faqData = [
    {
      q: "Can you join an existing codebase?",
      a: "Yes. I regularly audit, modularize, and upgrade legacy Flutter projects. I can clean up state management, restructure the architecture to BLoC/Repository design, and fix performance leaks without breaking existing production features."
    },
    {
      q: "Can you work with our in-house backend team?",
      a: "Absolutely. I align closely with backend engineers, working with OpenAPI/Swagger specifications, REST endpoints, or GraphQL schemas. I build robust local client-side caches to handle weak network connections smoothly."
    },
    {
      q: "Do you sign NDAs before project briefings?",
      a: "Yes. I respect startup confidentiality. We can sign a mutual NDA before reviewing proprietary designs, API specifications, or existing repositories."
    },
    {
      q: "How do we coordinate tasks and status updates?",
      a: "I work out of your Slack or Discord, join standups, and track development progress inside Linear, Jira, or Trello. You get detailed async updates via Loom videos alongside clean Git PR submissions."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
    logFirebaseEvent("toggle_faq", { index: idx, question: faqData[idx].q });
  };

  const handleServiceSelect = (idx: number) => {
    setActiveIdx(idx);
    logFirebaseEvent("view_service_detail", {
      service: serviceOfferings[idx].title
    });
  };

  return (
    <div className="services-page-wrapper">
      
      {/* Services Title Header */}
      <section className="services-title-header">
        <div className="container">
          <span className="section-tag">SERVICES</span>
          <h1>Engineering partnerships for ambitious startups</h1>
          <p className="subtitle">Build • Scale • Optimize • AI</p>
        </div>
      </section>

      {/* Mission Control Command Center UI */}
      <section className="command-center-section">
        <div className="container">
          <div className="command-center-panel card-glass">
            
            {/* Left Panel: Navigation Directory */}
            <div className="cc-sidebar">
              <span className="cc-header-lbl font-mono">SERVICES DIRECTORY</span>
              <div className="cc-selector-list">
                {serviceOfferings.map((service, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleServiceSelect(idx)}
                      className={`cc-selector-btn ${isActive ? "active " + service.colorTheme : ""}`}
                    >
                      <span className="selector-icon">{isActive ? "▶" : " "}</span>
                      <span className="selector-text">{service.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Panel: Spec Console */}
            <div className={`cc-spec-board ${activeService.colorTheme}`}>
              <div className="cc-spec-header">
                <span className="cc-header-lbl font-mono">ACTIVE ENGAGEMENT SPECIFICATION</span>
                <h2>{activeService.title}</h2>
              </div>

              <div className="cc-spec-grid" key={activeIdx}>
                
                {/* Meta details column */}
                <div className="cc-spec-meta-col">
                  <div className="cc-meta-item">
                    <span className="cc-meta-lbl font-mono">TIMELINE</span>
                    <span className="cc-meta-val">{activeService.timeline}</span>
                  </div>

                  <div className="cc-meta-item">
                    <span className="cc-meta-lbl font-mono">BEST FOR</span>
                    <span className="cc-meta-val">{activeService.bestFor}</span>
                  </div>

                  <div className="cc-meta-item">
                    <span className="cc-meta-lbl font-mono">BUSINESS OUTCOME</span>
                    <span className="cc-meta-val text-primary">{activeService.outcome}</span>
                  </div>

                  {activeService.proof && (
                    <div className="cc-meta-item cc-proof-item">
                      <span className="cc-meta-lbl font-mono text-emerald">🚀 SHIPPED PROOF</span>
                      <span className="cc-meta-val">{activeService.proof}</span>
                    </div>
                  )}
                </div>

                {/* Deliverables column */}
                <div className="cc-spec-deliverables-col">
                  <span className="cc-meta-lbl font-mono">DELIVERABLES</span>
                  <ul className="cc-checklist">
                    {activeService.deliverables.map((item, dIdx) => (
                      <li key={dIdx}>
                        <span className="cc-check-icon">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button inside Cockpit */}
              <div className="cc-spec-footer">
                <Link
                  href={`/contact?service=${activeService.title.toLowerCase().replace(/ /g, "-")}`}
                  className="cc-action-btn card-glass"
                  onClick={() => logFirebaseEvent("click_service_contact", { service: activeService.title })}
                >
                  <span>Schedule Discovery Call</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Engineering Process Roadmap */}
      <section className="process-roadmap-section">
        <div className="container">
          <div className="section-header text-center m-b-50">
            <span className="section-tag">ENGINEERING PROCESS</span>
            <h2 className="section-title">How I Build</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              A structured roadmap designed to maintain velocity, prevent bottlenecks, and guarantee stable releases.
            </p>
          </div>

          <div className="process-flow-row">
            <div className="process-step card-glass">
              <span className="step-num font-mono">01</span>
              <h4>Discovery</h4>
              <p>Understanding scope, defining targets, aligning architectures.</p>
            </div>
            <div className="process-arrow">&rarr;</div>
            
            <div className="process-step card-glass">
              <span className="step-num font-mono">02</span>
              <h4>Architecture</h4>
              <p>Designing structures, mapping schemas, scoping libraries.</p>
            </div>
            <div className="process-arrow">&rarr;</div>

            <div className="process-step card-glass">
              <span className="step-num font-mono">03</span>
              <h4>Development</h4>
              <p>Writing type-safe widgets, binding APIs, injecting state.</p>
            </div>
            <div className="process-arrow">&rarr;</div>

            <div className="process-step card-glass">
              <span className="step-num font-mono">04</span>
              <h4>QA</h4>
              <p>Profiling memory leaks, testing layouts, verifying API bounds.</p>
            </div>
            <div className="process-arrow">&rarr;</div>

            <div className="process-step card-glass">
              <span className="step-num font-mono">05</span>
              <h4>Release</h4>
              <p>Publishing app bundles, building stores, enabling tracking.</p>
            </div>
            <div className="process-arrow">&rarr;</div>

            <div className="process-step card-glass">
              <span className="step-num font-mono">06</span>
              <h4>Support</h4>
              <p>Monitoring crash rates, refactoring logs, launching sprints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Metrics Indicators */}
      <section className="metrics-dashboard-section">
        <div className="container">
          <div className="section-header text-center m-b-50">
            <span className="section-tag">PERFORMANCE METRICS</span>
            <h2 className="section-title">Verified App Improvements</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Outcome-based engineering targets that translate directly to user retention and conversions.
            </p>
          </div>

          <div className="metrics-grid">
            <div className="metric-item-card card-glass">
              <div className="metric-header">
                <span className="metric-arrow text-emerald">&darr;</span>
                <h3>Startup Time</h3>
              </div>
              <p>Optimized image loading, lightweight initialization scripts, and asset pruning to boost bootstrap speeds.</p>
            </div>

            <div className="metric-item-card card-glass">
              <div className="metric-header">
                <span className="metric-arrow text-emerald">&darr;</span>
                <h3>Network Payload</h3>
              </div>
              <p>Implemented payload caching with SQLite/Redis, payload compression, and request consolidation.</p>
            </div>

            <div className="metric-item-card card-glass">
              <div className="metric-header">
                <span className="metric-arrow text-blue">&uarr;</span>
                <h3>UI Framerate</h3>
              </div>
              <p>Refactored rendering trees, pruned redundant builds, and stabilized frame times to constant 60fps.</p>
            </div>

            <div className="metric-item-card card-glass">
              <div className="metric-header">
                <span className="metric-arrow text-blue">&uarr;</span>
                <h3>Stability Rate</h3>
              </div>
              <p>Configured crash-reporting pipelines and fixed exceptions to maintain 99.9% crash-free sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack ASCII Progress Meters */}
      <section className="stack-meters-section">
        <div className="container">
          <div className="section-header text-center m-b-50">
            <span className="section-tag">ENGINEERING STACK</span>
            <h2 className="section-title">Core Technology Capability</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Command line ascii visualizer showing primary core development competencies.
            </p>
          </div>

          <div className="meters-grid">
            <div className="ascii-card card-glass">
              <div className="ascii-header">
                <span className="ascii-lbl">Flutter / Dart (Cross-Platform Mobile)</span>
                <span className="ascii-val">95%</span>
              </div>
              <div className="ascii-bar text-blue font-mono">
                ██████████████████████████████░░
              </div>
            </div>

            <div className="ascii-card card-glass">
              <div className="ascii-header">
                <span className="ascii-lbl">Go / Golang (SaaS Backends & APIs)</span>
                <span className="ascii-val">90%</span>
              </div>
              <div className="ascii-bar text-emerald font-mono">
                ████████████████████████████░░░░
              </div>
            </div>

            <div className="ascii-card card-glass">
              <div className="ascii-header">
                <span className="ascii-lbl">Firebase Suite (Serverless & Real-time Ops)</span>
                <span className="ascii-val">85%</span>
              </div>
              <div className="ascii-bar text-purple font-mono">
                ██████████████████████████░░░░░░
              </div>
            </div>

            <div className="ascii-card card-glass">
              <div className="ascii-header">
                <span className="ascii-lbl">PostgreSQL / SQL (Database Architecture)</span>
                <span className="ascii-val">80%</span>
              </div>
              <div className="ascii-bar text-red font-mono">
                ████████████████████████░░░░░░░░
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* macOS Window Card Engagement Models */}
      <section className="engagement-models-section">
        <div className="container">
          <div className="section-header text-center m-b-50">
            <span className="section-tag">PARTNERSHIP TYPES</span>
            <h2 className="section-title">Engagement Models</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Standard partnership models configured like macOS console application windows.
            </p>
          </div>

          <div className="macos-grid">
            
            {/* macOS Card 1 */}
            <div className="macos-card card-glass">
              <div className="macos-titlebar">
                <div className="macos-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="macos-title font-mono">project_mvp.sh</span>
              </div>
              <div className="macos-content">
                <h3>PROJECT-BASED MVP</h3>
                <p className="macos-subtitle-desc">Perfect for launching fresh products.</p>
                <div className="macos-divider"></div>
                <ul className="macos-specs">
                  <li><strong>Timeline:</strong> 6 – 10 weeks</li>
                  <li><strong>Budget:</strong> Fixed-price scope</li>
                  <li><strong>Best For:</strong> Seed stage founders</li>
                </ul>
              </div>
            </div>

            {/* macOS Card 2 */}
            <div className="macos-card card-glass">
              <div className="macos-titlebar">
                <div className="macos-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="macos-title font-mono">retainer_sprints.conf</span>
              </div>
              <div className="macos-content">
                <h3>RETAINER SPRINTS</h3>
                <p className="macos-subtitle-desc">Active sprint velocity for existing apps.</p>
                <div className="macos-divider"></div>
                <ul className="macos-specs">
                  <li><strong>Capacity:</strong> 20 or 40 hours/week</li>
                  <li><strong>Duration:</strong> Long-term partnership</li>
                  <li><strong>Best For:</strong> Active scaling teams</li>
                </ul>
              </div>
            </div>

            {/* macOS Card 3 */}
            <div className="macos-card card-glass">
              <div className="macos-titlebar">
                <div className="macos-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="macos-title font-mono">consulting_audit.log</span>
              </div>
              <div className="macos-content">
                <h3>TECHNICAL CONSULTING</h3>
                <p className="macos-subtitle-desc">Architecture and deep analysis layers.</p>
                <div className="macos-divider"></div>
                <ul className="macos-specs">
                  <li><strong>Timeline:</strong> Milestone-based</li>
                  <li><strong>Scope:</strong> Audits & Reviews</li>
                  <li><strong>Best For:</strong> Legacy restructuring</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder FAQ Accordion */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center m-b-50">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Founder Inquiries</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Clear answers to the most common questions raised by product leaders and founders.
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="faq-item card-glass">
                  <button onClick={() => toggleFaq(idx)} className="faq-question-row">
                    <h3>{faq.q}</h3>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-row reveal-tab">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Availability Panel Console */}
      <section className="availability-section">
        <div className="container">
          <div className="availability-panel card-glass">
            <div className="av-header">
              <span className="av-dot"></span>
              <span className="av-title font-mono">CURRENT STATUS</span>
            </div>
            <div className="av-grid">
              <div className="av-item">
                <span className="av-lbl font-mono">AVAILABILITY</span>
                <span className="av-val text-emerald">{availability.text}</span>
              </div>
              <div className="av-item">
                <span className="av-lbl font-mono">CAPACITY</span>
                <span className="av-val text-purple">{availability.capacity}</span>
              </div>
              <div className="av-item">
                <span className="av-lbl font-mono">RESPONSE SPEED</span>
                <span className="av-val text-blue">&lt;24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sticky/Static Footer CTA */}
      <section className="footer-cta-section">
        <div className="container">
          <div className="footer-cta-card card-glass">
            <div className="cta-txt-col">
              <span className="cc-header-lbl font-mono text-purple">READY TO BUILD?</span>
              <h2>Let's discuss your product.</h2>
              <p>Configure a sprint engagement layer to ship your application with a senior partner.</p>
            </div>
            <Link 
              href="/contact" 
              className="btn btn-primary"
              onClick={() => logFirebaseEvent("click_final_services_cta", {})}
            >
              Schedule Discovery Call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page-wrapper {
          padding-bottom: 120px;
        }

        /* Title Header */
        .services-title-header {
          padding: 100px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .services-title-header h1 {
          font-size: 48px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .services-title-header .subtitle {
          font-family: var(--font-headings);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.25em;
        }

        /* Mission Control Command Center */
        .command-center-section {
          padding: 60px 0;
        }
        .command-center-panel {
          display: grid;
          grid-template-columns: 260px 1fr;
          border-radius: 16px;
          overflow: hidden;
          min-height: 540px;
          border: 1px solid var(--border-color);
        }
        .cc-sidebar {
          background: rgba(255, 255, 255, 0.01);
          border-right: 1px solid var(--border-color);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cc-header-lbl {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .cc-selector-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cc-selector-btn {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 12px 14px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          transition: all 0.25s ease;
        }
        .cc-selector-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.02);
        }
        .selector-icon {
          font-size: 10px;
          color: transparent;
          transition: color 0.2s ease;
        }

        /* Selector states */
        .cc-selector-btn.active.theme-blue {
          background: rgba(59, 130, 246, 0.06);
          color: #3b82f6;
        }
        .cc-selector-btn.active.theme-blue .selector-icon { color: #3b82f6; }

        .cc-selector-btn.active.theme-emerald {
          background: rgba(16, 185, 129, 0.06);
          color: #10b981;
        }
        .cc-selector-btn.active.theme-emerald .selector-icon { color: #10b981; }

        .cc-selector-btn.active.theme-purple {
          background: rgba(168, 85, 247, 0.06);
          color: #a855f7;
        }
        .cc-selector-btn.active.theme-purple .selector-icon { color: #a855f7; }

        .cc-selector-btn.active.theme-red {
          background: rgba(239, 68, 68, 0.06);
          color: #ef4444;
        }
        .cc-selector-btn.active.theme-red .selector-icon { color: #ef4444; }

        .cc-selector-btn.active.theme-green {
          background: rgba(34, 197, 94, 0.06);
          color: #22c55e;
        }
        .cc-selector-btn.active.theme-green .selector-icon { color: #22c55e; }

        /* CC Spec Board */
        .cc-spec-board {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(var(--cc-accent-rgb), 0.005);
          transition: background 0.4s ease;
        }
        .cc-spec-board.theme-blue { --cc-accent: #3b82f6; --cc-accent-rgb: 59, 130, 246; }
        .cc-spec-board.theme-emerald { --cc-accent: #10b981; --cc-accent-rgb: 16, 185, 129; }
        .cc-spec-board.theme-purple { --cc-accent: #a855f7; --cc-accent-rgb: 168, 85, 247; }
        .cc-spec-board.theme-red { --cc-accent: #ef4444; --cc-accent-rgb: 239, 68, 68; }
        .cc-spec-board.theme-green { --cc-accent: #22c55e; --cc-accent-rgb: 34, 197, 94; }

        .cc-spec-header {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 24px;
          margin-bottom: 24px;
        }
        .cc-spec-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-top: 6px;
        }

        .cc-spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        
        .cc-spec-meta-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cc-meta-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .cc-meta-lbl {
          font-size: 9px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .cc-meta-val {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .cc-proof-item {
          border-top: 1px dashed var(--border-color);
          padding-top: 16px;
        }

        /* Checklist */
        .cc-spec-deliverables-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cc-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cc-checklist li {
          display: flex;
          align-items: start;
          gap: 12px;
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .cc-check-icon {
          color: var(--cc-accent);
          font-weight: bold;
          flex-shrink: 0;
        }

        .cc-spec-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
          margin-top: 32px;
        }
        .cc-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          border-radius: 8px;
          font-family: var(--font-headings);
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          background: rgba(var(--cc-accent-rgb), 0.08);
          border: 1px solid rgba(var(--cc-accent-rgb), 0.25);
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .cc-action-btn:hover {
          background: rgba(var(--cc-accent-rgb), 0.15);
          border-color: var(--cc-accent);
          transform: translateY(-1px);
        }

        /* Process Roadmap */
        .process-roadmap-section {
          padding: 80px 0;
          border-top: 1px solid var(--border-color);
        }
        .process-flow-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 20px;
        }
        .process-step {
          flex: 1;
          min-width: 160px;
          padding: 24px;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
        }
        .step-num {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
        }
        .process-step h4 {
          font-size: 14.5px;
          font-weight: 600;
          color: #fff;
        }
        .process-step p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
          margin: 0;
        }
        .process-arrow {
          font-family: var(--font-headings);
          font-size: 18px;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        /* Metrics Section */
        .metrics-dashboard-section {
          padding: 80px 0;
          border-top: 1px solid var(--border-color);
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .metric-item-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 1px solid var(--border-color);
        }
        .metric-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .metric-arrow {
          font-size: 24px;
          font-weight: 800;
        }
        .metric-item-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
        }
        .metric-item-card p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        /* Stack Meters */
        .stack-meters-section {
          padding: 80px 0;
          border-top: 1px solid var(--border-color);
        }
        .meters-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .ascii-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 1px solid var(--border-color);
        }
        .ascii-header {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-headings);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
        }
        .ascii-val {
          color: #fff;
        }
        .ascii-bar {
          font-size: 18px;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        /* macOS Window Cards Grid */
        .engagement-models-section {
          padding: 80px 0;
          border-top: 1px solid var(--border-color);
        }
        .macos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .macos-card {
          border-radius: 12px;
          border: 1px solid var(--border-color);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .macos-titlebar {
          background: rgba(255, 255, 255, 0.015);
          border-bottom: 1px solid var(--border-color);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .macos-dots {
          display: flex;
          gap: 6px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }
        .macos-title {
          font-size: 10px;
          color: var(--text-muted);
        }
        .macos-content {
          padding: 24px;
        }
        .macos-content h3 {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }
        .macos-subtitle-desc {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .macos-divider {
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 16px;
        }
        .macos-specs {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        .macos-specs li strong {
          color: #fff;
        }

        /* FAQ Accordion */
        .faq-section {
          padding: 80px 0;
          border-top: 1px solid var(--border-color);
        }
        .faq-list {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          border-radius: 8px;
          border: 1px solid var(--border-color);
          overflow: hidden;
        }
        .faq-question-row {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          text-align: left;
        }
        .faq-question-row h3 {
          font-size: 15px;
          font-weight: 600;
          margin: 0;
        }
        .faq-answer-row {
          padding: 0 24px 20px;
          border-top: 1px dashed rgba(255, 255, 255, 0.05);
          margin-top: -4px;
        }
        .faq-answer-row p {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
          padding-top: 14px;
        }

        /* Availability Status */
        .availability-section {
          padding: 80px 0;
          border-top: 1px solid var(--border-color);
        }
        .availability-panel {
          padding: 24px 32px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }
        .av-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }
        .av-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: blink 2s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .av-title {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
        }
        .av-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .av-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .av-lbl {
          font-size: 9px;
          font-weight: 700;
          color: var(--text-muted);
        }
        .av-val {
          font-size: 14.5px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        /* Dynamic Sticky/Static Footer CTA */
        .footer-cta-section {
          padding: 60px 0;
          border-top: 1px solid var(--border-color);
        }
        .footer-cta-card {
          padding: 40px;
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid var(--border-color);
        }
        .cta-txt-col h2 {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin: 6px 0;
        }
        .cta-txt-col p {
          font-size: 13.5px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Staggered tab animation */
        .reveal-tab {
          animation: revealTab 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes revealTab {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .command-center-panel {
            grid-template-columns: 1fr;
          }
          .cc-sidebar {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }
          .cc-selector-list {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 6px;
          }
          .cc-selector-btn {
            white-space: nowrap;
            width: auto;
          }
          .cc-spec-board {
            padding: 24px;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .macos-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .av-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .cc-spec-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .meters-grid {
            grid-template-columns: 1fr;
          }
          .footer-cta-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            padding: 24px;
          }
          .services-title-header h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
