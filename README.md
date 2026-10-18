# MimBuddy

Website for www.mimbuddy.com.au: For hospitals (`/`), For home (`/home`), About us
(`/about`) and Contact (`/contact`). Built on the mimbalu.com design.

Vite, React, TypeScript and Tailwind. Every page is prerendered to plain HTML at
build time (`src/prerender.tsx`), so search engines and AI tools can read it.

## Run locally

```sh
npm install
npm run dev     # http://localhost:8080
npm run build   # production build in dist/
```

## Where things are

- `src/pages/`: one file per page
- `src/components/`: header, footer, forms and shared pieces
- `src/seo.ts`: each page's title and description
- `public/`: logo files, favicons, `llms.txt`, `robots.txt`, `sitemap.xml`

## Shared with the old Mimbalu site

- Both forms save to the Mimbalu Supabase `registrations` table (keys in
  `.env`), which also syncs to the Google Sheet. Hospital calls are saved as
  `hospital-partnership`; newsletter sign-ups with the reader's role.
- A few images are still hosted by Lovable and reached through the `/__l5e`
  rewrite in `vercel.json`.
