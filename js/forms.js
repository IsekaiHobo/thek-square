/* The K-Square — form validation + submission.
 * Submits to the form's `action` endpoint (Formspree) via fetch when configured.
 * While the endpoint is still the REPLACE_WITH_FORM_ID placeholder, it falls back
 * to a local confirmation so the form is demoable without a backend. */

function t(key, fallback) {
  if (window.ksqI18n && typeof window.ksqI18n.t === 'function') {
    var v = window.ksqI18n.t(key);
    if (v && v !== key) return v;
  }
  return fallback;
}

function isEndpointConfigured(form) {
  var action = form.getAttribute('action') || '';
  return /formspree\.io\/f\//.test(action) && action.indexOf('REPLACE_WITH_FORM_ID') === -1;
}

function initForm(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors(form);

    let isValid = true;
    form.querySelectorAll('[required]').forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        showError(field, t('form.error.required', 'This field is required.'));
      } else if (field.type === 'email' && !isValidEmail(field.value)) {
        isValid = false;
        showError(field, t('form.error.email', 'Enter a valid email address.'));
      }
    });

    if (!isValid) return;

    if (isEndpointConfigured(form)) {
      submitToBackend(form);
    } else {
      // No backend configured yet — show the local confirmation.
      showConfirmation(form);
    }
  });
}

function submitToBackend(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalLabel = submitBtn ? submitBtn.textContent : '';
  if (submitBtn) { submitBtn.disabled = true; submitBtn.setAttribute('aria-busy', 'true'); }

  fetch(form.getAttribute('action'), {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' }
  })
    .then((response) => {
      if (response.ok) {
        showConfirmation(form);
      } else {
        return response.json().then(() => { throw new Error('submit failed'); });
      }
    })
    .catch(() => {
      showGlobalError(form, t('form.error.submit', 'Something went wrong. Please try again or email us directly.'));
      if (submitBtn) { submitBtn.disabled = false; submitBtn.removeAttribute('aria-busy'); submitBtn.textContent = originalLabel; }
    });
}

function showConfirmation(form) {
  form.hidden = true;
  const confirmation = form.parentElement.querySelector('.form-confirmation');
  if (confirmation) confirmation.hidden = false;
}

function showError(field, message) {
  const error = document.createElement('span');
  error.className = 'form-error';
  error.setAttribute('role', 'alert');
  error.textContent = message;
  field.insertAdjacentElement('afterend', error);
  field.setAttribute('aria-invalid', 'true');
  field.classList.add('field--invalid');
}

function showGlobalError(form, message) {
  let banner = form.querySelector('.form-error--global');
  if (!banner) {
    banner = document.createElement('p');
    banner.className = 'form-error form-error--global';
    banner.setAttribute('role', 'alert');
    form.appendChild(banner);
  }
  banner.textContent = message;
}

function clearErrors(form) {
  form.querySelectorAll('.form-error').forEach((el) => el.remove());
  form.querySelectorAll('.field--invalid').forEach((el) => {
    el.classList.remove('field--invalid');
    el.removeAttribute('aria-invalid');
  });
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
