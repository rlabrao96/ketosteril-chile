# CLAUDE.md — Ketosteril® Chile Landing

Context for Claude sessions working on this repo. Keep this file short — it loads into every conversation.

## What this is

Single-page landing for the **Ketosteril® patient acompañamiento program** (Fresenius Kabi Chile). Purpose: let a nephrologist derive a patient via a one-page form during consultation, replacing today's WhatsApp-to-Tamara workflow. Prototype/demo for internal buy-in — **no real backend**.

Owner: Rafael Labra (`rafaellabra96@gmail.com`). Internal stakeholder: Tamara (product/marketing lead at Fresenius Kabi Chile).

## Stack & constraints

- Static HTML + **Tailwind CSS via CDN** + vanilla JS. No build step. No frameworks.
- **Figtree** (Google Fonts) + **Lucide Icons** (CDN). Never replace these.
- Language: **Spanish** throughout (UI copy and forms). Identifiers in code can be English.
- Target: **desktop-first**, with responsive mobile fallback (stepper has a vertical-timeline mobile variant).
- Deploy: **Vercel** auto-deploys from `main` branch of `https://github.com/rlabrao96/ketosteril-chile`.
- Form submission is **mocked**: validation client-side, payload logged to console, then a success modal appears. No fetch/API call.

## File map

```
index.html          # Single page entry — all sections inline
styles.css          # CSS variables, hero atmosphere, stepper animations, form/modal styles
script.js           # RUT validator (Chilean mod-11), form validation, modal, scroll listeners, IntersectionObserver
assets/             # Logos and imagery (only the in-use ones are tracked; legacy crops are .gitignored)
docs/superpowers/specs/   # Design spec (Clinical Precision direction)
docs/superpowers/plans/   # 12-task implementation plan (already executed)
Ideas/              # Original mockup (Idea #1.png) + marketing brochures (raw data 1/2.png)
```

## Design system (anchored to Fresenius Kabi brand)

| Token | Value | Use |
|---|---|---|
| `--fk-blue` | `#003781` | Primary brand color. All CTAs, headings, focus rings |
| `--fk-blue-deep` | `#002257` | Hover states |
| `--fk-blue-soft` | `#1E5BB8` | Stepper icons, eyebrow text |
| `--fk-blue-mist` | `#E8EEF9` | Card backgrounds, badges |
| `--fk-orange` | `#F39200` | **Reserved exclusively** for the "Sin costo adicional" badge in `#que-incluye` |
| `--bg-soft` | `#F7F9FC` | Alternating section backgrounds |
| `--success` | `#059669` | Form success states |
| `--danger` | `#DC2626` | Form errors |

Colors are defined in **both** `index.html`'s Tailwind config (for `bg-fk-blue` utilities) **and** `:root` in `styles.css` (for `var(--fk-blue)` in custom classes). Keep both in sync if changing.

Tailwind colors use kebab-case (`bg-fk-blue`, `text-ink-700`). All custom classes (`.eyebrow`, `.display`, `.h2`, `.form-input`) use CSS variables — don't try to use Tailwind utilities inside CSS selectors.

## Page sections (in scroll order)

1. **Navbar** (`<header id="navbar">`) — sticky on `<header>` (not `<nav>`), shadow on scroll > 50px
2. **Hero** (`#hero`) — split layout, eyebrow + display H1 with blue accent + trust pill + 2 CTAs + doctor image. Stagger animation on load.
3. **¿Cómo funciona?** (`#como-funciona`) — 5-step stepper. **Horizontal on `lg:`, vertical timeline on mobile**. Animated connecting line via `IntersectionObserver` (adds `.in-view` class).
4. **Formulario** (`#formulario`) — 6 required fields: Nombre, Apellido, RUT, Teléfono, Email, Médico que deriva + optional Comentarios textarea. Submit triggers spinner → console.log payload → success modal.
5. **¿Qué incluye?** (`#que-incluye`) — 5 bullets + product image + orange "Sin costo" badge.
6. **Contact Center** (`#contact-center`) — dark blue section with 3 service cards + Chile map SVG.
7. **Beneficios** (`#beneficios`) — 4 benefit cards with hover lift.
8. **Footer** — dark blue with FK logo (white via `filter: brightness(0) invert(1)`), columns, disclaimer.

## Conventions to enforce

- **Never use emojis as icons** — always Lucide SVG via `<i data-lucide="...">`. `lucide.createIcons()` is called on DOMContentLoaded and after dynamic content (modal open).
- **`focus-visible`**, not `focus` — keyboard focus rings only. Global rule at end of `styles.css`.
- **`prefers-reduced-motion`** disables stagger, stepper anim, and modal animations.
- **Spanish UI text**, no English fallback strings in the UI.
- **No build step** — if you reach for npm/Vite/Next, you've overcomplicated it.
- **Form fields:** Email is required (NOT optional). Comuna field was removed. Nombre and Apellido are separate fields.

## RUT validator

`validateRut()` in `script.js` implements Chilean mod-11 DV algorithm. Has an inline IIFE smoke test (9 cases) that logs `[Ketosteril] RUT validator OK (9/9 cases)` to console on every page load. **If you modify the algorithm, re-run those test cases — the algorithm is the spec, don't break it.**

`formatRut()` auto-formats input as the user types (`12.345.678-5` style).

## Process used to build this (for reference, not for replication)

1. **Brainstorming** — explored 3 layout approaches with visual companion, user chose A (faithful to original mockup at `Ideas/Idea #1.png`)
2. **Spec** — `docs/superpowers/specs/2026-05-13-ketosteril-landing-design.md` (read this for design intent / why decisions were made)
3. **Plan** — `docs/superpowers/plans/2026-05-13-ketosteril-landing.md` (12 tasks, already executed)
4. **Implementation** — subagent-driven, one task at a time with verification

If the user asks to add a major section, follow the same flow: spec the change, plan it, execute. For small tweaks (copy, colors, spacing), just edit and commit.

## How to run / verify

```bash
cd "/Users/rlabrao/Documents/Proyectos AI/Tamara/"
python3 -m http.server 8000
# Open http://localhost:8000
```

Quick syntax check after JS edits: `node -c script.js`.

Visual verification: open in browser at multiple widths (1280/1440/1920 desktop, 375/414 mobile). Hero, stepper, and form are the layouts most prone to regression.

## Today's date awareness

The user's machine clock starts ahead of the actual development date (system reported 2026-05-13 when work began). Spec and plan filenames use that date. Don't rename them.
