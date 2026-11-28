# Design System & Token Specifications

## 1. Tokens & Scopes

### Light Theme (`:root`)
- **Backgrounds**: `--bg-page: #FFFFFF`, `--bg-alt: #F5F5F7`, `--bg-card: #FFFFFF`
- **Text**: `--text-primary: #1D1D1F`, `--text-secondary: #5A5A5E` (6.87:1 on white), `--text-tertiary: #767676` (4.54:1)
- **Accent**: `--accent-fill: #0059D6`, `--accent-hover: #0066E3`, `--accent-pressed: #005AC9`
- **Separators & Borders**: `--separator: #C7C7CC`, `--border-card: rgba(0, 0, 0, 0.08)`
- **Elevation**: `--shadow-e1: 0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)`, `--shadow-e2`, `--shadow-e3`

### Dark Theme (`.dark`)
- **Backgrounds**: `--bg-page: #000000`, `--bg-alt: #161617`, `--bg-card: #1D1D1F`
- **Text**: `--text-primary: #F5F5F7`, `--text-secondary: #AEAEB2` (9.50:1 on black), `--text-tertiary: #86868B`
- **Separators**: `--separator: rgba(255, 255, 255, 0.16)`

### Closing Chapter Scope (`.chapter-dark`)
Per decision **D-A**, the closing chapter is **always dark** in both light and dark themes. It contains the closing `CtaSection` and `SiteFooter`.
```css
.chapter-dark {
  --bg-page: #000000;
  --bg-alt: #161617;
  --bg-card: #1D1D1F;
  --text-primary: #F5F5F7;
  --text-secondary: #AEAEB2;
  --text-tertiary: #86868B;
  --separator: rgba(255, 255, 255, 0.16);
  --on-accent: #FFFFFF;
  --on-accent-secondary: #E5EEFF;
  --cta-grid-cell: 64px;
  --cta-grid-line: rgba(255, 255, 255, 0.08);
  --wordmark-opacity: 0.07;
  --wordmark-clip: 30%;
  color-scheme: dark;
}
```

---

## 2. Spacing Scale

Strict 10-step scale (in px):
`0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 120`
Validated automatically by `scripts/check-spacing.mjs`. Arbitrary utility classes (`p-[...]`, `m-[...]`, `gap-[...]`) are strictly rejected.

---

## 3. Radii Scale

- Small elements / controls / inner media (U14): `rounded-sm` (12px)
- Medium / cards: `rounded-md` (16px)
- Large tiles & containers: `rounded-large` (28px)
- Pills / full rounded: `rounded-full` (9999px)

---

## 4. Closing CTA & Footer Specifications

### CTA Section (`CtaSection.tsx`)
- **A ("statement")**: Headline on left, primary pill on right. Used at the end of `/work`, `/blog`, `/about`, and slug detail pages.
- **B ("actions")**: Headline and lead on left, primary pill + secondary text link below, faint grid background behind. Used on Home.
- **C ("evidence")**: Text column (6 cols) + real screenshot crop bleeding off bottom right edge (6 cols).
- `/contact` has **NO CTA** section (destination page).
- **Primary Pill**: 48px height (44px on phone), white background with dark text `#1D1D1F`, arrow icon nudging 3px on hover. Focus ring: 2px white with 2px offset.
- **Secondary link**: Text link with hover underline, white text.

### Site Footer (`SiteFooter.tsx` & `SiteFooterClient.tsx`)
- Server component with client islands for copy email button and theme/language switch.
- 12-column grid:
  - Brand: columns 1–5
  - Spacer: column 6
  - Navigate: columns 7–8
  - Elsewhere: columns 9–10
  - Contact: columns 11–12
- Hairline top and middle dividers: `var(--separator)`.
- Bottom row: left copyright with build-time year, right 44px accessible control buttons with visible borders and focus rings.

---

## 5. Documented Exceptions to Rule U13

Per specification decision **D-D**, exactly two static exceptions to Rule U13 (no embellishments) are permitted:

### E1: CTA Tile Grid Pattern
- **Flag**: `cta.gridPattern` (default `true` in `siteConfig`)
- **Implementation**: Pure CSS repeating linear gradients (`64px` cells, `1px` lines at `rgba(255,255,255,0.08)`) with radial gradient alpha mask fading toward edges.
- **Rationale**: Adds subtle engineering depth to the primary call-to-action tile without adding dependencies, animation overhead, or external SVG/canvas complexity.
- **Turning off**: Set `cta.gridPattern: false` or omit the grid background element.

### E2: Footer Signature Wordmark
- **Flag**: `footer.signature` (default `true` in `siteConfig`)
- **Implementation**: Static oversized typography displaying `"Enmanuel Nunez"`, `clamp(72px, 14vw, 180px)`, `opacity: 0.07`, bottom ~30% clipped by `overflow: hidden`, `aria-hidden="true"`, placed below the footer bottom row.
- **Rationale**: Serves as a subdued architectural sign-off / signature grounding the dark closing chapter, reminiscent of precision editorial portfolios.
- **Turning off**: Set `footer.signature: false` or set `--wordmark-opacity: 0`.

---

## 6. Contrast Standards & WCAG 2.1 Verification

Automated audit in `scripts/check-contrast.mjs`:
- Normal text: ≥ 4.5:1 (WCAG AA)
- Large text: ≥ 3.0:1 (WCAG AA)
- UI components & Focus rings: ≥ 3.0:1
All 23 color pairs across light, dark, CTA tile, and `.chapter-dark` meet or exceed their targets.
