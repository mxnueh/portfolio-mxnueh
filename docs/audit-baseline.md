# Audit Baseline - WP0

Generated: 2026-11-07

## Build Status

✅ Build passes with exit code 0
- 24 routes generated (static + partial prerender)
- Next.js 16.4.5, React 19.3.0, Tailwind 4
- TypeScript 5, no explicit lint config

## Route Inventory

### Routes that exist:
- `/` (home EN)
- `/es` (home ES)
- `/blog/[slug]` (8 posts)
- `/work/[slug]` (6 case studies)
- `/products/[slug]` (2 products)
- `/about/page.tsx` EXISTS
- `/contact/page.tsx` EXISTS
- `/privacy/page.tsx` EXISTS
- `/terms/page.tsx` EXISTS
- `/refunds/page.tsx` EXISTS

### Routes missing index pages:
- `/work` - MISSING (only [slug] exists)
- `/blog` - MISSING (only [slug] exists)
- `/products` - MISSING (only [slug] exists)

### Routes linked but don't exist:
- `/es/work` - MISSING
- `/es/blog` - MISSING
- `/es/products` - MISSING
- `/es/about` - MISSING
- `/es/contact` - MISSING
- `/es/privacy` - MISSING
- `/es/terms` - MISSING
- `/es/refunds` - MISSING

## [ADD] Placeholder Inventory

### Content files:
- `content.en.json`: 5 occurrences
  - hero.image
  - products.lead
  - closing.secondaryCTA.href (cv-link)
  - footer product categories (2x)
  
- `content.es.json`: 5 occurrences (same locations)

- `products.ts`: 48 occurrences
  - Product 1: name, tagline, category, price, priceNote, hero, gallery (3), features (9), included (4), faq (6), stack
  - Product 2: same structure (24 total)

- `posts.ts`: 8 occurrences
  - All 8 posts have image: "[ADD screenshot]"

- `caseStudies.ts`: 6 occurrences
  - All 6 case studies have image: "[ADD screenshot]"

### Components with placeholder filtering:
- `Button.tsx`: Skips rendering if href includes "[ADD]"
- `Footer.tsx`: Filters links containing "[ADD]"

### Broken links:
- `href="#"` appears 2 times (CV download in EN and ES home)
- All product links point to placeholder data

## Undefined Tailwind Tokens

Searching for desktop/tablet/mobile suffix classes...

Found in legacy code but not actively used in current pages:
- `text-hero-tablet`, `text-hero-mobile` (not in current tailwind.config.ts)
- `text-section-tablet`, `text-section-mobile`
- `text-subhead-tablet`, `text-subhead-mobile`
- `text-card-title-tablet`, `text-card-title-mobile`
- `text-lead-tablet`, `text-lead-mobile`

Current `tailwind.config.ts` defines:
- Base text sizes (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl)
- Semantic tokens: eyebrow, caption, body, body-lg, lead, card-title, subhead, section, hero
- No responsive variants with -tablet/-mobile suffixes

## Duplicated EN/ES Implementations

- `src/app/page.tsx` - English home
- `src/app/es/page.tsx` - Spanish home (completely separate implementation, 211 lines duplicated logic)

Both render the same structure with different content dictionaries.

## Missing Features

1. No markdown renderer installed (react-markdown not in package.json)
2. No prose typography plugin for Tailwind
3. No accessibility testing tools
4. No link checker
5. No placeholder checker
6. No contrast checker
7. No i18n validator
8. No sitemap generation
9. No robots.txt
10. No structured data

## Summary

**Critical issues:**
- 8 missing route index pages (work, blog, products x2 locales + ES locale for all static pages)
- 62 [ADD] placeholders across data files
- 2 href="#" links (broken CV download)
- No ES routes exist beyond `/es` home
- Duplicated page implementations for EN/ES

**Moderate issues:**
- No markdown rendering (case studies and posts show raw text)
- Undefined responsive typography tokens referenced in old code
- No automated checks for placeholders, links, contrast, i18n

**Low priority:**
- Products have complete placeholder structure
- Footer filters work but hide missing data instead of fixing it
- Legal pages exist but are placeholder stubs
