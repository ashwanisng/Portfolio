"use client";

import { useState } from "react";

export default function QuickChat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="quick-chat-container">
      <a
        href="https://wa.me/919999848986"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-chat-btn card-glass"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="whatsapp-icon"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.83L2.05 22l4.3-1.84C7.88 21.2 9.87 22 12.004 22c5.52 0 10-4.48 10-10S17.524 2 12.004 2zm3.36 14.3c-.22.62-1.25 1.18-1.72 1.25-.47.07-.94.12-2.93-.67-2.55-1.02-4.18-3.62-4.31-3.79-.12-.17-1.03-1.37-1.03-2.62 0-1.25.65-1.86.88-2.1.23-.24.5-.3.67-.3.17 0 .34 0 .49.01.15.01.35-.06.55.43.2.49.69 1.68.75 1.8.06.12.1.26.02.43-.08.17-.12.28-.24.43-.12.15-.26.33-.37.44-.12.12-.25.25-.11.49.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.17.62-.72.79-.97.17-.25.34-.21.57-.12.23.09 1.48.7 1.73.82.25.12.42.18.48.28.06.1.06.59-.16 1.21z" />
        </svg>
      </a>

      <div className={`quick-chat-tooltip card-glass ${showTooltip ? "visible" : ""}`}>
        Chat with Ashwani
      </div>

      <style jsx>{`
        .quick-chat-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .quick-chat-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          transition: var(--transition-normal);
          box-shadow: 0 10px 30px -10px rgba(34, 197, 94, 0.3);
        }

        .quick-chat-btn:hover {
          background: rgba(34, 197, 94, 0.15);
          border-color: rgba(34, 197, 94, 0.4);
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 15px 35px -5px rgba(34, 197, 94, 0.5);
        }

        .quick-chat-tooltip {
          position: absolute;
          right: 68px;
          padding: 8px 16px;
          font-size: 13px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(10px);
          transition: var(--transition-normal);
          font-family: var(--font-headings);
          font-weight: 500;
          color: #fff;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }

        .quick-chat-tooltip.visible {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .quick-chat-container {
            bottom: 20px;
            right: 20px;
          }
          .quick-chat-btn {
            width: 46px;
            height: 46px;
          }
          .quick-chat-tooltip {
            display: none; /* Hide tooltip on mobile */
          }
        }
      `}</style>
    </div>
  );
}
