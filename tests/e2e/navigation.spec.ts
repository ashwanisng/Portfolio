import { test, expect } from "@playwright/test";
import { ROUTES, MOBILE, DESKTOP } from "./utils";

const NAV = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

test.describe("header navigation", () => {
  test("desktop nav links go to the right page and mark it active", async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto("/");
    for (const item of NAV) {
      await page.locator(".desktop-navbar").getByRole("link", { name: item.name, exact: true }).click();
      await expect(page).toHaveURL(item.path);
      await expect(page.locator(".desktop-navbar .navbar-link.active")).toHaveText(item.name);
    }
  });

  test("logo returns to the homepage", async ({ page }) => {
    await page.goto("/about");
    await page.locator("header .logo-brand").click();
    await expect(page).toHaveURL("/");
  });

  test("header 'Book a Call' goes to contact", async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto("/");
    await page.locator("header").getByRole("link", { name: /book a call/i }).click();
    await expect(page).toHaveURL("/contact");
  });

  test("header switches to its compact style after scrolling", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header.header-nav")).not.toHaveClass(/scrolled/);
    await page.mouse.wheel(0, 600);
    await expect(page.locator("header.header-nav")).toHaveClass(/scrolled/);
  });
});

test.describe("mobile menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(MOBILE);
  });

  test("desktop links are hidden and the menu button is shown", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".desktop-navbar")).toBeHidden();
    await expect(page.getByRole("button", { name: "Toggle Menu" })).toBeVisible();
  });

  test("opens, closes, and every link navigates and closes the menu", async ({ page }) => {
    await page.goto("/");
    const drawer = page.locator(".mobile-nav-drawer");
    for (const item of NAV) {
      await page.getByRole("button", { name: "Toggle Menu" }).click();
      await expect(drawer).toHaveClass(/open/);
      await drawer.getByRole("link", { name: new RegExp(item.name) }).click();
      await expect(page).toHaveURL(item.path);
      await expect(drawer).not.toHaveClass(/open/);
    }
    await page.getByRole("button", { name: "Toggle Menu" }).click();
    await page.getByRole("button", { name: "Close Menu" }).click();
    await expect(drawer).not.toHaveClass(/open/);
  });

  test("drawer CTA goes to contact", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Toggle Menu" }).click();
    await page.locator(".mobile-drawer-cta").click();
    await expect(page).toHaveURL("/contact");
  });

  test("closed menu links cannot be reached with the keyboard", async ({ page }) => {
    await page.goto("/");
    // Tab through the page; focus must never land on a link inside the closed (off-screen) drawer.
    for (let i = 0; i < 40; i++) {
      await page.keyboard.press("Tab");
      const inClosedDrawer = await page.evaluate(() => {
        const el = document.activeElement;
        return !!el?.closest(".mobile-nav-drawer:not(.open)");
      });
      expect(inClosedDrawer, "keyboard focus moved into the hidden mobile menu").toBe(false);
    }
  });
});

test.describe("homepage CTAs", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto("/");
  });

  test("hero 'Book a 20-min call' goes to contact", async ({ page }) => {
    await page.locator(".hero").getByRole("link", { name: /book a 20-min call/i }).click();
    await expect(page).toHaveURL("/contact");
  });

  test("hero 'See selected work' scrolls to the work section", async ({ page }) => {
    await page.locator(".hero").getByRole("link", { name: /see selected work/i }).click();
    await expect(page).toHaveURL(/#work$/);
    await expect(page.locator("#work")).toBeInViewport();
  });

  test("'All case studies' goes to projects", async ({ page }) => {
    await page.getByRole("link", { name: /all case studies/i }).click();
    await expect(page).toHaveURL("/projects");
  });

  test("'Services in detail' goes to services", async ({ page }) => {
    await page.getByRole("link", { name: /services in detail/i }).click();
    await expect(page).toHaveURL("/services");
  });

  test("closing CTA goes to contact and the email button is a mailto link", async ({ page }) => {
    const closing = page.locator(".closing");
    await expect(closing.getByRole("link", { name: /ashwanicena5@gmail.com/ })).toHaveAttribute(
      "href",
      "mailto:ashwanicena5@gmail.com"
    );
    await closing.getByRole("link", { name: /book a 20-min call/i }).click();
    await expect(page).toHaveURL("/contact");
  });

  test("ClosePitch case study link opens the case study", async ({ page }) => {
    await page.locator(".work-list").getByRole("link", { name: /case study/i }).click();
    await expect(page).toHaveURL("/projects/closepitch");
  });

  test("client tiles and work rows link to the right places", async ({ page }) => {
    const expected: Record<string, RegExp> = {
      "HDFC Securities": /^\/experience$/,
      "Right Hands": /apps\.apple\.com\/.*id1641289996/,
      SOCTR: /apps\.apple\.com\/.*id6479616881/,
      Hudle: /apps\.apple\.com\/.*id1398246473/,
      "Mr. Milkman by Ever.Ag": /^\/projects$/,
      Squareboat: /^\/experience$/,
      goSTOPS: /apps\.apple\.com\/.*id1538056051/,
      "Yubi Health": /squareboat\.com\/clients\/yubihealth/,
      HarborMoor: /squareboat\.com\/clients\/harbormoor/,
    };
    for (const [name, href] of Object.entries(expected)) {
      const tile = page.locator(".client-wall .client-cell", { hasText: name });
      await expect(tile, `${name} tile`).toHaveCount(1);
      await expect(tile).toHaveAttribute("href", href);
    }
  });

  test("flutter_doctor_ai links point to pub.dev and GitHub", async ({ page }) => {
    const oss = page.locator(".oss");
    await expect(oss.getByRole("link", { name: /view on pub.dev/i })).toHaveAttribute(
      "href",
      "https://pub.dev/packages/flutter_doctor_ai"
    );
    await expect(oss.getByRole("link", { name: /source on github/i })).toHaveAttribute(
      "href",
      "https://github.com/ashwanisng/flutter_doctor_ai"
    );
  });
});

test.describe("footer", () => {
  test("'Discuss Your Project' and footer page links work", async ({ page }) => {
    await page.goto("/");
    await page.locator("footer").getByRole("link", { name: /discuss your project/i }).click();
    await expect(page).toHaveURL("/contact");

    const footerLinks = await page.locator("footer .footer-links-col a[href^='/']").evaluateAll((els) =>
      els.map((el) => el.getAttribute("href") as string)
    );
    expect(footerLinks.length).toBeGreaterThan(5);
    for (const href of footerLinks) {
      const res = await page.request.get(href);
      expect(res.status(), `footer link ${href}`).toBe(200);
    }
  });

  test("social links point to the right profiles", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer.locator("a[href='https://github.com/ashwanisng']").first()).toBeAttached();
    await expect(footer.locator("a[href='https://linkedin.com/in/ashwanisng']").first()).toBeAttached();
    await expect(footer.locator("a[href='mailto:ashwanicena5@gmail.com']").first()).toBeAttached();
  });
});

// Crawl every page: each internal link must resolve, in-page anchors must exist,
// and links that open a new tab must be safe.
for (const route of ROUTES) {
  test(`links on ${route} all resolve`, async ({ page }) => {
    await page.goto(route);
    const links = await page.locator("a[href]").evaluateAll((els) =>
      els.map((el) => ({
        href: el.getAttribute("href") as string,
        target: el.getAttribute("target"),
        rel: el.getAttribute("rel") || "",
        text: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 40),
      }))
    );

    const problems: string[] = [];
    const checked = new Set<string>();
    for (const link of links) {
      const { href } = link;
      if (!href || href === "#") {
        problems.push(`empty link "${link.text}"`);
        continue;
      }
      if (href.startsWith("#")) {
        const exists = await page.locator(`[id="${href.slice(1)}"]`).count();
        if (!exists) problems.push(`anchor ${href} has no matching id`);
        continue;
      }
      if (href.startsWith("/")) {
        const path = href.split("#")[0];
        if (checked.has(path)) continue;
        checked.add(path);
        const res = await page.request.get(path);
        if (res.status() !== 200) problems.push(`${href} → HTTP ${res.status()}`);
        continue;
      }
      if (href.startsWith("mailto:")) {
        if (!/^mailto:[^@\s]+@[^@\s]+\.[a-z]{2,}/i.test(href)) problems.push(`bad mailto ${href}`);
        continue;
      }
      if (href.startsWith("tel:")) continue;
      if (/^https?:\/\//.test(href)) {
        if (link.target === "_blank" && !/noopener|noreferrer/.test(link.rel)) {
          problems.push(`${href} opens a new tab without rel="noopener"`);
        }
        if (process.env.E2E_CHECK_EXTERNAL) {
          const res = await page.request.get(href, { failOnStatusCode: false, timeout: 15_000 }).catch(() => null);
          if (!res || res.status() >= 400) problems.push(`external ${href} → ${res?.status() ?? "unreachable"}`);
        }
        continue;
      }
      problems.push(`unexpected href "${href}"`);
    }
    expect(problems, `link problems on ${route}`).toEqual([]);
  });
}
