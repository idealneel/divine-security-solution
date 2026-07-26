# Plan: Create `project.md` — Website Spec for Shrikant's Services Business

## Context

The user wants a website for a local service provider (Raigad / Thane / Mumbai districts, 10+ years experience) offering CCTV installation & repair, RO water purifier sales/service, EPBX systems, other electronics/appliances, and AMC contracts. The site's only goal: **showcase services → collect an enquiry via a small form → redirect to WhatsApp with a pre-filled message**. No backend, no payments.

Before building, the user wants a `project.md` planning document capturing the style/theme, structure, and content requirements. This task = **write that `project.md`** in `D:\Web Stuff\Shrikant\` (directory is currently empty). Also register the Astro docs MCP server the user requested.

## Confirmed Decisions (from Q&A)

| Decision | Choice |
|---|---|
| Stack | **Astro** (static output, free hosting on Netlify/Cloudflare Pages) |
| Languages | **English + Marathi** (toggle; user will provide Marathi intro, we translate the rest) |
| Theme | **Professional & trustworthy** — navy/deep blue + white, clean cards, subtle shadows, green WhatsApp CTAs |
| WhatsApp flow | **Enquiry form** — multi-select services + name/need → builds pre-filled `wa.me` message (client-side JS, no backend) |
| Sections | Hero, Services, About, Service Areas (Raigad/Thane/Mumbai + more), Testimonials, Enquiry form, Footer |
| Contact details | User has real WhatsApp number & business name — collected at implementation time; `project.md` uses clearly-marked placeholders |

## Step 1: Register Astro docs MCP (deferred from plan mode)

Run: `claude mcp add --transport http astro-docs https://mcp.docs.astro.build/mcp`

## Step 2: Write `D:\Web Stuff\Shrikant\project.md`

A single well-organized spec document with these sections:

### 1. Project Overview
Goal, target audience (homeowners, shops, offices in Raigad/Thane/Mumbai), single conversion action (WhatsApp enquiry), no backend.

### 2. Style / Theme Guide
- **Palette**: navy `#1e3a5f` (primary), white/off-white background, slate-gray text, WhatsApp green `#25D366` for CTAs, light-blue accent for hovers/highlights
- **Typography**: a clean sans (e.g. Inter or Poppins for Latin) + a Devanagari-compatible face (e.g. Mukta / Noto Sans Devanagari) so Marathi renders well
- **Components**: card-based service tiles with icons, subtle shadows, rounded corners, generous whitespace, sticky navy header with language toggle `[EN | मराठी]`, floating WhatsApp button
- **Tone**: trustworthy, experienced, local — "10+ years serving Raigad, Thane & Mumbai"
- Mobile-first (most customers will arrive on phones)

### 3. Site Structure & Sections
Single-page layout (scroll sections + anchor nav):
1. **Header** — business name/logo, nav anchors, language toggle
2. **Hero** — headline + subline + primary CTA ("Get a Quote on WhatsApp")
3. **Services** — cards: CCTV installation & repair · RO purifier sales & service · EPBX systems · Other electronics/appliances · AMC contracts. Each card: icon, short description, "Enquire" → scrolls to form with that service pre-checked
4. **About** — owner intro (user supplies Marathi original; we produce the English version), experience, trust points
5. **Service Areas** — Raigad, Thane, Mumbai districts + note "and surrounding areas"
6. **Testimonials** — 3–4 short customer quotes
7. **Enquiry Form** — name (optional), multi-select service checkboxes, free-text need, locality → "Send on WhatsApp" button
8. **Footer** — contact info, service areas recap, WhatsApp/phone links

### 4. WhatsApp Integration Spec
- Client-side only: build `https://wa.me/<NUMBER>?text=<encoded message>`
- Message template (sent in the language the visitor is browsing in), e.g.:
  `Hi, I'm interested in: CCTV Installation, AMC. Name: ___. Location: ___. Details: ___`
- Per-service "Enquire" buttons pre-check that service in the form; floating button uses a generic greeting

### 5. Technical Spec
- Astro static site, built-in i18n routing (`/` = English, `/mr/` = Marathi), translations in a `src/i18n/` dictionary
- All contact details + service list in one config file (`src/config.ts`) so number/name are swappable in one place
- Vanilla JS (or a tiny Astro island) for the form → wa.me URL builder
- Plain CSS or Tailwind (decide at build time), deploy target Netlify/Cloudflare Pages (free)
- SEO basics: meta tags, Marathi+English titles, local-business schema.org JSON-LD

### 6. Content & Assets Checklist (what the user must provide)
The user explicitly asked for this list:
- [ ] Business name (exact spelling, EN + Marathi)
- [ ] WhatsApp number (with country code)
- [ ] Owner intro paragraph in Marathi
- [ ] Exact list of "other electronics/appliances" he handles
- [ ] 3–4 customer testimonials (name + locality + 1–2 lines)
- [ ] **Images**: hero photo (a real installation or storefront, landscape), 1 photo per main service if available (CCTV install, RO unit, EPBX unit), optional owner/shop photo for About, optional logo (site works with text logo + SVG icons if none)
- [ ] Any specific localities to name under service areas

## Files Created

- `D:\Web Stuff\Shrikant\project.md` — the only file this task creates

## Verification

- Review `project.md` together with the user — confirm theme, section order, message template wording, and the asset checklist
- Confirm astro-docs MCP is registered (`claude mcp list`)
- The document should be complete enough that "build the site from project.md" is unambiguous next task
