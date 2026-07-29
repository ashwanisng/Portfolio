# Ashwani Singh — Portfolio

Personal portfolio and freelance presence site for **Ashwani Kumar Singh**, a Mobile Product Engineer specializing in Flutter, Go, and AWS.

Live at → [ashwanisng.com](https://ashwanisng.com/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + styled-jsx |
| Icons | Lucide React |
| Fonts | Outfit · Plus Jakarta Sans (Google Fonts) |
| Email | Resend |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout, SEO metadata, fonts
│   ├── globals.css               # Design system — CSS variables, base styles
│   ├── about/page.tsx            # About + career timeline
│   ├── projects/
│   │   ├── page.tsx              # Filterable case studies
│   │   └── closepitch/page.tsx   # ClosePitch flagship case study
│   ├── services/page.tsx         # Service offerings
│   ├── experience/page.tsx       # Experience detail
│   ├── contact/page.tsx          # Contact form
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Dynamic blog post
│   ├── resume/page.tsx           # Resume viewer
│   ├── now/page.tsx              # Now page
│   ├── process/page.tsx          # Engineering process
│   ├── thinking/page.tsx         # Philosophy
│   ├── labs/page.tsx             # Experimental projects
│   ├── actions/contact.ts        # Server action — contact form
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── robots.ts                 # robots.txt
├── components/
│   ├── Header.tsx                # Fixed nav, mobile drawer
│   ├── Footer.tsx                # Links, availability banner, social icons
│   ├── QuickChat.tsx             # Floating WhatsApp button
│   └── ScrollObserver.tsx        # Intersection observer for scroll animations
└── config/
    └── availability.json         # Controls footer availability banner
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Production build
npm run build
npm run start

# Lint
npm run lint
```

---

## Configuration

### Availability Banner

Edit `src/config/availability.json` to update the footer banner:

```json
{
  "status": "available",
  "text": "Available for Freelance",
  "nextSlot": "August 2026",
  "showBanner": true
}
```

Set `"showBanner": false` to hide it, or `"status": "unavailable"` to change the indicator color.

### SEO & Metadata

Global metadata (title, description, OG image, Twitter card) is configured in `src/app/layout.tsx`. Update `metadataBase` to match your live domain.

---

## Deployment

Deployed on Vercel. Push to `main` triggers an automatic production deployment.

To deploy manually:

```bash
vercel --prod
```

---

## Contact

- Email: [ashwanicena5@gmail.com](mailto:ashwanicena5@gmail.com)
- LinkedIn: [linkedin.com/in/ashwanisng](https://linkedin.com/in/ashwanisng)
- GitHub: [github.com/ashwanisng](https://github.com/ashwanisng)