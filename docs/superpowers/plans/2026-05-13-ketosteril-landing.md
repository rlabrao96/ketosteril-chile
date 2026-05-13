# Ketosteril Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page static landing page for the Ketosteril® patient acompañamiento program with a working lead-capture form (mock submission, no backend), faithful to mockup `Ideas/Idea #1.png` but elevated per the "Clinical Precision" design direction.

**Architecture:** Static HTML + Tailwind CSS (CDN) + vanilla JavaScript. Single `index.html` with companion `styles.css` (custom variables, atmosphere, animations) and `script.js` (form validation, modal, smooth scroll, stepper animation). Lucide icons loaded via CDN. Figtree font from Google Fonts. No build step.

**Tech Stack:** HTML5, Tailwind CSS 3 (CDN), vanilla JS (ES6+), Lucide Icons, Google Fonts (Figtree).

**Verification approach:** Since this is a static prototype with no automated test suite, each task ends with a manual verification step (open `index.html` in browser, inspect specific behavior). One inline JS smoke-test is included for the RUT validator (critical logic). Final task is full visual review against the mockup + ui-ux-pro-max pre-delivery checklist.

**Source of truth:** Design spec at `docs/superpowers/specs/2026-05-13-ketosteril-landing-design.md`. Mockup reference: `Ideas/Idea #1.png`. Asset reference: `assets/` folder.

---

## Task 1: Scaffold project files and base HTML structure

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `README.md`

- [ ] **Step 1: Create `index.html` with HTML5 skeleton, Tailwind CDN, Figtree, Lucide, and section anchors**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ketosteril® · Programa de Acompañamiento — Fresenius Kabi</title>
  <meta name="description" content="Programa de seguimiento renal especializado para pacientes con Ketosteril®. Derivación directa a Contact Center.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="stylesheet" href="styles.css">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Figtree', 'system-ui', 'sans-serif'] },
          colors: {
            'fk-blue': '#003781',
            'fk-blue-deep': '#002257',
            'fk-blue-soft': '#1E5BB8',
            'fk-blue-mist': '#E8EEF9',
            'fk-orange': '#F39200',
            'ink-900': '#0F172A',
            'ink-700': '#334155',
            'ink-500': '#64748B',
            'ink-400': '#94A3B8',
            'bg-soft': '#F7F9FC',
            'border-soft': '#E2E8F0',
            'border-strong': '#CBD5E1',
            'success': '#059669',
            'danger': '#DC2626'
          }
        }
      }
    }
  </script>
</head>
<body class="font-sans text-ink-900 antialiased">
  <header id="navbar"></header>
  <main>
    <section id="hero"></section>
    <section id="como-funciona"></section>
    <section id="formulario"></section>
    <section id="que-incluye"></section>
    <section id="contact-center"></section>
    <section id="beneficios"></section>
  </main>
  <footer id="footer"></footer>
  <div id="success-modal" class="hidden"></div>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create `styles.css` with CSS variables and base resets**

```css
:root {
  --fk-blue: #003781;
  --fk-blue-deep: #002257;
  --fk-blue-soft: #1E5BB8;
  --fk-blue-mist: #E8EEF9;
  --fk-orange: #F39200;
  --ink-900: #0F172A;
  --ink-700: #334155;
  --ink-500: #64748B;
  --ink-400: #94A3B8;
  --bg-soft: #F7F9FC;
  --border-soft: #E2E8F0;
  --border-strong: #CBD5E1;
  --success: #059669;
  --danger: #DC2626;
  --shadow-card: 0 1px 2px rgba(15,23,42,.04), 0 4px 12px rgba(15,23,42,.06), 0 16px 32px rgba(15,23,42,.04);
  --shadow-elevated: 0 2px 4px rgba(15,23,42,.06), 0 12px 24px rgba(15,23,42,.08), 0 32px 64px rgba(15,23,42,.06);
}

html { scroll-behavior: smooth; scroll-padding-top: 88px; }
body { font-family: 'Figtree', system-ui, sans-serif; }

.display { font-size: clamp(2.5rem, 4.5vw, 3.5rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
.h2 { font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; }
.eyebrow { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fk-blue-soft); }
```

- [ ] **Step 3: Create `script.js` placeholder**

```js
// Ketosteril Landing — Interactive behavior
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  console.log('[Ketosteril] Landing page loaded');
});
```

- [ ] **Step 4: Create `README.md`**

```markdown
# Ketosteril® Landing — Prototype

Single-page demo for the Ketosteril® patient acompañamiento program (Fresenius Kabi Chile).

## Run locally
Double-click `index.html` or serve with: `python3 -m http.server 8000` and open `http://localhost:8000`.

## Stack
HTML + Tailwind CSS (CDN) + vanilla JS + Lucide Icons + Figtree font.
No build step. No backend. Form submission is mocked (logs to console + success modal).

## Files
- `index.html` — single-page entry
- `styles.css` — custom CSS variables, atmosphere, animations
- `script.js` — form validation, modal, smooth scroll, stepper animation
- `assets/` — logos and imagery
- `docs/superpowers/specs/` — design spec
- `docs/superpowers/plans/` — implementation plan
```

- [ ] **Step 5: Verify**

Open `index.html` in browser. Expected: blank page with no console errors, Figtree font loaded (check DevTools → Network), tab title reads "Ketosteril® · Programa de Acompañamiento — Fresenius Kabi".

---

## Task 2: Navbar (sticky)

**Files:**
- Modify: `index.html` — populate `#navbar`
- Modify: `styles.css` — navbar scroll shadow class
- Modify: `script.js` — scroll listener

- [ ] **Step 1: Add navbar markup inside `<header id="navbar">`**

```html
<nav class="sticky top-0 z-50 bg-white border-b border-border-soft transition-shadow" id="nav-bar">
  <div class="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
    <a href="#hero" class="flex items-center gap-2">
      <img src="assets/ketosteril-wordmark-hq.png" alt="Ketosteril" class="h-7 w-auto">
      <span class="text-xs text-ink-500 hidden lg:inline-block border-l border-border-soft pl-2 ml-1">Aminoácidos y/o cetoanálogos</span>
    </a>
    <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-700">
      <li><a href="#hero" class="hover:text-fk-blue transition-colors duration-200">Resumen</a></li>
      <li><a href="#como-funciona" class="hover:text-fk-blue transition-colors duration-200">El programa</a></li>
      <li><a href="#que-incluye" class="hover:text-fk-blue transition-colors duration-200">Para pacientes</a></li>
      <li><a href="#beneficios" class="hover:text-fk-blue transition-colors duration-200">Recursos</a></li>
      <li><a href="#contact-center" class="hover:text-fk-blue transition-colors duration-200">Contacto</a></li>
    </ul>
    <a href="#formulario" class="inline-flex items-center gap-2 bg-fk-blue hover:bg-fk-blue-deep text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fk-blue focus-visible:ring-offset-2">
      <i data-lucide="user-round" class="w-4 h-4"></i>
      Solicitar contacto
    </a>
  </div>
</nav>
```

- [ ] **Step 2: Add scroll-shadow class to `styles.css`**

```css
#nav-bar.scrolled { box-shadow: 0 1px 0 var(--border-soft), 0 4px 12px rgba(15,23,42,.06); }
```

- [ ] **Step 3: Add scroll listener to `script.js`**

```js
const navBar = document.getElementById('nav-bar');
const handleNavScroll = () => {
  if (window.scrollY > 50) navBar.classList.add('scrolled');
  else navBar.classList.remove('scrolled');
};
window.addEventListener('scroll', handleNavScroll, { passive: true });
```

- [ ] **Step 4: Verify**

Open `index.html`. Expected:
- Navbar visible at top, sticky on scroll
- Ketosteril logo on left, 5 nav links centered, blue "Solicitar contacto" button right
- Scrolling > 50px adds shadow below navbar
- Clicking a nav link smooth-scrolls to (empty) section
- No console errors

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: scaffold project and add navbar"
```

(Skip commits if not in a git repo — note in plan-tracker that commits are skipped.)

---

## Task 3: Hero section

**Files:**
- Modify: `index.html` — populate `#hero`
- Modify: `styles.css` — hero atmosphere (gradient + hairline pattern)

- [ ] **Step 1: Add hero markup inside `<section id="hero">`**

```html
<section id="hero" class="hero-atmosphere relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-8 py-20 lg:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
    <div class="space-y-6">
      <p class="eyebrow stagger-1">Programa de acompañamiento</p>
      <h1 class="display stagger-2">
        Más que un tratamiento,<br>
        <span class="text-fk-blue">un programa de acompañamiento</span>
      </h1>
      <p class="text-lg text-ink-700 max-w-xl leading-relaxed stagger-3">
        Seguimiento renal especializado para asegurar la adherencia y continuidad
        del tratamiento con Ketosteril<sup>®</sup>.
      </p>
      <div class="inline-flex items-center gap-2 bg-fk-blue-mist text-fk-blue text-sm font-medium px-4 py-2 rounded-full stagger-4">
        <i data-lucide="badge-check" class="w-4 h-4"></i>
        Avalado por +25 estudios clínicos publicados
      </div>
      <div class="flex flex-wrap gap-3 pt-2 stagger-5">
        <a href="#formulario" class="inline-flex items-center gap-2 bg-fk-blue hover:bg-fk-blue-deep text-white font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fk-blue focus-visible:ring-offset-2">
          Derivar paciente
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
        <a href="#como-funciona" class="inline-flex items-center gap-2 bg-white hover:bg-bg-soft border border-border-strong text-ink-900 font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fk-blue focus-visible:ring-offset-2">
          Conocer el programa
        </a>
      </div>
    </div>
    <div class="relative stagger-6">
      <img src="assets/hero-doctor-patient.png"
           alt="Médico nefrólogo conversando con paciente"
           class="w-full h-auto rounded-2xl shadow-[var(--shadow-elevated)]">
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add hero atmosphere to `styles.css`**

```css
.hero-atmosphere {
  background: linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%);
  background-image:
    linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%),
    repeating-linear-gradient(135deg, rgba(0,55,129,0.04) 0 1px, transparent 1px 40px);
  background-blend-mode: normal;
}

.stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5, .stagger-6 {
  opacity: 0;
  transform: translateY(8px);
  animation: stagger-in 500ms ease-out forwards;
}
.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 80ms; }
.stagger-3 { animation-delay: 160ms; }
.stagger-4 { animation-delay: 240ms; }
.stagger-5 { animation-delay: 320ms; }
.stagger-6 { animation-delay: 200ms; }

@keyframes stagger-in {
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5, .stagger-6 {
    opacity: 1; transform: none; animation: none;
  }
  html { scroll-behavior: auto; }
}
```

- [ ] **Step 3: Verify**

Reload `index.html`. Expected:
- Hero shows: eyebrow "PROGRAMA DE ACOMPAÑAMIENTO" in blue uppercase
- H1 with second line "un programa de acompañamiento" in `--fk-blue`
- Subtitle paragraph below
- Trust pill with check icon "Avalado por +25 estudios clínicos publicados"
- Two CTAs: "Derivar paciente" (blue) + "Conocer el programa" (outlined)
- Doctor+patient image on right with rounded corners + elevated shadow
- Stagger fade-in on page load (~500ms total)
- Hairline pattern visible faintly in background
- No console errors

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: hero section with atmosphere and stagger animation"
```

---

## Task 4: "¿Cómo funciona?" stepper section

**Files:**
- Modify: `index.html` — populate `#como-funciona`
- Modify: `styles.css` — stepper line animation
- Modify: `script.js` — IntersectionObserver for stepper

- [ ] **Step 1: Add section markup inside `<section id="como-funciona">`**

```html
<section id="como-funciona" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-8">
    <h2 class="h2 text-center mb-4">¿Cómo funciona?</h2>
    <p class="text-center text-ink-500 max-w-2xl mx-auto mb-16">
      Un flujo simple de cinco pasos desde la prescripción hasta el seguimiento continuo.
    </p>

    <div class="stepper relative">
      <div class="stepper-line absolute top-7 left-0 right-0 h-0.5 bg-border-soft" aria-hidden="true">
        <div class="stepper-line-fill h-full bg-fk-blue transition-[width] duration-1000 ease-out" style="width:0%"></div>
      </div>
      <ol class="relative grid grid-cols-5 gap-4">
        <li class="text-center">
          <div class="mx-auto w-14 h-14 rounded-full bg-fk-blue-mist border-2 border-fk-blue text-fk-blue flex items-center justify-center font-bold text-lg relative z-10">1</div>
          <i data-lucide="file-pen-line" class="w-5 h-5 text-fk-blue-soft mx-auto mt-3"></i>
          <h3 class="mt-2 font-semibold text-ink-900">Prescripción</h3>
          <p class="text-sm text-ink-500 mt-1">Del médico tratante</p>
        </li>
        <li class="text-center">
          <div class="mx-auto w-14 h-14 rounded-full bg-fk-blue-mist border-2 border-fk-blue text-fk-blue flex items-center justify-center font-bold text-lg relative z-10">2</div>
          <i data-lucide="users" class="w-5 h-5 text-fk-blue-soft mx-auto mt-3"></i>
          <h3 class="mt-2 font-semibold text-ink-900">Derivación</h3>
          <p class="text-sm text-ink-500 mt-1">A Especialista / Contact Center</p>
        </li>
        <li class="text-center">
          <div class="mx-auto w-14 h-14 rounded-full bg-fk-blue-mist border-2 border-fk-blue text-fk-blue flex items-center justify-center font-bold text-lg relative z-10">3</div>
          <i data-lucide="clipboard-list" class="w-5 h-5 text-fk-blue-soft mx-auto mt-3"></i>
          <h3 class="mt-2 font-semibold text-ink-900">Evaluación Nutricional</h3>
          <p class="text-sm text-ink-500 mt-1">Por Nutricionista Renal</p>
        </li>
        <li class="text-center">
          <div class="mx-auto w-14 h-14 rounded-full bg-fk-blue-mist border-2 border-fk-blue text-fk-blue flex items-center justify-center font-bold text-lg relative z-10">4</div>
          <i data-lucide="calendar-check" class="w-5 h-5 text-fk-blue-soft mx-auto mt-3"></i>
          <h3 class="mt-2 font-semibold text-ink-900">Control mensual</h3>
          <p class="text-sm text-ink-500 mt-1">Primeros 3 meses</p>
        </li>
        <li class="text-center">
          <div class="mx-auto w-14 h-14 rounded-full bg-fk-blue-mist border-2 border-fk-blue text-fk-blue flex items-center justify-center font-bold text-lg relative z-10">5</div>
          <i data-lucide="refresh-ccw" class="w-5 h-5 text-fk-blue-soft mx-auto mt-3"></i>
          <h3 class="mt-2 font-semibold text-ink-900">Control trimestral</h3>
          <p class="text-sm text-ink-500 mt-1">Según adherencia</p>
        </li>
      </ol>

      <div class="mt-12 flex justify-center">
        <div class="inline-flex items-center gap-2 bg-fk-blue-mist text-fk-blue text-sm font-medium px-5 py-2.5 rounded-full">
          <i data-lucide="refresh-ccw" class="w-4 h-4"></i>
          Feedback continuo a médico tratante
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add stepper styles to `styles.css`**

```css
.stepper-line { z-index: 0; }
.stepper-line-fill { width: 0%; }
.stepper.in-view .stepper-line-fill { width: 100%; }

@media (prefers-reduced-motion: reduce) {
  .stepper-line-fill { transition: none !important; }
  .stepper.in-view .stepper-line-fill { width: 100%; }
}
```

- [ ] **Step 3: Add IntersectionObserver to `script.js`**

```js
const stepper = document.querySelector('.stepper');
if (stepper && 'IntersectionObserver' in window) {
  const stepperObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        stepper.classList.add('in-view');
        stepperObserver.unobserve(stepper);
      }
    });
  }, { threshold: 0.3 });
  stepperObserver.observe(stepper);
}
```

- [ ] **Step 4: Verify**

Reload `index.html`. Expected:
- Section title "¿Cómo funciona?" with subtitle
- 5 numbered circles in `--fk-blue-mist` with blue numbers, icons below each
- Connecting horizontal line behind circles
- On scroll into view: line fills from 0% to 100% width over 1s
- Pill below stepper "Feedback continuo a médico tratante"
- All icons render (Lucide loaded)
- No layout overflow / horizontal scroll

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: '¿Cómo funciona?' stepper with scroll animation"
```

---

## Task 5: Form section (markup only)

**Files:**
- Modify: `index.html` — populate `#formulario`

- [ ] **Step 1: Add form section markup inside `<section id="formulario">`**

```html
<section id="formulario" class="py-24 bg-bg-soft">
  <div class="max-w-3xl mx-auto px-8">
    <div class="text-center mb-10">
      <p class="eyebrow">Solicitud de contacto</p>
      <h2 class="h2 mt-2">Solicita contacto para ingresar al programa</h2>
      <p class="text-ink-500 mt-3 max-w-xl mx-auto">
        Complete los datos del paciente. Nuestro Contact Center se comunicará directamente en las próximas 24–48 horas.
      </p>
    </div>

    <form id="derivacion-form" class="bg-white rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-card)] border border-border-soft space-y-5" novalidate>
      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label for="nombre" class="block text-sm font-medium text-ink-900 mb-1.5">Nombre del paciente <span class="text-danger">*</span></label>
          <input id="nombre" name="nombre" type="text" required minlength="3" class="form-input">
          <p class="form-error hidden" data-error-for="nombre"></p>
        </div>
        <div>
          <label for="rut" class="block text-sm font-medium text-ink-900 mb-1.5">RUT <span class="text-danger">*</span></label>
          <input id="rut" name="rut" type="text" required placeholder="12.345.678-9" class="form-input">
          <p class="form-error hidden" data-error-for="rut"></p>
        </div>
        <div>
          <label for="telefono" class="block text-sm font-medium text-ink-900 mb-1.5">Teléfono <span class="text-danger">*</span></label>
          <input id="telefono" name="telefono" type="tel" required placeholder="+56 9 1234 5678" class="form-input">
          <p class="form-error hidden" data-error-for="telefono"></p>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-ink-900 mb-1.5">Email <span class="text-ink-400 font-normal">(opcional)</span></label>
          <input id="email" name="email" type="email" class="form-input">
          <p class="form-error hidden" data-error-for="email"></p>
        </div>
        <div>
          <label for="comuna" class="block text-sm font-medium text-ink-900 mb-1.5">Comuna <span class="text-danger">*</span></label>
          <select id="comuna" name="comuna" required class="form-input">
            <option value="">Seleccione…</option>
            <option>Santiago</option>
            <option>Las Condes</option>
            <option>Providencia</option>
            <option>Ñuñoa</option>
            <option>Vitacura</option>
            <option>Maipú</option>
            <option>La Florida</option>
            <option>Puente Alto</option>
            <option>Rancagua</option>
            <option>Viña del Mar</option>
            <option>Valparaíso</option>
            <option>Concepción</option>
            <option>Punta Arenas</option>
            <option>Otra</option>
          </select>
          <p class="form-error hidden" data-error-for="comuna"></p>
        </div>
        <div>
          <label for="medico" class="block text-sm font-medium text-ink-900 mb-1.5">Médico que deriva <span class="text-danger">*</span></label>
          <input id="medico" name="medico" type="text" required minlength="3" class="form-input">
          <p class="form-error hidden" data-error-for="medico"></p>
        </div>
      </div>
      <div>
        <label for="comentarios" class="block text-sm font-medium text-ink-900 mb-1.5">Comentarios <span class="text-ink-400 font-normal">(opcional)</span></label>
        <textarea id="comentarios" name="comentarios" rows="3" class="form-input resize-y"></textarea>
      </div>

      <p class="text-xs text-ink-500 leading-relaxed">
        Al enviar este formulario, el paciente acepta ser contactado por el equipo del programa Ketosteril<sup>®</sup>.
      </p>

      <div class="pt-2 flex justify-center">
        <button type="submit" id="submit-btn" class="inline-flex items-center gap-2 bg-fk-blue hover:bg-fk-blue-deep text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fk-blue focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed">
          <span class="btn-label">Enviar solicitud</span>
          <i data-lucide="loader-2" class="btn-spinner hidden w-4 h-4 animate-spin"></i>
        </button>
      </div>
    </form>
  </div>
</section>
```

- [ ] **Step 2: Add form input styles to `styles.css`**

```css
.form-input {
  width: 100%;
  height: 44px;
  padding: 0 0.875rem;
  border: 1px solid var(--border-strong);
  border-radius: 0.5rem;
  background: #ffffff;
  font-size: 0.95rem;
  color: var(--ink-900);
  transition: border-color 200ms ease, box-shadow 200ms ease;
}
textarea.form-input { height: auto; padding: 0.625rem 0.875rem; }
.form-input::placeholder { color: var(--ink-400); }
.form-input:hover:not(:focus) { border-color: var(--ink-500); }
.form-input:focus-visible {
  outline: none;
  border-color: var(--fk-blue);
  box-shadow: 0 0 0 3px rgba(0,55,129,0.18);
}
.form-input[aria-invalid="true"] {
  border-color: var(--danger);
  box-shadow: 0 0 0 3px rgba(220,38,38,0.15);
}
.form-error {
  font-size: 0.8125rem;
  color: var(--danger);
  margin-top: 0.375rem;
}
```

- [ ] **Step 3: Verify**

Reload `index.html`. Expected:
- Section with light gray bg, white card containing form
- Title "Solicita contacto para ingresar al programa"
- 6 fields in 2-column grid: Nombre, RUT, Teléfono, Email, Comuna (select), Médico
- Textarea Comentarios full width
- Submit button centered "Enviar solicitud"
- Hover on inputs: border darkens
- Focus on inputs: blue ring + border
- No errors, form does NOT submit yet

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: derivation form markup and styles"
```

---

## Task 6: RUT validator (with inline smoke test)

**Files:**
- Modify: `script.js` — add `validateRut()` and self-test

- [ ] **Step 1: Add `validateRut` function to `script.js`**

```js
function validateRut(input) {
  if (!input) return false;
  const clean = String(input).replace(/[.\-\s]/g, '').toUpperCase();
  if (clean.length < 2) return false;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);
  if (!/^[0-9]+$/.test(body)) return false;
  let sum = 0;
  let multiplier = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  const mod = 11 - (sum % 11);
  const expected = mod === 11 ? '0' : mod === 10 ? 'K' : String(mod);
  return dv === expected;
}

function formatRut(value) {
  const clean = String(value).replace(/[^0-9kK]/g, '').toUpperCase();
  if (clean.length < 2) return clean;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);
  const reversed = body.split('').reverse().join('');
  const grouped = reversed.match(/.{1,3}/g).join('.').split('').reverse().join('');
  return `${grouped}-${dv}`;
}
```

- [ ] **Step 2: Add inline smoke test (runs once on load, logs to console)**

```js
(function rutSelfTest() {
  const cases = [
    ['11.111.111-1', true],
    ['12345678-5', true],
    ['12.345.678-5', true],
    ['1-9', true],
    ['12345678-9', false],
    ['12345678-K', false],
    ['abc', false],
    ['', false],
    ['7654321-6', true]
  ];
  let passed = 0;
  const fails = [];
  cases.forEach(([input, expected]) => {
    const got = validateRut(input);
    if (got === expected) passed++;
    else fails.push({ input, expected, got });
  });
  if (fails.length) console.error('[Ketosteril] RUT validator FAILED cases:', fails);
  else console.log(`[Ketosteril] RUT validator OK (${passed}/${cases.length} cases)`);
})();
```

- [ ] **Step 3: Wire up RUT input to auto-format**

```js
const rutInput = document.getElementById('rut');
if (rutInput) {
  rutInput.addEventListener('input', (e) => {
    const caretAtEnd = e.target.selectionStart === e.target.value.length;
    e.target.value = formatRut(e.target.value);
    if (caretAtEnd) e.target.setSelectionRange(e.target.value.length, e.target.value.length);
  });
}
```

- [ ] **Step 4: Verify**

Reload `index.html`. Open DevTools console.

Expected console log: `[Ketosteril] RUT validator OK (9/9 cases)`

If any case fails, fix `validateRut` until all pass before continuing.

Type `12345678-5` in the RUT field. Expected: auto-formats to `12.345.678-5`.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: RUT validator with chilean DV algorithm + auto-format"
```

---

## Task 7: Form validation, submit handler, success modal

**Files:**
- Modify: `index.html` — populate `#success-modal`
- Modify: `script.js` — validation, submit, modal logic
- Modify: `styles.css` — modal styles

- [ ] **Step 1: Add success modal markup inside `<div id="success-modal">`**

```html
<div id="success-modal" class="hidden fixed inset-0 z-[100] items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-backdrop absolute inset-0 bg-ink-900/60 backdrop-blur-sm"></div>
  <div class="modal-card relative bg-white rounded-2xl shadow-[var(--shadow-elevated)] max-w-md w-full p-8 text-center">
    <div class="mx-auto w-14 h-14 rounded-full bg-success/10 text-success flex items-center justify-center mb-4">
      <i data-lucide="check" class="w-7 h-7"></i>
    </div>
    <h3 id="modal-title" class="text-xl font-bold text-ink-900">Solicitud enviada con éxito</h3>
    <p class="text-ink-500 mt-2 leading-relaxed">
      Nuestro Contact Center contactará al paciente en las próximas <strong class="text-ink-900">24–48 horas</strong>.
    </p>
    <button type="button" id="modal-close" class="mt-6 inline-flex items-center justify-center bg-fk-blue hover:bg-fk-blue-deep text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fk-blue focus-visible:ring-offset-2">
      Cerrar
    </button>
  </div>
</div>
```

- [ ] **Step 2: Add modal animation styles to `styles.css`**

```css
#success-modal { display: none; }
#success-modal.open { display: flex; animation: modal-fade 200ms ease-out; }
#success-modal.open .modal-card { animation: modal-pop 240ms cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes modal-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes modal-pop { from { opacity: 0; transform: scale(0.96) translateY(8px); } to { opacity: 1; transform: scale(1) translateY(0); } }
@media (prefers-reduced-motion: reduce) {
  #success-modal.open, #success-modal.open .modal-card { animation: none; }
}
```

- [ ] **Step 3: Add validators + submit handler to `script.js`**

```js
const form = document.getElementById('derivacion-form');
const submitBtn = document.getElementById('submit-btn');
const modal = document.getElementById('success-modal');
const modalClose = document.getElementById('modal-close');

function setFieldError(name, message) {
  const field = form.elements[name];
  const errorEl = form.querySelector(`[data-error-for="${name}"]`);
  if (message) {
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', `${name}-error`);
    if (errorEl) {
      errorEl.id = `${name}-error`;
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
  } else {
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    if (errorEl) errorEl.classList.add('hidden');
  }
}

function validatePhone(value) {
  const clean = String(value).replace(/[\s\-().]/g, '');
  return /^(\+?56)?9\d{8}$/.test(clean);
}

function validateEmail(value) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateForm() {
  let valid = true;
  const data = Object.fromEntries(new FormData(form).entries());

  if (!data.nombre || data.nombre.trim().length < 3) {
    setFieldError('nombre', 'Ingresa el nombre completo del paciente');
    valid = false;
  } else setFieldError('nombre', '');

  if (!validateRut(data.rut)) {
    setFieldError('rut', 'RUT inválido. Verifica el dígito verificador.');
    valid = false;
  } else setFieldError('rut', '');

  if (!validatePhone(data.telefono)) {
    setFieldError('telefono', 'Formato esperado: +56 9 XXXX XXXX');
    valid = false;
  } else setFieldError('telefono', '');

  if (!validateEmail(data.email)) {
    setFieldError('email', 'Email inválido');
    valid = false;
  } else setFieldError('email', '');

  if (!data.comuna) {
    setFieldError('comuna', 'Selecciona una comuna');
    valid = false;
  } else setFieldError('comuna', '');

  if (!data.medico || data.medico.trim().length < 3) {
    setFieldError('medico', 'Ingresa el nombre del médico que deriva');
    valid = false;
  } else setFieldError('medico', '');

  return valid;
}

function openModal() {
  if (window.lucide) lucide.createIcons();
  modal.classList.remove('hidden');
  modal.classList.add('open');
  modalClose.focus();
  document.addEventListener('keydown', escToClose);
}
function closeModal() {
  modal.classList.remove('open');
  modal.classList.add('hidden');
  document.removeEventListener('keydown', escToClose);
}
function escToClose(e) { if (e.key === 'Escape') closeModal(); }

modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => { if (e.target.classList.contains('modal-backdrop')) closeModal(); });

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm()) {
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const label = submitBtn.querySelector('.btn-label');
  const spinner = submitBtn.querySelector('.btn-spinner');
  submitBtn.disabled = true;
  label.textContent = 'Enviando…';
  spinner.classList.remove('hidden');

  setTimeout(() => {
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      paciente: {
        nombre: data.nombre.trim(),
        rut: data.rut.trim(),
        telefono: data.telefono.trim(),
        email: data.email?.trim() || null,
        comuna: data.comuna
      },
      derivacion: {
        medico: data.medico.trim(),
        comentarios: data.comentarios?.trim() || null,
        timestamp: new Date().toISOString()
      }
    };
    console.log('[Ketosteril DEMO] Payload que se enviaría al Contact Center:', payload);

    form.reset();
    submitBtn.disabled = false;
    label.textContent = 'Enviar solicitud';
    spinner.classList.add('hidden');
    openModal();
  }, 800);
});
```

- [ ] **Step 4: Verify — happy path**

Fill in form with valid data (use RUT `11.111.111-1`, phone `+56 9 1234 5678`, all required fields). Submit.

Expected:
- Spinner appears in button for ~800ms
- Modal appears with check icon, "Solicitud enviada con éxito"
- Form clears
- Console logs payload object with all fields

- [ ] **Step 5: Verify — error paths**

Test the following:
- Empty submit → errors appear under Nombre, RUT, Teléfono, Comuna, Médico
- Invalid RUT (`12345678-9`) → "RUT inválido" error
- Invalid phone (`123`) → format error
- Invalid email (`abc`) → email error
- Focus jumps to first invalid field
- Close modal: click "Cerrar", click backdrop, or press ESC → all work

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: form validation, submit handler, success modal"
```

---

## Task 8: "¿Qué incluye el programa?" section

**Files:**
- Modify: `index.html` — populate `#que-incluye`

- [ ] **Step 1: Add markup inside `<section id="que-incluye">`**

```html
<section id="que-incluye" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
    <div>
      <p class="eyebrow">Programa</p>
      <h2 class="h2 mt-2 mb-8">¿Qué incluye el programa?</h2>
      <ul class="space-y-5">
        <li class="flex gap-4">
          <div class="shrink-0 w-11 h-11 rounded-full bg-fk-blue-mist text-fk-blue flex items-center justify-center">
            <i data-lucide="apple" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-semibold text-ink-900">Seguimiento Nutricional</h3>
            <p class="text-ink-500 text-sm mt-0.5">Por Nutricionista Renal</p>
          </div>
        </li>
        <li class="flex gap-4">
          <div class="shrink-0 w-11 h-11 rounded-full bg-fk-blue-mist text-fk-blue flex items-center justify-center">
            <i data-lucide="clipboard-list" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-semibold text-ink-900">Plan de alimentación</h3>
            <p class="text-ink-500 text-sm mt-0.5">Ajustado a las necesidades y contexto del paciente</p>
          </div>
        </li>
        <li class="flex gap-4">
          <div class="shrink-0 w-11 h-11 rounded-full bg-fk-blue-mist text-fk-blue flex items-center justify-center">
            <i data-lucide="heart-handshake" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-semibold text-ink-900">Acompañamiento continuo</h3>
            <p class="text-ink-500 text-sm mt-0.5">Resolución de dudas del paciente y su familia</p>
          </div>
        </li>
        <li class="flex gap-4">
          <div class="shrink-0 w-11 h-11 rounded-full bg-fk-blue-mist text-fk-blue flex items-center justify-center">
            <i data-lucide="book-open" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-semibold text-ink-900">Material educativo</h3>
            <p class="text-ink-500 text-sm mt-0.5">Para apoyo en el tratamiento</p>
          </div>
        </li>
        <li class="flex gap-4">
          <div class="shrink-0 w-11 h-11 rounded-full bg-fk-blue-mist text-fk-blue flex items-center justify-center">
            <i data-lucide="target" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-semibold text-ink-900">Estrategias de adherencia</h3>
            <p class="text-ink-500 text-sm mt-0.5">Para mejorar la continuidad al tratamiento</p>
          </div>
        </li>
      </ul>

      <div class="mt-8 inline-flex items-center gap-2 bg-fk-orange/10 text-fk-orange border border-fk-orange/30 text-sm font-semibold px-5 py-2.5 rounded-full">
        <i data-lucide="check-circle-2" class="w-4 h-4"></i>
        Sin costo adicional para el paciente
      </div>
    </div>

    <div class="bg-bg-soft rounded-2xl p-8 lg:p-12 flex items-center justify-center">
      <img src="assets/ketosteril-product.jpeg"
           alt="Caja del producto Ketosteril®"
           class="max-w-sm w-full h-auto rounded-xl shadow-[var(--shadow-card)]">
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify**

Reload. Expected:
- Two-column layout: 5 bullets left with icon circles + title + subtitle, product image right in soft-bg card
- Orange pill at bottom-left "✓ Sin costo adicional para el paciente"
- All icons render
- No layout overflow

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: '¿Qué incluye?' section with product image and orange badge"
```

---

## Task 9: Contact Center section (dark blue background)

**Files:**
- Modify: `index.html` — populate `#contact-center`
- Create: `assets/chile-map.svg` (inline simplified silhouette)

- [ ] **Step 1: Create simplified Chile silhouette SVG at `assets/chile-map.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 400" fill="none" aria-hidden="true">
  <path d="M52 8 C55 14, 56 22, 53 30 C50 38, 48 48, 49 58 C50 70, 48 82, 46 94 C44 108, 45 122, 47 136 C49 150, 50 165, 48 180 C46 196, 44 212, 45 228 C46 244, 48 260, 47 276 C46 292, 44 308, 45 324 C46 340, 48 356, 50 372 C51 380, 50 388, 48 394 C47 397, 45 397, 44 394 C42 388, 41 380, 40 372 C38 356, 36 340, 35 324 C34 308, 35 292, 36 276 C37 260, 38 244, 37 228 C36 212, 35 196, 36 180 C37 165, 38 150, 39 136 C40 122, 41 108, 39 94 C37 82, 35 70, 36 58 C37 48, 39 38, 42 30 C44 22, 46 14, 49 8 Z"
        fill="#E8EEF9" stroke="#1E5BB8" stroke-width="0.5"/>
  <!-- Coverage markers -->
  <circle cx="44" cy="130" r="3" fill="#F39200"/>
  <text x="50" y="133" font-family="Figtree, sans-serif" font-size="6" fill="#fff">Santiago (RM)</text>
  <circle cx="43" cy="155" r="3" fill="#F39200"/>
  <text x="50" y="158" font-family="Figtree, sans-serif" font-size="6" fill="#fff">Rancagua (VI)</text>
  <circle cx="44" cy="115" r="3" fill="#F39200"/>
  <text x="50" y="118" font-family="Figtree, sans-serif" font-size="6" fill="#fff">V Región</text>
  <circle cx="42" cy="360" r="3" fill="#F39200"/>
  <text x="50" y="363" font-family="Figtree, sans-serif" font-size="6" fill="#fff">Punta Arenas</text>
</svg>
```

- [ ] **Step 2: Add Contact Center markup inside `<section id="contact-center">`**

```html
<section id="contact-center" class="py-24 bg-fk-blue text-white">
  <div class="max-w-7xl mx-auto px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
    <div>
      <p class="eyebrow" style="color: rgba(255,255,255,0.7);">Soporte continuo</p>
      <h2 class="h2 mt-2 mb-3 text-white">Contact Center especializado</h2>
      <p class="text-white/75 mb-8 max-w-xl">
        Acompañamiento para una coordinación oportuna y cercana del paciente.
      </p>

      <ul class="space-y-3">
        <li class="flex items-start gap-4 bg-white/10 border border-white/15 rounded-xl p-5">
          <div class="shrink-0 w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center">
            <i data-lucide="calendar-plus" class="w-5 h-5 text-white"></i>
          </div>
          <div>
            <h3 class="font-semibold text-white">Agendamiento de horas</h3>
            <p class="text-white/70 text-sm mt-0.5">Coordinación directa con el paciente para fijar atenciones nutricionales.</p>
          </div>
        </li>
        <li class="flex items-start gap-4 bg-white/10 border border-white/15 rounded-xl p-5">
          <div class="shrink-0 w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center">
            <i data-lucide="bell-ring" class="w-5 h-5 text-white"></i>
          </div>
          <div>
            <h3 class="font-semibold text-white">Recordatorios de atenciones</h3>
            <p class="text-white/70 text-sm mt-0.5">Avisos automatizados para no perder controles del programa.</p>
          </div>
        </li>
        <li class="flex items-start gap-4 bg-white/10 border border-white/15 rounded-xl p-5">
          <div class="shrink-0 w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center">
            <i data-lucide="check-circle-2" class="w-5 h-5 text-white"></i>
          </div>
          <div>
            <h3 class="font-semibold text-white">Confirmación de horas</h3>
            <p class="text-white/70 text-sm mt-0.5">Verificación previa de cada atención agendada.</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="text-center">
      <p class="eyebrow" style="color: rgba(255,255,255,0.7);">Cobertura</p>
      <h3 class="font-semibold text-white mt-2 mb-6">Cobertura nacional</h3>
      <img src="assets/chile-map.svg" alt="Mapa de Chile con cobertura del programa" class="w-32 mx-auto opacity-95">
      <div class="mt-6 inline-flex items-center gap-2 bg-success/15 text-success border border-success/30 text-sm font-semibold px-4 py-2 rounded-full" style="color: #34D399;">
        <i data-lucide="check" class="w-4 h-4"></i>
        Cobertura nacional activa
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify**

Reload. Expected:
- Dark blue section, white text, 60/40 split
- 3 translucent cards on left with icons (Agendamiento, Recordatorios, Confirmación)
- Chile silhouette SVG on right with orange dots and city labels
- Green "Cobertura nacional activa" badge below map
- No console errors, SVG renders correctly

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: Contact Center dark-blue section with Chile map SVG"
```

---

## Task 10: Beneficios section

**Files:**
- Modify: `index.html` — populate `#beneficios`

- [ ] **Step 1: Add markup inside `<section id="beneficios">`**

```html
<section id="beneficios" class="py-24 bg-bg-soft">
  <div class="max-w-7xl mx-auto px-8">
    <div class="text-center mb-12">
      <p class="eyebrow">Evidencia clínica</p>
      <h2 class="h2 mt-2">Beneficios para el paciente</h2>
      <p class="text-ink-500 mt-3 max-w-2xl mx-auto">
        Avalado por más de 25 estudios clínicos publicados en revistas de nefrología internacionales.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <article class="benefit-card bg-white rounded-2xl p-6 border border-border-soft transition-all duration-200">
        <div class="w-12 h-12 rounded-xl bg-fk-blue-mist text-fk-blue flex items-center justify-center mb-4">
          <i data-lucide="trending-down" class="w-6 h-6"></i>
        </div>
        <h3 class="font-bold text-ink-900 leading-snug">Retrasa la progresión</h3>
        <p class="text-ink-500 text-sm mt-2 leading-relaxed">De la enfermedad renal crónica, retrasando el inicio de diálisis.</p>
      </article>
      <article class="benefit-card bg-white rounded-2xl p-6 border border-border-soft transition-all duration-200">
        <div class="w-12 h-12 rounded-xl bg-fk-blue-mist text-fk-blue flex items-center justify-center mb-4">
          <i data-lucide="shield-check" class="w-6 h-6"></i>
        </div>
        <h3 class="font-bold text-ink-900 leading-snug">Reduce el riesgo</h3>
        <p class="text-ink-500 text-sm mt-2 leading-relaxed">De complicaciones clínicas asociadas a la insuficiencia renal.</p>
      </article>
      <article class="benefit-card bg-white rounded-2xl p-6 border border-border-soft transition-all duration-200">
        <div class="w-12 h-12 rounded-xl bg-fk-blue-mist text-fk-blue flex items-center justify-center mb-4">
          <i data-lucide="activity" class="w-6 h-6"></i>
        </div>
        <h3 class="font-bold text-ink-900 leading-snug">Mejora la adherencia</h3>
        <p class="text-ink-500 text-sm mt-2 leading-relaxed">Y los resultados clínicos a través del seguimiento estructurado.</p>
      </article>
      <article class="benefit-card bg-white rounded-2xl p-6 border border-border-soft transition-all duration-200">
        <div class="w-12 h-12 rounded-xl bg-fk-blue-mist text-fk-blue flex items-center justify-center mb-4">
          <i data-lucide="heart" class="w-6 h-6"></i>
        </div>
        <h3 class="font-bold text-ink-900 leading-snug">Apoya y orienta</h3>
        <p class="text-ink-500 text-sm mt-2 leading-relaxed">Al paciente y su familia durante el tratamiento.</p>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add hover lift to cards in `styles.css`**

```css
.benefit-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-card); border-color: var(--fk-blue-mist); }
@media (prefers-reduced-motion: reduce) { .benefit-card:hover { transform: none; } }
```

- [ ] **Step 3: Verify**

Reload. Expected:
- 4-column grid of benefit cards on bg-soft
- Each card: icon circle in blue mist, bold title, gray description
- Hover: card lifts 2px and adds shadow
- All icons render

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: beneficios section with 4 benefit cards"
```

---

## Task 11: Footer

**Files:**
- Modify: `index.html` — populate `#footer`
- Modify: `styles.css` — logo invert filter

- [ ] **Step 1: Add footer markup inside `<footer id="footer">`**

```html
<footer class="bg-fk-blue text-white pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-10 border-b border-white/15">
      <div class="col-span-2 lg:col-span-1">
        <img src="assets/fresenius-kabi-official.png"
             alt="Fresenius Kabi"
             class="h-12 w-auto filter-white mb-3">
        <p class="text-white/70 text-sm italic">caring for life</p>
      </div>
      <div>
        <h4 class="font-bold text-white mb-3 text-sm">Ketosteril®</h4>
        <p class="text-white/70 text-sm leading-relaxed">Aminoácidos y/o cetoanálogos</p>
      </div>
      <div>
        <h4 class="font-bold text-white mb-3 text-sm">El programa</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#como-funciona" class="text-white/70 hover:text-white transition-colors duration-200">¿Cómo funciona?</a></li>
          <li><a href="#que-incluye" class="text-white/70 hover:text-white transition-colors duration-200">¿Qué incluye?</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-white mb-3 text-sm">Para pacientes</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#que-incluye" class="text-white/70 hover:text-white transition-colors duration-200">Consejos y herramientas</a></li>
          <li><a href="#beneficios" class="text-white/70 hover:text-white transition-colors duration-200">Preguntas frecuentes</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-white mb-3 text-sm">Recursos</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#beneficios" class="text-white/70 hover:text-white transition-colors duration-200">Material educativo</a></li>
          <li><a href="#beneficios" class="text-white/70 hover:text-white transition-colors duration-200">Información clínica</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-white mb-3 text-sm">Contacto</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#formulario" class="text-white/70 hover:text-white transition-colors duration-200">Solicitar contacto</a></li>
          <li><a href="#contact-center" class="text-white/70 hover:text-white transition-colors duration-200">Contact Center</a></li>
        </ul>
      </div>
    </div>

    <div class="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/60">
      <p class="max-w-3xl leading-relaxed">
        Material dirigido a profesionales de la salud. Ketosteril® es un alimento para propósitos médicos especiales. Usar bajo supervisión médica.
        © 2026 Fresenius Kabi Chile. Todos los derechos reservados.
      </p>
      <div class="flex items-center gap-3">
        <span class="text-white/70">Síguenos</span>
        <a href="#" aria-label="LinkedIn de Fresenius Kabi" class="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors duration-200">
          <i data-lucide="linkedin" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Add `filter-white` class to `styles.css` (inverts the blue Fresenius logo to white)**

```css
.filter-white { filter: brightness(0) invert(1); }
```

- [ ] **Step 3: Verify**

Reload. Expected:
- Dark blue footer with 6 columns of links (first column = Fresenius Kabi logo + tagline, in white)
- Logo appears white (color inverted via CSS filter)
- Divider line + disclaimer + LinkedIn icon at bottom
- Links hover lighter

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: footer with FK logo, columns, disclaimer, LinkedIn"
```

---

## Task 12: Final polish — Lucide re-init, accessibility audit, full visual review

**Files:**
- Modify: `script.js` — ensure Lucide reinitializes after dynamic content
- Modify: `index.html` — add skip-to-content link, verify ARIA
- Modify: `styles.css` — global focus styles

- [ ] **Step 1: Add skip-to-content link as first element in `<body>`**

```html
<a href="#hero" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-fk-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
  Saltar al contenido
</a>
```

- [ ] **Step 2: Ensure global focus-visible default in `styles.css`**

```css
*:focus { outline: none; }
*:focus-visible { outline: 2px solid var(--fk-blue); outline-offset: 2px; }
```

- [ ] **Step 3: Lucide re-init on dynamic content (DOMContentLoaded already covers initial load — add safety)**

Update `script.js`'s DOMContentLoaded block to:

```js
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  console.log('[Ketosteril] Landing page loaded');
});
```

(Already present — verify no duplicate `lucide.createIcons()` calls.)

- [ ] **Step 4: Full visual review against mockup**

Open `index.html` side-by-side with `Ideas/Idea #1.png`. Verify:
- [ ] Navbar matches: logo left, links centered, blue CTA right
- [ ] Hero matches: split layout, headline, subtitle, CTAs, doctor image
- [ ] Stepper has 5 numbered steps with connecting line
- [ ] Form present in center, with all fields, white card
- [ ] "¿Qué incluye?" section with bullets + product image + orange "Sin costo" badge
- [ ] Contact Center on dark blue with Chile map
- [ ] Beneficios in 4-column grid
- [ ] Footer with FK logo + columns

- [ ] **Step 5: Pre-delivery checklist (from ui-ux-pro-max)**

Verify all of:
- [ ] No emojis as icons (only Lucide SVG)
- [ ] All Lucide icons render (no broken `<i>` tags remaining)
- [ ] All clickable elements have `cursor-pointer` (CTAs, links, modal close)
- [ ] Hover transitions 200ms, no layout shift
- [ ] Focus rings visible only on keyboard nav (`focus-visible`)
- [ ] Skip-to-content link works (Tab from address bar)
- [ ] Tab order is logical (navbar → CTAs → form → footer)
- [ ] No console errors or warnings (except deprecation warnings if any)
- [ ] Page renders at 1280px, 1440px, 1920px without horizontal scroll
- [ ] `prefers-reduced-motion`: enable in DevTools → animations disabled (stagger, stepper, modal)

- [ ] **Step 6: Functional smoke test**

- [ ] RUT validator log shows `OK (9/9 cases)` in console
- [ ] Form submit with valid data: spinner → modal → console payload
- [ ] Form submit with invalid data: errors shown, focus moves to first invalid field
- [ ] Modal closes via Cerrar / ESC / backdrop click

- [ ] **Step 7: Commit final**

```bash
git add -A && git commit -m "chore: a11y polish, skip-link, focus-visible global"
```

---

## Self-Review Notes (post-plan, before execution)

**Spec coverage check:**
- Section 4 (design direction) → Tasks 1–11 (cumulatively)
- Section 5.1 Navbar → Task 2 ✓
- Section 5.2 Hero → Task 3 ✓
- Section 5.3 Stepper → Task 4 ✓
- Section 5.4 Form → Tasks 5, 6, 7 ✓
- Section 5.5 ¿Qué incluye? → Task 8 ✓
- Section 5.6 Contact Center → Task 9 ✓
- Section 5.7 Beneficios → Task 10 ✓
- Section 5.8 Footer → Task 11 ✓
- Section 7 (JS behaviors) → Tasks 2, 4, 6, 7 ✓
- Section 9 (accessibility) → Task 12 ✓
- Section 11 (testing criteria) → Task 12 ✓

**No placeholders:** Every step has complete code or exact commands.

**Type consistency:** Function names consistent across tasks (`validateRut`, `formatRut`, `validateForm`, `openModal`, `closeModal`).

**Note for executor:** This project is not currently a git repo (`Is a git repository: false` per environment). Commit steps are optional — if not in a repo, skip the `git add`/`git commit` lines and mark the step done. If the user wants commits, they can `git init` first.
