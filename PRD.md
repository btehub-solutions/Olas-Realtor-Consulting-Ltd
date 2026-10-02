# Product Requirements Document (PRD) — Olas Realtor Consulting Ltd MVP

## 1. Project Overview & Positioning
- **Company**: Olas Realtor Consulting Ltd
- **Niche**: Premier Nigerian Real Estate Consulting & Strategic Advisory (Abeokuta, Ogun State, Western Region, and Diaspora Investors)
- **Core Value Proposition**: Verified property acquisitions, zero-encumbrance land sales, title perfection & C of O processing, asset & facility management, and institutional real estate advisory.
- **Tech Stack**: Next.js 16 (App Router + Turbopack), React 19, TypeScript, Tailwind CSS v4, `react-icons/fa6` (unified icon library).

---

## 2. Global Layout Architecture
- **Navbar**: High-contrast, clean corporate header with logo, primary navigation links (`Home`, `Properties`, `About Us`, `Contact`), and `Schedule Consultation` primary button.
- **Footer**: Deep dark `#1F2421` background, 3px tricolor top stripe (`#00A86B` / `#00D084` / `#C41E3A`), compact 4-column balanced grid, white headings, `react-icons/fa6` brand and contact icons, and full-width red subscribe button.
- **Floating Contact Hub**: Fixed WhatsApp support button (`#25D366`) and smooth `ScrollToTop` floating button.
- **Icon Library Standard**: Exclusively `react-icons/fa6` across the entire project (zero Font Awesome class dependencies, zero Lucide).

---

## 3. Approved MVP Page & Section Structure (4 Core Pages)

### Page 1: Home (`/`) — 7 Sections
1. **Section 1: Hero Section & Navigation**
   - High-impact luxury headline, strategic investor positioning blurb, dual CTA (`Explore Portfolio` / `Schedule Consultation`).
2. **Section 2: Trust & Credibility Bar**
   - 4 key credibility metrics: Years in Business (15+), Verified Closings (500+), Title Regularization Track (100%), Active Diaspora Clients.
3. **Section 3: Core Capabilities & Services**
   - 4 primary capability cards: Property Acquisitions, Asset & Facility Management, Title Perfection & C of O, Valuation & Advisory.
4. **Section 4: Featured Developments & Portfolio**
   - Curated high-yield assets with status badges, verified title status, key specifications, and direct "Inquire on Asset" action buttons.
5. **Section 5: The Olas Advantage (Why Choose Us)**
   - 4 institutional pillars: Strict Registry Due Diligence, High-Yield Selection, Direct Transparent Transactions, Dedicated Post-Closing Management.
6. **Section 6: Client & Investor Endorsements**
   - Real client testimonials from buyers, landlords, and professional partners.
7. **Section 7: Final Action & Consultation CTA**
   - Light background (`#FAFBFC`), green heading (`#00A86B`), neutral subtext, and solid red button for instant consultation booking.

---

### Page 2: Properties / Portfolio (`/properties`) — 4 Sections
1. **Section 1: Portfolio Header & Search Bar**
   - Headline and quick keyword search.
2. **Section 2: Filter & Sorting Controls**
   - Category filtering (Residential, Commercial, Multi-Unit, Land Banks) and status toggles.
3. **Section 3: Property Grid Showcase**
   - Standardized 10px radius property cards with imagery, title status badges, specs (beds/baths/area), and inquiry routing.
4. **Section 4: Direct Asset Sourcing Banner**
   - Custom acquisition request banner connecting investors directly with advisory brokers.

---

### Page 3: About Us (`/about`) — 5 Sections
1. **Section 1: About Hero & Corporate Vision**
   - Origin story, mission, and commitment to transparent wealth creation.
2. **Section 2: Founder & Leadership Spotlight**
   - Profile of Kolade Abiola Daramola, credentials, and message to investors.
3. **Section 3: Our Core Pillars (Vision, Mission & Values)**
   - Integrity, Excellence, Due Diligence, and Client Focus.
4. **Section 4: Track Record & Milestone Stats**
   - Data-backed metrics highlighting transaction success and client retention.
5. **Section 5: Corporate Governance & Legal Security**
   - Explaining title perfection, survey lodgment, and legal safeguards.

---

### Page 4: Contact & Consultation (`/contact`) — 3 Sections
1. **Section 1: Contact Hero & Intro**
   - Clear greeting and direct channels overview.
2. **Section 2: Direct Consultation Grid**
   - **Left Column**: Physical office address (48, Olayiwola Bankole Street, Oluwo, Abeokuta), phone numbers, email desk, business hours, and quick WhatsApp trigger.
   - **Right Column**: Clean lead-capture inquiry form with property subject pre-filling.
3. **Section 3: Interactive Location & Inspection Map**
   - Visual map showing Abeokuta headquarters with landmark directions.

---

## 4. Established Design System & UI Rules
- **Color Palette**:
  - Primary Green: `#00A86B`
  - Accent Red: `#C41E3A`
  - Dark Charcoal (Footer/Dark Sections): `#1F2421`
  - Off-White Background: `#FAFBFC` / `#FFFFFF`
  - Text Gray: `#4B5563` / `#6B7280`
- **Buttons**: `42px` standard height, `6px` border radius, bold `0.875rem` font, solid brand red (`#C41E3A`) for primary actions.
- **Cards**: `10px` border radius, subtle `1px solid rgba(0, 0, 0, 0.08)` border, zero dead space, elevation hover shadow.
- **Workflow Rule**: Skip intermediate build/status checks; verify only at milestone completion.
