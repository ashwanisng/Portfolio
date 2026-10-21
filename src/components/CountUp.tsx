"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

const format = (value: number) => (value >= 1000 ? `${Math.round(value / 1000)}K` : String(value));

// Always shows the real number until the element is on screen, then counts up from 0 once.
// Visitors who skip past it, crawlers and no-JS visitors never see a 0.
export default function CountUp({ end, suffix = "", duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = `${format(Math.round(end * eased))}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = `${format(end)}${suffix}`;
    };
  }, [end, suffix, duration]);

  return (
    <span role="text" aria-label={`${format(end)}${suffix}`}>
      <span ref={ref} aria-hidden="true">
        {format(end)}
        {suffix}
      </span>
    </span>
  );
}
