"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter, Target, Cpu, Server, Compass, Layout } from "lucide-react";

export default function Projects() {
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
      title: "Hudle Partner & Consumer Apps",
      tags: ["mobile", "b2b", "consumer"],
      tech: "Flutter, BLoC, AppsFlyer, Mix-Panel, REST APIs, Codemagic",
      overview: "Redesigned consumer interface and built the B2B Partner App from scratch for India's leading SportsTech platform.",
      problem: "Complex booking funnels and legacy components led to low mobile conversion rates and developer release friction.",
      research: "Analyzed screen flows and layout nodes to isolate high-render frame drop triggers.",
      architecture: "Implemented a modular feature-first directory layout with abstract repository contracts.",
      engineering: "Engineered client-side caching layers and automated widget tests. Integrated attribution SDKs.",
      launch: "Shipped both platforms to App Stores with 4.5+ star ratings.",
      lessons: "Decoupling API endpoints early prevented breaking UI changes during subsequent model iterations.",
      outcomes: "+30% user engagement, -40% API latency, +20% user acquisition tracking efficiency.",
      isFlagship: false
    },
    {
      title: "MrMilkMan B2C Subscription App",
      tags: ["mobile", "saas", "b2b"],
      tech: "Flutter, GraphQL, Firebase, GitHub Actions CI/CD",
      overview: "Built subscription management, notifications, localization, and real-time tracking for SaaS dairy management platform.",
      problem: "10K+ daily orders triggered query latency. Slow manual builds delayed critical updates.",
      research: "Identified redundant GraphQL nested field loads causing backend pipeline overhead.",
      architecture: "Clean repository boundary architecture connecting client inputs directly to localized caches.",
      engineering: "Constructed GitHub Actions CI/CD pipelines. Optimized queries and localized to 3+ languages.",
      launch: "Automated daily test deployments, raising satisfaction scores by 28%.",
      lessons: "Early automated lint checks and testing pipelines reduce regression rates by 60%.",
      outcomes: "-35% data fetch time, -60% deploy time, +15% user retention.",
      isFlagship: false
    },
    {
      title: "goStops Travel Booking App",
      tags: ["mobile", "consumer"],
      tech: "Flutter, GetX, Firebase Analytics, Mix-Panel",
      overview: "Developed hostel booking and trip planning application serving 50K+ travel enthusiasts.",
      problem: "High abandonment rates during booking completion funnels on mobile devices.",
      research: "Mapped user drop-offs via Mix-Panel funnels to identify drop points in payment validation screens.",
      architecture: "GetX state-based reactive controller bindings with strict separation of views.",
      engineering: "Refactored payment integration layers and automated validation state feedback alerts.",
      launch: "Live release to Google Play and Apple App Stores.",
      lessons: "UX micro-interactions (like inline loader feedback) are critical to preventing user checkout retries.",
      outcomes: "+18% booking conversions, 99.5% crash-free rate across 50K+ active users.",
      isFlagship: false
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

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
      <section className="projects-hero">
        <div className="container">
          <span className="section-tag">SELECTED WORK</span>
          <h1>Proven outcomes & Engineering stories</h1>
          <p className="subtitle">
            Every project represents a structured engineering story—solving latency, scaling delivery, and validating product logic.
          </p>
        </div>
      </section>

      {/* Filter Control */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="filter-controls-row">
            <div className="filter-badge-row">
              <Filter size={14} className="text-muted" />
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-story-list m-t-40">
            {filteredProjects.map((p, idx) => (
              <div key={idx} className="project-story-card card-glass reveal-on-scroll">
                <div className="story-summary-side">
                  <span className="story-badge">Case Study</span>
                  <h3>{p.title}</h3>
                  <p className="p-overview">{p.overview}</p>
                  
                  {/* Render Custom CSS Mockup Visuals */}
                  {p.title.includes("Hudle") && (
                    <div className="project-mini-visual hudle-visual">
                      <div className="hudle-phone-frame">
                        <div className="hudle-card-active">
                          <span className="hudle-lbl">Active Booking</span>
                          <span className="hudle-title">Court Reservation</span>
                          <span className="hudle-time">7:00 PM - 8:00 PM</span>
                        </div>
                        <div className="hudle-card-active second">
                          <span className="hudle-lbl">Upcoming</span>
                          <span className="hudle-title">Cricket Turf 4</span>
                          <span className="hudle-time">9:30 PM - 11:30 PM</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {p.title.includes("MilkMan") && (
                    <div className="project-mini-visual milkman-visual">
                      <div className="milkman-dashboard">
                        <div className="milkman-title-row">Daily Subscription Calendar</div>
                        <div className="milkman-grid-calendar">
                          <span className="cal-day active">12</span>
                          <span className="cal-day active">13</span>
                          <span className="cal-day active">14</span>
                          <span className="cal-day active">15</span>
                          <span className="cal-day current">16</span>
                          <span className="cal-day">17</span>
                        </div>
                        <div className="milkman-progress">
                          <div className="progress-bar-fill"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {p.title.includes("goStops") && (
                    <div className="project-mini-visual gostops-visual">
                      <div className="gostops-interface">
                        <div className="gostops-booking-card">
                          <span className="hostel-name">goStops Delhi NCR</span>
                          <span className="price-lbl">₹499 / night</span>
                          <div className="rating-badge">★ 4.8</div>
                        </div>
                        <div className="gostops-checkout">
                          <span className="chk-step done">Select Room</span>
                          <span className="chk-step active">Payment (Paytm)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="story-tech-row">
                    <strong>Tech:</strong>
                    <span>{p.tech}</span>
                  </div>

                  <div className="story-metrics-grid">
                    <span className="metrics-summary-title">BUSINESS IMPACT</span>
                    <div className="metrics-badges-row">
                      {p.outcomes.split(", ").map((o, oIdx) => (
                        <div key={oIdx} className="mini-metric-badge card-glass">
                          <span className="metric-badge-txt">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="story-timeline-side">
                  <div className="story-flow-step">
                    <div className="flow-bullet"></div>
                    <strong>Problem</strong>
                    <p>{p.problem}</p>
                  </div>
                  <div className="story-flow-step">
                    <div className="flow-bullet"></div>
                    <strong>Research</strong>
                    <p>{p.research}</p>
                  </div>
                  <div className="story-flow-step">
                    <div className="flow-bullet"></div>
                    <strong>Architecture</strong>
                    <p>{p.architecture}</p>
                  </div>
                  <div className="story-flow-step">
                    <div className="flow-bullet"></div>
                    <strong>Engineering</strong>
                    <p>{p.engineering}</p>
                  </div>
                  <div className="story-flow-step">
                    <div className="flow-bullet"></div>
                    <strong>Results & Lessons</strong>
                    <p>{p.lessons}</p>
                  </div>
                </div>
              </div>
            ))}
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
        }

        /* Hero */
        .projects-hero {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .projects-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .projects-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 720px;
        }

        /* Filter Controls */
        .projects-grid-section {
          padding: 60px 0;
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
          padding: 4px 12px;
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

        /* Story cards list */
        .projects-story-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .project-story-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          padding: 48px;
          align-items: start;
        }
        .story-summary-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: calc(var(--header-height) + 40px);
        }
        .story-badge {
          font-family: var(--font-headings);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-blue-light);
        }
        .story-summary-side h3 {
          font-size: 28px;
          color: #fff;
        }
        .p-overview {
          font-size: 15px;
          line-height: 1.6;
        }
        .story-tech-row {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .story-tech-row strong {
          color: #fff;
          margin-right: 8px;
        }
        .story-metrics-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
          margin-top: 20px;
        }
        .metrics-summary-title {
          font-family: var(--font-headings);
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .metrics-badges-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mini-metric-badge {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.18);
          border-radius: 8px;
          padding: 8px 12px;
        }
        .metric-badge-txt {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--accent-blue-light);
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.1);
        }

        /* Story Timeline side */
        .story-timeline-side {
          border-left: 1px solid var(--border-color);
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .story-flow-step {
          position: relative;
        }
        .flow-bullet {
          position: absolute;
          top: 6px;
          left: -30px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid var(--accent-blue);
        }
        .story-flow-step strong {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-blue-light);
          display: block;
          margin-bottom: 4px;
        }
        .story-flow-step p {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Tech Radar */
        .tech-radar-section {
          padding: 60px 0 100px;
          border-top: 1px solid var(--border-color);
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

        @media (max-width: 1024px) {
          .project-story-card {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 32px 24px;
          }
          .story-summary-side {
            position: relative;
            top: 0;
          }
          .story-timeline-side {
            border-left: 1px solid var(--border-color);
            padding-left: 20px;
          }
          .flow-bullet {
            left: -26px;
          }
          .radar-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* Project Mini Visuals */
        .project-mini-visual {
          width: 100%;
          height: 220px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 12px 0 20px;
          background: rgba(255, 255, 255, 0.005);
        }

        /* Hudle Visual */
        .hudle-visual {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .hudle-phone-frame {
          width: 85%;
          height: 90%;
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 8px;
          background: #0f131a;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .hudle-card-active {
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.15);
          border-radius: 6px;
          padding: 6px 10px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hudle-card-active.second {
          background: rgba(59, 130, 246, 0.05);
          border-color: rgba(59, 130, 246, 0.15);
        }
        .hudle-lbl {
          font-size: 6px;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .hudle-title {
          font-size: 11px;
          font-weight: 600;
          color: #fff;
        }
        .hudle-time {
          font-size: 9px;
          color: var(--accent-blue-light);
        }

        /* Milkman Visual */
        .milkman-visual {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .milkman-dashboard {
          width: 85%;
          height: 90%;
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 8px;
          background: #0f131a;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .milkman-title-row {
          font-size: 9px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .milkman-grid-calendar {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 6px;
        }
        .cal-day {
          font-size: 9px;
          text-align: center;
          padding: 4px;
          border-radius: 4px;
          color: var(--text-muted);
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
        }
        .cal-day.active {
          background: rgba(168, 85, 247, 0.1);
          border-color: rgba(168, 85, 247, 0.3);
          color: #fff;
        }
        .cal-day.current {
          background: var(--accent-blue);
          border-color: var(--accent-blue-border);
          color: #fff;
        }
        .milkman-progress {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.05);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          width: 80%;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-blue));
        }

        /* goStops Visual */
        .gostops-visual {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .gostops-interface {
          width: 85%;
          height: 90%;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          background: #0f131a;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .gostops-booking-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 8px 10px;
        }
        .hostel-name {
          font-size: 11px;
          font-weight: 600;
          color: #fff;
        }
        .price-lbl {
          font-size: 9px;
          color: #ef4444;
        }
        .rating-badge {
          font-size: 9px;
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          padding: 2px 4px;
          border-radius: 4px;
        }
        .gostops-checkout {
          display: flex;
          gap: 8px;
        }
        .chk-step {
          flex: 1;
          font-size: 8px;
          text-align: center;
          padding: 4px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
        }
        .chk-step.done {
          background: rgba(16, 185, 129, 0.05);
          border-color: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }
        .chk-step.active {
          background: rgba(239, 68, 68, 0.05);
          border-color: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
      `}</style>
    </div>
  );
}

// Simple Helper component
function CheckCircle({ className, size }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
  );
}
