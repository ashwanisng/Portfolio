import fs from "node:fs";
import path from "node:path";
import ClientHomePage from "./client-page";

const LOGO_EXTENSIONS = [".svg", ".png", ".webp"];

// Client logos are picked up from public/logos/<slug>.(svg|png|webp) at build time.
// A client without a file falls back to a typographic wordmark.
function findClientLogos(): Record<string, string> {
  const dir = path.join(process.cwd(), "public", "logos");
  if (!fs.existsSync(dir)) return {};

  const logos: Record<string, string> = {};
  for (const file of fs.readdirSync(dir)) {
    const ext = path.extname(file).toLowerCase();
    if (LOGO_EXTENSIONS.includes(ext)) {
      logos[path.basename(file, ext)] = `/logos/${file}`;
    }
  }
  return logos;
}

export default function HomePage() {
  return <ClientHomePage logos={findClientLogos()} />;
}
