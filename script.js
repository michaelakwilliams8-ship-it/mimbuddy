// Sign-up forms (hospital enquiries and the home newsletter list) save to the
// existing Mimbalu registrations table, which also syncs to the Google Sheet.
// The key is Supabase's public, insert-only key.
const SUPABASE_URL = 'https://wkrxcnuvxfiyxpjgnsjx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcnhjbnV2eGZpeXhwamduc2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MjAyNTQsImV4cCI6MjA5MDI5NjI1NH0.84XymMnaK64pRRtpkcVET0XLdVaJ3C4CYDuGw8dHEEQ';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.querySelectorAll('form.signup').forEach((form) => {
  const errorBox = form.querySelector('.form-error');
  const done = form.parentElement.querySelector('.form-done');
  const button = form.querySelector('button[type="submit"]');
  const label = button.textContent;

  const showError = (msg, field) => {
    errorBox.textContent = msg;
    errorBox.hidden = false;
    if (field) field.focus();
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.hidden = true;

    for (const field of form.querySelectorAll('[required]')) {
      if (!field.value.trim()) return showError(field.dataset.missing, field);
    }
    const f = form.elements;
    const email = f.email.value.trim();
    if (!EMAIL.test(email)) return showError('Please enter a valid email address.', f.email);

    // Hospital enquiries keep their details in the message, as on mimbalu.com.
    // The home form records who's signing up (parent, teacher...) as the type.
    const isHospital = form.dataset.type === 'hospital-partnership';
    const message = [
      isHospital ? 'Hospital or health service: ' + f.hospital.value.trim() : null,
      isHospital && f.role.value ? 'Role: ' + f.role.value : null,
      f.message.value.trim() || null,
      'Sent from mimbuddy.com.au',
    ].filter(Boolean).join('\n');
    const type = isHospital ? form.dataset.type : (f.iam.value || form.dataset.type);

    button.disabled = true;
    button.textContent = 'Sending…';
    try {
      const res = await fetch(SUPABASE_URL + '/rest/v1/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: 'Bearer ' + SUPABASE_KEY,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ name: f.name.value.trim(), email, type, message }),
      });
      if (!res.ok) throw new Error(res.status);
      form.hidden = true;
      done.hidden = false;
      done.setAttribute('tabindex', '-1');
      done.focus();
    } catch {
      showError('Something went wrong. Please try again, or email mickey@mimbuddy.com.au.');
      button.disabled = false;
      button.textContent = label;
    }
  });
});
