import { test, expect } from "@playwright/test";
import { ROUTES, DESKTOP, revealAll, contrastRatio } from "./utils";

const BG = "rgb(9, 9, 11)";
const ACCENT = "rgb(198, 242, 94)";

// Colours from the old blue/purple theme that should no longer appear anywhere.
const LEGACY_COLOURS = [
  "59, 130, 246", // #3b82f6 blue
  "37, 99, 235", // #2563eb blue
  "96, 165, 250", // #60a5fa light blue
  "147, 197, 253", // #93c5fd
  "168, 85, 247", // #a855f7 purple
  "216, 180, 254", // #d8b4fe
  "192, 132, 252", // #c084fc
  "236, 72, 153", // #ec4899 pink
  "11, 14, 20", // #0b0e14 old background
];

for (const route of ROUTES) {
  test.describe(`theme ${route}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(DESKTOP);
      await page.goto(route, { waitUntil: "networkidle" });
      await revealAll(page);
    });

    test("uses the site background, text colour and fonts", async ({ page }) => {
      const s = await page.evaluate(() => {
        const body = getComputedStyle(document.body);
        const h1 = document.querySelector("h1");
        return {
          bg: body.backgroundColor,
          bodyFont: body.fontFamily,
          h1Font: h1 ? getComputedStyle(h1).fontFamily : "",
        };
      });
      expect(s.bg).toBe(BG);
      expect(s.bodyFont).toMatch(/Geist/);
      expect(s.h1Font).toMatch(/Geist/);
    });

    test("web fonts actually loaded", async ({ page }) => {
      const loaded = await page.evaluate(async () => {
        await document.fonts.ready;
        return Array.from(document.fonts)
          .filter((f) => f.status === "loaded")
          .map((f) => f.family.replace(/["']/g, ""));
      });
      expect(loaded.some((f) => /Geist/.test(f) && !/Fallback/.test(f)), `loaded fonts: ${loaded.join(", ")}`).toBe(true);
    });

    test("primary buttons use the accent with readable text", async ({ page }) => {
      const buttons = await page.locator(".btn-primary:visible").evaluateAll((els) =>
        els.map((el) => {
          const s = getComputedStyle(el);
          return { text: el.textContent?.trim().slice(0, 30), bg: s.backgroundColor, color: s.color };
        })
      );
      for (const b of buttons) {
        expect(b.bg, `button "${b.text}" background`).toBe(ACCENT);
        expect(contrastRatio(b.color, b.bg), `button "${b.text}" contrast`).toBeGreaterThanOrEqual(4.5);
      }
    });

    test("no leftover colours from the old theme", async ({ page }) => {
      const hits = await page.evaluate((legacy) => {
        const props = ["color", "backgroundColor", "borderTopColor", "backgroundImage", "textShadow", "boxShadow", "fill", "stroke"] as const;
        const out: string[] = [];
        for (const el of Array.from(document.querySelectorAll<HTMLElement>("body *"))) {
          const s = getComputedStyle(el);
          if (s.display === "none" || s.visibility === "hidden") continue;
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;
          for (const p of props) {
            const v = String(s[p]);
            const match = legacy.find((c) => v.includes(`rgb(${c}`) || v.includes(`rgba(${c}`));
            if (match) {
              const cls = typeof el.className === "string" ? el.className.split(/\s+/)[0] : "";
              out.push(`${el.tagName.toLowerCase()}.${cls} ${p}: rgb(${match})`);
              break;
            }
          }
        }
        return Array.from(new Set(out)).slice(0, 15);
      }, LEGACY_COLOURS);
      expect(hits, `old-theme colours still used on ${route}`).toEqual([]);
    });

    test("body text is readable against the background", async ({ page }) => {
      const low = await page.evaluate(() => {
        const out: { text: string; color: string }[] = [];
        for (const el of Array.from(document.querySelectorAll<HTMLElement>("main p, main li, main h1, main h2, main h3"))) {
          const s = getComputedStyle(el);
          if (s.display === "none" || s.visibility === "hidden" || !el.textContent?.trim()) continue;
          out.push({ text: el.textContent.trim().slice(0, 40), color: s.color });
        }
        return out;
      });
      const failing = low
        .filter((t) => contrastRatio(t.color, "rgb(14, 14, 17)") < 4.5)
        .map((t) => `"${t.text}" (${t.color})`);
      expect(failing.slice(0, 10), "text below 4.5:1 contrast on the darkest surface").toEqual([]);
    });
  });
}
