"use client";

import Link from "next/link";
import { Download, Award, Briefcase, GraduationCap, Code, FolderGit } from "lucide-react";

export default function ClientResumePage() {
  const experiences = [
    {
      company: "RightHand",
      role: "Freelance Flutter Developer",
      period: "May 2025 – Feb 2026",
      location: "Qatar (Remote)",
      bullets: [
        "Led the complete mobile application UI revamp for a household services platform in Qatar, modernizing booking flows.",
        "Integrated payment gateways (Stripe & MyFatoorah), lowering transaction drops and checkout support inquiries.",
        "Refactored dynamic service layouts into clean BLoC/Cubit modular boundaries to support rapid feature updates.",
        "Configured Firebase Crashlytics and custom performance telemetry metrics for real-time app health monitoring."
      ]
    },
    {
      company: "Hudle",
      role: "Mobile Engineer",
      period: "Feb 2024 – Present",
      location: "New Delhi",
      bullets: [
        "Led the redesign of the app’s interface by developing custom Flutter widgets and optimizing layout structures, achieving a 30% boost in user engagement.",
        "Streamlined API integrations with caching strategies, reducing latency by 40% and improving app responsiveness.",
        "Integrated AppsFlyer SDK for attribution tracking, improving user acquisition efficiency by 20%."
      ]
    },
    {
      company: "SOCTR",
      role: "Freelance Flutter Developer (Sole Dev)",
      period: "Jun 2024 – Nov 2024",
      location: "Remote",
      bullets: [
        "Served as the sole Flutter developer to design and develop the complete social investing mobile application from the ground up.",
        "Integrated WebSockets to synchronize high-frequency real-time stock ticks and updates without UI frame lag.",
        "Constructed custom charting modules using Syncfusion, FL Chart, and TradingView SDK to render complex technical analysis indicators.",
        "Coordinated closely with Go backend engineers and configured Firebase Remote Config for dynamic runtime feature flags."
      ]
    },
    {
      company: "MrMilkMan By EverAg",
      role: "Mobile Engineer",
      period: "May 2023 – Jan 2024",
      location: "Gurgaon, Haryana",
      bullets: [
        "Implemented CI/CD pipeline using GitHub Actions, reducing deployment time by 60% and enabling daily releases.",
        "Integrated notifications, analytics, and localization (3+ languages), improving retention by 15%.",
        "Optimized GraphQL queries, reducing data fetching time by 35% for 10K+ daily orders."
      ]
    },
    {
      company: "SQUAREBOAT",
      role: "Mobile Engineer",
      period: "Jan 2022 – May 2023",
      location: "Gurgaon, Haryana",
      bullets: [
        "Built 3 production Flutter apps serving 100K+ users with 99.5% crash-free rate, implementing clean architecture.",
        "Translated Figma/Adobe XD designs into pixel-perfect responsive UI code, maintaining 99.5% design consistency across Android and iOS platforms."
      ]
    }
  ];

  const projects = [
    {
      title: "RightHand Home Services App",
      context: "Freelance Project (RightHand)",
      period: "May 2025 – Feb 2026",
      platforms: "PlayStore | iOS",
      bullets: [
        "Revamped user interface and checkout state logic for on-demand home services marketplace in Qatar.",
        "Integrated MyFatoorah & Stripe payment SDKs, Firebase push notifications, and location tracking."
      ]
    },
    {
      title: "SOCTR Fintech Platform",
      context: "Freelance Project (SOCTR)",
      period: "Jun 2024 – Nov 2024",
      platforms: "PlayStore | iOS",
      bullets: [
        "Developed social investing and charting application from scratch as the sole Flutter developer.",
        "Integrated high-frequency WebSockets for live market feed ticks and custom technical analysis charts."
      ]
    },
    {
      title: "Hudle Partner & Consumer Apps",
      context: "Company Project (Hudle)",
      period: "Feb 2024 – Present",
      platforms: "PlayStore | iOS",
      bullets: [
        "Developed Partner App from scratch and led Consumer App redesign for India’s leading SportsTech platform.",
        "Implemented Bloc pattern state management across 15+ screens with 4.5+ star ratings on app stores."
      ]
    },
    {
      title: "B2C Legacy App (SaaS for Dairy Management)",
      context: "Company Project (MrMilkMan)",
      period: "May 2023 – Jan 2024",
      platforms: "PlayStore | iOS",
      bullets: [
        "Built subscription management and real-time tracking for SaaS platform with GraphQL backend.",
        "Implemented CI/CD pipelines with automated testing, improving satisfaction scores by 28%."
      ]
    },
    {
      title: "goStops Travel Booking App",
      context: "Company Project (SQUAREBOAT)",
      period: "Jan 2022 – May 2023",
      platforms: "PlayStore | iOS",
      bullets: [
        "Developed hostel booking and trip planning for 50K+ users with Flutter, GetX, Firebase.",
        "Integrated Mix-Panel analytics, optimizing conversion funnel and increasing bookings by 18%."
      ]
    }
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Dart", "Java", "Kotlin", "Python"]
    },
    {
      category: "Mobile Development",
      skills: ["Flutter", "Android", "Firebase", "GraphQL", "REST APIs"]
    },
    {
      category: "State Management",
      skills: ["Bloc", "GetX", "Provider"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "BitBucket", "Android Studio", "Figma", "Adobe XD", "Postman"]
    },
    {
      category: "DevOps & Analytics",
      skills: ["CI/CD (Codemagic, GitHub Actions)", "AppsFlyer", "Mix-Panel", "Firebase Analytics"]
    }
  ];

  return (
    <div className="resume-page-wrapper">
      {/* SCREEN VERSION (Beautiful Web view) */}
      <div className="screen-resume-view">
        <section className="resume-header-section">
          <div className="container resume-title-row">
            <div>
              <span className="section-tag">CREDENTIALS</span>
              <h1>Curriculum Vitae</h1>
              <p className="subtitle">
                Detailed professional history, core skill distributions, and educational qualifications.
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => typeof window !== "undefined" && window.print()}>
              <Download size={16} />
              Print / Download PDF
            </button>
          </div>
        </section>

        <section className="resume-content-section">
          <div className="container resume-grid-layout">
            {/* Main Experience & Projects column */}
            <div className="resume-main-col">
              {/* Professional Summary */}
              <div className="cv-section-title">
                <GraduationCap size={18} className="text-blue" />
                <h2>Professional Summary</h2>
              </div>
              <div className="cv-exp-card card-glass m-b-30">
                <p className="cv-simple-text" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  As a Flutter developer, I have expertise in creating cross-platform mobile applications using the Flutter framework. I have a deep understanding of the Dart programming language, along with experience in developing UI components and widgets for building.
                </p>
              </div>

              {/* Work Experience */}
              <div className="cv-section-title">
                <Briefcase size={18} className="text-blue" />
                <h2>Work Experience</h2>
              </div>

              <div className="cv-experience-list m-b-30">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="cv-exp-card card-glass">
                    <div className="cv-exp-header">
                      <div>
                        <h3>{exp.role}</h3>
                        <span className="cv-company">{exp.company} &bull; {exp.location}</span>
                      </div>
                      <span className="cv-period">{exp.period}</span>
                    </div>
                    <ul className="cv-bullets-list">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Selected Projects */}
              <div className="cv-section-title m-t-40">
                <FolderGit size={18} className="text-blue" />
                <h2>Featured Projects</h2>
              </div>

              <div className="cv-experience-list m-b-30">
                {projects.map((proj, idx) => (
                  <div key={idx} className="cv-exp-card card-glass">
                    <div className="cv-exp-header">
                      <div>
                        <h3>{proj.title}</h3>
                        <span className="cv-company">{proj.context} &bull; {proj.platforms}</span>
                      </div>
                      <span className="cv-period">{proj.period}</span>
                    </div>
                    <ul className="cv-bullets-list">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="cv-section-title m-t-40">
                <GraduationCap size={18} className="text-blue" />
                <h2>Education</h2>
              </div>

              <div className="cv-exp-card card-glass">
                <div className="cv-exp-header">
                  <div>
                    <h3>Bachelor of Technology in Computer Science & Engineering</h3>
                    <span className="cv-company">Galgotias University &bull; Greater Noida, India</span>
                  </div>
                  <span className="cv-period">Aug 2018 – Jun 2022</span>
                </div>
                <p className="cv-simple-text">
                  Successfully graduated with a cumulative grade point average of <strong>7.97 / 10</strong>.
                </p>
              </div>
            </div>

            {/* Sidebar Skills column */}
            <div className="resume-side-col">
              <div className="cv-section-title">
                <Code size={18} className="text-blue" />
                <h2>Technical Skills</h2>
              </div>

              <div className="cv-skills-card card-glass">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="cv-skill-category-block">
                    <h4>{cat.category}</h4>
                    <div className="cv-skills-tag-row">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="cv-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recognition */}
              <div className="cv-section-title m-t-40">
                <Award size={18} className="text-blue" />
                <h2>Awards & Recognition</h2>
              </div>

              <div className="cv-skills-card card-glass">
                <ul className="cv-awards-list">
                  <li>
                    <strong>Rising Star Award Q2 2023</strong>
                    <p>Awarded for excellence in deployment operations and codebase modernization.</p>
                  </li>
                  <li>
                    <strong>GeeksforGeeks Rank 36 / 2,297</strong>
                    <p>Top algorithmic problem solving ranking.</p>
                  </li>
                  <li>
                    <strong>Open Source Programs Selection</strong>
                    <p>Selected contributor for GirlScript Summer of Code 2021, Student Code-in 2020, and Pclub Summer of Code 2020.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PRINT VERSION (Sleek minimalist A4 style matching the screenshot) */}
      <div className="print-resume-view">
        <header className="print-header">
          <h1>ASHWANI KUMAR SINGH</h1>
          <div className="print-contacts">
            <span>ashwanicena5@gmail.com</span>
            <span className="sep">|</span>
            <span>github.com/ashwanisng</span>
            <span className="sep">|</span>
            <span>linkedin.com/in/ashwanisng</span>
            <span className="sep">|</span>
            <span>+91-9999848986</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="print-section">
          <h2>Professional Summary</h2>
          <p className="print-summary-text">
            As a Flutter developer, I have expertise in creating cross-platform mobile applications using the Flutter framework. I have a deep understanding of the Dart programming language, along with experience in developing UI components and widgets for building.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="print-section">
          <h2>Technical Skills</h2>
          <div className="print-skills-table">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="print-skills-row">
                <span className="print-skill-lbl">{cat.category}:</span>
                <span className="print-skill-val">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="print-section">
          <h2>Experience</h2>
          <div className="print-items-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="print-item">
                <div className="print-item-header">
                  <div className="print-title-group">
                    <strong className="print-company-name">{exp.company}</strong>
                    <span className="print-role-title">{exp.role}</span>
                  </div>
                  <div className="print-meta-group">
                    <span className="print-date">{exp.period}</span>
                    <span className="print-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="print-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="print-section">
          <h2>Projects</h2>
          <div className="print-items-list">
            {projects.map((proj, idx) => (
              <div key={idx} className="print-item">
                <div className="print-item-header">
                  <div className="print-title-group">
                    <strong className="print-company-name">{proj.title}</strong>
                    <span className="print-role-title">{proj.context}</span>
                  </div>
                  <div className="print-meta-group">
                    <span className="print-date">{proj.period}</span>
                    <span className="print-location">{proj.platforms}</span>
                  </div>
                </div>
                <ul className="print-bullets">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="print-section">
          <h2>Education</h2>
          <div className="print-item">
            <div className="print-item-header">
              <div className="print-title-group">
                <strong className="print-company-name">Galgotias University, Greater Noida</strong>
                <span className="print-role-title">Bachelor of Technology in Computer Science and Engineering</span>
              </div>
              <div className="print-meta-group">
                <span className="print-date">Aug 2018 – Jun 2022</span>
                <span className="print-location">CGPA: 7.97/10</span>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="print-section">
          <h2>Awards & Recognition</h2>
          <ul className="print-bullets">
            <li>
              <strong>Rising Star Award Q2 2023</strong> <span className="sep">|</span> <strong>1,452+ GitHub Contributions</strong> <span className="sep">|</span> <strong>GeeksforGeeks Rank 36/2,297</strong>
            </li>
            <li>
              Selected for <strong>GirlScript Summer of Code 2021</strong>, Student Code-in 2020, Pclub Summer of Code 2020
            </li>
          </ul>
        </section>
      </div>

      <style jsx>{`
        .resume-page-wrapper {
          padding-bottom: 80px;
        }

        /* Screen Resume Styling */
        .resume-header-section {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .resume-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 30px;
        }
        .resume-header-section h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .resume-header-section .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
        }

        .resume-content-section {
          padding: 60px 0;
        }
        .resume-grid-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 60px;
          align-items: start;
        }

        .cv-section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .cv-section-title h2 {
          font-size: 20px;
          color: #fff;
          font-weight: 600;
        }

        .cv-experience-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cv-exp-card {
          padding: 30px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          transition: border-color 0.3s ease;
        }
        .cv-exp-card:hover {
          border-color: rgba(59, 130, 246, 0.2);
        }
        .cv-exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }
        .cv-exp-header h3 {
          font-size: 18px;
          color: #fff;
          font-weight: 600;
        }
        .cv-company {
          font-size: 13px;
          color: var(--text-secondary);
          display: block;
          margin-top: 4px;
        }
        .cv-period {
          font-size: 13px;
          font-weight: 500;
          color: var(--accent-blue-light);
        }
        .cv-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 0;
        }
        .cv-bullets-list li {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          padding-left: 18px;
        }
        .cv-bullets-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-blue);
        }
        .cv-simple-text {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cv-skills-card {
          padding: 30px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .cv-skill-category-block h4 {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .cv-skills-tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cv-skill-tag {
          font-size: 11px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 6px;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .cv-awards-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0;
        }
        .cv-awards-list li strong {
          display: block;
          font-size: 13px;
          color: #fff;
          margin-bottom: 4px;
        }
        .cv-awards-list li p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .m-b-30 {
          margin-bottom: 30px;
        }

        /* PRINT RESUME VIEW (Default hidden on screen) */
        .print-resume-view {
          display: none;
        }

        @media (max-width: 1024px) {
          .resume-grid-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .resume-header-section h1 {
            font-size: 32px;
          }
          .resume-title-row {
            align-items: stretch;
          }
          .resume-title-row .btn {
            width: 100%;
          }
          .cv-exp-header {
            flex-direction: column;
            gap: 4px;
          }
        }

        /* PRINT STYLING KEY DEFINITIONS */
        @media print {
          /* Hide all screen layout wrappers */
          body, html, .header-nav, .footer-section, .screen-resume-view, .quick-chat-container {
            display: none !important;
            background: #fff !important;
          }
          
          /* Force page margin configurations */
          @page {
            size: A4;
            margin: 12mm 15mm;
          }

          .print-resume-view {
            display: block !important;
            width: 100%;
            color: #000 !important;
            background: #white !important;
            font-family: 'Times New Roman', Times, serif;
            font-size: 11.5px;
            line-height: 1.45;
          }

          /* Header Section styling */
          .print-header {
            text-align: center;
            margin-bottom: 12px;
          }
          .print-header h1 {
            font-size: 26px;
            font-weight: 500;
            color: #000;
            margin: 0 0 6px 0;
            letter-spacing: 0.5px;
          }
          .print-contacts {
            font-size: 10px;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            margin-bottom: 6px;
            padding-bottom: 6px;
            border-bottom: 1px solid #000;
          }
          .sep {
            color: #777;
            font-weight: normal;
          }

          /* Section block formatting */
          .print-section {
            margin-bottom: 14px;
          }
          .print-section h2 {
            font-size: 12.5px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #000;
            margin: 0 0 6px 0;
            padding-bottom: 2px;
          }
          .print-summary-text {
            font-size: 10.5px;
            color: #222;
            text-align: justify;
            margin: 0;
            line-height: 1.4;
          }

          /* Skills Table styles */
          .print-skills-table {
            display: flex;
            flex-direction: column;
            gap: 3px;
          }
          .print-skills-row {
            display: flex;
            font-size: 10.5px;
          }
          .print-skill-lbl {
            font-weight: bold;
            width: 150px;
            flex-shrink: 0;
          }
          .print-skill-val {
            color: #222;
          }

          /* General Items list */
          .print-items-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .print-item {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          .print-item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          .print-title-group {
            display: flex;
            flex-direction: column;
          }
          .print-company-name {
            font-size: 11.5px;
            font-weight: bold;
            color: #000;
          }
          .print-role-title {
            font-size: 10px;
            font-style: italic;
            color: #333;
          }
          .print-meta-group {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            font-size: 9.5px;
            color: #333;
          }
          .print-date {
            font-weight: bold;
          }
          
          /* Bullets format */
          .print-bullets {
            margin: 2px 0 0 0;
            padding-left: 15px;
            list-style-type: disc;
          }
          .print-bullets li {
            font-size: 10.5px;
            color: #222;
            margin-bottom: 2px;
            text-align: justify;
          }
          .print-bullets li:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}
