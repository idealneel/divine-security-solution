# Project: Divine Security Solutions — Business Website

> Planning & style document. The site is built from this spec — keep it updated as decisions change.
> **Status: PLANNING — do not build yet.**

## 1. Project Overview

A single-page showcase website for **Divine Security Solution** — run by Shrikant Subhash Shinde **since 2012**, serving **Raigad, Thane & Mumbai districts**.

**Services offered:**
- CCTV installation & repair
- RO water purifier sales & service
- EPBX systems
- Biometric attendance & access control
- AMC (Annual Maintenance Contracts)

**Single goal:** showcase services → visitor fills a small enquiry form → redirect to **WhatsApp** with a pre-filled message describing what they need. No backend, no payments, no accounts. Nothing else.

**Target audience:** homeowners, shop owners, offices and societies in Raigad/Thane/Mumbai — mostly visiting from mobile phones.

### Hard rules (from owner)
- **No prices anywhere** on the site. No "free" claims (no free visit, free quote, etc.). No promises/guarantees of any kind. All pricing and commitments are handled by the owner directly on WhatsApp.
- Service areas: only the 3 districts are named. Add one neutral line that customers from other areas are welcome to enquire.
- No testimonials for now (feature removed — may be added later when quotes are collected).

## 2. Business Details

| Item | Value |
|---|---|
| Owner | Shrikant Subhash Shinde |
| Business name | Divine Security Solution (as provided by owner — confirmed) |
| Established | 2012 (14 years as of 2026) |
| WhatsApp number | 91 9028670145 (`wa.me/919028670145`) |
| Areas | Raigad, Thane, Mumbai districts |
| Notable clients | Don Bosco School · Hardcarb Technologies Pvt. Ltd. (Ambernath MIDC) · Rosy Foundation |
| Marathi business name | **Not translated** — business name stays in English on both language versions |

## 3. Style / Theme Guide

**Direction: Warm Minimalism — professional & trustworthy.** Mostly whitespace and clean type, but never sterile: real photos, navy warmth, comfortable spacing. Photos do the talking; the design stays out of the way.

> **Considered & rejected** (2026-07-26): *Flat design* — close cousin, but we keep soft shadows for gentle depth; flat's bold color fills add graphic noise without adding trust. *Bento grid* — currently the most templated "AI-era" look (violates §"real site" rules) and collapses to a plain stack on mobile where most visitors are. *Constructivist* — poster aesthetics signal "design studio", not "trustworthy local technician"; wrong audience. One bento-inspired element is allowed: a small info-tile row (10+ years · Raigad/Thane/Mumbai) may be used near the hero — but as a modest strip, not a dashboard grid.

### Layout decisions (locked)

| Element | Decision |
|---|---|
| Overall style | **Warm minimal** — white background, generous whitespace, navy headings, slate body text, real photos as the main visual element |
| Hero | **Split text + photo** — headline/subline/CTA on the left, hero install photo on the right (stacks vertically on mobile, text first) |
| Service cards | **Photo cards** — real photo on top, title + 1–2 concrete lines + "Enquire" button below |
| Animations | **Micro-interactions only** — hover/focus states on buttons, links and cards (color shift, slight shadow lift) + smooth scroll to anchors. Nothing auto-plays, nothing animates on scroll. Respect `prefers-reduced-motion` |

### Color palette

| Role | Color | Usage |
|---|---|---|
| Primary | Navy `#1e3a5f` | Headings, secondary buttons, footer bg |
| Primary dark | `#152b47` | Hover states, footer bg |
| Background | White `#ffffff` / off-white `#f6f8fb` | Page + alternating section backgrounds |
| Text | Slate `#334155` | Body copy |
| Accent | Light blue `#3b82f6` | Links, icon highlights, hovers |
| CTA | WhatsApp green `#25D366` (hover `#1ebe5b`) | All WhatsApp buttons, floating button |

### Typography (locked)
- **Headings:** Poppins SemiBold (600) — geometric, friendly-professional
- **Body:** Inter Regular/Medium — neutral, highly readable on phones
- **Marathi (Devanagari):** Mukta — rounded, pairs with Poppins' warmth; used for both headings and body on `/mr/`
- Google Fonts, `font-display: swap`, subset latin + devanagari
- **Type scale (mobile → desktop):** hero h1 ~32→48px · section h2 ~26→36px · section label ~13px uppercase letterspaced navy · card title ~18→20px · body 16→17px, line-height 1.6–1.7

### Section headings (locked)
Small uppercase navy label (e.g. `SERVICES`) with short accent rule, then large left-aligned heading. Everything hangs from the left margin — no centered title+subtitle template rhythm.

### "Real site, not AI site" design clauses

The site must feel like it was made by a local business, not generated. Follow these rules:

**Do (real-site traits):**
- Concrete, specific copy: real place names (Panvel, Thane, Mumbai...), real service names (DVR/NVR, dome/bullet cameras, RO membrane change), the actual phone number visible in plain text
- Short, plain sentences. Write like the owner talks. Marathi copy written naturally, not machine-translated word-for-word
- Real photos of actual work — even slightly imperfect phone photos beat polished stock
- Restrained design: mostly white space, one primary color, small consistent shadows, modest border radius (6–8px, not pill-shaped everything)
- Slight asymmetry is fine — sections don't all need the same centered heading + 3-card grid rhythm
- Simple line-style SVG icons (one consistent set, e.g. Lucide), used sparingly
- Honest, minimal footer: name, number, areas. That's it

**Don't (AI-site tells to avoid):**
- ❌ Emoji as icons or in headings
- ❌ Buzzword copy: "Elevate", "Seamless", "Empower", "Unlock", "cutting-edge solutions", "your one-stop shop"
- ❌ Purple/indigo gradients, glassmorphism, floating blob shapes, animated gradient text
- ❌ Every section = centered title + subtitle + symmetric 3-card grid
- ❌ Oversized hero with vague tagline and no concrete info
- ❌ Fake trust badges, fake counters ("500+ happy clients") — nothing unverifiable
- ❌ AI-generated images of people/offices; obviously-western stock photos that don't match Maharashtra
- ❌ Excessive animations/scroll effects; at most subtle fade-ins, or none
- ❌ Generic testimonial-carousel / "trusted by" logo strips

### Components & feel
- **Spacing:** airy — large section padding (~80–120px desktop, ~48–64px mobile), max content width ~1100px, comfortable line-height (1.6–1.7 body)
- **Service cards:** photo on top (fixed aspect ratio, `object-fit: cover`), title, 1–2 line concrete description, "Enquire" text-button. White card, 1px light border **or** very soft shadow (`0 1px 4px rgba(0,0,0,0.06)`), 8px radius. Hover: shadow deepens slightly, border tints navy
- **Buttons:** primary = WhatsApp green solid; secondary = navy outline. 8px radius (not pill). Hover: slight darken, no scale/bounce
- **Header:** sticky, white with subtle bottom border (not navy-filled — keeps it light), business name left, anchor nav + `[EN | मराठी]` toggle right
- **Floating WhatsApp button:** bottom-right, green circle with WhatsApp glyph, static (no pulse/bounce)
- **Photos:** displayed honestly — no heavy filters, no duotone overlays; slight rounding (8px) to match cards
- **Motion rules:** only `transition` on color/border/shadow (~150–200ms ease); smooth-scroll for anchor links; zero scroll-triggered or auto-playing animation; `prefers-reduced-motion` disables all transitions
- **Mobile-first:** single column; hero stacks text-then-photo; cards stack full-width; sticky header stays compact

## 4. Site Structure (single page, anchor navigation)

1. **Header** — Divine Security Solutions, nav (Services · About · Areas · Contact), language toggle
2. **Hero** — split layout: left = concrete headline (working draft: "CCTV, RO & EPBX — Installation and Service in Raigad, Thane & Mumbai"), one subline, "Since 2012" badge, CTA → "Enquire on WhatsApp" (scrolls to form); right = hero install photo. Stacks text-first on mobile. Optional modest info-strip: Since 2012 · Raigad · Thane · Mumbai
3. **Services** — 5 photo cards: CCTV installation & repair · RO purifier sales & service · EPBX systems · Biometric attendance & access control · AMC. Each card: real photo, title, 1–2 line description, "Enquire" (pre-checks that service in the form)
4. **About** — drafted intro (§8), photo of owner at work, "Since 2012", notable clients line (Don Bosco School · Hardcarb Technologies Pvt. Ltd., Ambernath MIDC · Rosy Foundation)
5. **Service Areas** — label + heading ("Where we work"), one sentence, three navy-outline district chips (Raigad · Thane · Mumbai), then: "From another area? You're welcome to enquire."
6. **Enquiry Form** — see §5
7. **Footer** — **navy block** (the one navy-filled section on the page, anchors it): logo mark + business name, one-line service list, areas line, WhatsApp button + number in plain text, © year. Three short columns on desktop, stacked on mobile. White/light-blue text on navy

*(Testimonials section: removed for now, add later when owner provides quotes.)*

## 5. WhatsApp Integration (the only "function" of the site)

Client-side only — no server. Build `https://wa.me/919028670145?text=<urlencoded message>` and open it.

### Enquiry form fields
| Field | Type | Required |
|---|---|---|
| Services needed | Checkboxes (multi-select: CCTV / RO / EPBX / Biometric & access control / AMC) | at least one |
| Name | Text | no |
| Location / locality | Text | no |
| Details | Textarea | no |

### Message template — language follows the site language

The pre-filled WhatsApp message is generated **in the language the visitor is browsing the site in**: English page (`/`) → English message, Marathi page (`/mr/`) → Marathi message. Service names in the message also follow that language. The business name is never translated.

English page:

```
Hi, I'm interested in: {selected services, comma separated}
Name: {name}
Location: {location}
Details: {details}
```

Marathi page:

```
नमस्कार, मला या सेवांबद्दल चौकशी करायची आहे: {निवडलेल्या सेवा}
नाव: {name}
ठिकाण: {location}
तपशील: {details}
```

Empty optional lines omitted in both.

- Per-service "Enquire" buttons: scroll to form + pre-check that service
- Floating WhatsApp button: generic greeting, also in the current site language (EN: "Hi, I'd like to know more about your services" / MR: "नमस्कार, मला तुमच्या सेवांबद्दल अधिक माहिती हवी आहे")

## 6. Technical Spec

- **Framework:** Astro, fully static output
- **i18n:** Astro built-in i18n routing — `/` = English, `/mr/` = Marathi; strings in `src/i18n/` dictionaries
- **Config:** single `src/config.ts` — business name, WhatsApp number, services, areas
- **Form logic:** small vanilla JS / tiny Astro island building the wa.me URL
- **Styling:** Tailwind CSS or plain CSS (decide at build start)
- **SEO:** bilingual meta title/description, Open Graph, `LocalBusiness` JSON-LD, sitemap
- **Hosting:** Netlify or Cloudflare Pages (free tier)

## 7. Photos

**Storage:** all photos live in `photos/` (`D:\Web Stuff\Shrikant\photos\`):

```
photos/
  hero/       — main top-of-page photo
  cctv/
  ro/
  epbx/
  biometric/  — biometric attendance / access control
  about/      — owner / shop photo
  logo/       — logo files if any (optional)
```

### Current photo status (reviewed 2026-07-26)

| Slot | File | Verdict |
|---|---|---|
| hero/ | `pexels-mateusz-feliksik-1896604-13422379.jpg` | ✅ Kept — two bullet cameras on wall, realistic install with visible conduit/cabling, landscape 2514px. Good hero. |
| cctv/ | `pexels-pppsdavid-7508684.jpg` | ✅ Kept — dome camera + sensor on ceiling, real install look. |
| epbx/ | `pexels-rdne-7580908.jpg` | ✅ Kept — hand dialing a desk IP phone, fits EPBX. |
| epbx/ | `epbx-wiring-real.jpeg` | ✅ Kept — owner's real photo, wiring a telephone/EPBX distribution box. **Preferred over the stock desk-phone photo** for the EPBX card; keep `pexels-rdne-7580908.jpg` as backup. |
| biometric/ | `biometric-attendance-real.jpeg` | ✅ Kept — owner's real photo, person using wall-mounted biometric unit. Best kind of image for this site. |
| about/ | `owner-installing-access-control.jpeg` | ✅ Kept — owner's real photo, technician wiring access-control panels. Great for About ("does the work himself"). |
| ro/ | `ro-install-red-unit.jpeg` | ✅ Kept — owner's real photo, wall-mounted hot/cold RO unit in a real kitchen with pre-filter visible. **Primary RO card image.** |
| ro/ | `ro-install-starline.jpeg` | ✅ Kept — owner's real photo, RO unit with dust cover + external filter, real install. Backup/alternate. |
| logo/ | `logo-shield-lens-original.png` + `logo-shield-lens.png` | ✅ Received — navy shield + camera-aperture lens mark, flat two-color, matches palette. Original (white bg, sharp) is the source of truth; transparent version for header. See §9. |
| Rejected | ~~pexels-jakubzerdzicki (webcam-style consumer cams)~~ | ❌ Deleted — consumer/indoor pan-tilt cams, not the professional CCTV he installs. |
| Rejected | ~~pexels-aboodi (payphone)~~ | ❌ Deleted — that was a public payphone, not an EPBX system. |
| Rejected | ~~AQUA renders (2)~~ | ❌ Deleted — branded marketing renders, replaced by owner's real RO photos. |

**Still wanted (all optional / later):**
- Owner's own CCTV install photos — **decision: proceed with the stock hero + CCTV photos for now**; swap in real ones whenever he sends them (drop into `photos/hero/` / `photos/cctv/`)
- Optional: SVG trace of the logo for perfectly crisp scaling

**Priority order:** (1) owner's real photos of his own installations — strongly preferred, matches the "real site" rule; (2) free stock photos as temporary fillers.

> ⚠️ Do **not** save images directly from Google Images — most are copyrighted. Use Google to *find* what look you want, but download from free-license sites: **Pexels, Unsplash, Pixabay** (search the same keywords there). Avoid anything that looks AI-generated or obviously western/corporate.

### Search keywords

**CCTV:**
- `cctv camera installation india`
- `dome camera ceiling` / `bullet camera wall mounted`
- `technician installing security camera`
- `dvr nvr recorder setup`
- `cctv camera building exterior`

**RO purifier:**
- `ro water purifier wall mounted india`
- `water purifier service technician`
- `ro filter cartridge replacement`

**EPBX:**
- `epbx system office` / `pbx telephone exchange box`
- `intercom system installation`
- `office landline phone system`

**Biometric / access control:**
- `biometric attendance machine office`
- `fingerprint scanner door access`
- `access control card reader wall`

**Hero (pick one strong landscape image):**
- `cctv camera on wall india building`
- `security camera closeup lens`

**Specs:** hero ≥1600px wide landscape; service photos ≥800px; JPG/WebP fine.

## 8. About-Section Intro Paragraph — DRAFTED (pending owner approval)

Owner supplied the facts (name, year, areas, notable clients); paragraph drafted from them — nothing invented, no prices/promises.

**English draft:**

> I'm Shrikant Subhash Shinde, and I run Divine Security Solution. Since 2012, I've been installing and servicing CCTV cameras, RO water purifiers, EPBX systems and biometric attendance machines across Raigad, Thane and Mumbai districts. I take up everything from small home and shop setups to small-industry installations — over the years that has included institutions like Don Bosco School, Hardcarb Technologies Pvt. Ltd. (Ambernath MIDC) and Rosy Foundation. I handle the work myself — from installation to after-service — and I'm just a WhatsApp message away.

**Marathi draft:**

> मी श्रीकांत सुभाष शिंदे, Divine Security Solution चालवतो. २०१२ पासून मी रायगड, ठाणे आणि मुंबई जिल्ह्यांमध्ये CCTV कॅमेरे, RO वॉटर प्युरिफायर, EPBX सिस्टम आणि बायोमेट्रिक हजेरी मशीन बसवण्याचे व दुरुस्तीचे काम करतो. लहान घरगुती आणि दुकानांच्या कामांपासून ते छोट्या औद्योगिक इन्स्टॉलेशनपर्यंत सगळी कामे मी घेतो — यामध्ये Don Bosco School, Hardcarb Technologies Pvt. Ltd. (Ambernath MIDC) आणि Rosy Foundation यांसारख्या संस्थांचाही समावेश आहे. इन्स्टॉलेशनपासून नंतरच्या सर्व्हिसपर्यंत सगळे काम मी स्वतः करतो — आणि एक WhatsApp मेसेज केला की मी उपलब्ध आहे.

**Notes:**
- "Since 2012" replaces the earlier generic "10+ years" everywhere on the site (hero badge: "Since 2012" / "२०१२ पासून") — a real year reads more authentic
- Client names (Don Bosco School, Hardcarb Technologies Pvt. Ltd., Rosy Foundation) stay in English in both versions — naming permission confirmed

## 9. Logo & Favicon

- **Received** in `photos/logo/`:
  - `logo-shield-lens-original.png` — original export, white background, sharpest edges. **Source of truth**; favicon set + any recolors get generated from this.
  - `logo-shield-lens.png` — background-removed transparent version, for the header (white bg makes the difference invisible there, but transparency helps if the mark ever sits on navy/footer).
- Mark: navy shield with camera-aperture lens, light-blue pupil — flat two-color, matches site palette (navy `#1e3a5f` family + blue accent), no text. Reads clearly at 16×16.
- **Build note:** the mark is wide-format with white margin — crop to the shield's square bounding box before generating favicons (ICO + 16/32/180 apple-touch-icon) so the shield fills the favicon frame.
- Header usage: logo mark + "Divine Security Solution" text beside it.

## 10. Legal Pages (Privacy Policy · Terms of Use · Copyright)

**Decisions:** No analytics/tracking of any kind on the site (keeps the privacy story honest and simple). Legal pages are **bilingual** (EN + MR) like the rest of the site.

**Pages:** two small static pages, linked from the footer only:
- `/privacy` + `/mr/privacy` — Privacy Policy
- `/terms` + `/mr/terms` — Terms of Use

Same warm-minimal layout (header + footer retained), plain readable text, "Last updated" date at top.

### Privacy Policy — content outline (accurate to how the site actually works)
1. **Who we are** — Divine Security Solution, Shrikant Subhash Shinde, service business in Raigad/Thane/Mumbai; contact via WhatsApp 9028670145
2. **What this website collects: nothing.** No accounts, no cookies set by us, no analytics, no tracking, no ads. The enquiry form runs entirely in your browser — nothing you type is sent to or stored on any server of ours
3. **WhatsApp enquiries** — when you tap "Send on WhatsApp", your message opens in WhatsApp and is sent directly to us there. That conversation is governed by WhatsApp's (Meta's) own terms & privacy policy; we receive only what you choose to send. We use your enquiry details (name, location, requirement) solely to respond and provide the service — never sold or shared
4. **Hosting** — the site is served by a hosting provider (Netlify/Cloudflare), which may process standard technical logs (IP, browser type) to deliver the site; link to host's privacy policy
5. **External links** — Google Fonts note (fonts loaded from Google's CDN; Google may log the font request — or we self-host fonts to eliminate this, see build note below) 
6. **Your rights / contact** — for any question about your data or to have your enquiry chat deleted, message us on WhatsApp
7. **Changes** — we may update this page; the date above reflects the latest version

> **Build note:** prefer **self-hosting the Poppins/Inter/Mukta font files** (via Fontsource) instead of Google Fonts CDN — removes the only third-party request, making the "we collect nothing" claim fully true, and is faster in India anyway. Decision: self-host.

### Terms of Use — content outline
1. **The website is information only** — content (services, areas, photos) is a general showcase, not a binding offer or quotation
2. **No prices or promises on the site** — all pricing, scope, timelines and any commitments are agreed directly with us on WhatsApp/phone, per job
3. **Enquiries** — sending an enquiry does not create a contract; work begins only on mutual agreement
4. **Third-party products** — equipment brands (cameras, purifiers, EPBX units) belong to their manufacturers; manufacturer warranties are per the manufacturer
5. **Accuracy** — we try to keep information current but don't guarantee the site is error-free
6. **Limitation of liability** — standard clause: use of the *website* is at your own risk; nothing on the site creates liability beyond applicable Indian law
7. **Intellectual property / copyright** — site content and images belong to Divine Security Solution or are used under license (stock photos per their free licenses); don't copy or reuse without permission
8. **Client names** — client references shown with permission
9. **Governing law** — India, courts of Maharashtra jurisdiction
10. **Contact** — WhatsApp 9028670145

### Copyright & footer line
- Footer of every page: `© 2012–{current year} Divine Security Solution. All rights reserved.` + small links: Privacy Policy · Terms of Use
- Stock photo licenses (Pexels) don't require attribution, but keep a note in the repo (`photos/CREDITS.md`) recording each stock image's source URL for the record

### What this site does NOT need (and why — recorded so it isn't added blindly later)
- **Cookie consent banner** — no cookies are set; nothing to consent to
- **GDPR/DPDP data-processing pages** — no personal data is collected or stored by the site itself; India's DPDP Act obligations sit with the WhatsApp conversation handling, which is owner-side, not website-side
- **Refund/cancellation policy page** — no online sales or payments
- **GST/registration display** — not legally required on an informational site; can be added to the footer later if the owner wants

⚠️ Note: this is a sensible standard setup for a small informational business site, not formal legal advice — if the business ever adds payments or accounts, have the pages reviewed properly.

## 11. Still Needed from Owner

- [ ] Approve the drafted About paragraph (§8, EN + MR)
- [ ] Owner's own CCTV install photos if available (can replace/supplement stock)
- [ ] Optional: SVG / clean high-res export of the logo
- [ ] Later: 3–4 testimonials to re-enable that section

## 12. Out of Scope

- No backend, database, email forms
- No payments or booking
- No blog/CMS
- No prices, offers, or promotional claims anywhere
- No inverter services
- No testimonials (for now)
