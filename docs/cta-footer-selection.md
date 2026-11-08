# CTA & Footer Component Selection Scorecard

> Phase F0 — `feat/cta-footer`
> Evaluated: 2026-11-08
> Decision criteria: fit, size, license, accessibility, tokens-only constraint

---

## Slots Evaluated

| # | Slot | Purpose | Decision |
|---|------|---------|----------|
| 1 | Background texture | Faint grid in CTA tile | **CSS-only** (E1 exception) |
| 2 | Button affordance | Primary pill arrow nudge | **CSS-only** (3 px translateX) |
| 3 | CTA entrance | Section entrance animation | **none** (richMotion=false) |
| 4 | Link hover | Footer nav underline | **CSS-only** (underline-offset) |
| 5 | Signature wordmark | Oversized faded name | **CSS-only** (E2 exception) |

---

## Slot 1 — Background Texture (CTA Tile Grid)

**Goal:** Subtle grid pattern like reference images CTA-1 and CTA-2.

| Option | Score | gzip | License | Verdict |
|--------|-------|------|---------|---------|
| CSS `repeating-linear-gradient` | 5 | 0 KB | — | ✅ **Selected** |
| ReactBits `Threads` | 3 | ~12 KB | MIT | Rejected (canvas, overkill) |
| MagicUI `RetroGrid` | 3 | ~8 KB | MIT | Rejected (animated, distracting) |

**Selected:** CSS-only repeating grid, 64 px cells, 1 px lines at `rgba(255,255,255,0.08)`, radial mask fading to edges. `aria-hidden="true"`, `pointer-events-none`. Documented as **E1**.

---

## Slot 2 — Button Affordance (Arrow Nudge)

**Goal:** Arrow icon nudges 3 px right on hover of primary CTA pill.

| Option | Score | gzip | License | Verdict |
|--------|-------|------|---------|---------|
| CSS `translateX(3px)` on hover | 5 | 0 KB | — | ✅ **Selected** |
| Framer Motion `AnimatePresence` | 2 | ~40 KB | MIT | Rejected (heavy) |
| MagicUI `InteractiveHoverButton` | 3 | ~3 KB | MIT | Rejected (full button, not just icon) |

**Selected:** Pure CSS transition `transform: translateX(3px)` using `--easing-smooth`, `--duration-micro`.

---

## Slot 3 — CTA Section Entrance

**Goal:** Animate the CTA tile in on page load.

| Option | Score | gzip | License | Verdict |
|--------|-------|------|---------|---------|
| CSS `@keyframes slideUp` | 3 | 0 KB | — | Conditional on richMotion |
| None | 5 | 0 KB | — | ✅ **Selected** |

**Selected:** No entrance animation. `richMotion = false` in `siteConfig`. When enabled in future, existing `animate-slide-up` keyframe can be used.

---

## Slot 4 — Footer Link Hover

**Goal:** Subtle underline feedback for footer navigation links.

| Option | Score | gzip | License | Verdict |
|--------|-------|------|---------|---------|
| CSS `text-underline-offset` on hover | 5 | 0 KB | — | ✅ **Selected** |
| ReactBits `ShinyText` | 2 | ~5 KB | MIT | Rejected (too glitzy) |

**Selected:** Pure CSS underline reveal via `text-decoration-thickness` + `underline-offset-4` on `:hover`.

---

## Slot 5 — Signature Wordmark

**Goal:** Oversized faded "Enmanuel Nunez" in footer background per reference FOOT-1.

| Option | Score | gzip | License | Verdict |
|--------|-------|------|---------|---------|
| CSS `clamp()` fluid typography | 5 | 0 KB | — | ✅ **Selected** |
| ReactBits `GradientText` | 2 | ~4 KB | MIT | Rejected (gradient conflicts with dark chapter intent) |

**Selected:** CSS-only: `font-size: clamp(80px, 14vw, 180px)`, `font-weight: 600`, `color: currentColor`, `opacity: 0.07`, `overflow-hidden` with ~30% bottom clip. `aria-hidden="true"`. Documented as **E2**.

---

## Final Tally

- **Third-party components used in CTA + Footer: 0** (maximum budget was 2)
- **CSS-only slots: 5/5**
- **Exceptions documented: E1 (grid), E2 (wordmark)**
- **Budget remaining: 2 third-party components** (available for other sections)
