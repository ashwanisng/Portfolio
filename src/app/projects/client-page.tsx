"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Folder, 
  Cpu, 
  Activity, 
  Filter, 
  ChevronRight, 
  Terminal, 
  Zap, 
  Compass, 
  Target, 
  Server, 
  Layout, 
  Smartphone,
  ExternalLink,
  Layers,
  Award,
  Play
} from "lucide-react";

export default function ClientProjectsPage() {
  const [selectedProjIdx, setSelectedProjIdx] = useState(0);
  const [activeTab, setActiveTab] = useState("spec"); // spec, architecture, impact
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Work" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "saas", label: "SaaS" },
    { key: "ai", label: "AI Integration" },
    { key: "b2b", label: "B2B/Consumer" }
  ];

  const projects = [
    {
      title: "RightHand Home Services",
      client: "RightHand (Qatar)",
      period: "May 2025 – Feb 2026",
      tags: ["mobile", "consumer"],
      tech: "Flutter, BLoC & Cubit, Stripe, MyFatoorah, Firebase FCM, Go REST APIs",
      overview: "Led the complete UX/UI revamp and payment architectural integration for Qatar's leading on-demand household services platform.",
      problem: "Legacy transaction drops and payment validation failures resulted in checkout cancellations and support overhead.",
      research: "Mapped transaction lifecycles and payment gateway callbacks, identifying edge-case state loss during app-to-banking context switches.",
      architecture: "Decoupled BLoC state controller interfaces. Implemented absolute local storage locks during checkout sessions.",
      engineering: "Integrated Stripe and MyFatoorah SDKs. Shipped map-based scheduling tracking systems with local network fallback caching.",
      lessons: "Explicit transaction lifecycle isolation prevents UI state misalignment across asynchronous bank callbacks.",
      outcomes: ["-30% Checkout Drops", "99.9% Payment Success", "+25% Booking Conversions"],
      dirStructure: `lib/
├── core/
│   ├── network/ (HTTP wrappers)
│   └── security/ (Transaction locks)
├── data/
│   ├── datasources/ (StripeAPI, MyFatoorahAPI)
│   └── repositories/ (PaymentRepositoryImpl)
├── domain/
│   └── repositories/ (IPaymentRepository)
└── presentation/
    └── BLoC/ (PaymentBloc, CheckoutCubit)`,
      colorTheme: "theme-blue",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.righthands&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/us/app/right-hands/id1641289996"
    },
    {
      title: "SOCTR Fintech Platform",
      client: "SOCTR (India)",
      period: "Jun 2024 – Nov 2024",
      tags: ["mobile", "saas", "ai"],
      tech: "Flutter, BLoC & Cubit, Go REST APIs, WebSockets, Syncfusion Charts, TradingView SDK, Firebase Suite",
      overview: "Built a social investing and AI-powered market insights fintech app from scratch as the sole Flutter developer.",
      problem: "Handling high-frequency WebSocket stock ticker feeds (50+ updates/sec) while rendering heavy Syncfusion charts caused frame drops and UI freezes.",
      research: "Used DevTools profiling to identify layout bottlenecks. Main UI thread was blocked by stock model parsing overhead.",
      architecture: "Designed a multi-isolate parsing pipeline. Isolated state feeds so tick calculations run off the main rendering thread.",
      engineering: "Constructed dynamic candle chart controllers, integrated TradingView widgets, and implemented custom OTP login security flows.",
      lessons: "Shifting serialization workloads to Dart background isolates keeps the layout running at a steady 60fps.",
      outcomes: ["60fps Constant Rendering", "Live Tick Sync", "100% Crash-Free Launch"],
      dirStructure: `lib/
├── core/
│   └── websocket/ (SocketClientManager)
├── data/
│   ├── datasources/ (MarketFeedSocketSource)
│   └── models/ (IsolateParserPayload)
├── domain/
│   └── entities/ (StockTickModel)
└── presentation/
    ├── widgets/ (SyncfusionStockChart)
    └── controllers/ (WebSocketCubit)`,
      colorTheme: "theme-emerald",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.soctrapp.android",
      appStoreUrl: "https://apps.apple.com/us/app/soctr/id6479616881"
    },
    {
      title: "Hudle Partner & Consumer Apps",
      client: "Hudle (India)",
      period: "Feb 2024 – Present",
      tags: ["mobile", "b2b", "consumer"],
      tech: "Flutter, BLoC, AppsFlyer, Mix-Panel, REST APIs, Codemagic",
      overview: "Redesigned consumer booking flows and built the B2B Partner dashboard from scratch for India's leading sports venue marketplace.",
      problem: "Heavy venue configurations and complex schedule tables resulted in high load latencies and layout rendering delays.",
      research: "Traced layout bottlenecks to nested scroll nodes and un-cached repetitive REST payload parsing.",
      architecture: "Constructed modular feature-first directories. Implemented aggressive HTTP cache rules and optimistic state updates.",
      engineering: "Engineered high-performance schedule grids, localized app instances, and set up automated Codemagic pipelines.",
      lessons: "Separating API contracts from UI widgets makes it easier to update individual components without breaking the app.",
      outcomes: ["+30% User Engagement", "-40% API Latency", "+20% Attribution Tracking"],
      dirStructure: `lib/
└── src/
    ├── features/
    │   ├── booking/ (presentation/ BLoC/ domain/)
    │   └── partner_hub/ (widgets/ controllers/)
    └── shared/
        └── services/ (MixpanelService, AppsflyerSDK)`,
      colorTheme: "theme-green",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.hudle.app",
      appStoreUrl: "https://apps.apple.com/in/app/hudle/id1398246473"
    },
    {
      title: "MrMilkMan B2C Subscription App",
      client: "MrMilkman by EverAg",
      period: "May 2023 – Jan 2024",
      tags: ["mobile", "saas", "b2b"],
      tech: "Flutter, GraphQL, Firebase, GitHub Actions CI/CD",
      overview: "Built subscription management, tracking, and localization for SaaS dairy management platform serving 10K+ daily orders.",
      problem: "Repetitive order updates created heavy GraphQL payload overhead. Slow manual builds delayed critical updates.",
      research: "Identified redundant nested GraphQL fields and localized asset reload loops that were hurting start times.",
      architecture: "Clean repository boundaries backed by local SQLite cache buffers.",
      engineering: "Configured automated GitHub Actions workflows, localized app into 3+ languages, and built order tracking states.",
      lessons: "Automated pre-commit lint and test suites reduce staging regression bugs by over 60%.",
      outcomes: ["-35% Data Fetch Time", "-60% Deploy Time", "+15% User Retention"],
      dirStructure: `.github/workflows/
└── main_deploy.yml (build apk & ipa)
lib/
├── graphql/
│   └── queries/ (orders.graphql)
└── data/
    └── local/ (OrderCacheManager)`,
      colorTheme: "theme-purple"
    },
    {
      title: "goStops Travel Booking App",
      client: "goStops (India)",
      period: "Jan 2022 – May 2023",
      tags: ["mobile", "consumer"],
      tech: "Flutter, GetX, Firebase Analytics, Mix-Panel",
      overview: "Developed hostel booking and trip planning application serving 50K+ travel enthusiasts.",
      problem: "High drop-off rates during the checkout stage due to payment validation errors.",
      research: "Analyzed Mix-Panel user funnels to pinpoint drop-offs at checkout, tracing them to missing error boundaries in payment forms.",
      architecture: "GetX controller bindings with strict state isolation and active error handlers.",
      engineering: "Refactored checkout integrations, added inline validation checks, and integrated dynamic tracking triggers.",
      lessons: "Adding clear, inline user feedback and loading states prevents double-charge retries and reduces user drop-offs.",
      outcomes: ["+18% Booking Conversions", "99.5% Crash-Free", "50K+ Active Users"],
      dirStructure: `lib/
├── modules/
│   ├── booking/ (view, controller, binding)
│   └── payments/ (checkout_view, gateway_controller)
└── main.dart`,
      colorTheme: "theme-red",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.gostops.app",
      appStoreUrl: "https://apps.apple.com/in/app/gostops/id1538056051"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

  const activeProject = filteredProjects[selectedProjIdx] || filteredProjects[0] || projects[0];

  const radarCategories = [
    {
      title: "Core Expertise",
      desc: "Technologies I build with daily under high production standards.",
      skills: ["Flutter Framework", "Dart Language", "REST APIs", "Firebase Suite"]
    },
    {
      title: "Production Experience",
      desc: "Frameworks I use confidently for backend, database, and ops layers.",
      skills: ["Go (Golang)", "PostgreSQL DB", "Docker containers", "AWS Infrastructure"]
    },
    {
      title: "Currently Learning",
      desc: "Emerging domains I am actively building prototypes with.",
      skills: ["MCP Tools", "AI Agents", "RAG Pipeline Setup", "Next.js Framework"]
    }
  ];

  return (
    <div className="projects-page-wrapper">
      {/* Background Mesh Grid */}
      <div className="mesh-grid-overlay"></div>

      <section className="projects-hero">
        <div className="container">
          <span className="section-tag">SELECTED WORK</span>
          <h1>Developer Workstation & Case Studies</h1>
          <p className="subtitle">
            Explore live specs, file system architecture, and concrete shipped metrics of my mobile applications.
          </p>

          {/* Core Shipped Stats row */}
          <div className="core-stats-row m-t-40">
            <div className="stat-card card-glass">
              <span className="stat-num">5+</span>
              <span className="stat-label">Shipped Apps</span>
            </div>
            <div className="stat-card card-glass">
              <span className="stat-num">100K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-card card-glass font-emerald">
              <span className="stat-num">99.5%</span>
              <span className="stat-label">Crash-Free Rate</span>
            </div>
            <div className="stat-card card-glass font-purple">
              <span className="stat-num">4.7★</span>
              <span className="stat-label">App Store Avg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Interactive Console Area */}
      <section className="console-section">
        <div className="container">
          
          <div className="filter-controls-row">
            <div className="filter-badge-row">
              <Filter size={14} className="text-muted" />
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => {
                    setActiveFilter(f.key);
                    setSelectedProjIdx(0);
                  }}
                  className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="workstation-grid m-t-40">
            {/* Sidebar: Projects Directory */}
            <div className="workstation-sidebar">
              <span className="sidebar-title-lbl">PROJECT DIRECTORY</span>
              <div className="sidebar-projects-list">
                {filteredProjects.map((p, idx) => {
                  const isActive = activeProject.title === p.title;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedProjIdx(idx);
                        setActiveTab("spec");
                      }}
                      className={`sidebar-project-btn card-glass ${isActive ? "active " + p.colorTheme : ""}`}
                    >
                      <div className="btn-left">
                        <Folder size={16} className="folder-icon" />
                        <div className="btn-txt-block">
                          <span className="btn-title">{p.title}</span>
                          <span className="btn-client">{p.client}</span>
                        </div>
                      </div>
                      <ChevronRight size={14} className="chevron-icon" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Console Details Pane */}
            <div className={`workstation-console card-glass ${activeProject.colorTheme}`}>
              {/* Console Header */}
              <div className="console-header-bar">
                <div className="header-meta">
                  <span className="console-badge">ACTIVE SPECIFICATION</span>
                  <h2>{activeProject.title}</h2>
                  <p className="console-meta-sub">
                    <span>{activeProject.client}</span>
                    <span className="meta-divider">|</span>
                    <span>{activeProject.period}</span>
                  </p>
                </div>
                
                {/* Platform & Store Links */}
                <div className="console-actions-block">
                  <div className="console-platforms">
                    <Smartphone size={12} />
                    <span>Android & iOS Production</span>
                  </div>

                  {(activeProject.playStoreUrl || activeProject.appStoreUrl) && (
                    <div className="console-store-buttons">
                      {activeProject.playStoreUrl && (
                        <a
                          href={activeProject.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="store-link-btn playstore-btn"
                        >
                          <Play size={12} fill="currentColor" />
                          <span>Google Play</span>
                        </a>
                      )}

                      {activeProject.appStoreUrl && (
                        <a
                          href={activeProject.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="store-link-btn appstore-btn"
                        >
                          <ExternalLink size={12} />
                          <span>App Store</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Console Tabs */}
              <div className="console-tab-bar">
                <button
                  onClick={() => setActiveTab("spec")}
                  className={`console-tab-btn ${activeTab === "spec" ? "active" : ""}`}
                >
                  <Terminal size={14} />
                  <span>Spec Console</span>
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`console-tab-btn ${activeTab === "architecture" ? "active" : ""}`}
                >
                  <Cpu size={14} />
                  <span>Code Architecture</span>
                </button>
                <button
                  onClick={() => setActiveTab("impact")}
                  className={`console-tab-btn ${activeTab === "impact" ? "active" : ""}`}
                >
                  <Activity size={14} />
                  <span>Shipped Metrics</span>
                </button>
              </div>

              {/* Console Body Area */}
              <div className="console-body">
                {activeTab === "spec" && (
                  <div className="console-tab-panel reveal-tab">
                    <p className="project-highlight-p">{activeProject.overview}</p>

                    <div className="spec-splits m-t-20">
                      <div className="spec-split-card challenge-alert">
                        <div className="split-header">
                          <Target size={14} />
                          <h4>THE CHALLENGE</h4>
                        </div>
                        <p>{activeProject.problem}</p>
                      </div>

                      <div className="spec-split-card research-alert">
                        <div className="split-header">
                          <Compass size={14} />
                          <h4>DIAGNOSTICS & RESEARCH</h4>
                        </div>
                        <p>{activeProject.research}</p>
                      </div>
                    </div>

                    <div className="spec-split-card engineering-box m-t-20">
                      <div className="split-header">
                        <Server size={14} />
                        <h4>ENGINEERING IMPLEMENTATION</h4>
                      </div>
                      <p>{activeProject.engineering}</p>
                    </div>

                    {/* Mini visual mockup panel */}
                    <div className="mini-preview-panel m-t-30">
                      <span className="preview-lbl">UX/UI STATE MOCKUP</span>
                      
                      {activeProject.title.includes("RightHand") && (
                        <div className="project-mini-visual righthand-visual">
                          <div className="righthand-interface">
                            <div className="rh-phone-header">
                              <span className="rh-search-icon">🔍</span>
                              <span className="rh-search-placeholder">Find home services...</span>
                            </div>
                            <div className="righthand-services-grid">
                              <div className="service-item active">
                                <span className="service-icon">✨</span>
                                <span className="service-name">Cleaning</span>
                              </div>
                              <div className="service-item">
                                <span className="service-icon">🔧</span>
                                <span className="service-name">AC Repair</span>
                              </div>
                              <div className="service-item">
                                <span className="service-icon">🐜</span>
                                <span className="service-name">Pest Control</span>
                              </div>
                              <div className="service-item">
                                <span className="service-icon">📦</span>
                                <span className="service-name">Moving</span>
                              </div>
                            </div>
                            <div className="rh-checkout-flow">
                              <span className="rh-flow-step done">1. Service</span>
                              <span className="rh-flow-step done">2. Time</span>
                              <span className="rh-flow-step active">3. Pay</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeProject.title.includes("SOCTR") && (
                        <div className="project-mini-visual soctr-visual">
                          <div className="soctr-interface">
                            <div className="soctr-ticker-row">
                              <div className="ticker-left">
                                <span className="ticker-symbol">🟢 NIFTY 50</span>
                                <span className="ticker-price">₹24,320.15</span>
                              </div>
                              <span className="ticker-change">▲ +1.24%</span>
                            </div>
                            <div className="soctr-chart-mock">
                              <svg className="chart-sparkline" viewBox="0 0 100 30">
                                <defs>
                                  <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/>
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                                  </linearGradient>
                                </defs>
                                <path className="chart-area" d="M0,25 Q15,10 30,20 T60,5 T80,15 T100,2 L100,30 L0,30 Z" fill="url(#chart-glow)" />
                                <path className="chart-line" d="M0,25 Q15,10 30,20 T60,5 T80,15 T100,2" />
                              </svg>
                              <div className="chart-cursor-dot"></div>
                            </div>
                            <div className="soctr-action-row">
                              <button className="soctr-btn buy">Buy Market</button>
                              <div className="qty-picker">Qty: 50</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeProject.title.includes("Hudle") && (
                        <div className="project-mini-visual hudle-visual">
                          <div className="hudle-phone-frame">
                            <div className="hudle-card-active">
                              <div className="hudle-active-header">
                                <span className="hudle-lbl">Active Slot</span>
                                <span className="hudle-status-pill">Confirmed</span>
                              </div>
                              <span className="hudle-title">🏸 Plaza Stadium - Court 3</span>
                              <span className="hudle-time">07:00 PM - 08:00 PM</span>
                            </div>
                            <div className="hudle-grid-slots-preview">
                              <span className="hudle-mini-slot booked">06:00 PM</span>
                              <span className="hudle-mini-slot selected">07:00 PM</span>
                              <span className="hudle-mini-slot available">08:00 PM</span>
                            </div>
                            <button className="hudle-action-btn">Proceed to Pay ₹800</button>
                          </div>
                        </div>
                      )}

                      {activeProject.title.includes("MilkMan") && (
                        <div className="project-mini-visual milkman-visual">
                          <div className="milkman-dashboard">
                            <div className="milkman-header-row">
                              <span className="milkman-title-row">🥛 Daily Milk Subscription</span>
                              <span className="milkman-badge">Active</span>
                            </div>
                            <div className="milkman-grid-calendar">
                              <div className="cal-day active">
                                <span className="cal-date">12</span>
                                <span className="cal-status text-emerald">✓</span>
                              </div>
                              <div className="cal-day active">
                                <span className="cal-date">13</span>
                                <span className="cal-status text-emerald">✓</span>
                              </div>
                              <div className="cal-day active paused">
                                <span className="cal-date">14</span>
                                <span className="cal-status text-orange">⏸</span>
                              </div>
                              <div className="cal-day active">
                                <span className="cal-date">15</span>
                                <span className="cal-status text-emerald">✓</span>
                              </div>
                              <div className="cal-day current">
                                <span className="cal-date">16</span>
                                <span className="cal-status">📅</span>
                              </div>
                            </div>
                            <div className="milkman-telemetry">
                              <div className="milkman-progress">
                                <div className="progress-bar-fill"></div>
                              </div>
                              <div className="telemetry-labels">
                                <span>99.5% SLA Delivery</span>
                                <span>12/16 Liters</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeProject.title.includes("goStops") && (
                        <div className="project-mini-visual gostops-visual">
                          <div className="gostops-interface">
                            <div className="gostops-booking-card">
                              <div className="gs-booking-details">
                                <span className="hostel-name">🏢 goStops Delhi NCR</span>
                                <span className="hostel-stars">★ 4.8 (Mixed Dorm, 6 Beds)</span>
                              </div>
                              <span className="price-lbl">₹499/N</span>
                            </div>
                            <div className="gostops-checkout">
                              <span className="chk-step done">Select</span>
                              <span className="chk-step done">Details</span>
                              <span className="chk-step active">Pay (UPI)</span>
                            </div>
                            <div className="gostops-security-badge">
                              <span className="gs-sec-shield">🛡️</span>
                              <span>UPI Secure Link Verified</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "architecture" && (
                  <div className="console-tab-panel reveal-tab">
                    <p className="project-highlight-p">
                      <strong>Codebase Structure:</strong> Shipped under rigorous Clean Architecture patterns, maintaining clear boundaries and testable components.
                    </p>
                    
                    <div className="dir-tree-box m-t-20">
                      <div className="dir-tree-header">
                        <Terminal size={12} />
                        <span>FLUTTER FILE ARCHITECTURE</span>
                      </div>
                      <pre className="dir-tree-pre">
                        {activeProject.dirStructure}
                      </pre>
                    </div>

                    <div className="spec-split-card m-t-20">
                      <div className="split-header">
                        <Layers size={14} />
                        <h4>ARCHITECTURAL PATTERN DECISION</h4>
                      </div>
                      <p>{activeProject.architecture}</p>
                    </div>

                    <div className="spec-split-card m-t-20">
                      <div className="split-header">
                        <Zap size={14} />
                        <h4>KEY ARCHITECTURAL LESSONS</h4>
                      </div>
                      <p>{activeProject.lessons}</p>
                    </div>
                  </div>
                )}

                {activeTab === "impact" && (
                  <div className="console-tab-panel reveal-tab">
                    <p className="project-highlight-p">
                      Verified metrics and business deliverables achieved post-launch.
                    </p>

                    <div className="impact-grid m-t-20">
                      {activeProject.outcomes.map((o, oIdx) => (
                        <div key={oIdx} className="impact-badge-card card-glass">
                          <Award size={20} className="impact-icon" />
                          <div className="impact-text-side">
                            <span className="impact-num">{o}</span>
                            <span className="impact-lbl">Verified Performance Boost</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="spec-split-card m-t-20">
                      <div className="split-header">
                        <Terminal size={14} />
                        <h4>CORE TECH STACK PIPELINE</h4>
                      </div>
                      <div className="tech-capsules-grid m-t-10">
                        {activeProject.tech.split(", ").map((t, tIdx) => (
                          <span key={tIdx} className="tech-badge-capsule">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Radar section */}
      <section className="tech-radar-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">MY RADAR</span>
            <h2 className="section-title">Technology Radar</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              My operational familiarity levels across different tech stacks.
            </p>
          </div>

          <div className="radar-grid m-t-40">
            {radarCategories.map((cat, idx) => (
              <div key={idx} className="radar-card card-glass">
                <span className="radar-num">0{idx + 1}</span>
                <h3>{cat.title}</h3>
                <p className="radar-desc">{cat.desc}</p>
                <div className="radar-skills-list">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="radar-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects-page-wrapper {
          padding-bottom: 80px;
          position: relative;
          background: #07090e;
        }

        /* Mesh Grid Backdrop */
        .mesh-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 60%, rgba(168, 85, 247, 0.03) 0%, transparent 40%),
            linear-gradient(rgba(255, 255, 255, 0.003) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.003) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
          pointer-events: none;
          z-index: 1;
        }

        /* Hero */
        .projects-hero {
          padding: 100px 0 40px;
          position: relative;
          z-index: 2;
          border-bottom: 1px solid var(--border-color);
        }
        .projects-hero h1 {
          font-size: 54px;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff 30%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .projects-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 720px;
        }

        /* Career core stats */
        .core-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .stat-card {
          padding: 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.01);
        }
        .stat-num {
          font-family: var(--font-headings);
          font-size: 32px;
          font-weight: 700;
          color: #fff;
        }
        .stat-label {
          font-size: 12px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stat-card.font-emerald .stat-num {
          color: #10b981;
        }
        .stat-card.font-purple .stat-num {
          color: #a855f7;
        }

        /* Console Section */
        .console-section {
          padding: 60px 0;
          position: relative;
          z-index: 2;
        }
        .filter-controls-row {
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }
        .filter-badge-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-headings);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          padding: 6px 16px;
          border-radius: 6px;
          transition: var(--transition-fast);
        }
        .filter-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.02);
        }
        .filter-btn.active {
          color: #fff;
          background: var(--accent-blue-glow);
          border: 1px solid var(--accent-blue-border);
        }

        /* Workstation Layout */
        .workstation-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
          align-items: start;
        }
        .workstation-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sidebar-title-lbl {
          font-family: var(--font-headings);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .sidebar-projects-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sidebar-project-btn {
          width: 100%;
          text-align: left;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.03);
          background: rgba(255, 255, 255, 0.005);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .sidebar-project-btn:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .btn-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .folder-icon {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }
        .sidebar-project-btn:hover .folder-icon {
          color: #fff;
        }
        .btn-txt-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .btn-title {
          font-size: 14.5px;
          font-weight: 600;
          color: #fff;
        }
        .btn-client {
          font-size: 11px;
          color: var(--text-secondary);
        }
        .chevron-icon {
          color: var(--text-muted);
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .sidebar-project-btn:hover .chevron-icon {
          color: #fff;
          transform: translateX(4px);
        }

        /* Color Theme Active Sidebar Buttons */
        .sidebar-project-btn.active.theme-blue {
          background: rgba(59, 130, 246, 0.08);
          border-color: rgba(59, 130, 246, 0.3);
        }
        .sidebar-project-btn.active.theme-blue .folder-icon { color: #3b82f6; }
        .sidebar-project-btn.active.theme-emerald {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .sidebar-project-btn.active.theme-emerald .folder-icon { color: #10b981; }
        .sidebar-project-btn.active.theme-green {
          background: rgba(34, 197, 94, 0.08);
          border-color: rgba(34, 197, 94, 0.3);
        }
        .sidebar-project-btn.active.theme-green .folder-icon { color: #22c55e; }
        .sidebar-project-btn.active.theme-purple {
          background: rgba(168, 85, 247, 0.08);
          border-color: rgba(168, 85, 247, 0.3);
        }
        .sidebar-project-btn.active.theme-purple .folder-icon { color: #a855f7; }
        .sidebar-project-btn.active.theme-red {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.3);
        }
        .sidebar-project-btn.active.theme-red .folder-icon { color: #ef4444; }

        /* Main Console Panel */
        .workstation-console {
          border: 1px solid rgba(var(--console-accent-rgb, 255, 255, 255), 0.08) !important;
          box-shadow: 0 0 40px rgba(var(--console-accent-rgb, 255, 255, 255), 0.02);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        /* Color configurations map dynamically */
        .workstation-console.theme-blue {
          --console-accent: #3b82f6;
          --console-accent-rgb: 59, 130, 246;
        }
        .workstation-console.theme-emerald {
          --console-accent: #10b981;
          --console-accent-rgb: 16, 185, 129;
        }
        .workstation-console.theme-green {
          --console-accent: #22c55e;
          --console-accent-rgb: 34, 197, 94;
        }
        .workstation-console.theme-purple {
          --console-accent: #a855f7;
          --console-accent-rgb: 168, 85, 247;
        }
        .workstation-console.theme-red {
          --console-accent: #ef4444;
          --console-accent-rgb: 239, 68, 68;
        }

        /* Console header */
        .console-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 32px;
          border-bottom: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.005);
        }
        .console-badge {
          font-family: var(--font-headings);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--console-accent);
          text-transform: uppercase;
        }
        .console-header-bar h2 {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin-top: 6px;
        }
        .console-meta-sub {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13.5px;
          color: var(--text-secondary);
          margin-top: 6px;
        }
        .meta-divider {
          color: var(--text-muted);
        }
        .console-actions-block {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }
        .console-platforms {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 6px;
          color: var(--text-secondary);
        }
        .console-store-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .store-link-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          font-family: var(--font-headings);
          padding: 6px 12px;
          border-radius: 6px;
          color: #fff;
          border: 1px solid rgba(var(--console-accent-rgb), 0.25);
          background: rgba(var(--console-accent-rgb), 0.05);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .store-link-btn:hover {
          background: var(--console-accent);
          color: #000;
          border-color: var(--console-accent);
          box-shadow: 0 0 15px rgba(var(--console-accent-rgb), 0.3);
        }

        /* Console tab navigation */
        .console-tab-bar {
          display: flex;
          background: rgba(0, 0, 0, 0.15);
          border-bottom: 1px solid var(--border-color);
          padding: 0 24px;
        }
        .console-tab-btn {
          background: none;
          border: none;
          font-family: var(--font-headings);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 16px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          transition: color 0.25s ease;
        }
        .console-tab-btn:hover {
          color: #fff;
        }
        .console-tab-btn.active {
          color: #fff;
        }
        .console-tab-btn.active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--console-accent);
        }

        /* Console body panels */
        .console-body {
          padding: 32px;
        }
        .project-highlight-p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .spec-splits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .spec-split-card {
          padding: 24px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.008);
          border: 1px solid rgba(255, 255, 255, 0.02);
        }
        .split-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .split-header svg {
          color: var(--console-accent);
        }
        .split-header h4 {
          font-family: var(--font-headings);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--console-accent);
        }
        .spec-split-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        .challenge-alert {
          border-color: rgba(239, 68, 68, 0.08);
          background: rgba(239, 68, 68, 0.005);
        }
        .challenge-alert svg {
          color: #ef4444;
        }
        .challenge-alert h4 {
          color: #ef4444;
        }

        /* Previews and CSS Mockups inside console */
        .mini-preview-panel {
          border-top: 1px dashed var(--border-color);
          padding-top: 30px;
        }
        .preview-lbl {
          font-family: var(--font-headings);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          text-transform: uppercase;
          display: block;
          margin-bottom: 16px;
        }
        .project-mini-visual {
          width: 100%;
          height: 240px;
          border-radius: 12px;
          border: 1px solid rgba(var(--console-accent-rgb), 0.12);
          background: rgba(var(--console-accent-rgb), 0.005);
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Monospace codebase tree visual */
        .dir-tree-box {
          border: 1px solid var(--border-color);
          background: rgba(0,0,0,0.2);
          border-radius: 12px;
          overflow: hidden;
        }
        .dir-tree-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-bottom: 1px solid var(--border-color);
          background: rgba(255,255,255,0.01);
        }
        .dir-tree-header span {
          font-family: var(--font-headings);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }
        .dir-tree-pre {
          padding: 20px;
          font-family: Menlo, Monaco, Consolas, Courier New, monospace;
          font-size: 13.5px;
          color: var(--accent-blue-light);
          line-height: 1.5;
          margin: 0;
          overflow-x: auto;
        }

        /* Shipped Metrics outcomes */
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .impact-badge-card {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid rgba(var(--console-accent-rgb), 0.15);
          background: rgba(var(--console-accent-rgb), 0.03);
          border-radius: 12px;
        }
        .impact-icon {
          color: var(--console-accent);
          flex-shrink: 0;
        }
        .impact-text-side {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .impact-num {
          font-family: var(--font-headings);
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }
        .impact-lbl {
          font-size: 11px;
          color: var(--text-secondary);
        }
        
        .tech-capsules-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tech-badge-capsule {
          font-size: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 6px;
          color: var(--text-secondary);
        }

        /* Staggered entry animation */
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

        /* Tech Radar section */
        .tech-radar-section {
          padding: 100px 0;
          border-top: 1px solid var(--border-color);
          position: relative;
          z-index: 2;
        }
        .radar-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .radar-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
        }
        .radar-num {
          font-family: var(--font-headings);
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-blue);
          margin-bottom: 12px;
        }
        .radar-card h3 {
          font-size: 18px;
          margin-bottom: 8px;
        }
        .radar-desc {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.5;
        }
        .radar-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }
        .radar-tag {
          font-size: 11px;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          padding: 4px 8px;
          border-radius: 6px;
          color: var(--text-secondary);
        }

        /* Custom Mockup Animations and Graphics */
        /* Hudle Visual */
        .hudle-visual {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .hudle-phone-frame {
          width: 85%;
          height: 90%;
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 12px;
          background: #0f131a;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          justify-content: space-between;
        }
        .hudle-card-active {
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.15);
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hudle-active-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hudle-status-pill {
          font-size: 7px;
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          padding: 2px 6px;
          border-radius: 20px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .hudle-lbl {
          font-size: 8px;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
        }
        .hudle-title {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }
        .hudle-time {
          font-size: 11px;
          color: #22c55e;
        }
        .hudle-grid-slots-preview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .hudle-mini-slot {
          font-size: 9px;
          text-align: center;
          padding: 6px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
        }
        .hudle-mini-slot.booked {
          background: rgba(255,255,255,0.02);
          color: var(--text-muted);
          text-decoration: line-through;
        }
        .hudle-mini-slot.selected {
          background: rgba(34, 197, 94, 0.15);
          border-color: #22c55e;
          color: #fff;
          font-weight: 600;
        }
        .hudle-mini-slot.available {
          background: rgba(255,255,255,0.05);
          color: var(--text-secondary);
        }
        .hudle-action-btn {
          width: 100%;
          background: #22c55e;
          color: #000;
          border: none;
          font-family: var(--font-headings);
          font-size: 11px;
          font-weight: 700;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        /* Milkman Visual */
        .milkman-visual {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .milkman-dashboard {
          width: 85%;
          height: 90%;
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 12px;
          background: #0f131a;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          justify-content: space-between;
        }
        .milkman-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .milkman-badge {
          font-size: 7px;
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
          padding: 2px 6px;
          border-radius: 20px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .milkman-title-row {
          font-size: 10px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .milkman-grid-calendar {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 6px;
        }
        .cal-day {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          font-size: 9px;
          padding: 6px;
          border-radius: 6px;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
        }
        .cal-day.active {
          background: rgba(168, 85, 247, 0.05);
          border-color: rgba(168, 85, 247, 0.2);
        }
        .cal-day.active.paused {
          border-color: rgba(249, 115, 22, 0.3);
          background: rgba(249, 115, 22, 0.05);
        }
        .cal-day.current {
          background: var(--accent-blue);
          border-color: var(--accent-blue-border);
        }
        .cal-date {
          font-weight: 600;
          color: #fff;
        }
        .cal-status {
          font-size: 8px;
        }
        .milkman-telemetry {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .milkman-progress {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          width: 75%;
          background: linear-gradient(90deg, #a855f7, #3b82f6);
        }
        .telemetry-labels {
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        /* goStops Visual */
        .gostops-visual {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .gostops-interface {
          width: 85%;
          height: 90%;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          background: #0f131a;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: space-between;
        }
        .gostops-booking-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 10px 12px;
        }
        .gs-booking-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hostel-name {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }
        .hostel-stars {
          font-size: 8px;
          color: var(--text-muted);
        }
        .price-lbl {
          font-size: 11px;
          font-weight: 700;
          color: #ef4444;
        }
        .gostops-checkout {
          display: flex;
          gap: 8px;
        }
        .chk-step {
          flex: 1;
          font-size: 9px;
          text-align: center;
          padding: 6px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
        }
        .chk-step.done {
          background: rgba(16, 185, 129, 0.05);
          border-color: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }
        .chk-step.active {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.3);
          color: #ef4444;
          font-weight: 600;
        }
        .gostops-security-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          color: #10b981;
          background: rgba(16, 185, 129, 0.04);
          border: 1px solid rgba(16, 185, 129, 0.15);
          padding: 6px;
          border-radius: 6px;
          justify-content: center;
        }
        .gs-sec-shield {
          font-size: 10px;
        }

        /* RightHand Visual */
        .righthand-visual {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .righthand-interface {
          width: 85%;
          height: 90%;
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          background: #0f131a;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: space-between;
        }
        .rh-phone-header {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          padding: 6px 10px;
          border-radius: 8px;
        }
        .rh-search-icon {
          font-size: 10px;
        }
        .rh-search-placeholder {
          font-size: 10px;
          color: var(--text-muted);
        }
        .righthand-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .service-item {
          font-size: 9px;
          padding: 8px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);
        }
        .service-item.active {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: #fff;
          font-weight: 600;
        }
        .service-icon {
          font-size: 14px;
        }
        .rh-checkout-flow {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 8px;
        }
        .rh-flow-step {
          font-size: 8px;
          color: var(--text-muted);
        }
        .rh-flow-step.done {
          color: #3b82f6;
        }
        .rh-flow-step.active {
          color: #fff;
          font-weight: 700;
        }

        /* SOCTR Visual */
        .soctr-visual {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .soctr-interface {
          width: 85%;
          height: 90%;
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          background: #0f131a;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: space-between;
        }
        .soctr-ticker-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ticker-left {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ticker-symbol {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
        }
        .ticker-price {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
        }
        .ticker-change {
          font-size: 9px;
          color: #10b981;
          font-weight: 700;
        }
        .soctr-chart-mock {
          height: 60px;
          border-bottom: 1px dashed rgba(255,255,255,0.05);
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 0 4px;
        }
        .chart-sparkline {
          width: 100%;
          height: 100%;
        }
        .chart-line {
          stroke: #10b981;
          stroke-width: 1.5;
          fill: none;
        }
        .chart-cursor-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          top: 10px;
          right: 38px;
        }
        .soctr-action-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .soctr-btn {
          flex: 1;
          background: #10b981;
          border: none;
          color: #000;
          font-family: var(--font-headings);
          font-size: 10px;
          font-weight: 700;
          padding: 6px;
          border-radius: 6px;
          cursor: pointer;
        }
        .qty-picker {
          font-size: 10px;
          color: var(--text-secondary);
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          padding: 4px 8px;
          border-radius: 4px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .workstation-grid {
            grid-template-columns: 1fr;
          }
          .workstation-sidebar {
            overflow-x: auto;
            padding-bottom: 12px;
          }
          .sidebar-projects-list {
            flex-direction: row;
            gap: 12px;
          }
          .sidebar-project-btn {
            width: 260px;
            flex-shrink: 0;
          }
          .chevron-icon {
            display: none;
          }
          .core-stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .projects-hero h1 {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          .spec-splits {
            grid-template-columns: 1fr;
          }
          .impact-grid {
            grid-template-columns: 1fr;
          }
          .console-header-bar {
            flex-direction: column;
            gap: 20px;
            padding: 24px;
          }
          .console-actions-block {
            align-items: flex-start;
          }
          .console-body {
            padding: 24px 16px;
          }
          .core-stats-row {
            grid-template-columns: 1fr;
          }
          .radar-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
