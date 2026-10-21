"use client";

import { useEffect, useRef, useState } from "react";

const RULE = "━".repeat(46);

// Mirrors the real CLI output format of flutter_doctor_ai 0.2.0 (lib/src/cli/commands/analyze_command.dart).
// The project and numbers are a sample; every rule reports warnings, and 12 warnings in 2,000 lines
// scores 100 − (12 / 2.0) × 2.5 = 85 using the package's documented formula.
const LINES: { text: string; tone?: "cmd" | "head" | "muted" | "warn" | "good" }[] = [
  { text: "$ flutter_doctor_ai analyze .", tone: "cmd" },
  { text: "🔍 Analyzing Flutter project...", tone: "muted" },
  { text: "" },
  { text: RULE, tone: "muted" },
  { text: "🔎  ISSUES FOUND", tone: "head" },
  { text: RULE, tone: "muted" },
  { text: "  Found 12 issue(s)" },
  { text: "" },
  { text: "  Summary:" },
  { text: "    ❌ Errors:   0" },
  { text: "    ⚠️  Warnings: 12", tone: "warn" },
  { text: "    ℹ️  Info:     0" },
  { text: "" },
  { text: "  By Rule:" },
  { text: `    • ${"missing_dispose".padEnd(25)} 4 issues (3 files)` },
  { text: `    • ${"large_build_method".padEnd(25)} 3 issues (3 files)` },
  { text: `    • ${"missing_mounted_check".padEnd(25)} 2 issues (2 files)` },
  { text: `    • ${"print_statement".padEnd(25)} 2 issues (1 file)` },
  { text: `    • ${"empty_setstate".padEnd(25)} 1 issue (1 file)` },
  { text: "" },
  { text: RULE, tone: "muted" },
  { text: "💯  HEALTH SCORE", tone: "head" },
  { text: RULE, tone: "muted" },
  { text: "       ✅  85/100 (Grade: B)", tone: "good" },
  { text: "  Good job! Minor improvements possible." },
  { text: "  Issues per 1K lines: 6.0", tone: "muted" }
];

export default function DoctorTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(LINES.length);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        let count = 1;
        setShown(count);
        timer = setInterval(() => {
          count += 1;
          setShown(count);
          if (count >= LINES.length && timer) clearInterval(timer);
        }, 70);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className="terminal" ref={ref}>
      <div className="terminal-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="terminal-title">zsh — my_app</span>
        <span className="terminal-tag">Sample run</span>
      </div>
      {/* Reserve the full height so the page doesn't jump while lines appear */}
      <pre className="terminal-body" aria-label="Sample flutter_doctor_ai output">
        {LINES.map((line, i) => (
          <span key={i} className={`line ${line.tone ?? ""}`} style={{ visibility: i < shown ? "visible" : "hidden" }}>
            {line.text || " "}
            {"\n"}
          </span>
        ))}
      </pre>

      <style jsx>{`
        .terminal {
          background: #0c0c0e;
          border: 1px solid var(--border-hover);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.8);
        }
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
        }
        .terminal-title {
          margin-left: 10px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
        }
        .terminal-tag {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }
        .terminal-body {
          margin: 0;
          padding: 18px 20px 22px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--text-secondary);
          overflow-x: auto;
          white-space: pre;
        }
        .line.cmd { color: var(--accent); }
        .line.head { color: var(--text-primary); font-weight: 500; }
        .line.muted { color: var(--text-muted); }
        .line.warn { color: #fbbf24; }
        .line.good { color: var(--accent); font-weight: 500; }

        @media (max-width: 480px) {
          .terminal-body {
            font-size: 11px;
            padding: 14px;
          }
        }
      `}</style>
    </div>
  );
}
