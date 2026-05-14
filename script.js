// Ketosteril Landing — Interactive behavior

// ── Google Apps Script Web App URL ───────────────────────────
// Pega aquí la URL del Web App después de desplegarlo.
// Mientras sea el placeholder, el formulario funciona en modo demo.
var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzONzhGpNOC1btaTiF3BU0cQKllkNhHdC00Y6as1EnaqF_kadDqEelEiBbmSSye7sDP/exec';
var DEMO_MODE = (APPS_SCRIPT_URL === 'PASTE_YOUR_WEB_APP_URL_HERE');
// ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  console.log('[Ketosteril] Landing page loaded');
});

const navBar = document.getElementById('nav-bar');
const handleNavScroll = () => {
  if (navBar) {
    if (window.scrollY > 50) navBar.classList.add('scrolled');
    else navBar.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', handleNavScroll, { passive: true });

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

const rutInput = document.getElementById('rut');
if (rutInput) {
  rutInput.addEventListener('input', (e) => {
    const caretAtEnd = e.target.selectionStart === e.target.value.length;
    e.target.value = formatRut(e.target.value);
    if (caretAtEnd) e.target.setSelectionRange(e.target.value.length, e.target.value.length);
  });
}

// ── Form validation + submit handler + success modal ──
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
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || '');
}

function validateForm() {
  let valid = true;
  const data = Object.fromEntries(new FormData(form).entries());

  if (!data.nombre || data.nombre.trim().length < 2) {
    setFieldError('nombre', 'Ingresa el nombre del paciente');
    valid = false;
  } else setFieldError('nombre', '');

  if (!data.apellido || data.apellido.trim().length < 2) {
    setFieldError('apellido', 'Ingresa el apellido del paciente');
    valid = false;
  } else setFieldError('apellido', '');

  if (!validateRut(data.rut)) {
    setFieldError('rut', 'RUT inválido. Verifica el dígito verificador.');
    valid = false;
  } else setFieldError('rut', '');

  if (!validatePhone(data.telefono)) {
    setFieldError('telefono', 'Formato esperado: +56 9 XXXX XXXX');
    valid = false;
  } else setFieldError('telefono', '');

  if (data.email && !validateEmail(data.email)) {
    setFieldError('email', 'Ingresa un email válido');
    valid = false;
  } else setFieldError('email', '');

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

  const data = Object.fromEntries(new FormData(form).entries());
  const payload = {
    nombre:      data.nombre.trim(),
    apellido:    data.apellido.trim(),
    rut:         data.rut.trim(),
    telefono:    data.telefono.trim(),
    email:       data.email.trim(),
    medico:      data.medico.trim(),
    comentarios: data.comentarios?.trim() || ''
  };

  function restoreButton() {
    submitBtn.disabled = false;
    label.textContent = 'Enviar derivación';
    spinner.classList.add('hidden');
  }

  function showSubmitError(message) {
    let banner = form.querySelector('#submit-error-banner');
    if (!banner) {
      banner = document.createElement('p');
      banner.id = 'submit-error-banner';
      banner.className = 'form-error text-center';
      submitBtn.closest('div').insertAdjacentElement('beforebegin', banner);
    }
    banner.textContent = message;
    banner.classList.remove('hidden');
  }

  function clearSubmitError() {
    const banner = form.querySelector('#submit-error-banner');
    if (banner) banner.classList.add('hidden');
  }

  if (DEMO_MODE) {
    console.log('[Ketosteril DEMO] Payload que se enviaría:', payload);
    setTimeout(() => {
      restoreButton();
      clearSubmitError();
      form.reset();
      openModal();
    }, 800);
    return;
  }

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload)
  })
  .then(() => {
    restoreButton();
    clearSubmitError();
    form.reset();
    openModal();
  })
  .catch((err) => {
    console.error('[Ketosteril] Error de red:', err);
    restoreButton();
    showSubmitError('No se pudo enviar la solicitud. Verifica tu conexión e inténtalo nuevamente.');
  });
});
