"use client";

import Link from "next/link";
import { Briefcase, Calendar, MapPin, Award, CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "HDFC Securities",
      role: "Senior Mobile Engineer",
      period: "Feb 2026 – Present",
      location: "Mumbai, India (Remote)",
      tech: "Flutter, Dart, Mobile App Architecture, Android SDK, iOS Parity, REST APIs",
      achievements: [
        "Led mobile engineering initiatives, defining Flutter app architectures and scaling high-performance services.",
        "Collaborated with product and backend squads to ship secure, production-grade financial features serving active traders."
      ]
    },
    {
      company: "Hudle",
      role: "Mobile Engineer",
      period: "Feb 2024 – Jan 2026",
      location: "New Delhi, India (Hybrid)",
      tech: "Flutter, Dart, BLoC, AppsFlyer, Mix-Panel, REST APIs, Codemagic",
      achievements: [
        "Led the redesign of the app's interface by developing custom Flutter widgets and optimizing layout structures, achieving a 30% boost in user engagement.",
        "Streamlined API integrations with caching strategies, reducing latency by 40% and improving app responsiveness.",
        "Integrated AppsFlyer SDK for attribution tracking, improving user acquisition efficiency by 20%."
      ]
    },
    {
      company: "MrMilkMan By EverAg",
      role: "Mobile Engineer",
      period: "May 2023 – Jan 2024",
      location: "Gurgaon, Haryana, India",
      tech: "Flutter, Dart, GraphQL, Firebase, GitHub Actions CI/CD",
      achievements: [
        "Implemented CI/CD pipeline using GitHub Actions, reducing deployment time by 60% and enabling daily releases.",
        "Integrated notifications, analytics, and localization (3+ languages), improving user retention by 15%.",
        "Optimized GraphQL queries, reducing data fetching time by 35% for 10K+ daily orders."
      ]
    },
    {
      company: "SQUAREBOAT",
      role: "Mobile Engineer",
      period: "Jan 2022 – May 2023",
      location: "Gurgaon, Haryana, India",
      tech: "Flutter, Dart, GetX, Firebase Analytics, REST APIs",
      achievements: [
        "Built 3 production Flutter apps serving 100K+ users with 99.5% crash-free rate, implementing clean architecture.",
        "Translated Figma/Adobe XD designs into pixel-perfect responsive UI code, maintaining 99.5% design consistency across Android and iOS platforms."
      ]
    },
    {
      company: "SUDAN'S TECH. FOUND.",
      role: "Flutter Developer Intern",
      period: "May 2021 – Aug 2021",
      location: "Remote",
      tech: "Flutter, Dart, Mobile UI Layouts",
      achievements: [
        "Developed and prototyped custom user interfaces and layouts in Flutter.",
        "Worked with REST APIs integration and verified cross-platform component compatibility."
      ]
    }
  ];

  return (
    <div className="experience-page-wrapper">
      <section className="experience-hero">
        <div className="container">
          <span className="section-tag">CAREER HISTORY</span>
          <h1>My professional timeline</h1>
          <p className="subtitle">
            An in-depth review of my engineering roles, technical responsibilities, and key product outcomes.
          </p>
        </div>
      </section>

      <section className="experience-list-section">
        <div className="container exp-cards-col">
          {experiences.map((exp, idx) => (
            <div key={idx} className="detailed-exp-card card-glass">
              <div className="exp-card-header-row">
                <div className="role-company-group">
                  <div className="exp-icon-bullet">
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <h3>{exp.role}</h3>
                    <span className="company-meta">{exp.company}</span>
                  </div>
                </div>
                
                <div className="loc-date-group">
                  <div className="meta-sub-row">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-sub-row">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="exp-tech-radar-tags m-t-20">
                <strong>Technologies:</strong>
                <div className="tags-row-meta">
                  {exp.tech.split(", ").map((t) => (
                    <span key={t} className="tech-tag-meta">{t}</span>
                  ))}
                </div>
              </div>

              <div className="exp-achievements-block m-t-20">
                <h4>Key Achievements & Impact:</h4>
                <ul className="achievements-bullet-list">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>
                      <span className="ach-bullet">
                        <CheckCircle size={14} className="text-blue" />
                      </span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .experience-page-wrapper {
          padding-bottom: 80px;
        }

        /* Hero */
        .experience-hero {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .experience-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .experience-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 720px;
        }

        /* Experience cards */
        .experience-list-section {
          padding: 60px 0;
        }
        .exp-cards-col {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 840px;
          margin: 0 auto;
        }
        .detailed-exp-card {
          padding: 40px;
          position: relative;
        }
        .detailed-exp-card:hover {
          border-color: var(--accent-blue-border);
          transform: translateY(-2px);
        }
        .exp-card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
        }
        .role-company-group {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .exp-icon-bullet {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--accent-blue-glow);
          border: 1px solid var(--accent-blue-border);
          color: var(--accent-blue-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .role-company-group h3 {
          font-size: 20px;
          color: #fff;
        }
        .company-meta {
          font-size: 13.5px;
          color: var(--text-secondary);
          display: block;
          margin-top: 2px;
        }
        .loc-date-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
          align-items: flex-end;
        }
        .meta-sub-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        /* Tech tags */
        .exp-tech-radar-tags strong {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #fff;
          display: block;
          margin-bottom: 8px;
        }
        .tags-row-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tech-tag-meta {
          font-size: 11px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 2px 8px;
          border-radius: 4px;
          color: var(--text-secondary);
        }

        /* Achievements */
        .exp-achievements-block h4 {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #fff;
          margin-bottom: 12px;
        }
        .achievements-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .achievements-bullet-list li {
          display: flex;
          align-items: start;
          gap: 12px;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .ach-bullet {
          margin-top: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .exp-card-header-row {
            flex-direction: column;
            gap: 16px;
          }
          .loc-date-group {
            align-items: flex-start;
          }
          .detailed-exp-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
