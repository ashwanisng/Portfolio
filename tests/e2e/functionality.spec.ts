import { test, expect } from "@playwright/test";
import { availability, DESKTOP, MOBILE } from "./utils";

test.describe("homepage interactions", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(DESKTOP);
  });

  test("stats count up and finish on the real numbers", async ({ page }) => {
    await page.goto("/");
    const values = page.locator(".stat-value");
    await page.locator(".stats").scrollIntoViewIfNeeded();
    await expect(values).toHaveText(["4+", "9", "5+", "100K+"], { timeout: 5_000 });
  });

  test("stats show final numbers straight away for reduced-motion users", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce", viewport: DESKTOP });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page.locator(".stat-value")).toHaveText(["4+", "9", "5+", "100K+"], { timeout: 1_000 });
    await context.close();
  });

  test("stats never get stuck at 0 when the visitor jumps past them", async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);
    await expect(page.locator(".stat-value")).toHaveText(["4+", "9", "5+", "100K+"]);
  });

  test("server HTML already contains the real stats (no-JS visitors and crawlers)", async ({ request }) => {
    const html = await (await request.get("/")).text();
    for (const label of ['aria-label="4+"', 'aria-label="9"', 'aria-label="5+"', 'aria-label="100K+"']) {
      expect(html).toContain(label);
    }
  });

  test("hero checkout ticket animates through to 'Paid'", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".ticket-state")).toHaveText("Paid", { timeout: 8_000 });
    await expect(page.locator(".ticker-tag")).toHaveText(/sample data/i);
  });

  test("flutter_doctor_ai terminal types out the full sample run", async ({ page }) => {
    await page.goto("/");
    await page.locator(".oss").scrollIntoViewIfNeeded();
    const lastLine = page.locator(".terminal-body .line").last();
    await expect(lastLine).toBeVisible({ timeout: 5_000 });
    await expect(page.locator(".terminal-body")).toContainText("85/100 (Grade: B)");
    await expect(page.locator(".terminal-tag")).toHaveText(/sample run/i);
  });

  test("copy button copies the install command", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/");
    await page.getByRole("button", { name: "Copy install command" }).click();
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied).toBe("dart pub global activate flutter_doctor_ai");
  });

  test("FAQ accordion opens one answer at a time", async ({ page }) => {
    await page.goto("/");
    const questions = page.locator(".faq-q");
    await expect(questions).toHaveCount(6);
    await expect(questions.nth(0)).toHaveAttribute("aria-expanded", "true");

    await questions.nth(2).click();
    await expect(questions.nth(2)).toHaveAttribute("aria-expanded", "true");
    await expect(questions.nth(0)).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator(".faq-item.open .faq-a p")).toBeVisible();

    await questions.nth(2).click();
    await expect(questions.nth(2)).toHaveAttribute("aria-expanded", "false");
  });

  test("FAQ answers are reachable and toggled with the keyboard", async ({ page }) => {
    await page.goto("/");
    const q = page.locator(".faq-q").nth(1);
    await q.focus();
    await page.keyboard.press("Enter");
    await expect(q).toHaveAttribute("aria-expanded", "true");
  });

  test("unattributed testimonials stay hidden", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".quotes")).toHaveCount(0);
  });
});

test.describe("availability is consistent everywhere", () => {
  const expected = [availability.text, availability.capacity];

  for (const [route, selector] of [
    ["/", ".hero-status"],
    ["/", "footer .availability-banner"],
    ["/services", ".availability-panel"],
    ["/now", "main"],
  ] as const) {
    test(`${route} ${selector}`, async ({ page }) => {
      await page.goto(route);
      for (const text of expected) {
        await expect(page.locator(selector).first()).toContainText(text);
      }
    });
  }

  test("no stale 'next slot' dates are shown", async ({ page }) => {
    for (const route of ["/", "/services", "/now", "/about"]) {
      await page.goto(route);
      await expect(page.locator("body"), route).not.toContainText(/next slot/i);
      await expect(page.locator("body"), route).not.toContainText(/(August|September) 2026/);
    }
  });
});

test.describe("contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("required fields block an empty submission", async ({ page }) => {
    await page.locator("form.contact-form button[type='submit']").click();
    await expect(page).toHaveURL("/contact");
    const valid = await page.locator("form.contact-form").evaluate((f: HTMLFormElement) => f.checkValidity());
    expect(valid).toBe(false);
    await expect(page.getByText(/thank you for reaching out/i)).toHaveCount(0);
  });

  test("rejects an invalid email address", async ({ page }) => {
    await page.fill("#email", "not-an-email");
    const valid = await page.locator("#email").evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(valid).toBe(false);
  });

  test("labels are connected to their inputs", async ({ page }) => {
    for (const label of ["Your Name", "Email Address", "Company / Startup Name", "Project Overview & Goals"]) {
      await expect(page.getByLabel(label)).toBeVisible();
    }
  });

  test("project-need chips toggle on and off", async ({ page }) => {
    const chip = page.getByRole("button", { name: "Flutter Mobile App" });
    const before = await chip.getAttribute("class");
    await chip.click();
    await expect(chip).not.toHaveAttribute("class", before ?? "");
    await chip.click();
    await expect(chip).toHaveAttribute("class", before ?? "");
  });

  test("a complete submission shows the thank-you screen", async ({ page }) => {
    await page.fill("#name", "E2E Test");
    await page.fill("#email", "e2e@example.com");
    await page.fill("#company", "Playwright");
    await page.getByRole("button", { name: "Flutter Mobile App" }).click();
    await page.fill("#description", "Automated end-to-end test submission. Please ignore.");
    await page.locator("form.contact-form button[type='submit']").click();
    await expect(page.getByText(/thank you for reaching out/i)).toBeVisible({ timeout: 10_000 });
  });
});

test.describe("projects page", () => {
  test("filters switch and always leave at least one project", async ({ page }) => {
    await page.goto("/projects");
    const filters = page.locator(".filter-btn");
    const count = await filters.count();
    expect(count).toBeGreaterThan(1);
    for (let i = 0; i < count; i++) {
      await filters.nth(i).click();
      await expect(filters.nth(i)).toHaveClass(/active/);
      expect(await page.locator(".sidebar-project-btn").count(), `filter ${i}`).toBeGreaterThan(0);
    }
  });

  test("selecting a project updates the detail panel", async ({ page }) => {
    await page.goto("/projects");
    const items = page.locator(".sidebar-project-btn");
    const total = await items.count();
    for (let i = 0; i < total; i++) {
      const title = (await items.nth(i).locator(".btn-title").textContent())?.trim() ?? "";
      await items.nth(i).click();
      await expect(items.nth(i)).toHaveClass(/active/);
      await expect(page.locator("main")).toContainText(title);
    }
  });
});

test("WhatsApp quick-chat button is labelled and points to WhatsApp", async ({ page }) => {
  await page.goto("/");
  const chat = page.getByRole("link", { name: "Chat on WhatsApp" });
  await expect(chat).toBeVisible();
  await expect(chat).toHaveAttribute("href", /wa\.me|whatsapp\.com/);
  await expect(chat).toHaveAttribute("target", "_blank");
});
