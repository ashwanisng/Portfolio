"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logFirebaseEvent } from "../lib/firebase";

export default function FirebaseAnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Auto-track Page Views & Client Metadata
  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      
      const telemetry = {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
        viewport_width: typeof window !== "undefined" ? window.innerWidth : 0,
        viewport_height: typeof window !== "undefined" ? window.innerHeight : 0,
        user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        user_language: typeof navigator !== "undefined" ? navigator.language : "unknown",
        screen_orientation: typeof window !== "undefined" && window.screen?.orientation?.type ? window.screen.orientation.type : "unknown",
        timestamp_local: new Date().toISOString(),
      };

      logFirebaseEvent("custom_page_view", telemetry);
    }
  }, [pathname, searchParams]);

  // 2. Global CTA & Link Click Listener (Auto-Telemetry)
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      let target = event.target as HTMLElement | null;

      // Climb up the DOM tree to find the nearest anchor, button, or clickable role
      while (target && target !== document.body) {
        const tagName = target.tagName.toLowerCase();
        const isClickable =
          tagName === "a" ||
          tagName === "button" ||
          target.getAttribute("role") === "button" ||
          target.onclick !== null ||
          target.classList.contains("clickable") ||
          target.classList.contains("btn") ||
          target.classList.contains("card-glass") ||
          target.classList.contains("sidebar-project-btn") ||
          target.classList.contains("console-tab-btn") ||
          target.classList.contains("service-item") ||
          target.classList.contains("dot-indicator") ||
          target.classList.contains("faq-question-btn") ||
          target.classList.contains("lab-item-card");

        if (isClickable) {
          // Identify the layout region where the click occurred
          let region = "unknown";
          let element: HTMLElement | null = target;
          while (element && element !== document.body) {
            const id = element.id || "";
            const classes = element.className || "";
            
            if (id === "hero" || classes.includes("hero")) {
              region = "hero";
              break;
            } else if (id === "navbar" || classes.includes("header") || classes.includes("nav")) {
              region = "navigation";
              break;
            } else if (id === "footer" || classes.includes("footer")) {
              region = "footer";
              break;
            } else if (classes.includes("workstation") || classes.includes("console")) {
              region = "projects_workstation";
              break;
            } else if (classes.includes("testimonials") || classes.includes("testimonials-carousel-wrapper")) {
              region = "testimonials";
              break;
            } else if (classes.includes("contact-form") || classes.includes("contact")) {
              region = "contact_form";
              break;
            } else if (classes.includes("lab-item-card") || classes.includes("labs")) {
              region = "labs";
              break;
            } else if (classes.includes("detailed-exp-card") || classes.includes("experience")) {
              region = "experience";
              break;
            }
            element = element.parentElement;
          }

          // Extract text label
          const label = (target.innerText || target.getAttribute("aria-label") || target.getAttribute("title") || "").trim().slice(0, 100);

          // Extract CTA destination or classes
          const href = target.getAttribute("href") || "";
          const elementClass = target.className || "";
          const elementTag = target.tagName.toLowerCase();

          // Compile rich click telemetry
          const clickTelemetry = {
            click_region: region,
            click_label: label || "(empty)",
            click_href: href || "(none)",
            click_tag: elementTag,
            click_classes: elementClass,
            page_url: window.location.pathname,
            viewport_width: window.innerWidth,
            viewport_height: window.innerHeight,
            user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            user_language: navigator.language,
            timestamp_local: new Date().toISOString(),
          };

          logFirebaseEvent("cta_click", clickTelemetry);
          break; // Stop climbing the DOM tree
        }
        target = target.parentElement;
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // 3. Auto-track Scroll Depth
  useEffect(() => {
    const loggedThresholds = new Set<number>();
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
      const thresholds = [25, 50, 75, 100];
      
      for (const t of thresholds) {
        if (scrollPercent >= t && !loggedThresholds.has(t)) {
          loggedThresholds.add(t);
          logFirebaseEvent("scroll_depth", {
            depth_percentage: t,
            page_url: window.location.pathname,
            user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // 4. Track Time Spent on Page
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000); // in seconds
      if (timeSpent >= 1) { // Only log if they spent at least 1 second
        logFirebaseEvent("time_on_page", {
          seconds_spent: timeSpent,
          page_url: window.location.pathname,
          user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        });
      }
    };
  }, [pathname]);

  return null;
}
