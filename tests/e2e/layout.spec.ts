import { test, expect } from "@playwright/test";
import { ROUTES, VIEWPORTS, trackErrors, revealAll, findHorizontalOverflow, findClippedText } from "./utils";

// Every page × every screen size: renders, nothing overflows, nothing is clipped, no runtime errors.
for (const route of ROUTES) {
  test.describe(`layout ${route}`, () => {
    for (const vp of VIEWPORTS) {
      test(`${vp.name} (${vp.width}px)`, async ({ page }, testInfo) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        const errors = trackErrors(page);

        const res = await page.goto(route, { waitUntil: "networkidle" });
        expect(res?.status(), "page should load with HTTP 200").toBe(200);
        // Soft assertions from here on: one test reports every problem on the page, not just the first.
        await revealAll(page);
        await page.waitForTimeout(300);

        await test.step("header, main content and footer are present", async () => {
          await expect.soft(page.locator("header.header-nav")).toBeVisible();
          await expect.soft(page.locator("main"), "page should have exactly one <main> landmark").toHaveCount(1);
          await expect.soft(page.locator("main").first()).toBeVisible();
          await expect.soft(page.locator("footer")).toBeAttached();
        });

        await test.step("no horizontal page scroll", async () => {
          const { scrollWidth, clientWidth } = await page.evaluate(() => ({
            scrollWidth: document.documentElement.scrollWidth,
            clientWidth: document.documentElement.clientWidth,
          }));
          expect.soft(scrollWidth, "document is wider than the screen").toBeLessThanOrEqual(clientWidth);
        });

        await test.step("no element sticks out past the screen edges", async () => {
          const hits = await findHorizontalOverflow(page);
          expect.soft(hits, `elements overflowing at ${vp.width}px:\n${JSON.stringify(hits, null, 2)}`).toEqual([]);
        });

        await test.step("no text is cut off inside its box", async () => {
          const clipped = await findClippedText(page);
          expect.soft(clipped, `clipped text at ${vp.width}px`).toEqual([]);
        });

        await test.step("all images load", async () => {
          const broken = await page.evaluate(() =>
            Array.from(document.images)
              .filter((img) => img.complete && img.naturalWidth === 0)
              .map((img) => img.currentSrc || img.src)
          );
          expect.soft(broken, "broken images").toEqual([]);
        });

        // Touch-target size only matters on phones and tablets.
        if (vp.width <= 768) await test.step("buttons and links are large enough to tap on touch screens", async () => {
          const small = await page.evaluate(() =>
            Array.from(document.querySelectorAll<HTMLElement>("main a, main button, header button"))
              .filter((el) => {
                const s = getComputedStyle(el);
                if (s.display === "none" || s.visibility === "hidden" || s.display === "inline") return false;
                const r = el.getBoundingClientRect();
                return r.width > 0 && r.height > 0 && (r.height < 24 || r.width < 24);
              })
              .map((el) => `${el.tagName.toLowerCase()} "${(el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 30)}"`)
              .slice(0, 10)
          );
          expect.soft(small, "tap targets smaller than 24×24px (WCAG 2.2 minimum)").toEqual([]);
        });

        expect.soft(errors, "console errors, page errors or failed same-site requests").toEqual([]);

        if (process.env.E2E_SCREENSHOTS) {
          await testInfo.attach(`${route}-${vp.name}`, {
            body: await page.screenshot({ fullPage: true }),
            contentType: "image/png",
          });
        }
      });
    }
  });
}

test("unknown URL shows the 404 page inside the site layout", async ({ page }) => {
  const res = await page.goto("/this-page-does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.locator("header.header-nav")).toBeVisible();
  await expect(page.locator("a[href='/']").first()).toBeVisible();
});
