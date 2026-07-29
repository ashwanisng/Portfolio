"use client";

import { useState } from "react";
import Link from "next/link";
import { submitContactForm } from "../actions/contact";
import { CheckCircle2, ArrowLeft, Mail, FileText } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    stage: "MVP",
    budget: "$10K - $25K",
    timeline: "1 - 3 months",
    description: ""
  });

  const [needs, setNeeds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleNeed = (need: string) => {
    if (needs.includes(need)) {
      setNeeds(needs.filter((n) => n !== need));
    } else {
      setNeeds([...needs, need]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await submitContactForm({
      ...formData,
      needs
    });

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="contact-page-wrapper">
        <div className="container success-container text-center">
          <div className="success-icon-badge">
            <CheckCircle2 size={48} className="text-green" />
          </div>
          <h1>Inquiry Received Successfully</h1>
          <p className="success-sub">
            Thank you for reaching out. I have logged your project details and will review them shortly.
          </p>

          <div className="success-next-steps card-glass">
            <h3>What happens next?</h3>
            <ul className="next-steps-list">
              <li>
                <span className="step-num">1</span>
                <div>
                  <strong>Response Timing</strong>
                  <p>I will review your requirements and respond within 24 hours.</p>
                </div>
              </li>
              <li>
                <span className="step-num">2</span>
                <div>
                  <strong>Book a Call Instantly</strong>
                  <p>Prefer to pick a time right now? Secure a slot directly on my calendar.</p>
                  <a href="https://calendly.com/ashwanisng/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm m-t-10">
                    Schedule via Calendly
                  </a>
                </div>
              </li>
              <li>
                <span className="step-num">3</span>
                <div>
                  <strong>LinkedIn Connect</strong>
                  <p>In the meantime, feel free to connect with me on LinkedIn for active updates.</p>
                  <a href="https://linkedin.com/in/ashwanisng" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm m-t-10">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect on LinkedIn
                  </a>
                </div>
              </li>
              <li>
                <span className="step-num">4</span>
                <div>
                  <strong>Review Resume</strong>
                  <p>Explore my full experience credentials or download my capability statement PDF.</p>
                  <Link href="/resume" className="btn btn-outline btn-sm m-t-10">
                    <FileText size={14} /> View Online Resume
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <Link href="/" className="back-home-link m-t-40">
            <ArrowLeft size={16} /> Back to Homepage
          </Link>
        </div>

        <style jsx>{`
          .success-container {
            max-width: 600px;
            padding: 80px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .success-icon-badge {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgba(16, 185, 129, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
          }
          .success-container h1 {
            font-size: 32px;
            margin-bottom: 16px;
          }
          .success-sub {
            font-size: 16px;
            color: var(--text-secondary);
            margin-bottom: 40px;
          }
          .success-next-steps {
            width: 100%;
            padding: 40px;
            text-align: left;
          }
          .success-next-steps h3 {
            font-size: 18px;
            margin-bottom: 24px;
            color: #fff;
          }
          .next-steps-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
          .next-steps-list li {
            display: flex;
            gap: 20px;
            align-items: start;
          }
          .step-num {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--accent-blue-glow);
            border: 1px solid var(--accent-blue-border);
            color: var(--accent-blue-light);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 13px;
            flex-shrink: 0;
          }
          .next-steps-list strong {
            display: block;
            font-size: 15px;
            color: #fff;
            margin-bottom: 4px;
          }
          .next-steps-list p {
            font-size: 13px;
            color: var(--text-secondary);
            line-height: 1.5;
          }
          .back-home-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--text-secondary);
          }
          .back-home-link:hover {
            color: #fff;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="contact-page-wrapper">
      <section className="contact-hero">
        <div className="container">
          <span className="section-tag">GET IN TOUCH</span>
          <h1>Let's build something great together.</h1>
          <p className="subtitle">
            Submit your product scope details to qualify your lead and set up a free 30-minute discovery consultation.
          </p>
        </div>
      </section>

      <section className="contact-layout-section">
        <div className="container contact-grid">
          
          {/* Form */}
          <form className="contact-form card-glass" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-input-box">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="form-input-box">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. john@company.com"
                />
              </div>
            </div>

            <div className="form-input-box">
              <label htmlFor="company">Company / Startup Name</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                required 
                placeholder="e.g. Acme Corp"
              />
            </div>

            <div className="form-group-row">
              <div className="form-input-box">
                <label htmlFor="stage">Startup Stage</label>
                <select id="stage" name="stage" value={formData.stage} onChange={handleChange}>
                  <option value="Idea">Idea / Concept</option>
                  <option value="Prototype">Prototype / Wireframes</option>
                  <option value="MVP">MVP Release</option>
                  <option value="Production">Production App</option>
                  <option value="Scaling">Scaling Product</option>
                </select>
              </div>
              <div className="form-input-box">
                <label htmlFor="budget">Approximate Budget</label>
                <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="<$5K">Less than $5,000</option>
                  <option value="$5K - $10K">$5,000 - $10,000</option>
                  <option value="$10K - $25K">$10,000 - $25,000</option>
                  <option value="$25K+">$25,000 or more</option>
                </select>
              </div>
            </div>

            <div className="form-input-box">
              <label htmlFor="timeline">Expected Timeline</label>
              <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
                <option value="<1 month">Less than 1 month</option>
                <option value="1 - 3 months">1 to 3 months</option>
                <option value="3+ months">3 months or longer</option>
              </select>
            </div>

            {/* Needs Checklist */}
            <div className="form-checkbox-group">
              <label>Capabilities Needed</label>
              <div className="checkboxes-grid">
                {[
                  "UI/UX Design",
                  "Flutter Mobile App",
                  "Backend API Integration",
                  "AI features/Pipelines",
                  "App Store Deployment"
                ].map((need) => {
                  const isChecked = needs.includes(need);
                  return (
                    <button 
                      key={need}
                      type="button"
                      className={`custom-checkbox-btn ${isChecked ? "checked" : ""}`}
                      onClick={() => toggleNeed(need)}
                    >
                      <span className="checkbox-box">
                        {isChecked && <span className="inner-checked"></span>}
                      </span>
                      <span>{need}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-input-box">
              <label htmlFor="description">Project Overview & Goals</label>
              <textarea 
                id="description" 
                name="description" 
                rows={4}
                value={formData.description} 
                onChange={handleChange} 
                required 
                placeholder="Briefly describe what you are building, key features, and your primary objectives..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full m-t-20" disabled={loading}>
              {loading ? "Submitting Inquiry..." : "Submit Project Inquiry"}
            </button>
            <p className="submit-note text-center m-t-10">Typical response within 24 hours.</p>
          </form>

          {/* Info/Sidebar */}
          <div className="contact-info-sidebar">
            <div className="won-do-block card-glass">
              <h3>What I Won't Do</h3>
              <ul className="won-do-list">
                <li>
                  <span className="bullet red">&times;</span>
                  <span>I don't take on projects without clear business requirements.</span>
                </li>
                <li>
                  <span className="bullet red">&times;</span>
                  <span>I don't promise unrealistic, crash-prone deadlines.</span>
                </li>
                <li>
                  <span className="bullet red">&times;</span>
                  <span>I prioritize clean, maintainable code over quick, fragile hacks.</span>
                </li>
                <li>
                  <span className="bullet red">&times;</span>
                  <span>I prefer long-term product partnership collaborations.</span>
                </li>
              </ul>
            </div>

            <div className="direct-channels-block card-glass m-t-20">
              <h3>Direct Channels</h3>
              <div className="direct-channels-list">
                <a href="mailto:ashwanicena5@gmail.com" className="channel-link">
                  <Mail size={16} />
                  <span>ashwanicena5@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/ashwanisng" target="_blank" rel="noopener noreferrer" className="channel-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>linkedin.com/in/ashwanisng</span>
                </a>
                <a href="https://github.com/ashwanisng" target="_blank" rel="noopener noreferrer" className="channel-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  <span>github.com/ashwanisng</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        .contact-page-wrapper {
          padding-bottom: 80px;
        }

        /* Hero */
        .contact-hero {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .contact-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .contact-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 720px;
        }

        /* Layout Grid */
        .contact-layout-section {
          padding: 60px 0;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: start;
        }

        /* Form */
        .contact-form {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-input-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-input-box label {
          font-family: var(--font-headings);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }
        .form-input-box input, 
        .form-input-box select, 
        .form-input-box textarea {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px 16px;
          color: #fff;
          font-family: var(--font-body);
          font-size: 14px;
          transition: var(--transition-fast);
          width: 100%;
        }
        .form-input-box input:focus, 
        .form-input-box select:focus, 
        .form-input-box textarea:focus {
          border-color: var(--accent-blue);
          background: rgba(255,255,255,0.04);
          box-shadow: 0 0 0 3px var(--accent-blue-glow);
          outline: none;
        }
        .form-checkbox-group label {
          font-family: var(--font-headings);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 12px;
          display: block;
        }
        .checkboxes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .custom-checkbox-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          text-align: left;
        }
        .custom-checkbox-btn:hover {
          border-color: var(--border-hover);
          background: rgba(255,255,255,0.04);
        }
        .custom-checkbox-btn.checked {
          border-color: var(--accent-blue-border);
          background: var(--accent-blue-glow);
          color: #fff;
        }
        .checkbox-box {
          width: 14px;
          height: 14px;
          border: 1px solid var(--text-muted);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .custom-checkbox-btn.checked .checkbox-box {
          border-color: var(--accent-blue-light);
        }
        .inner-checked {
          width: 8px;
          height: 8px;
          background-color: var(--accent-blue-light);
          border-radius: 1px;
        }

        /* Sidebar info */
        .won-do-block {
          padding: 30px;
        }
        .won-do-block h3 {
          font-size: 16px;
          color: #fff;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
        }
        .won-do-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .won-do-list li {
          display: flex;
          gap: 12px;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .bullet.red {
          color: var(--accent-red);
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }
        
        .direct-channels-block {
          padding: 30px;
        }
        .direct-channels-block h3 {
          font-size: 16px;
          color: #fff;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
        }
        .direct-channels-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .channel-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        .channel-link:hover {
          color: var(--accent-blue-light);
        }
        .submit-note {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 10px;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 768px) {
          .contact-hero h1 {
            font-size: 32px;
          }
          .form-group-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .checkboxes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
