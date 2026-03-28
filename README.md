# Deepika Gorji — Personal Brand Website

A modern, elegantly designed personal brand website for **Dr. Deepika Gorji** — author, TEDx speaker, and lifelong learner. The site tells her remarkable story of resilience and reinvention across four continents, captured in her tagline: *"Survive. Learn. Move On."*

Built with **Next.js 16 App Router**, **TypeScript**, and **Tailwind CSS**, the site showcases her memoir *A Girl's Journey*, speaking portfolio, blog, and contact information — all wrapped in a signature dark navy and gold aesthetic.

---

## Table of Contents

- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [API Routes](#api-routes)
- [Content & Data](#content--data)
- [SEO & Metadata](#seo--metadata)

---

## Features

- **Responsive design** — mobile-first layout using Tailwind CSS breakpoints
- **Static site generation** — blog posts and book detail pages use `generateStaticParams()` for fast page loads
- **Active navigation highlighting** — header and footer auto-detect the current page using `usePathname()`
- **Optimized images** — Next.js `<Image>` component with priority loading for above-the-fold content
- **Contact form** — controlled React form with a POST API endpoint backed by Zod validation
- **Smooth hover interactions** — cards, buttons, and images have polished hover/scale effects
- **Custom design tokens** — HSL CSS variables for consistent theming across all components
- **Google Fonts integration** — loaded via `next/font/google` with zero layout shift
- **Per-page SEO metadata** — `generateMetadata` on each page with OpenGraph tags
- **Semantic HTML & accessibility** — proper heading hierarchy, landmark elements, and focus states

---

## Pages

### Home `/`
The landing page combines multiple sections in a single scroll experience:

| Section | Description |
|---|---|
| **Hero** | Full-screen hero with portrait, tagline, and CTA buttons |
| **Featured Book** | Showcase of *A Girl's Journey* with 5-star rating and reviews |
| **Journey** | Visual map of her path: India → Iraq → Canada → USA |
| **About** | Three-column layout with portrait and personal highlights |
| **Voices** | Three testimonial cards from notable reviewers |
| **TEDx** | Video preview with play button overlay |
| **Passions** | Four-image grid: Jeep adventures, running, family, dogs |

### About `/about`
Full biography page featuring:
- Sticky portrait with gold border styling on desktop
- "Her Story" section — PhD in Chemistry, 10+ years in oil & gas, career pivot into IT
- "Passions That Drive Her" — four icon cards (Rubicon adventures, 50 5K runs at age 50, family, public speaking)
- Credentials checklist

### Books `/books` & `/books/[id]`
- Book listing page with two-column layout (cover image + full details)
- Star rating, description, and CTA buttons ("Buy on Amazon", "Read Preview")
- Dedicated dynamic detail page per book with static generation
- Reader reviews section with pull quotes

### Speaking `/speaking`
- Featured TEDx talk section with hover play button
- Three speaking topic cards:
  - *Survive. Learn. Move On.* — reinvention through adversity
  - *A Girl's Journey* — cross-border life lessons
  - *The Power of Showing Up* — consistency, Toastmasters, saying yes
- Speaking journey timeline (2008 Toastmasters → 2023 TEDx → ongoing)
- "Book Deepika for Your Event" CTA

### Blog `/blog` & `/blog/[slug]`
- Responsive two-column grid of blog post cards
- Each card shows category (with icon), date, title, excerpt, and "Read More" link
- Dynamic slug-based detail pages with static generation
- Categories: Writing, Passions, Career, Journey, Speaking, Life

### Contact `/contact`
- Left column: email, phone, and Houston, TX location cards; social media icons; speaking booking info
- Right column: contact form with name, email, subject, and message fields
- Form submits via the `/api/contact` endpoint (see [API Routes](#api-routes))

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.2.1 (App Router) |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS 3.4 |
| UI Primitives | Radix UI (full suite via shadcn/ui) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Data Fetching | TanStack Query v5 |
| Notifications | Sonner |
| Fonts | Google Fonts via next/font |
| Animations | tailwindcss-animate |
| Node | ≥ 18 |

---

## Project Structure

```
nextjs-app/
├── public/
│   ├── assets/              # Images (hero, book cover, passions, etc.)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout: fonts, metadata, providers
│   │   ├── page.tsx             # Home page (all section components)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── books/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx    # Dynamic book detail
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx  # Dynamic blog post
│   │   ├── speaking/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts     # Contact form POST endpoint
│   │   ├── globals.css          # Tailwind base + custom component classes
│   │   ├── sitemap.ts
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Fixed nav with active page detection
│   │   │   ├── Footer.tsx       # Links, contact info, social icons
│   │   │   └── NavLink.tsx      # Active-aware navigation link
│   │   ├── sections/            # Homepage section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturedBook.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── VoicesSection.tsx
│   │   │   ├── TedxSection.tsx
│   │   │   └── PassionsSection.tsx
│   │   ├── forms/
│   │   │   └── ContactForm.tsx  # Client component — controlled form
│   │   └── ui/                  # shadcn/ui primitives (button, card, etc.)
│   ├── lib/
│   │   ├── constants.ts         # All site content and data arrays
│   │   ├── types.ts             # TypeScript interfaces
│   │   └── utils.ts             # cn() helper (clsx + tailwind-merge)
│   └── proxy.ts
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Design System

The entire site follows a **dark navy and gold** luxury aesthetic.

### Color Palette

| Token | HSL Value | Usage |
|---|---|---|
| `--background` | `222 47% 8%` | Page background (deep navy) |
| `--foreground` | `43 50% 85%` | Primary text (warm cream) |
| `--primary` | `43 72% 55%` | Gold accent — buttons, borders |
| `--secondary` | `222 30% 18%` | Card backgrounds |
| `--gold-light` | `43 60% 70%` | Hover states, subtle accents |
| `--gold-dark` | `43 80% 40%` | Deeper gold for contrast |
| `--navy-light` | `222 35% 16%` | Elevated surfaces |
| `--navy-medium` | `222 40% 12%` | Dividers, subtle backgrounds |

### Typography

| Role | Font | Usage |
|---|---|---|
| Display | Playfair Display (serif) | Page headings, hero titles |
| Body | Lato (sans-serif) | Body copy, UI text |
| Accent | Cormorant Garamond (serif) | Pull quotes, italicized callouts |

### Custom Utility Classes

These classes are defined in `globals.css` and used throughout the codebase:

| Class | Description |
|---|---|
| `.gold-btn` | Solid gradient gold button with hover shadow glow |
| `.gold-btn-outline` | Transparent button with gold border; fills gold on hover |
| `.navy-card` | Gradient card with subtle gold border and navy background |
| `.gold-gradient-text` | Text with a 135° gold gradient and background-clip |
| `.gold-border-ornate` | Gold border with inset/outer box-shadow glow effect |
| `.section-divider` | Horizontal rule that fades out at edges with a gradient |
| `.star-rating` | Applies gold color to star icon elements |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (comes with Node)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd nextjs-app

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## API Routes

### `POST /api/contact`

Handles contact form submissions.

**Request body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Speaking inquiry",
  "message": "I would love to book Deepika for our event..."
}
```

**Validation (Zod):**

| Field | Constraint |
|---|---|
| `name` | 1–100 characters |
| `email` | Valid email format |
| `subject` | 1–200 characters |
| `message` | 10–5000 characters |

**Responses:**

| Status | Meaning |
|---|---|
| `200` | Message received successfully |
| `422` | Validation error — returns field-level error messages |
| `500` | Server error |

> **Note:** The endpoint currently logs to the console. To send real emails, integrate a service like [Resend](https://resend.com) or [SendGrid](https://sendgrid.com) inside `src/app/api/contact/route.ts`.

---

## Content & Data

All site content is centralized in **`src/lib/constants.ts`** — no CMS required. Update this file to change text, images, blog posts, or speaking events.

Key data structures:

| Export | Description |
|---|---|
| `navLinks` | 6 navigation items |
| `featuredBook` | Book object with title, description, cover path, and reviews array |
| `blogPosts` | 6 blog post objects with slug, title, excerpt, date, and category |
| `passions` | 4 passion cards with image paths and labels |
| `countries` | 4 journey countries with year and label |
| `speakingTopics` | 3 speaking topic cards |
| `speakingEvents` | 3 timeline events with year, location, and description |

TypeScript interfaces for all data are in **`src/lib/types.ts`**.

---

## SEO & Metadata

Each page exports a `metadata` object (or `generateMetadata` function) with:

- Unique `title` following the template `"%s — Deepika Gorji"`
- Custom `description` per page
- `openGraph` tags with locale `en_US`

The root layout in `src/app/layout.tsx` sets the default metadata and viewport configuration.

A `sitemap.ts` file is included at the app root for automatic sitemap generation.
