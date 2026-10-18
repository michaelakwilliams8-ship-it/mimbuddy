# MimBuddy

Website for www.mimbuddy.com.au: For hospitals (`/`), For home (`/home`),
About us (`/about`) and Contact (`/contact`).

Plain HTML and CSS in `site/`, in the quackedmarketing.com style: Schoolbell
headings, Inter body text. `npm run build` copies `site/` to `dist/`, which
Vercel serves.

## Run locally

```sh
cd site && python3 -m http.server 8000
```

## Files

- `site/*.html`: the four pages
- `site/styles.css`: styles (colour tokens at the top)
- `site/script.js`: the booking and newsletter forms, and scroll fades
- `site/assets/`: the koala and wordmark

Both forms save to the Mimbalu Supabase `registrations` table, which syncs to
the Google Sheet: hospital calls as `hospital-partnership`, newsletter sign-ups
with the reader's role.
