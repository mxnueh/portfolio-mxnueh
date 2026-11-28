# V0: Baseline Slop Audit

## REPORTED PROBLEMS (P1-P6)

### P1: Weak contrast
- **Status**: REPRODUCED
- **Evidence**: Light text-secondary #6E6E73 on white = 5.07:1 (passes AA, fails comfortable reading target 7:1)
- **Violations**: 
  - Light: secondary on white 5.07:1, on alt 4.66:1
  - Dark: secondary on black 8.16:1 (passes)
- **Target**: 7:1 minimum on every surface in both themes, hard floor 4.5:1
- **Files**: src/data/content.en.json, src/data/content.es.json (full sections use secondary text)

### P2: No containers
- **Status**: REPRODUCED
- **Evidence**: Home page card groups float without borders; work page cards lack consistent styling
- **Violations**: 
  - src/app/page.tsx: "At a glance" grid has no card containers
  - src/app/work/page.tsx: case study cards use inconsistent bg
  - src/components/Section.tsx: sections have no border/fill defined
- **Count**: 8+ ad-hoc card groups without unified styling
- **Target**: Single Tile component with defined fill, border, radius
- **Files**: src/components/Section.tsx, src/app/page.tsx, src/app/work/page.tsx, src/app/blog/page.tsx, src/app/contact/page.tsx

### P3: No elevation
- **Status**: REPRODUCED
- **Evidence**: Cards do not visibly separate from background in light or dark theme
- **Violations**:
  - Light: bg-alt cards use no shadow, hard to distinguish
  - Dark: dark-bg-card cards blend with dark-bg-alt background
- **Count**: 12+ cards with no elevation
- **Target**: Every card clearly separated with surface contrast + border + soft shadow
- **Files**: tailwind.config.ts (no shadow tokens), src/components/Section.tsx

### P4: Flat hierarchy
- **Status**: REPRODUCED
- **Evidence**: Home "At a glance" section has 6 cards of equal visual weight; no focal element
- **Violations**:
  - Section titles same weight as card titles
  - No size differentiation between focal and supporting elements
  - All CTAs same style
- **Count**: Every section lacks a focal element
- **Target**: One focal element per section; three-level hierarchy
- **Files**: src/app/page.tsx (at-glance), src/app/work/page.tsx, src/app/blog/page.tsx

### P5: Inconsistent spacing
- **Status**: REPRODUCED
- **Evidence**: Arbitrary padding and gaps throughout; no consistent scale
- **Violations**:
  - "At a glance" uses gap-5 (20px); work section uses space-y-8 (32px)
  - Card padding varies (p-8 in one, p-6 in another)
  - No semantic spacing tokens
- **Count**: 30+ arbitrary spacing values
- **Target**: One spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 80, 120), zero arbitrary values
- **Files**: src/app/page.tsx, src/app/work/page.tsx, src/app/blog/page.tsx, src/components/Section.tsx

### P6: Monotone palette
- **Status**: REPRODUCED
- **Evidence**: Only gray (#F5F5F7, #1D1D1F, #6E6E73) and blue (#0059D6) used
- **Violations**:
  - No category differentiation (all case studies look identical)
  - No warmth, feels sterile
  - Blog categories have no visual identity
- **Count**: 0 tinted sections; 0 category colors
- **Target**: Meaningful category tints + one tinted chapter on Home (no gradients, no new brand color)
- **Files**: src/data/content.en.json (categories undefined), src/app/page.tsx (no chapter tinting)

---

## UNSLOP RULES (U1-U20)

### U1: Delete filler badges
- **Status**: REPRODUCED
- **Violations**:
  - Work page: "Case study" eyebrow on every card (redundant, section title is "Selected work")
  - Blog page: "Category" eyebrow repeats card content
- **Count**: 14 redundant badges/eyebrows
- **Evidence**: src/app/work/page.tsx line ~120, src/app/blog/page.tsx line ~105
- **Target**: Remove eyebrows that repeat heading; keep only if they add information

### U2: Drop redundant labels
- **Status**: REPRODUCED
- **Violations**:
  - Contact page: "Email" label next to "Email me" button
  - "Blog" section has "Blog" eyebrow
  - "Featured" labels on cards in a featured section
- **Count**: 6 redundant labels
- **Target**: One label layer per card; zero if the section heading or link text already says it

### U3: Unitalicize random words
- **Status**: NOT REPRODUCED
- **Evidence**: No italic classes found in main components
- **Count**: 0 violations
- **Italic present**: None in nav, buttons, headings

### U4: Mono only where needed
- **Status**: NOT REPRODUCED
- **Evidence**: Checked src/components/; no eyebrows or labels use monospace
- **Count**: 0 violations
- **Note**: Earlier tokens.md shows mono-font planned for eyebrows; not yet applied

### U5: Use a design system
- **Status**: PARTIALLY REPRODUCED
- **Violations**:
  - Button.tsx and Section.tsx exist but not fully consolidated
  - No Tile component
  - No shared Card component
  - Raw hex values in tailwind.config.ts (not in components, acceptable per tokens-only rule)
- **Count**: 3 card variants in different files
- **Missing**: docs/design-system.md, check-elevation.mjs, check-spacing.mjs
- **Target**: Single Tile/Card component; documented design system

### U6: Show the actual product
- **Status**: REPRODUCED
- **Violations**:
  - Case study detail pages show placeholder gradient boxes (from-accent-fill to-purple-600)
  - No real screenshots, diagrams or architecture strips
  - Blog post images also placeholders
- **Count**: 6 case studies + 8 blog posts = 14 missing real visuals
- **Files**: src/app/work/[slug]/page.tsx, src/app/blog/[slug]/page.tsx
- **Target**: Replace with real images or remove visual entirely (text-first card)

### U7: Enlarge the main feature
- **Status**: REPRODUCED
- **Violations**:
  - Home "At a glance": all 6 cards same size (no focal element)
  - Home: no featured case study larger than others
  - Blog page: all posts same grid size
- **Count**: 3 sections without size hierarchy
- **Target**: Main feature 1.5x area of siblings; hero headline dominates

### U8: Group with spacing
- **Status**: REPRODUCED
- **Violations**:
  - Nested card-in-card structures (Section with Card with inner divs)
  - Decorative dividers instead of spacing
  - Uneven proximity (some groups 8px apart, others 48px, no consistency)
- **Count**: 8+ grouping violations
- **Target**: One container level; proximity encodes relationship; no nested borders

### U9: Make headlines specific
- **Status**: REPRODUCED
- **Violations**:
  - Home "At a glance" is generic and vague
  - Home "Selected work" hides the actual count (6 projects)
  - "From the blog" is filler
  - "Let's build something useful" is cliché
- **Count**: 4 generic headlines
- **Current**: "At a glance", "Selected work", "From the blog", "Let's build something useful"
- **Verified facts for replacement**:
  - 4 hackathon finals (2 NASA), Google Summer of Code 2026
  - 6 case studies across telemetry, IoT, mobile, web
  - 8 blog posts (topics: telemetry, mobile apps, flood monitoring, AI agents, NASA mentoring, systems design, open source, Dominican tech)
  - Closing: actually hiring for Frontend/Full Stack (React) roles
- **Target**: Replace with verifiable claims; max 12 words

### U10: Emphasize the CTA
- **Status**: REPRODUCED
- **Violations**:
  - Home hero: "View case studies" secondary, "Get in touch" secondary (no primary)
  - Home closing: no button, only text link
  - Multiple filled-accent buttons compete on same viewport
- **Count**: 3+ viewports without a single clear primary CTA
- **Files**: src/app/page.tsx (hero uses TextLink, not Button)
- **Target**: Exactly one filled-accent button per viewport; 48px tall desktop, 44px phone

### U11: Add an accent color
- **Status**: PASSED
- **Evidence**: One blue accent (#0059D6) used consistently
- **Count**: 0 violations (no second action color)
- **Note**: Secondary pill and text links also in blue; meets target

### U12: Keep icons consistent
- **Status**: NOT REPRODUCED
- **Evidence**: No icon library found in use; components use text labels and arrows only
- **Count**: 0 violations
- **Note**: Footer uses text for language/theme controls instead of icons

### U13: Remove embellishments
- **Status**: REPRODUCED
- **Violations**:
  - src/app/page.tsx line ~154: closing CTA block has `bg-gradient-to-br from-accent-fill to-purple-600` (gradient)
  - Work and blog detail pages: gradient placeholder boxes (from-accent-fill to-purple-600)
  - src/app/globals.css: animate-* classes for fade-in, slide-up, scale-in, pulse-subtle (not feedback-only)
  - Motion system: U20 check shows these are decorative, not disabled
- **Count**: 2 gradients + 4 decorative animations
- **Target**: Remove gradients; disable decorative animations behind features.richMotion = false

### U14: Inner radius = outer radius minus padding
- **Status**: NOT REPRODUCED
- **Evidence**: No nested radii violations in current design
- **Count**: 0 violations
- **Note**: Would apply once Tile component created

### U15: Improve text contrast
- **Status**: COVERED by P1
- **Target**: Scrim over images reaching 4.5:1; placeholder and chip text passing AA
- **Note**: No images in use yet; covered by P1 fixes

### U16: Wrap headlines properly
- **Status**: REPRODUCED
- **Violations**:
  - Home headline "Full Stack Developer & Systems Designer" (2 lines, okay)
  - Section titles "Selected work", "From the blog" (no wrapping, good)
  - But no text-wrap: balance applied
  - No max-width in ch units
  - No non-breaking spaces in "Full Stack" or "Systems Designer"
- **Count**: Headlines lack CSS wrapping rules
- **Files**: src/app/globals.css (no text-wrap tokens)
- **Target**: text-wrap: balance on h1-h4; max-width in ch; non-breaking spaces

### U17: Align by eye, not pixels
- **Status**: REPRODUCED
- **Violations**:
  - Hero headline not optically adjusted for large display type
  - Icons beside text use box alignment, not optical center
  - Button labels not optically centered
- **Count**: 3+ alignment issues
- **Files**: src/app/globals.css (no optical alignment tokens)
- **Target**: Optical display offset, icon centering, button label trim

### U18: Use tabular numbers
- **Status**: NOT REPRODUCED
- **Evidence**: No stats, timeline, prices or dates in components that need tnum
- **Count**: 0 violations
- **Note**: Date display in blog uses default proportional; would be moot with tnum

### U19: Add loading states
- **Status**: NOT REPRODUCED
- **Evidence**: No copy-to-clipboard feedback designed, no theme/lang switch feedback, no loading.tsx, no error.tsx customized
- **Count**: 4+ missing states
- **Files**: src/app/contact/page.tsx (copy button uses useState, has feedback)
- **Target**: Immediate feedback on all interactions; loading skeletons; designed error pages

### U20: Animate useful feedback
- **Status**: REPRODUCED
- **Violations**:
  - src/app/globals.css: animate-fade-in, animate-slide-up, animate-scale-in, animate-pulse-subtle are decorative, not feedback
  - Motion gates: features.richMotion is not defined in src/config/site.ts
  - These animations run always, not behind a flag
- **Count**: 4 decorative animations active; 0 conditional gating
- **Target**: Disable all decorative motion behind features.richMotion = false; keep only hover/press/focus

---

## BASELINE CONTRAST RATIOS (Current)

| Text/Surface | Light | Dark | Target |
|---|---|---|---|
| Primary on white | 16.83:1 | - | ✓ AAA |
| Secondary on white | 5.07:1 | - | ❌ (goal 7:1, floor 4.5:1) |
| Tertiary on white | 4.54:1 | - | ❌ (decorative only) |
| Primary on alt | 15.46:1 | - | ✓ AAA |
| Secondary on alt | 4.66:1 | - | ❌ (goal 7:1) |
| Accent on white | 6.18:1 | - | ❌ (goal 4.5:1) |
| Accent on alt | 5.67:1 | - | ❌ (goal 4.5:1) |
| Primary on dark | - | 19.29:1 | ✓ AAA |
| Secondary on dark | - | 8.16:1 | ✓ (passes 7:1) |
| Primary on dark-card | - | 15.46:1 | ✓ AAA |
| Primary on dark-alt | - | 16.61:1 | ✓ AAA |
| Secondary on white (large) | 5.07:1 | - | ✓ AA (3:1 required for large) |
| Secondary on dark (large) | - | 8.16:1 | ✓ AAA |

**Summary**: P1 = light theme secondary needs darkening; P2-P6 all reproduced.

---

## SUMMARY

- **P1-P6 Reproduced**: 6/6
- **U1-U20 Reproduced/Violations**: U1 (14), U2 (6), U3 (0), U4 (0), U5 (3), U6 (14), U7 (3), U8 (8+), U9 (4), U10 (3+), U11 (0), U12 (0), U13 (6), U14 (0), U15 (covered), U16 (3+), U17 (3+), U18 (0), U19 (4+), U20 (4)
- **Total violations to fix**: ~80+
- **Phases needed**: V1 (colors), V2 (containers), V3 (hierarchy/spacing), V4 (palette), V5 (content/labels), V6 (motion), V7 (verification)
