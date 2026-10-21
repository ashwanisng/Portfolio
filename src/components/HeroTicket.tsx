"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { label: "Order created", time: "09:41:02" },
  { label: "3-D Secure verified", time: "09:41:09" },
  { label: "Payment captured", time: "09:41:11" }
];

const BASE_PRICE = 24812.4;
const START_POINTS = [
  24790, 24796, 24788, 24801, 24806, 24799, 24812, 24808, 24815, 24811, 24820, 24814,
  24809, 24818, 24823, 24817, 24826, 24821, 24816, 24824, 24830, 24822, 24819, 24812.4
];

// Illustrative UI only: a checkout ticket stepping through a card payment and a sample price feed.
export default function HeroTicket() {
  const [step, setStep] = useState(STEPS.length);
  const [points, setPoints] = useState(START_POINTS);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = 0;
    const stepTimer = setInterval(() => {
      current = current >= STEPS.length + 2 ? 0 : current + 1;
      setStep(Math.min(current, STEPS.length));
    }, 1100);

    const priceTimer = setInterval(() => {
      setPoints((prev) => {
        const last = prev[prev.length - 1];
        const next = Math.round((last + (Math.random() - 0.48) * 9) * 100) / 100;
        return [...prev.slice(1), next];
      });
    }, 1400);

    return () => {
      clearInterval(stepTimer);
      clearInterval(priceTimer);
    };
  }, []);

  const price = points[points.length - 1];
  const change = ((price - BASE_PRICE) / BASE_PRICE) * 100 + 0.42;
  const up = change >= 0;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const line = points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${36 - ((p - min) / (max - min || 1)) * 32 - 2}`)
    .join(" ");

  return (
    <div className="ticket-stack" aria-hidden="true">
      <div className="ticket">
        <div className="ticket-head">
          <span>Checkout · RH-20481</span>
          <span className={`ticket-state ${step >= STEPS.length ? "done" : ""}`}>
            {step >= STEPS.length ? "Paid" : "Processing"}
          </span>
        </div>

        <div className="ticket-item">
          <div>
            <span className="ticket-item-name">Deep cleaning</span>
            <span className="ticket-item-sub">3 hrs · Thu, 10:00</span>
          </div>
          <span className="ticket-amount">QAR 240.00</span>
        </div>

        <ol className="ticket-steps">
          {STEPS.map((s, i) => {
            const state = i < step ? "done" : i === step ? "active" : "todo";
            return (
              <li key={s.label} className={`ticket-step ${state}`}>
                <span className="ticket-dot" />
                <span className="ticket-step-label">{s.label}</span>
                <span className="ticket-step-time">{state === "done" ? s.time : "—"}</span>
              </li>
            );
          })}
        </ol>

        <div className="ticket-foot">
          <span>Card •• 4242</span>
          <span>MyFatoorah</span>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-row">
          <span className="ticker-symbol">NIFTY 50</span>
          <span className="ticker-tag">Sample data</span>
        </div>
        <div className="ticker-row">
          <span className="ticker-price">{price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          <span className={`ticker-change ${up ? "up" : "down"}`}>
            {up ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
          </span>
        </div>
        <svg className="ticker-spark" viewBox="0 0 100 36" preserveAspectRatio="none">
          <polyline points={line} fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <style jsx>{`
        .ticket-stack {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin-left: auto;
          padding-bottom: 116px;
        }
        .ticket {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          padding: 22px;
          font-family: var(--font-mono);
          box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.8);
        }
        .ticket-head,
        .ticket-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .ticket-state {
          padding: 3px 8px;
          border-radius: 999px;
          border: 1px solid var(--border-hover);
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .ticket-state.done {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-ink);
        }
        .ticket-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 22px 0;
          margin: 18px 0;
          border-top: 1px dashed var(--border-hover);
          border-bottom: 1px dashed var(--border-hover);
        }
        .ticket-item-name {
          display: block;
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .ticket-item-sub {
          font-size: 12px;
          color: var(--text-muted);
        }
        .ticket-amount {
          font-size: 22px;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }
        .ticket-steps {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        .ticket-step {
          display: grid;
          grid-template-columns: 14px 1fr auto;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }
        .ticket-step.done,
        .ticket-step.active {
          color: var(--text-primary);
        }
        .ticket-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid var(--border-hover);
          transition: all 0.3s ease;
        }
        .ticket-step.done .ticket-dot {
          background: var(--accent);
          border-color: var(--accent);
        }
        .ticket-step.active .ticket-dot {
          border-color: var(--accent);
          animation: ticketPulse 1s ease-in-out infinite;
        }
        .ticket-step-time {
          font-size: 12px;
          color: var(--text-muted);
        }
        @keyframes ticketPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(198, 242, 94, 0.5); }
          50% { box-shadow: 0 0 0 5px rgba(198, 242, 94, 0); }
        }

        .ticker {
          position: absolute;
          left: -48px;
          bottom: 0;
          width: 230px;
          background: rgba(23, 23, 27, 0.92);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-hover);
          border-radius: 14px;
          padding: 14px 16px 10px;
          font-family: var(--font-mono);
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.9);
        }
        .ticker-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .ticker-symbol {
          font-size: 11px;
          color: var(--text-secondary);
          letter-spacing: 0.06em;
        }
        .ticker-tag {
          font-size: 9px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .ticker-price {
          font-size: 20px;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin-top: 4px;
          font-variant-numeric: tabular-nums;
        }
        .ticker-change {
          font-size: 12px;
        }
        .ticker-change.up { color: var(--accent); }
        .ticker-change.down { color: var(--accent-red); }
        .ticker-spark {
          display: block;
          width: 100%;
          height: 36px;
          margin-top: 8px;
        }
        .ticker-spark polyline {
          stroke: var(--accent);
          stroke-width: 1.5;
          stroke-linejoin: round;
          transition: all 0.6s ease;
        }

        @media (max-width: 1024px) {
          .ticket-stack {
            margin: 0 auto;
          }
          .ticker {
            left: auto;
            right: -12px;
          }
        }
        @media (max-width: 480px) {
          .ticker {
            right: 0;
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
}
