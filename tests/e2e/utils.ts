import type { Page } from "@playwright/test";
import sitemap from "../../src/app/sitemap";
import availability from "../../src/config/availability.json";

export const SITE_URL = "https://ashwanisng.com";
export { availability };

// Every public page, taken from the real sitemap so new pages are tested automatically.
export const ROUTES: string[] = sitemap().map((entry) => new URL(entry.url).pathname);

export const VIEWPORTS = [
  { name: "small-phone", width: 320, height: 640 },
  { name: "iphone-se", width: 375, height: 667 },
  { name: "iphone-14", width: 390, height: 844 },
  { name: "large-phone", width: 430, height: 932 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "full-hd", width: 1920, height: 1080 },
] as const;

export const MOBILE = { width: 390, height: 844 };
export const DESKTOP = { width: 1440, height: 900 };

// Errors that come from missing local secrets, not from the site itself.
const IGNORED_ERRORS = [/installations\/missing-app-config-values/i, /projectId/i];

export function trackErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (err) => {
    if (!IGNORED_ERRORS.some((re) => re.test(err.message))) errors.push(`pageerror: ${err.message}`);
  });
  page.on("console", (msg) => {
    if (msg.type() !== "error") return;
    const text = msg.text();
    if (!IGNORED_ERRORS.some((re) => re.test(text))) errors.push(`console: ${text}`);
  });
  page.on("response", (res) => {
    const url = res.url();
    if (res.status() >= 400 && url.startsWith(page.url().split("/").slice(0, 3).join("/"))) {
      errors.push(`http ${res.status()}: ${url}`);
    }
  });
  return errors;
}

// Show everything that would normally fade in on scroll, so layout checks see the final state.
export async function revealAll(page: Page) {
  await page.evaluate(() => {
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => el.classList.add("in-view"));
  });
}

export type OverflowHit = { selector: string; left: number; right: number; width: number };

// Finds elements that stick out past the left/right edge of the viewport.
// The body hides horizontal overflow, so a plain scrollWidth check would miss these.
export async function findHorizontalOverflow(page: Page): Promise<OverflowHit[]> {
  return page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const describe = (el: Element) => {
      const id = el.id ? `#${el.id}` : "";
      const cls = typeof el.className === "string" && el.className.trim()
        ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".")
        : "";
      const parent = el.parentElement?.className && typeof el.parentElement.className === "string"
        ? el.parentElement.className.trim().split(/\s+/)[0]
        : el.parentElement?.tagName.toLowerCase();
      return `${parent} > ${el.tagName.toLowerCase()}${id}${cls}`;
    };

    // Content inside a scroll/clip container is intentionally allowed to be wider than the screen.
    const clippedByAncestor = (el: Element) => {
      for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
        const ox = getComputedStyle(a).overflowX;
        if (ox !== "visible") return true;
      }
      return false;
    };
    // Off-canvas UI (e.g. the closed mobile menu) is parked outside the viewport on purpose.
    const offCanvas = (el: Element) => {
      for (let a: Element | null = el; a; a = a.parentElement) {
        if (getComputedStyle(a).position === "fixed") {
          const r = a.getBoundingClientRect();
          return r.left >= vw || r.right <= 0;
        }
      }
      return false;
    };

    const offenders: Element[] = [];
    for (const el of Array.from(document.body.querySelectorAll("*"))) {
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.right <= vw + 1 && r.left >= -1) continue;
      if (clippedByAncestor(el) || offCanvas(el)) continue;
      offenders.push(el);
    }
    // Report only the outermost offenders; their children would just repeat the same problem.
    return offenders
      .filter((el) => !offenders.some((other) => other !== el && other.contains(el)))
      .slice(0, 10)
      .map((el) => {
        const r = el.getBoundingClientRect();
        return { selector: describe(el), left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) };
      });
  });
}

// Text that is cut off inside a box that hides overflow (and isn't meant to scroll or use an ellipsis).
export async function findClippedText(page: Page): Promise<string[]> {
  return page.evaluate(() => {
    const out: string[] = [];
    const textTags = "h1,h2,h3,h4,h5,h6,p,a,button,label,li,span,strong,code";
    for (const el of Array.from(document.querySelectorAll<HTMLElement>(textTags))) {
      const s = getComputedStyle(el);
      if (s.display === "none" || s.visibility === "hidden") continue;
      if (s.overflowX !== "hidden" && s.overflowX !== "clip") continue;
      if (s.textOverflow === "ellipsis") continue;
      if (el.scrollWidth > el.clientWidth + 1 && el.textContent?.trim()) {
        out.push(`${el.tagName.toLowerCase()}: "${el.textContent.trim().slice(0, 50)}"`);
      }
    }
    return out.slice(0, 10);
  });
}

// WCAG relative luminance contrast between two "rgb(a)" strings.
export function contrastRatio(fg: string, bg: string): number {
  const parse = (c: string) => (c.match(/[\d.]+/g) ?? ["0", "0", "0"]).slice(0, 3).map(Number);
  const lum = (rgb: number[]) => {
    const [r, g, b] = rgb.map((v) => {
      const s = v / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const [l1, l2] = [lum(parse(fg)), lum(parse(bg))].sort((a, b) => b - a);
  return (l1 + 0.05) / (l2 + 0.05);
}
