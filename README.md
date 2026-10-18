# MimBuddy for Hospitals

Website for www.mimbuddy.com.au: the MimBuddy by Mimbalu, pitched to hospitals.

Plain HTML, CSS and a little JavaScript, no build step, so every word is in the
page source for search engines and AI assistants to read. Deploy on Vercel as a
static site (no framework, no build command, output directory `.`).

## Run locally

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. Images under `/__l5e/` only load once deployed
(see below).

## Files

- `index.html`: the page
- `styles.css`: styles, with the colour tokens at the top
- `script.js`: the booking form
- `llms.txt`: a plain-text summary for AI assistants
- `vercel.json`: redirects `mimbuddy.com.au` to `www.`, and proxies `/__l5e/`
- `assets/`: local images

Fonts load from Google Fonts: Lora (headings) and Comfortaa (everything else).
Line icons: Lucide (ISC).

## Still shared with the old Lovable site

- **Booking form**: saves to the same Supabase `registrations` table as the
  hospital form on mimbalu.com (type `hospital-partnership`), so enquiries land
  in the same place and sync to the same Google Sheet.
- **Some images** (the device close-up, Kiki at the Royal Children's Hospital,
  Kiki's face and Wally the Wombat) are still hosted by Lovable and reached
  through the `/__l5e/` rewrite. Save them into `assets/` and update the paths
  to remove that dependency. Everything else is on the Shopify CDN or in
  `assets/`.

## Before launch

- Replace "About [X] minutes per patient" in `index.html`.
- Add sources for the statistics in "The problem" and "You're doing your best".
