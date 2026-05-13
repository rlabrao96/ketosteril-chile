# Landing Page Ketosteril® — Diseño

**Fecha:** 2026-05-13
**Autor:** Rafael Labra (con asistencia de Claude)
**Estado:** En revisión

## 1. Contexto y objetivo

Tamara es Product Manager (o equivalente) en Fresenius Kabi Chile a cargo de promocionar el programa de acompañamiento a pacientes que usan **Ketosteril®** (alfa-cetoanálogos de aminoácidos para tratamiento conservador de Enfermedad Renal Crónica, estadios II–IV).

Hoy el flujo de derivación es informal: el nefrólogo prescribe Ketosteril, llama por WhatsApp a Tamara con datos del paciente (nombre, RUT, teléfono), y ella reenvía manualmente al Contact Center. Esto:

- Sobrecarga a Tamara con tareas operativas que no son su rol
- Expone datos de pacientes en canales no estructurados (WhatsApp personal)
- Crea fricción para el médico (tiene que buscar a Tamara, esperar respuesta, etc.)
- Pierde derivaciones cuando Tamara no está disponible

**Solución propuesta:** una landing page que el médico pueda dejar como acceso directo en el computador de su consulta. Un click → formulario → derivación llega directamente a una bandeja centralizada del Contact Center.

**Esta iteración es un prototipo/demo.** No requiere backend ni base de datos reales — solo demostrar el funcionamiento y el potencial de la solución para conseguir buy-in interno.

## 2. Alcance

### En scope (esta iteración)

- Una página estática (single-page) en español, desktop-first, que replique fielmente el mockup `Ideas/Idea #1.png`
- Formulario funcional con validación client-side
- Mock de "envío" del formulario (muestra confirmación de éxito; sin backend real)
- Uso de los logos oficiales en alta calidad subidos por el usuario (`assets/ketosteril-wordmark-hq.png` para header, `assets/fresenius-kabi-official.png` para footer) y la imagen del médico+paciente del hero (`assets/hero-doctor-patient.png`, extraída del mockup)
- Contenido enriquecido con info real del medicamento extraída del sitio oficial de Fresenius Kabi

### Fuera de scope (iteraciones futuras)

- Backend, base de datos, integración con email/WhatsApp/Sheets reales del Contact Center
- Versión móvil/responsive completa (se hará en una segunda iteración)
- Página de "Conocer el programa" enlazada desde el CTA secundario del hero (por ahora puede ser scroll a sección o quedar como link sin destino)
- Autenticación para médicos, captcha, anti-spam
- Analytics, tracking de conversión
- Multi-idioma (solo español)
- Cumplimiento legal/farmacéutico (disclaimers regulatorios completos — se incluye uno genérico)

## 3. Stack técnico

- **HTML5** estático (`index.html`)
- **Tailwind CSS** vía CDN (sin build step) — para desarrollo rápido del prototipo
- **JavaScript vanilla** (sin frameworks) — validación de form y modal de éxito
- **Tipografía:** Figtree (Google Fonts) — recomendación específica para pharma/healthcare, más cálida y accesible que Inter
- **Iconos:** Lucide (CDN o SVG inlined) — biblioteca de iconos médicos limpios; nunca emojis
- **Assets locales:** carpeta `assets/` con logos oficiales en alta calidad

**Por qué no React/Vue/Next:** una sola página estática sin estado complejo. Frameworks son overkill y agregan tiempo de carga + complejidad de deploy. Si en el futuro se necesita backend, se puede migrar a Next.js.

**Por qué Tailwind CDN (no build):** queremos cero fricción para iterar y compartir. Un solo archivo HTML que se abre en el navegador directamente o se despliega en cualquier static host (Netlify, Vercel, GitHub Pages).

## 4. Dirección de diseño: "Clinical Precision"

Síntesis del análisis de ui-ux-pro-max y frontend-design para este contexto:

- **Pattern**: Trust & Authority (medical/pharma) + Conversion-Optimized (lead capture) + Swiss Modernism (grid disciplinado)
- **Tono**: minimalismo refinado y disciplinado, no maximalismo. La elegancia viene de la precisión, no de la decoración.
- **Differentiator**: el formulario se siente como una pieza de equipamiento médico — preciso, confiable, sin fricciones. El stepper de "Cómo funciona" tiene una línea conectora que se anima al scroll. La atmósfera del hero es sutil pero contemporánea.

### 4.1 Paleta de colores

Anclada al branding real de Fresenius Kabi (no a paletas genéricas de "healthcare"):

| Token | Valor | Uso |
|---|---|---|
| `--fk-blue` | `#003781` | Color corporativo principal. Headings, CTAs, navbar, footer, focus rings |
| `--fk-blue-deep` | `#002257` | Hover states, gradientes |
| `--fk-blue-soft` | `#1E5BB8` | Acentos en links, hovers más claros |
| `--fk-blue-mist` | `#e8eef9` | Backgrounds de cards, badges azules |
| `--fk-orange` | `#F39200` | **Reservado exclusivamente para 1 badge**: "Sin costo adicional" |
| `--ink-900` | `#0F172A` | Texto principal (slate-900 para WCAG AAA) |
| `--ink-700` | `#334155` | Subtítulos |
| `--ink-500` | `#64748B` | Texto secundario |
| `--ink-400` | `#94A3B8` | Placeholders |
| `--bg-page` | `#FFFFFF` | Fondo principal |
| `--bg-soft` | `#F7F9FC` | Backgrounds de secciones alternas |
| `--bg-hero-gradient` | `linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)` | Atmósfera del hero |
| `--border` | `#E2E8F0` | Bordes sutiles |
| `--border-strong` | `#CBD5E1` | Inputs, bordes notables |
| `--success` | `#059669` | Estado de envío exitoso, badge de cobertura |
| `--danger` | `#DC2626` | Errores de validación |

### 4.2 Tipografía

**Figtree** (Google Fonts, pesos 300/400/500/600/700/800).

| Nivel | Tamaño | Peso | Tracking | Uso |
|---|---|---|---|---|
| Display | 56px | 700 | -0.02em | Hero H1 |
| H2 | 36px | 700 | -0.01em | Section titles |
| H3 | 20px | 600 | normal | Card titles, sub-section |
| Body Large | 18px | 400 | normal | Hero subtitle, intro paragraphs |
| Body | 16px | 400 | normal | Default |
| Small | 14px | 400 | normal | Labels, disclaimers |
| Tiny | 12px | 500 | 0.02em | Uppercase labels, eyebrow text |
| Line height | 1.55 (body), 1.15 (display) |

Body usa Figtree weight 400. Headings weight 700 con tracking apretado. Labels uppercase en weight 500 con letter-spacing levemente abierto.

### 4.3 Motion y efectos

- **Page load**: stagger sutil — hero text (0ms), hero image (80ms), nav (160ms). Una sola orquestación al cargar, no animaciones dispersas.
- **Hover transitions**: 200ms ease en CTAs (color/sombra). Sin scale transforms que muevan layout.
- **Stepper**: línea conectora que se llena (`stroke-dasharray` animado) al entrar al viewport con `IntersectionObserver`.
- **Form focus**: ring de 3px con offset (`focus-visible:ring-2 focus-visible:ring-offset-2`).
- **Submit**: spinner inline en botón → fade-in del modal de éxito (200ms).
- **`prefers-reduced-motion`**: deshabilita stagger, stepper anim, y modal fade — todo aparece instantáneo.

### 4.4 Background atmosphere

- **Hero**: gradiente `--bg-hero-gradient` + patrón de líneas hairline (1px, azul `#003781` al 4% opacidad, espaciadas 40px) como overlay sutil
- **Form section**: fondo `--bg-soft` con card del form en blanco con sombra elevada (stack de 3 shadows)
- **Otras secciones**: alternancia blanco / `--bg-soft` para ritmo visual

## 5. Estructura de la página (top → bottom)

### 5.1 Navbar (sticky)

- Fondo blanco con leve sombra inferior al hacer scroll (>50px)
- Izquierda: logo Ketosteril® (`assets/ketosteril-wordmark-hq.png`, alt: "Ketosteril")
- Centro: enlaces de navegación (hacen scroll a secciones): **Resumen · El programa · Para pacientes · Recursos · Contacto**
- Derecha: botón primario "Solicitar contacto" con icono Lucide `user-round` → scroll suave al formulario
- Altura: 72px. Padding lateral 32px

### 5.2 Hero

- Layout split (55/45): texto izquierda, imagen derecha
- Atmósfera: `--bg-hero-gradient` + patrón hairline en azul al 4% opacidad
- **Eyebrow** uppercase pequeño: "PROGRAMA DE ACOMPAÑAMIENTO"
- **H1**: "Más que un tratamiento, **un programa de acompañamiento**" (segunda línea en `--fk-blue`)
- **Subtítulo**: "Seguimiento renal especializado para asegurar la adherencia y continuidad del tratamiento con Ketosteril®"
- **Trust pill**: "✓ Avalado por +25 estudios clínicos publicados" (badge inline con check Lucide)
- Dos CTAs:
  - Primario "Derivar paciente" con icono Lucide `arrow-right` → scroll al form
  - Secundario "Conocer el programa" (ghost button) → scroll a "¿Cómo funciona?"
- Imagen derecha: `assets/hero-doctor-patient.png` con esquinas redondeadas (16px) y sombra elevada
- Stagger de aparición al cargar (eyebrow → H1 → subtitle → trust pill → CTAs → imagen)

### 5.3 Sección "¿Cómo funciona?" (stepper)

- Título H2 centrado
- Stepper horizontal de 5 pasos sobre línea conectora que se anima al entrar al viewport (`IntersectionObserver` + `stroke-dasharray`):
  1. **Prescripción** del médico tratante (icono Lucide `file-pen-line`)
  2. **Derivación** a Especialista / Contact Center (icono `users`)
  3. **Evaluación Nutricional** por Nutricionista Renal (icono `clipboard-list`)
  4. **Control mensual** primeros 3 meses (icono `calendar-check`)
  5. **Control trimestral** según adherencia (icono `refresh-ccw`)
- Cada paso: círculo de 56px con número en `--fk-blue` sobre `--fk-blue-mist`, icono Lucide arriba, título debajo, sublabel en `--ink-500`
- Debajo del stepper: pill con icono `refresh-ccw` "Feedback continuo a médico tratante" (badge azul claro)

### 5.4 Sección formulario "Solicita contacto para ingresar al programa"

- Fondo `--bg-soft`, card central con sombra, max-width ~720px
- Título y subtítulo
- Layout de 2 columnas para los campos:
  - Fila 1: Nombre del paciente (req) · RUT (req, con formato chileno)
  - Fila 2: Teléfono (req, formato +56) · Email (opcional)
  - Fila 3: Comuna (select con principales comunas chilenas) · Médico que deriva (req, texto libre)
  - Fila 4: Comentarios (textarea, ancho completo, opcional)
- Botón "Enviar solicitud" centrado, ancho parcial
- Disclaimer pequeño abajo: "Al enviar este formulario, el paciente acepta ser contactado por el equipo del programa Ketosteril®"

**Validaciones (client-side):**
- Nombre: requerido, mínimo 3 caracteres
- RUT: requerido, validación de formato chileno con dígito verificador (algoritmo módulo 11)
- Teléfono: requerido, formato `+56 9 XXXX XXXX` o `9 XXXX XXXX`
- Email: opcional, formato válido si se ingresa
- Comuna: requerido (select)
- Médico tratante: requerido

**Comportamiento al enviar (mock):**
1. Validación bloqueante con mensajes inline en rojo
2. Si pasa: spinner en el botón por ~800ms
3. Aparece modal de éxito con:
   - Ícono check verde
   - "Solicitud enviada con éxito"
   - "Nuestro Contact Center contactará al paciente en las próximas 24-48 hrs."
   - Botón "Cerrar"
4. Form se resetea
5. En consola se loguea el payload (para demo a stakeholders)

### 5.5 Sección "¿Qué incluye el programa?"

- Layout de 2 columnas (55/45): 5 bullets a la izquierda + imagen del producto Ketosteril® (`assets/ketosteril-product.jpeg`) a la derecha con fondo `--bg-soft`
- Bullets con icono Lucide en círculo `--fk-blue-mist`:
  - **Seguimiento Nutricional** por Nutricionista Renal (`apple`)
  - **Plan de alimentación** ajustado a las necesidades y contexto del paciente (`clipboard-list`)
  - **Acompañamiento continuo** y resolución de dudas del paciente y su familia (`heart-handshake`)
  - **Material educativo** para apoyo en el tratamiento (`book-open`)
  - **Estrategias** para mejorar la adherencia al tratamiento (`target`)
- Badge destacado abajo (única instancia de `--fk-orange`): "✓ **Sin costo adicional para el paciente**" — pill con `--fk-orange` al 12% bg, texto `--fk-orange`, icono check, borde 1px `--fk-orange` 30%

### 5.6 Sección "Contact Center especializado"

- Fondo `--fk-blue` con texto blanco (sección dramática de cambio de paleta)
- Layout de 2 columnas (60/40)
- Izquierda: 3 cards horizontales translúcidas (`bg-white/10`, borde `border-white/15`) con icono Lucide + título + descripción:
  - **Agendamiento de horas** (`calendar-plus`)
  - **Recordatorios de atenciones** (`bell-ring`)
  - **Confirmación de horas** (`check-circle-2`)
- Derecha: mapa SVG simplificado de Chile (silueta) con puntos marcados en `--fk-orange` y texto "Cobertura nacional: RM, VI Región (Rancagua), V Región, Punta Arenas"
- Badge inferior con `--success` (verde): "✓ Cobertura nacional"

### 5.7 Sección "Beneficios para el paciente"

(Adaptado del brochure `raw data 2.png`)

- 4 cards en grid horizontal (4 columnas), cada una con icono Lucide en círculo + título corto + descripción breve:
  - **Retrasa la progresión** de la enfermedad renal (`trending-down`)
  - **Reduce el riesgo** de complicaciones clínicas (`shield-check`)
  - **Mejora la adherencia** y los resultados clínicos (`activity`)
  - **Apoya orientación** al paciente y su familia (`heart`)
- Subtítulo de la sección: "Avalado por más de 25 estudios clínicos publicados en revistas de nefrología"
- Cards con sombra suave, hover lift sutil de 2px (no scale)

### 5.8 Footer

- Fondo `--fk-blue` (azul oscuro corporativo) con texto blanco
- 6 columnas:
  1. Logo oficial Fresenius Kabi (`assets/fresenius-kabi-official.png`, en blanco/inverted) + tagline "caring for life"
  2. **Ketosteril®** / Aminoácidos y/o cetoanálogos
  3. **El programa** · ¿Cómo funciona? · ¿Qué incluye?
  4. **Para pacientes** · Consejos y herramientas · Preguntas frecuentes
  5. **Recursos** · Material educativo · Información clínica
  6. **Contacto** · Solicitar contacto · Contact Center
- Línea separadora 1px en `border-white/15`
- Línea inferior: copyright + disclaimer farmacéutico ("Material dirigido a profesionales de la salud. Ketosteril® es un alimento para propósitos médicos especiales. Usar bajo supervisión médica.") + icono Lucide `linkedin` para "Síguenos"

## 6. Estructura de archivos

```
/Users/rlabrao/Documents/Proyectos AI/Tamara/
├── index.html                       # Página única autocontenida
├── styles.css                       # CSS custom (variables, atmósfera hero, animaciones)
├── script.js                        # Validaciones form + modal + smooth scroll + stepper anim
├── assets/                          # Logos e imágenes
│   ├── ketosteril-wordmark-hq.png   # Logo Ketosteril® alta calidad (header)
│   ├── fresenius-kabi-official.png  # Logo Fresenius Kabi oficial (footer, color invertido vía CSS filter)
│   ├── hero-doctor-patient.png      # Imagen hero
│   ├── ketosteril-product.jpeg      # Imagen del producto (sección "¿Qué incluye?")
│   └── (legacy: archivos cropeados se pueden eliminar luego)
├── docs/superpowers/specs/
│   └── 2026-05-13-ketosteril-landing-design.md   # Este documento
├── Ideas/                           # Material original del usuario (referencia)
└── README.md                        # Cómo abrir/usar el demo
```

**Convención:** todo en español (UI, comentarios, nombres de variables visibles al usuario). Identificadores de código pueden estar en inglés por convención técnica (e.g. `validateForm`, `handleSubmit`).

## 7. Comportamientos JS detallados

### 7.1 Smooth scroll

- Todos los links internos (CTAs y navbar) usan `scroll-behavior: smooth` vía CSS
- Offset para compensar navbar sticky

### 7.2 Validación de RUT chileno

```js
function validarRut(rut) {
  // Limpia formato, separa dígito verificador, calcula módulo 11
  // Retorna true/false
}
```

### 7.3 Modal de éxito

- Trigger: submit exitoso del form
- Backdrop semitransparente con blur
- Card centrada con ícono check, título, mensaje, botón cerrar
- Cierra con click en botón o en backdrop
- Accesible: focus trap, escape key, aria-modal

### 7.4 Navbar scroll behavior

- Al hacer scroll > 50px: agrega sombra inferior sutil
- Mantiene posición sticky en top

## 8. Datos de "envío" mockeados

Al hacer submit exitoso, en lugar de POST a API:

```js
const payload = {
  paciente: { nombre, rut, telefono, email, comuna },
  derivacion: { medico, comentarios, timestamp: new Date().toISOString() }
};
console.log('[KETOSTERIL DEMO] Payload que se enviaría al Contact Center:', payload);
// Luego: muestra modal de éxito
```

Esto deja preparado el punto de integración futura. En la siguiente iteración solo se reemplaza el `console.log` por un `fetch` a un endpoint real (Google Apps Script, Make, Zapier, o backend custom).

## 9. Accesibilidad básica

- Contraste WCAG AA en todos los textos
- Labels asociadas a inputs vía `for`/`id`
- `aria-required`, `aria-invalid`, `aria-describedby` en campos del form
- Mensajes de error anunciables por lectores de pantalla
- Tab order lógico
- Focus visible en todos los interactivos

## 10. Cómo se entrega y se usa

1. **Para revisión local:** doble-click en `index.html` → abre en navegador
2. **Para compartir con stakeholders:** se puede desplegar gratis en Netlify drop, Vercel, o GitHub Pages (arrastrar carpeta completa)
3. **Demo a nefrólogo:** Tamara abre el link en el computador, le muestra cómo en 30 segundos puede derivar un paciente sin tener que llamarla

## 11. Testing manual (criterios de aceptación)

### Funcional
- [ ] Página carga sin errores en consola
- [ ] Todos los logos en alta calidad (no pixelados, no rotos)
- [ ] Estructura visual fiel al mockup `Ideas/Idea #1.png` con las mejoras de diseño descritas
- [ ] Stepper de 5 pasos completo, legible, con animación de línea conectora
- [ ] Form acepta entrada en todos los campos
- [ ] RUT inválido (ej. `12345678-9` con DV incorrecto) muestra error
- [ ] Teléfono mal formateado muestra error
- [ ] Submit exitoso muestra modal de confirmación
- [ ] Modal se cierra con botón Cerrar o ESC o click en backdrop
- [ ] Después de cerrar modal, form está limpio
- [ ] Console.log muestra el payload completo
- [ ] Todos los textos están en español
- [ ] Smooth scroll funciona en links del navbar y CTAs

### Visual (pre-delivery checklist de ui-ux-pro-max)
- [ ] No hay emojis usados como iconos (todo Lucide SVG)
- [ ] Iconos consistentes (todos Lucide, mismo viewBox)
- [ ] Logos correctos (oficiales de Fresenius Kabi)
- [ ] Hover states sin layout shift (solo color/sombra, no scale)
- [ ] Todos los clickables con `cursor-pointer`
- [ ] Transitions 150–300ms en interactivos
- [ ] Focus rings visibles con `focus-visible` (no en click)
- [ ] Contraste WCAG AA (4.5:1) verificado en todos los textos
- [ ] Borders visibles (no `border-white/10` invisible)
- [ ] Layout no se rompe a 1280px, 1440px, 1920px de ancho
- [ ] `prefers-reduced-motion`: stagger y stepper anim se deshabilitan

### Brand integrity
- [ ] Azul exacto `#003781` (no sky blue ni navy genérico)
- [ ] Naranja `--fk-orange` aparece SOLO en el badge "Sin costo adicional"
- [ ] Tagline "caring for life" presente en footer
- [ ] Disclaimer farmacéutico presente

## 12. Riesgos y decisiones abiertas

| Riesgo / Decisión | Mitigación / Próximo paso |
|---|---|
| Los logos cropeados del PNG podrían verse pixelados a tamaños grandes | Si se necesita, conseguir versiones vectoriales con Tamara/equipo de marketing |
| Sin backend real, no hay forma de probar la "captura real" del lead | Para demo es suficiente. Próxima iteración: conectar a Google Sheets vía Apps Script (~30 min) |
| Disclaimer farmacéutico genérico | Tamara debería validar el texto exacto con regulatorio de Fresenius Kabi antes de publicar |
| Las imágenes del hero/médico vienen del mockup ChatGPT — pueden no estar libres de derechos | Para demo OK. Para producción, sustituir por stock licenciado o foto del programa real |
| Comunas chilenas en el select — ¿lista completa o solo principales? | Empezamos con las principales (~10). Se expande según necesidad |

## 13. Próximos pasos después de este diseño

1. Usuario revisa este spec
2. Si aprueba → invocar **writing-plans** para crear el plan de implementación detallado
3. Implementación de la página
4. Revisión visual lado a lado con el mockup original
5. (Futuro, fuera de esta iteración) responsive móvil, backend, deploy a dominio público
