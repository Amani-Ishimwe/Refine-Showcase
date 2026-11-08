# Ishimwe Amani Samuel — Personal Brand, Product Portfolio & Engineering Platform

Official website and digital platform for **Ishimwe Amani Samuel** (`https://www.amanisamuel.online/`), Product Designer & Software Engineer based in Kigali, Rwanda.

> *"Build with purpose. Live with discipline. Serve with humility."*

---

## 1. Architecture Overview

This platform is engineered with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **React Router v7** (bundled via **Vite 6**).

### Core Information Architecture & Routes
- `/` — **Home / Landing Page**: Hero identity, credibility overview, filterable selected work, products showcase, businesses & ventures, 7 service categories, 6 pricing packages (with USD/EUR/RWF currency switcher), tools & technologies, experience timeline, initiatives & leadership, philosophy, writing, and project inquiry form.
- `/work` — **Selected Work Index**: Filterable by discipline (`Product Design`, `UI/UX Design`, `Software Engineering`, `Full-Stack Development`, `SaaS Products`, `Experiments and Concepts`) and keyword search.
- `/project/:id` & `/work/:id` — **Reusable Case Study Template**:
  - Preserves existing URLs: `/project/acc-website` and `/project/menya-bot%20redesign` (plus `/project/menya-bot-redesign`).
  - Additional case studies: `/project/backlos-ai`, `/project/leads`, `/project/sage`, `/project/passe`.
- `/products` & `/products/:id` — **Products Showcase & Individual Product Detail Pages** (`Backlos AI`, `Leads`, `Sage`, `PASSE`).
- `/ventures` & `/businesses` — **Businesses & Ventures** page distinguishing organizational ventures from individual software products.
- `/services` & `/services/:id` — **Services Overview & 7 Dedicated Service Category Detail Pages**.
- `/pricing` — **Service Packages, Side-by-Side Comparison Matrix, Flexible Engagement Models & FAQ**.
- `/experience` — **Professional Experience Timeline, Education & Tools Directory**.
- `/initiatives` — **Initiatives, Community Impact & Club Leadership**.
- `/about` — **Dedicated About Page, Story & Working Principles**.
- `/contact` — **Dedicated Contact & Structured Project Inquiry Experience**.
- `/writing/:id` — **Editorial Writing & Essays** (`/writing/doc-skill`).

---

## 2. Centralized Content Management

All content is strongly typed in `src/types.ts` and centrally managed in `src/constants.tsx`:
- `PROFILE_CONFIG`: Availability toggle, status text, location, hero copy, contact links, and verified social links.
- `PROJECTS`: Selected portfolio work and structured `caseStudy` sections.
- `PRODUCTS`: Software platforms with ownership distinctions (`Products I Co-Built`, `Products I Engineered`, `Products I Designed`, `Experimental Concepts`).
- `BUSINESS_VENTURES`: Active consulting and software ventures.
- `SERVICE_CATEGORIES`: 7 service groups with plain-English value propositions, deliverables, and timelines.
- `SERVICE_PACKAGES` & `FLEXIBLE_ENGAGEMENT_MODELS`: 6 fixed baseline packages and custom quote models.
- `TOOLS`: Categorized tools with practical explanations.
- `EXPERIENCE_ENTRIES`, `INITIATIVES`, `LEADERSHIP_CLUBS`: Verified chronological records.

---

## 3. Configuration Checklist for Future Updates

To maintain strict content integrity, the following items are configured as optional/pending in `src/constants.tsx` until supplied:
1. **Verified X (Twitter) Profile URL**: Add your URL to `PROFILE_CONFIG.socials` in `src/constants.tsx` and set `verified: true` to automatically display it across the site.
2. **Form Backend Endpoint (Optional)**: Set `VITE_FORM_ENDPOINT` in `.env.local` (e.g. Formspree or custom webhook) for direct background POST requests. By default, the form validates, saves locally, and prepares a structured project brief directly via `mailto:amani.samuel10@gmail.com` with one-click clipboard copy.
3. **Additional Product Screenshots / Public Repo Links**: Add `imageUrl`, `liveUrl`, or `githubUrl` to any entry in `PROJECTS` or `PRODUCTS` in `src/constants.tsx` as products launch publicly.

---

## 4. Local Development & Build

```bash
# Start development server
npm run dev

# Type-check with TypeScript
npx tsc --noEmit

# Build for production
npm run build
```
