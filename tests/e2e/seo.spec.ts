import { test, expect } from "@playwright/test";
import { ROUTES, SITE_URL } from "./utils";

type PageMeta = {
  title: string;
  description: string | null;
  canonical: string | null;
  robots: string | null;
  lang: string | null;
  viewport: string | null;
  og: Record<string, string>;
  twitter: Record<string, string>;
  h1: string[];
  headings: number[];
  imagesWithoutAlt: string[];
  jsonLd: string[];
};

async function readMeta(page: import("@playwright/test").Page): Promise<PageMeta> {
  return page.evaluate(() => {
    const meta = (sel: string) => document.querySelector(sel)?.getAttribute("content") ?? null;
    const collect = (prefix: string, attr: "property" | "name") =>
      Object.fromEntries(
        Array.from(document.querySelectorAll(`meta[${attr}^="${prefix}"]`)).map((m) => [
          m.getAttribute(attr) as string,
          m.getAttribute("content") ?? "",
        ])
      );
    return {
      title: document.title,
      description: meta('meta[name="description"]'),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null,
      robots: meta('meta[name="robots"]'),
      lang: document.documentElement.getAttribute("lang"),
      viewport: meta('meta[name="viewport"]'),
      og: collect("og:", "property"),
      twitter: collect("twitter:", "name"),
      h1: Array.from(document.querySelectorAll("h1")).map((h) => h.textContent?.trim() ?? ""),
      headings: Array.from(document.querySelectorAll("main h1, main h2, main h3, main h4, main h5, main h6")).map((h) =>
        Number(h.tagName[1])
      ),
      imagesWithoutAlt: Array.from(document.images)
        .filter((img) => !img.hasAttribute("alt"))
        .map((img) => img.src),
      jsonLd: Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((s) => s.textContent ?? ""),
    };
  });
}

const collected = new Map<string, PageMeta>();

for (const route of ROUTES) {
  test.describe(`seo ${route}`, () => {
    let m: PageMeta;
    test.beforeEach(async ({ page }) => {
      await page.goto(route);
      m = await readMeta(page);
      collected.set(route, m);
    });

    test("has a title of sensible length", () => {
      expect(m.title.length, `title: "${m.title}"`).toBeGreaterThanOrEqual(15);
      expect(m.title.length, `title too long for search results: "${m.title}"`).toBeLessThanOrEqual(65);
    });

    test("has a meta description of sensible length", () => {
      expect(m.description, "missing meta description").toBeTruthy();
      expect(m.description!.length, `description: "${m.description}"`).toBeGreaterThanOrEqual(50);
      expect(m.description!.length, `description too long: "${m.description}"`).toBeLessThanOrEqual(160);
    });

    test("has exactly one h1", () => {
      expect(m.h1, "h1 elements on the page").toHaveLength(1);
      expect(m.h1[0].length).toBeGreaterThan(3);
    });

    test("headings don't skip levels", () => {
      const skips: string[] = [];
      for (let i = 1; i < m.headings.length; i++) {
        if (m.headings[i] > m.headings[i - 1] + 1) skips.push(`h${m.headings[i - 1]} → h${m.headings[i]}`);
      }
      expect(skips, "heading level jumps").toEqual([]);
    });

    test("canonical URL points at this page on the live domain", () => {
      const expected = route === "/" ? SITE_URL : `${SITE_URL}${route}`;
      expect(m.canonical, "missing canonical").toBeTruthy();
      expect(m.canonical!.replace(/\/$/, "")).toBe(expected);
    });

    test("is indexable", () => {
      expect(m.robots ?? "").not.toMatch(/noindex/);
    });

    test("declares language and viewport", () => {
      expect(m.lang).toBe("en");
      expect(m.viewport).toMatch(/width=device-width/);
    });

    test("has Open Graph and Twitter tags for link previews", async ({ request }) => {
      for (const key of ["og:title", "og:description", "og:url", "og:image", "og:type"]) {
        expect(m.og[key], `${key} missing`).toBeTruthy();
      }
      const expected = route === "/" ? SITE_URL : `${SITE_URL}${route}`;
      expect(m.og["og:url"].replace(/\/$/, ""), "og:url should match this page").toBe(expected);
      expect(m.twitter["twitter:card"], "twitter:card missing").toBeTruthy();

      const image = new URL(m.og["og:image"]);
      expect(image.origin, "og:image must be an absolute URL on the live domain").toBe(SITE_URL);
      const res = await request.get(image.pathname);
      expect(res.status(), `og:image ${image.pathname}`).toBe(200);
      expect(res.headers()["content-type"]).toMatch(/^image\//);
    });

    test("all images have alt text (empty alt is fine for decoration)", () => {
      expect(m.imagesWithoutAlt).toEqual([]);
    });

    test("structured data (JSON-LD) is valid JSON with a schema.org context", () => {
      for (const block of m.jsonLd) {
        const data = JSON.parse(block);
        const items = Array.isArray(data) ? data : [data];
        for (const item of items) expect(item["@context"]).toMatch(/schema\.org/);
      }
    });
  });
}

test("titles and descriptions are unique across pages", async ({ page }) => {
  for (const route of ROUTES) {
    if (!collected.has(route)) {
      await page.goto(route);
      collected.set(route, await readMeta(page));
    }
  }
  const dupes = (key: "title" | "description") => {
    const seen = new Map<string, string[]>();
    for (const [route, m] of collected) {
      const v = (m[key] ?? "").trim();
      seen.set(v, [...(seen.get(v) ?? []), route]);
    }
    return Array.from(seen.entries())
      .filter(([, routes]) => routes.length > 1)
      .map(([v, routes]) => `"${v.slice(0, 60)}" used by ${routes.join(", ")}`);
  };
  expect(dupes("title"), "duplicate titles").toEqual([]);
  expect(dupes("description"), "duplicate descriptions").toEqual([]);
});

test("robots.txt allows crawling and points at the sitemap", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toMatch(/User-Agent: \*/i);
  expect(body).toMatch(/Allow: \//);
  expect(body).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
});

test("sitemap.xml is valid and every URL in it loads", async ({ request, page }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  const xml = await res.text();
  const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1]);
  expect(urls.length).toBeGreaterThan(5);

  const parsed = await page.evaluate((src) => {
    const doc = new DOMParser().parseFromString(src, "application/xml");
    return doc.getElementsByTagName("parsererror").length === 0;
  }, xml);
  expect(parsed, "sitemap is not well-formed XML").toBe(true);

  for (const url of urls) {
    expect(url.startsWith(SITE_URL), `${url} should be on ${SITE_URL}`).toBe(true);
    const path = new URL(url).pathname;
    const r = await request.get(path);
    expect(r.status(), `sitemap URL ${path}`).toBe(200);
  }
});

test("404 page tells search engines not to index it", async ({ page }) => {
  const res = await page.goto("/this-page-does-not-exist");
  expect(res?.status()).toBe(404);
  const robots = await page.locator('meta[name="robots"]').evaluateAll((els) =>
    els.map((el) => el.getAttribute("content") ?? "")
  );
  expect(robots.some((r) => /noindex/.test(r)), `robots tags: ${robots.join(" | ")}`).toBe(true);
  expect(robots.filter((r) => /(^|,\s*)index/.test(r)), "a conflicting 'index' robots tag is also present").toEqual([]);
});

test("favicon and web manifest are served", async ({ request }) => {
  expect((await request.get("/favicon.ico")).status()).toBe(200);
  const manifest = await request.get("/manifest.json");
  expect(manifest.status()).toBe(200);
  const json = await manifest.json();
  expect(json.name || json.short_name).toBeTruthy();
});
