---
name: Guille Sánchez — Portfolio
description: Neo-brutalist single-page portfolio for a full-stack engineer with a research/data background.
colors:
  bg: "#18181a"
  bg2: "#202022"
  text: "#f2f2f0"
  muted: "#b8b8bb"
  faint: "#8f8f92"
  steel-blue: "#8fb2d9"
  signal-rust: "#e2704f"
  border: "#f2f2f0"
typography:
  display:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "clamp(52px, 7vw, 84px)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "0.01em"
  headline:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "clamp(32px, 4vw, 52px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "0.01em"
  headline-lg:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "clamp(32px, 4.5vw, 56px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "0.01em"
  stat:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "32px"
    fontWeight: 700
    letterSpacing: "0.01em"
  stat-sm:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "30px"
    fontWeight: 700
    letterSpacing: "0.01em"
  title:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "24px"
    fontWeight: 700
    letterSpacing: "0.01em"
  title-sm:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "20px"
    fontWeight: 700
    letterSpacing: "0.01em"
  eyebrow:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "16px"
    fontWeight: 600
    letterSpacing: "0.04em"
  body:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
  label-lg:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "14px"
    fontWeight: 700
    letterSpacing: "0.04em"
  label-md:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.04em"
  label-sm:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.06em"
  label-xs:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  sm: "14px"
  md: "20px"
  lg: "40px"
components:
  button-primary:
    backgroundColor: "{colors.steel-blue}"
    textColor: "{colors.bg}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "24px"
  chip:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "5px 12px"
---

# Design System: Guille Sánchez — Portfolio

## Overview

**Creative North Star: "The Brutalist Terminal"**

This is raw, unornamented, systems-engineer honesty rendered as interface: no gloss, no gradient, no blur — just structure. Every surface is a flat block with a hard 2px edge and a solid offset shadow standing in for depth. Type is condensed, uppercase, and load-bearing — headlines behave like stenciled labels on a technical drawing, not editorial display copy. The system trusts structure to carry personality instead of decoration.

Dark-first: the site ships in dark mode by default (`data-theme="dark"` on `<html>`), with a light theme as the explicit alternate, not the primary experience.

**Key Characteristics:**
- Zero border-radius everywhere — no rounded corners, no exceptions.
- Hard 2px borders on every bounded surface, always solid, always full-opacity.
- Offset block shadows (never blurred) as the sole depth cue — structural, not ambient.
- Barlow Condensed, uppercase, letter-spaced for all headlines/labels; Barlow (regular case) for body copy.
- No glassmorphism, no gradients, no soft shadows, no glow — `--glass` and `--glassb` are literally `transparent` in the tokens, `--r`/`--rl` are literally `0px`.

## Colors

Two accents on a near-black/near-white neutral scaffold — cool Steel Blue does the structural and interactive work, warm Signal Rust is reserved for status and liveness.

### Primary
- **Steel Blue** (`#8fb2d9` dark / `#3a5a8c` light): links, active nav state, primary buttons, section-tag accents, hover states on chips/cards. The system's one interactive color — if something is clickable or highlighted, it likely turns Steel Blue.

### Secondary
- **Signal Rust** (`#e2704f` dark / `#b8482f` light): reserved for liveness/status signals only — the "available for work" pulse dot, the experience timeline dot, the "Live" project badge. Never used for standard interactive elements.

### Neutral
- **Void** (`#18181a` dark bg / `#f2f2f0` light bg): page and card background.
- **Panel** (`#202022` dark / `#e8e8e4` light, `--bg2`): secondary surface, used for project-image placeholders.
- **Paper Text** (`#f2f2f0` dark / `#17171a` light, `--text`): primary text and border color — border and text share the same token, reinforcing the "everything is drawn in the same ink" read.
- **Muted** (`#b8b8bb` dark / `#4a4a4d` light): body copy, descriptions.
- **Faint** (`#8f8f92` dark / `#656568` light): timestamps, tertiary labels. Tuned to clear WCAG AA 4.5:1 against `--bg` in both themes (5.5:1 dark, 5.2:1 light).

### Named Rules
**The One Ink Rule.** Border color and text color are the same token (`--border` = `--text`). Structure and content are drawn in one ink; nothing is a lighter or "softer" gray border floating apart from the type.

## Typography

**Display/Label Font:** Barlow Condensed (with sans-serif fallback)
**Body Font:** Barlow (with sans-serif fallback)

**Character:** Condensed uppercase carries all structural and navigational weight — headlines, labels, nav, buttons, badges. Regular-width Barlow is reserved for anything meant to be read at length (descriptions, body paragraphs), so the two fonts map directly to "scan" vs. "read."

### Hierarchy

Two parallel scales, both Barlow Condensed uppercase for chrome and Barlow sentence-case for reading — see the All-Caps Structural Rule below. Each step is a real, repeated value pulled from the implementation; none are one-offs.

**Display & heading roles:**
- **Display** (700, `clamp(52px,7vw,84px)`, line-height 0.96): hero name (`.h-name`) only — the one place the system goes maximal.
- **Headline** (700, `clamp(32px,4vw,52px)`, line-height 1.02): section titles (`.s-title`).
- **Headline-lg** (700, `clamp(32px,4.5vw,56px)`, line-height 1.02): the Contact closing headline (`.c-title`) only — same role, a wider cap since it's the page's final, highest-stakes CTA.
- **Stat** (700, 32px, 24px at ≤480px): hero stat numbers (`.sn`) — the largest numeric display.
- **Stat-sm** (700, 30px): the status card's role title (`.status-title`) — same tier as Stat, one step down.
- **Title** (700, 24px, 19px at ≤480px): content-card titles — experience role (`.exp-role`).
- **Title-sm** (700, 20px): compact card titles — project name (`.proj-name`).
- **Eyebrow** (600, 16px, letter-spacing 0.04em): the single role-tagline under the hero name (`.h-role`) — not a label (not a tag/button), not body (not prose); its own small tier.

**Body roles** (Barlow, sentence case, `--muted` color, for reading content):
- **Body** (400, 15px, line-height 1.75–1.8): primary paragraph copy — hero description, section descriptions, About paragraphs. ~440–500px max width.
- **Body-sm** (400, 13px, line-height 1.65): secondary/denser paragraph copy — project description (`.proj-desc`).

**Label roles** (700, Barlow Condensed, uppercase, letter-spaced — UI chrome, never prose):
- **Label-lg** (14px, letter-spacing 0.04em): the most prominent label tier — nav links, buttons, experience company name, status body line.
- **Label-md** (13px, letter-spacing 0.04em): stat sub-labels (`.sl-strong`), contact links, experience date.
- **Label-sm** (12px, letter-spacing 0.06em): section tags (`.s-tag`), availability pill, skill chips, stack category labels, footer text.
- **Label-xs** (11px, letter-spacing 0.06em): the smallest tier — stat captions (`.sl`), project tech tags (`.pt`), status badges (`.pbadge`), project-image placeholder caption.

Icon-font glyph sizing (e.g. the 18px Devicon glyphs in `.stack-tech .di`, the 16px trait icons, the 14px theme-toggle glyph) is functional icon sizing, not part of the type scale — it isn't prose and doesn't carry a reading role.

### Named Rules
**The All-Caps Structural Rule.** Anything that is UI chrome (nav, buttons, tags, badges, labels) is Barlow Condensed and uppercase. Anything that is content to be read (descriptions, paragraphs) is Barlow and sentence case. Mixing the two inverts the hierarchy and breaks the system.

**The Four-Step Label Rule.** The label ladder has exactly four steps (11/12/13/14px) and each is reserved for its documented tier above — a new UI-chrome element reuses one of the four, it doesn't introduce a fifth.

## Layout

Single-page scroll with fixed top nav (64px, hard bottom border) and bento-grid sections capped at 1140px max-width, 40px section padding. Hero uses a 1.6fr/1fr two-column bento grid (main profile block + status block, full-width stack strip below). About, Skills, and Projects use 2-column or 3-column bento grids of hard-bordered cards; Experience is a single-column stacked list with a date-and-dot rail. Grid gaps are consistently 20px at desktop, tightening to 12–16px on mobile.

Responsive collapse at 860px: grids go to 1 column, nav links hide. Further tightening at 480px: section padding drops to 16px, hero name scales down, stat/skill cells compress padding.

## Elevation & Depth

Structural, not ambient. There is no blur anywhere in the system (`--glass`/`--glassb` are `transparent`, box-shadows never use a blur radius). Depth is conveyed entirely through hard offset shadows — solid-color blocks displaced 4–8px from their surface, reading as physical stacking rather than cast light. On hover/press, interactive elements translate toward their shadow and the shadow shrinks proportionally, simulating a card being pressed flat against the surface behind it.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 6px 6px 0 var(--shadow)`): default state for `.gc` cards, hero photo, back-link.
- **Card hover** (`box-shadow: 8px 8px 0 var(--shadow)` + `translate(-2px,-2px)`): card lifts away from its shadow on hover.
- **Button rest** (`box-shadow: 6px 6px 0 var(--border)`): primary/secondary buttons.
- **Button press** (`box-shadow: 3px 3px 0 var(--border)` + `translate(3px,3px)`): button moves toward its shadow on hover — a "press-down" read.
- **Pill press** (`box-shadow: 2px 2px 0 var(--border)` + `translate(2px,2px)`): same press behavior at smaller scale for `.nav-pill`.

### Named Rules
**The Press-Not-Lift Rule.** Buttons and pills move *toward* their shadow on hover/press (shadow shrinks). Cards move *away* from their shadow on hover (shadow grows). The direction signals affordance: buttons are pressed, cards are lifted for inspection.

## Shapes

Zero radius everywhere — `--r` and `--rl` are both `0px`, with no exceptions across buttons, cards, chips, badges, inputs, or the photo frame. All bounded elements take a uniform 2px solid border in the border/text ink color. The only circular forms in the system are functional dots (pulse indicator, timeline dot, tag-label bullet) — circles are reserved for status/marker meaning, never for containers.

## Components

Buttons, cards, and chips share one grammar: 2px hard border, zero radius, offset block shadow, Barlow Condensed uppercase label where text is present.

### Buttons
- **Shape:** zero radius (0px), 2px solid border matching background/accent color.
- **Primary** (`.btn-grad`, `.nav-pill`): Steel Blue background, `--bg`-colored text, 6px/6px offset shadow in border color, 12px/24px padding, uppercase condensed label.
- **Secondary/Ghost** (`.btn-gl`): `--bg` background, `--border` text and border, same offset-shadow language.
- **Hover/Press:** translate toward shadow (2–3px), shadow shrinks to half offset. No color fade, no easing beyond a fast 0.1s linear-feeling transition.

### Chips (Skills tags, project tech tags)
- **Style** (`.sc`, `.pt`): `--bg` background, 2px border, no shadow (chips are flat, unlike cards/buttons — they read as data, not surfaces).
- **State:** hover inverts to Steel Blue background with `--bg` text on `.sc`; `.pt` (project tech tags) stay static, no hover.

### Cards / Containers
- **Corner Style:** 0px radius, always.
- **Background:** `--bg` (matches page background — cards are distinguished by border + shadow, not by a lighter fill).
- **Shadow Strategy:** rest at 6px/6px offset in `--shadow` (Steel Blue) token; hover grows to 8px/8px with a −2px/−2px lift. See Elevation & Depth.
- **Border:** 2px solid `--border`.
- **Internal Padding:** 18–44px depending on card role (hero main card is roomiest at 44px; skill/stat cells are tightest at 18–26px).

### Status Badges (`.pbadge`, `.avail`)
- **Style:** 2px border, zero radius, condensed uppercase label, small pill-shaped padding (not rounded — rectangular).
- **Live variant:** Signal Rust fill.
- **WIP variant:** `--bg` fill with Steel Blue text/border.

### Navigation
- Fixed top bar, 64px tall, `--bg` fill, 2px bottom border, no shadow (the nav is the one surface that doesn't float — it's structurally part of the page edge).
- Links: Barlow Condensed uppercase, `--muted` default, Steel Blue on hover/active, 0.15s color transition only (no shadow/movement on nav links themselves).

## Do's and Don'ts

### Do:
- **Do** keep every bounded surface at 0px radius — this is the system's most load-bearing invariant.
- **Do** use offset block shadows only (no blur radius, ever) for depth.
- **Do** reserve Signal Rust strictly for liveness/status signals (pulse dot, live badge, timeline dot) — never as a general second interactive color.
- **Do** set UI chrome (nav, labels, buttons, tags) in Barlow Condensed uppercase, and reading content in Barlow sentence case.
- **Do** move buttons toward their shadow on hover and cards away from theirs — the direction is the affordance cue, keep it consistent.

### Don't:
- **Don't** introduce blur, glassmorphism, soft/diffuse shadows, or gradients anywhere — the tokens already encode this rejection (`--glass`, `--glassb` are `transparent`).
- **Don't** round any corner, even slightly, to "soften" a dense grid — density is handled by spacing, not by softening the shape language.
- **Don't** use Steel Blue and Signal Rust interchangeably — they carry distinct meanings (interactive vs. status).
- **Don't** apply the card shadow-hover pattern to chips/tags — chips stay flat and shadowless; only cards and buttons carry shadows.
