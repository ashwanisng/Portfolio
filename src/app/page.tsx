"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Clock, 
  Sparkles,
  Terminal,
  Cpu,
  Activity,
  TrendingUp,
  GitBranch,
  ChevronRight,
  ChevronDown,
  Globe,
  Calendar,
  Zap,
  Shield,
  Briefcase,
  Target
} from "lucide-react";
import { logFirebaseEvent } from "../lib/firebase";

export default function Home() {
  const [activeReleaseIdx, setActiveReleaseIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [commandQuery, setCommandQuery] = useState("");
  const [localTime, setLocalTime] = useState("");

  // Update local time clock dynamically
  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const releases = [
    {
      version: "v2.4.0",
      title: "SOCTR Fintech App",
      status: "PRODUCTION",
      date: "August 2026",
      impact: "Achieved 60fps constant chart rendering and 99.9% crash-free rate.",
      summary: "Mobile investment workbench featuring real-time market synchronization, local cache optimizations, and clean state components.",
      tech: ["Flutter", "Firebase", "SQLite", "Sentry"],
      caseStudyUrl: "/projects/soctr"
    },
    {
      version: "v1.1.2",
      title: "RightHand Services",
      status: "STABLE",
      date: "June 2026",
      impact: "Reduced delivery coordinate sync latency by 35%.",
      summary: "Dual-application ecosystem (Customer & Partner) coordinating on-demand home bookings, Stripe payments, and live mapping updates.",
      tech: ["Flutter", "Go", "PostgreSQL", "Google Maps"],
      caseStudyUrl: "/projects/righthand"
    },
    {
      version: "v3.0.1",
      title: "goStops Travel Platform",
      status: "PRODUCTION",
      date: "April 2026",
      impact: "Successfully scaled booking transactions by 150%.",
      summary: "Hostel search and booking framework integrating customized checkout gateways, local offline sync layers, and live push channels.",
      tech: ["Flutter", "Node.js", "Redis", "Firebase"],
      caseStudyUrl: "/projects/gostops"
    },
    {
      version: "v4.1.0",
      title: "Hudle Partner App",
      status: "STABLE",
      date: "January 2026",
      impact: "Refactored legacy stack to reduce technical load by 50%.",
      summary: "B2B sports facility management dashboard, refactored to clean Cubit state structures with automated GitHub actions testing cycles.",
      tech: ["Flutter", "BLoC", "REST APIs", "CI/CD"],
      caseStudyUrl: "/projects/hudle"
    }
  ];

  const faqData = [
    {
      q: "Can you join an existing team or codebase?",
      a: "Yes. I regularly integrate with active engineering squads. I clean up legacy architectures, install clean BLoC/Repository patterns, and align with design frameworks to accelerate sprint delivery."
    },
    {
      q: "Do you sign NDAs before initial briefings?",
      a: "Absolutely. I respect intellectual property guidelines. I sign mutual NDAs before reviewing designs, repository architecture, or endpoint documentation."
    },
    {
      q: "What is your typical developer-communication loop?",
      a: "I coordinate inside your Slack/Discord channel, log sprint tickets in Linear or Jira, participate in standups, and provide transparent updates via async Loom walkthroughs."
    },
    {
      q: "How do you define your engagement models?",
      a: "For MVPs with set requirements, I execute on fixed-scope project cycles. For scaling features or active product support, I coordinate on weekly or monthly retainers."
    }
  ];

  const handleCommandSearch = (e: React.FormEvent) => {
    e.preventDefault();
    logFirebaseEvent("command_search", { query: commandQuery });
    // Quick search routing helpers
    const query = commandQuery.toLowerCase();
    if (query.includes("project") || query.includes("work")) {
      window.location.href = "/projects";
    } else if (query.includes("service") || query.includes("contact")) {
      window.location.href = "/services";
    } else if (query.includes("blog") || query.includes("article")) {
      window.location.href = "/blog";
    } else {
      alert(`No direct action matched for: "${commandQuery}". Try typing "projects" or "services".`);
    }
  };

  return (
    <div className="workbench-page-wrapper">
      
      {/* Visual background glows */}
      <div className="workbench-bg-grid"></div>
      <div className="glow-sphere blue"></div>
      <div className="glow-sphere purple"></div>

      {/* Top Console System Bar */}
      <section className="sys-status-bar">
        <div className="container status-bar-inner">
          <div className="sys-left">
            <span className="status-indicator-dot"></span>
            <span className="status-txt font-mono">SYSTEM: ONLINE</span>
            <span className="divider-slash">/</span>
            <span className="status-txt font-mono text-purple">ENGAGEMENT: AVAILABLE</span>
          </div>
          <div className="sys-right">
            <span className="status-txt font-mono">NEXT SLOT: SEPT 2026</span>
            <span className="divider-slash">/</span>
            <span className="status-txt font-mono text-blue">IST: {localTime || "12:00:00"}</span>
          </div>
        </div>
      </section>

      {/* Hero: Interactive Workbench Input */}
      <section className="hero-workbench-section">
        <div className="container text-center">
          <span className="section-tag font-mono">PRODUCT SPECIFICATION</span>
          <h1 className="hero-title">Ashwani Singh</h1>
          <p className="hero-subtitle">
            Senior Cross-Platform Engineer building high-performance mobile products for startups.
          </p>

          {/* Command Terminal Bar */}
          <form onSubmit={handleCommandSearch} className="command-bar-wrapper m-t-40">
            <div className="command-input-container">
              <Terminal size={14} className="command-icon" />
              <input 
                type="text" 
                placeholder="Type 'projects', 'services', or 'contact' and press Enter..." 
                value={commandQuery}
                onChange={(e) => setCommandQuery(e.target.value)}
                className="command-input font-mono"
              />
              <span className="command-shortcut font-mono">⌘K</span>
            </div>
          </form>
        </div>
      </section>

      {/* Live Workspace Grid */}
      <section className="workspace-feed-section">
        <div className="container">
          <div className="workspace-layout">
            
            {/* Left Feed: Shipped Release Changelog */}
            <div className="workspace-feed-col">
              <div className="feed-header">
                <GitBranch size={16} className="text-purple" />
                <span className="font-mono">LATEST SHIPPED RELEASES</span>
              </div>

              <div className="changelog-list">
                {releases.map((rel, idx) => (
                  <div key={idx} className="changelog-card card-glass">
                    <div className="card-rel-header">
                      <div className="version-tag font-mono">{rel.version}</div>
                      <span className="date-tag font-mono">{rel.date}</span>
                    </div>
                    <div className="card-rel-body">
                      <h3>{rel.title}</h3>
                      <p className="rel-summary">{rel.summary}</p>
                      <div className="rel-impact-badge">
                        <TrendingUp size={12} className="text-emerald" />
                        <span>{rel.impact}</span>
                      </div>
                      <div className="rel-tech-row m-t-16">
                        {rel.tech.map((t, tIdx) => (
                          <span key={tIdx} className="tech-pill font-mono">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="card-rel-footer">
                      <Link 
                        href={rel.caseStudyUrl}
                        className="rel-link"
                        onClick={() => logFirebaseEvent("click_homepage_release", { release: rel.title })}
                      >
                        <span>Inspect Release Architecture &rarr;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Operations Console */}
            <div className="workspace-console-col">
              
              {/* Operations Block */}
              <div className="console-panel-card card-glass">
                <div className="panel-header">
                  <Cpu size={14} className="text-blue" />
                  <span className="font-mono">ENGINEERING METRICS</span>
                </div>
                <div className="panel-body">
                  
                  {/* Verified stats list */}
                  <div className="metric-row">
                    <div className="metric-meta">
                      <span className="metric-label">Startup Bootstrap Speed</span>
                      <span className="metric-sub font-mono">Optimized image caching</span>
                    </div>
                    <span className="metric-number text-emerald">&darr; 40%</span>
                  </div>

                  <div className="metric-row">
                    <div className="metric-meta">
                      <span className="metric-label">UI Render Framerate</span>
                      <span className="metric-sub font-mono">Eliminated redundant rebuilds</span>
                    </div>
                    <span className="metric-number text-blue">60 FPS</span>
                  </div>

                  <div className="metric-row">
                    <div className="metric-meta">
                      <span className="metric-label">Production Stability Rate</span>
                      <span className="metric-sub font-mono">Configured telemetry alerts</span>
                    </div>
                    <span className="metric-number text-purple">99.9%</span>
                  </div>
                </div>
              </div>

              {/* Working Guidelines macOS window block */}
              <div className="console-panel-card card-glass m-t-24">
                <div className="panel-header">
                  <Activity size={14} className="text-purple" />
                  <span className="font-mono">PARTNERSHIP GUIDELINES</span>
                </div>
                <div className="panel-body">
                  <div className="guideline-item">
                    <strong>Fixed-Scope MVP Cycles</strong>
                    <p>Clean deliverables and locked budgets for launching products in 6–10 weeks.</p>
                  </div>
                  <div className="guideline-item">
                    <strong>Weekly Active Sprints</strong>
                    <p>Reserved developer capacity with async Loom walkthroughs and Slack standups.</p>
                  </div>
                  <div className="guideline-item">
                    <strong>Modular Architecture</strong>
                    <p>Clean state systems (BLoC/Cubit) built to scale from day one.</p>
                  </div>
                </div>
              </div>

              {/* Interactive Founder FAQ Accordion */}
              <div className="console-panel-card card-glass m-t-24">
                <div className="panel-header">
                  <Check size={14} className="text-emerald" />
                  <span className="font-mono">FOUNDER INQUIRIES</span>
                </div>
                <div className="panel-body faq-accordion-container">
                  {faqData.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="faq-node">
                        <button 
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="faq-node-title"
                        >
                          <span>{faq.q}</span>
                          {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </button>
                        {isOpen && (
                          <p className="faq-node-answer reveal-tab">{faq.a}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Sticky Bottom Release Status Indicator */}
      <div className="sticky-release-bar">
        <div className="container sticky-bar-inner">
          <div className="release-status-left">
            <span className="av-pulse-dot"></span>
            <span className="font-mono">STATUS: ACCEPTING SPRINT PROJECTS</span>
          </div>
          <Link 
            href="/contact" 
            className="release-action-btn card-glass"
            onClick={() => logFirebaseEvent("click_sticky_bar_contact", {})}
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .workbench-page-wrapper {
          padding-bottom: 120px;
          position: relative;
          overflow: hidden;
        }

        /* Decorative Grid & Glows */
        .workbench-bg-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center top;
          mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
          z-index: 1;
        }
        .glow-sphere {
          position: absolute;
          width: 400px;
          height: 400px;
          filter: blur(80px);
          z-index: 2;
          opacity: 0.8;
        }
        .glow-sphere.blue {
          top: -10%;
          left: 10%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%);
        }
        .glow-sphere.purple {
          top: 30%;
          right: 10%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%);
        }

        /* Top Console System Bar */
        .sys-status-bar {
          background: rgba(255, 255, 255, 0.01);
          border-bottom: 1px solid var(--border-color);
          padding: 10px 0;
          position: relative;
          z-index: 5;
        }
        .status-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
        }
        .sys-left, .sys-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .status-indicator-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }
        .status-txt {
          color: var(--text-secondary);
        }
        .divider-slash {
          color: rgba(255, 255, 255, 0.1);
        }

        /* Hero Scoping */
        .hero-workbench-section {
          padding: 100px 0 60px;
          position: relative;
          z-index: 5;
        }
        .hero-title {
          font-size: 64px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }
        .hero-subtitle {
          font-size: 20px;
          color: var(--text-secondary);
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Command Line Input */
        .command-bar-wrapper {
          max-width: 580px;
          margin: 0 auto;
        }
        .command-input-container {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 14px 20px;
          border-radius: 12px;
          gap: 12px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .command-input-container:focus-within {
          border-color: #3b82f6;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
        }
        .command-icon {
          color: var(--text-muted);
        }
        .command-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #fff;
          outline: none;
          font-size: 13.5px;
        }
        .command-input::placeholder {
          color: var(--text-muted);
        }
        .command-shortcut {
          font-size: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--text-muted);
        }

        /* Workspace Grid Split */
        .workspace-feed-section {
          padding: 40px 0;
          position: relative;
          z-index: 5;
        }
        .workspace-layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          align-items: start;
        }
        
        .feed-header, .panel-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 18px;
        }

        /* Changelog Cards */
        .changelog-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .changelog-card {
          border-radius: 16px;
          border: 1px solid var(--border-color);
          padding: 28px;
        }
        .card-rel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
          padding-bottom: 14px;
          margin-bottom: 18px;
        }
        .version-tag {
          font-size: 11px;
          font-weight: 700;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.15);
          padding: 4px 8px;
          border-radius: 6px;
        }
        .date-tag {
          font-size: 11px;
          color: var(--text-muted);
        }
        .changelog-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .rel-summary {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .rel-impact-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 8px;
        }
        .tech-pill {
          font-size: 11px;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          padding: 3px 8px;
          border-radius: 4px;
          margin-right: 6px;
        }

        .card-rel-footer {
          margin-top: 24px;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
        }
        .rel-link {
          font-size: 13.5px;
          font-weight: 600;
          color: #3b82f6;
          text-decoration: none;
        }

        /* Right Panel Cards */
        .console-panel-card {
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }
        .panel-header {
          margin-bottom: 16px;
        }

        .metric-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
        }
        .metric-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .metric-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .metric-label {
          font-size: 13.5px;
          color: #fff;
          font-weight: 600;
        }
        .metric-sub {
          font-size: 10px;
          color: var(--text-muted);
        }
        .metric-number {
          font-size: 16px;
          font-weight: 700;
        }

        .guideline-item {
          margin-bottom: 16px;
        }
        .guideline-item:last-child {
          margin-bottom: 0;
        }
        .guideline-item strong {
          font-size: 13px;
          color: #fff;
          display: block;
          margin-bottom: 4px;
        }
        .guideline-item p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        /* FAQ node */
        .faq-accordion-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-node {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
        }
        .faq-node:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .faq-node-title {
          width: 100%;
          background: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          padding: 6px 0;
        }
        .faq-node-title:hover {
          color: #fff;
        }
        .faq-node-answer {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.4;
          margin-top: 6px;
        }

        /* Sticky Bottom Bar */
        .sticky-release-bar {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 900px;
          background: rgba(18, 18, 20, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 16px 24px;
          z-index: 100;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }
        .sticky-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .release-status-left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11.5px;
          color: #fff;
        }
        .av-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.4; }
        }
        .release-action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .release-action-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }

        /* Staggered animation */
        .reveal-tab {
          animation: revealTab 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes revealTab {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive styling */
        @media (max-width: 1024px) {
          .workspace-layout {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 48px;
          }
        }
        @media (max-width: 600px) {
          .sys-status-bar {
            display: none;
          }
          .hero-title {
            font-size: 38px;
          }
          .hero-subtitle {
            font-size: 16px;
          }
          .sticky-release-bar {
            width: calc(100% - 24px);
            padding: 12px 16px;
            bottom: 12px;
          }
          .release-status-left {
            font-size: 10.5px;
          }
        }
      `}</style>
    </div>
  );
}
