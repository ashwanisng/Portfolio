"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Award, Briefcase, GraduationCap } from "lucide-react";

export default function ClientAboutPage() {
  const milestones = [
    {
      company: "HDFC Securities",
      year: "Feb 2026 – Present",
      title: "Senior Mobile Engineer @ HDFC Securities",
      location: "Mumbai (Remote)",
      description: "Defining high-performance Flutter mobile application architectures and shipping secure financial features for active traders."
    },
    {
      company: "RightHand",
      year: "May 2025 – Feb 2026",
      title: "Freelance Flutter Developer @ RightHand",
      location: "Qatar (Remote)",
      description: "Led the complete UX/UI revamp of the marketplace mobile app, integrated Stripe & MyFatoorah payment gateways, and migrated legacy layouts into BLoC & Cubit state layers."
    },
    {
      company: "Hudle",
      year: "Feb 2024 – Jan 2026",
      title: "Mobile Engineer @ Hudle",
      location: "New Delhi (Hybrid)",
      description: "Led the interface redesign using custom Flutter widgets (30% engagement boost) and optimized API integration logic with caching (40% latency reduction)."
    },
    {
      company: "SOCTR",
      year: "Jun 2024 – Nov 2024",
      title: "Freelance Flutter Developer @ SOCTR",
      location: "India (Remote)",
      description: "Built the social investing mobile application from the ground up, integrated WebSockets for real-time stock ticks, and constructed technical charting dashboards."
    },
    {
      company: "MrMilkMan By EverAg",
      year: "May 2023 – Jan 2024",
      title: "Mobile Engineer @ MrMilkman by EverAg",
      location: "Gurgaon, Haryana",
      description: "Built automated GitHub Actions CI/CD release cycles (60% build speed gain) and optimized GraphQL queries (35% data fetch latency reduction)."
    },
    {
      company: "Squareboat",
      year: "Jan 2022 – May 2023",
      title: "Mobile Engineer @ Squareboat",
      location: "Gurgaon, Haryana",
      description: "Shipped 3 production-grade Flutter applications serving 100K+ users with a 99.5% crash-free rate and pixel-perfect design parity."
    },
    {
      company: "Sudan's Tech",
      year: "May 2021 – Aug 2021",
      title: "Flutter Developer Intern @ Sudan's Tech",
      location: "Remote",
      description: "Prototyped customizable mobile layouts, validated REST API schemas, and resolved component parity bugs."
    },
    {
      company: "Galgotias University",
      year: "Aug 2018 – Jun 2022",
      title: "B.Tech in Computer Science & Engineering",
      location: "Galgotias University",
      description: "Graduated with a 7.97/10 CGPA. Active open-source contributor during SoC hackathons."
    }
  ];

  return (
    <div className="about-page-wrapper">
      <section className="about-intro-section">
        <div className="container intro-grid">
          <div className="intro-content">
            <span className="section-tag">MY STORY</span>
            <h1>Who I am & What drives me</h1>
            <p className="large-lead">
              I am a <span className="highlight-text-blue">Mobile Product Engineer</span> based in India, specializing in developing cross-platform applications using the <strong className="text-white">Flutter</strong> framework and constructing scalable backend pipelines.
            </p>
            <p>
              I don't just write code. I <strong className="text-white">partner with founders</strong> to turn ideas into successful software products. Over the last four years, I have built production-grade apps that have served <strong className="text-white">over 100K users</strong>, integrated complex AI capabilities, and streamlined release cycles.
            </p>
            <p>
              Startups enjoy working with me because I communicate clearly, work independently, and prioritize <strong className="text-white">modular, maintainable architectures</strong> over quick hacks. I believe that performance is a feature, and code should be documented and tested.
            </p>
            <div className="about-ctas m-t-20">
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
                <ArrowRight size={16} />
              </Link>
              <Link href="/resume" className="btn btn-outline">
                View Resume
              </Link>
            </div>

            {/* Core Engineering Principles Grid */}
            <div className="about-principles-grid">
              <div className="principle-card">
                <div className="p-icon text-blue">01</div>
                <h4>High Performance</h4>
                <p>Smooth 60/120 FPS animations, caching layers, and optimized payloads.</p>
              </div>
              <div className="principle-card">
                <div className="p-icon text-purple">02</div>
                <h4>Clean Architecture</h4>
                <p>BLoC state separation, feature-first modular folder structures.</p>
              </div>
              <div className="principle-card">
                <div className="p-icon text-green">03</div>
                <h4>Founder Friendly</h4>
                <p>Weekly Loom recordings, transparent async updates, milestone tracking.</p>
              </div>
            </div>
          </div>

          <div className="intro-graphics">
            <div className="graphic-glow"></div>
            <div className="profile-badge-card card-glass">
              {/* Status Badge */}
              <div className="badge-status-row">
                <span className="status-indicator">
                  <span className="status-dot"></span>
                </span>
                <span className="status-text">Available for contracts</span>
              </div>

              <div className="initials-avatar">AS</div>
              <h3>Ashwani Kumar Singh</h3>
              <span className="profile-subtitle">Mobile Product Engineer</span>
              
              <div className="credentials-list-mini">
                <div className="cred-row">
                  <Award size={14} className="text-blue" strokeWidth={2.5} />
                  <span>Rising Star Award Q2 2023</span>
                </div>
                <div className="cred-row">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-blue"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  <span>1,452+ GitHub Contributions</span>
                </div>
                <div className="cred-row">
                  <BookOpen size={14} className="text-blue" strokeWidth={2.5} />
                  <span>GFG Rank 36 / 2,297</span>
                </div>
              </div>

              <div className="profile-meta-fields">
                <div className="p-field">
                  <span className="p-field-lbl">CURRENTLY BUILDING</span>
                  <span className="p-field-val">ClosePitch (AI SaaS)</span>
                </div>
                <div className="p-field">
                  <span className="p-field-lbl">AVAILABILITY</span>
                  <span className="p-field-val">MVP Builds & Sprints</span>
                </div>
                <div className="p-field">
                  <span className="p-field-lbl">FAVORITE STACK</span>
                  <span className="p-field-val">Flutter + Go + AWS</span>
                </div>
                <div className="p-field">
                  <span className="p-field-lbl">RESPONSE TIME</span>
                  <span className="p-field-val">Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">TIMELINE</span>
            <h2 className="section-title">Professional Milestones</h2>
            <p className="section-subtitle">
              A chronological overview of my professional experience and education.
            </p>
          </div>

          <div className="modern-timeline">
            <div className="timeline-track"></div>
            
            {milestones.map((item, idx) => (
              <div key={idx} className="timeline-node">
                <div className="timeline-marker">
                  <div className="marker-icon-wrapper">
                    {item.company === "Galgotias University" ? (
                      <GraduationCap size={16} className="text-purple" />
                    ) : (
                      <Briefcase size={16} className="text-blue" strokeWidth={2.5} />
                    )}
                  </div>
                </div>
                <div className="timeline-body-wrapper">
                  <div className="timeline-card card-glass">
                    <div className="timeline-card-header">
                      <span className="timeline-tag-year">{item.year}</span>
                      <span className="timeline-tag-loc">{item.location}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page-wrapper {
          padding-top: 120px;
          padding-bottom: 80px;
        }
        
        /* Intro */
        .about-intro-section {
          padding: 60px 0;
        }
        .intro-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: start;
        }
        .intro-content h1 {
          font-size: 44px;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.2;
          background: linear-gradient(to right, #ffffff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .large-lead {
          font-size: 18px;
          color: #f1f5f9;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .intro-content p {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .about-ctas {
          display: flex;
          gap: 16px;
        }

        /* Core Engineering Principles Grid */
        .about-principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .principle-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 20px;
          transition: var(--transition-fast);
        }
        .principle-card:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.07);
          transform: translateY(-2px);
        }
        .principle-card .p-icon {
          font-family: var(--font-headings);
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .principle-card h4 {
          color: #fff;
          font-size: 14px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .principle-card p {
          font-size: 12px !important;
          color: var(--text-secondary) !important;
          line-height: 1.5 !important;
          margin: 0 !important;
        }

        /* Profile Badge Card */
        .intro-graphics {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: start;
          width: 100%;
          height: auto;
          min-height: 480px;
          padding: 20px 0;
        }
        .graphic-glow {
          position: absolute;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.04) 60%, rgba(0,0,0,0) 80%);
          filter: blur(30px);
        }
        .profile-badge-card {
          width: 100%;
          max-width: 380px;
          padding: 36px 24px;
          text-align: center;
          z-index: 2;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-radius: 16px;
        }
        .badge-status-row {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.15);
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 24px;
        }
        .status-indicator {
          display: inline-flex;
          width: 8px;
          height: 8px;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }
        .status-text {
          font-size: 10px;
          font-weight: 700;
          color: #10b981;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .initials-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 24px;
          color: #fff;
          margin: 0 auto 16px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        .profile-badge-card h3 {
          font-size: 18px;
          margin-bottom: 6px;
          font-weight: 600;
        }
        .profile-badge-card .profile-subtitle {
          font-size: 12px;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 24px;
        }
        .credentials-list-mini {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
          margin-bottom: 8px;
        }
        .cred-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        .profile-meta-fields {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }
        .p-field {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .p-field-lbl {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .p-field-val {
          font-size: 14px;
          color: #fff;
          font-weight: 500;
          font-family: var(--font-headings);
        }

        /* Timeline */
        .about-timeline-section {
          padding: 60px 0 100px;
          border-top: 1px solid var(--border-color);
        }
        .modern-timeline {
          position: relative;
          max-width: 900px;
          margin: 60px auto 0;
          padding-left: 70px;
        }
        .timeline-track {
          position: absolute;
          top: 10px;
          left: 30px;
          width: 2px;
          height: calc(100% - 20px);
          background: linear-gradient(to bottom, 
            var(--accent-blue) 0%, 
            var(--accent-purple) 50%, 
            rgba(255, 255, 255, 0.05) 100%
          );
        }
        .timeline-node {
          position: relative;
          margin-bottom: 40px;
        }
        .timeline-node:last-child {
          margin-bottom: 0;
        }
        .timeline-marker {
          position: absolute;
          top: 24px;
          left: -70px;
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }
        .marker-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #0b0f19;
          border: 2px solid var(--accent-blue-border);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .timeline-node:hover .marker-icon-wrapper {
          transform: scale(1.15);
          border-color: var(--accent-blue);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }
        .timeline-body-wrapper {
          position: relative;
        }
        .timeline-card {
          padding: 28px 32px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), 
                      border-color 0.3s ease, 
                      background-color 0.3s ease,
                      box-shadow 0.3s ease;
        }
        .timeline-card:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(59, 130, 246, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        .timeline-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .timeline-tag-year {
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-blue-light);
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.15);
          padding: 4px 10px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .timeline-tag-loc {
          font-size: 12px;
          color: var(--text-muted);
        }
        .timeline-card h3 {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .timeline-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .intro-graphics {
            height: auto;
            min-height: auto;
            padding: 20px 0;
            justify-content: center;
          }
          .about-principles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .about-principles-grid {
            grid-template-columns: 1fr;
          }
          .modern-timeline {
            padding-left: 50px;
          }
          .timeline-track {
            left: 20px;
          }
          .timeline-marker {
            left: -50px;
            width: 40px;
          }
          .marker-icon-wrapper {
            width: 32px;
            height: 32px;
          }
          .timeline-card {
            padding: 22px 24px;
          }
          .timeline-card h3 {
            font-size: 18px;
          }
        }
        @media (max-width: 600px) {
          .intro-content h1 {
            font-size: 32px;
          }
          .about-ctas {
            flex-direction: column;
            width: 100%;
          }
          .about-ctas .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
