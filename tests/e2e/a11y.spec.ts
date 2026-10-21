import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { ROUTES, DESKTOP, MOBILE, revealAll } from "./utils";

// Automated accessibility audit (axe-core, WCAG 2.2 A/AA rules) on every page, phone and desktop.
// Fails on "serious" and "critical" issues; minor ones are attached to the report for review.
for (const route of ROUTES) {
  for (const [name, viewport] of [["mobile", MOBILE], ["desktop", DESKTOP]] as const) {
    test(`a11y ${route} (${name})`, async ({ page }, testInfo) => {
      await page.setViewportSize(viewport);
      await page.goto(route, { waitUntil: "networkidle" });
      await revealAll(page);
      await page.waitForTimeout(1200); // let entrance animations finish so colours are final

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      await testInfo.attach("axe-results", {
        body: JSON.stringify(results.violations, null, 2),
        contentType: "application/json",
      });

      const serious = results.violations
        .filter((v) => v.impact === "serious" || v.impact === "critical")
        .map((v) => `${v.impact} ${v.id}: ${v.help} (${v.nodes.length}×) e.g. ${v.nodes[0]?.target.join(" ")}`);
      expect(serious, `accessibility issues on ${route} (${name})`).toEqual([]);
    });
  }
}
