// Booking form: saves the enquiry to the existing Mimbalu registrations table
// (type "hospital-partnership", same as the form on mimbalu.com), which also
// syncs it to the Google Sheet. The key is Supabase's public, insert-only key.
const SUPABASE_URL = 'https://wkrxcnuvxfiyxpjgnsjx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcnhjbnV2eGZpeXhwamduc2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MjAyNTQsImV4cCI6MjA5MDI5NjI1NH0.84XymMnaK64pRRtpkcVET0XLdVaJ3C4CYDuGw8dHEEQ';

const form = document.getElementById('book-form');
const errorBox = form.querySelector('.form-error');
const done = document.querySelector('.form-done');

const showError = (msg, field) => {
  errorBox.textContent = msg;
  errorBox.hidden = false;
  if (field) field.focus();
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorBox.hidden = true;

  const f = form.elements;
  const hospital = f.hospital.value.trim();
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  if (!hospital) return showError('Please enter your hospital or health service.', f.hospital);
  if (!name) return showError('Please enter your name.', f.name);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('Please enter a valid work email address.', f.email);

  const message = [
    'Hospital or health service: ' + hospital,
    f.role.value ? 'Role: ' + f.role.value : null,
    f.message.value.trim() || null,
    'Sent from www.mimbuddy.com.au',
  ].filter(Boolean).join('\n');

  const button = form.querySelector('button[type="submit"]');
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
      body: JSON.stringify({ name, email, type: 'hospital-partnership', message }),
    });
    if (!res.ok) throw new Error(res.status);
    form.hidden = true;
    done.hidden = false;
    done.setAttribute('tabindex', '-1');
    done.focus();
  } catch {
    showError('Something went wrong. Please try again, or email mickey@mimbalu.com.');
    button.disabled = false;
    button.textContent = 'Request a call →';
  }
});
