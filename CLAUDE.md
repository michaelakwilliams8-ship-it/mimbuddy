# Working on the MimBuddy website

Read this before doing anything. It exists because earlier work went badly wrong.

## The founder

Mickey is a non-technical founder. Write short, plain-English replies with no jargon.
She knows her market. Your job is to execute her vision well, not to invent one.

## Facts already settled (don't ask again)

- **Brand:** MimBuddy. It used to be Mimbalu (selling to families); it now sells to hospitals.
  Mimbalu's branding can be reused, but everything is called MimBuddy.
- **Site:** www.mimbuddy.com.au. The code is this repo (`site/`) and Vercel deploys it from `main`.
- **Contact:** mickey@mimbuddy.com.au
- **Pages:** For hospitals (`/`), For home (`/home`), About us (`/about`), Contact (`/contact`).
- **Hospital page:** written for all hospital staff. The one call to action is "Book a 10-min call".
  No statistics on the main page.
- **Hospital headline:** "Neurodivergent support for hospitals", with the line "From the ED, admission, to home."
- **For home:** parent-facing. Use no real person's story.
- **About us:** the only page with the founding team and "our journey so far".
- **Look:** mimbalu.com colours: cream, sage, deep sage green and warm brown.
  Hero style chosen: Option B. A split layout: headline on the left with the word
  "Neurodivergent" in sage, the line under it and a sage pill button; on the right, a rounded
  photo of the device in a hospital.
- **Fonts:** Schoolbell for ALL headings, in a soft colour (warm brown #6b5f56, accents in sage),
  never black. Body text: Inter, plain. NEVER Lora (rejected twice).
- **Logo:** the koala head and the handwritten "Mimbuddy" wordmark, in `site/assets/`.
- **The device:** a standalone hardware device with a screen, built that way for safety.
  It is NOT "offline" and it does NOT have "no screen".
- **What's on the device** (her list; use only this):
  - customised social stories, e.g. getting a blood test
  - About me user profiles
  - support for activities of daily living during admissions and ED visits
  - visual routine boards
  - staff profiles
  - information about procedures
  - the day's flow, e.g. "today it's an X-ray"
  - timers to help with waits
  - calming activities that up-regulate or down-regulate
  - a feelings board
  - a pain scale board, with visuals to identify and communicate pain
  - a mascot that speaks the patient's language (e.g. English, Chinese)
  - the language of their support needs: declarative language for PDA; safety and autonomy
    language around food for OCD or fear-based needs
  - setups for eating disorder clinics (menu options) and physio programs (activities)

## Never

- The photo of Maddy in a hospital bed. Any real child's story without being asked.
- An "Our why" section, a scrolling ticker banner, or "Speaks their language. Shows where it hurts.
  Tells them what's next." as a headline. "The support layer…" and "The bedside tool…" were both rejected.
- Headings, examples, stories, statistics or features she didn't give you.
- Content carried over from mimbalu.com, Starlight or the pitch deck unless she asks for it.
- The words "offline", "special needs", "suffering" or "challenging behaviour".

## What went wrong before (don't repeat it)

1. **Built blind.** This environment can't load outside images or websites. Pages were judged
   from grey boxes. Use local copies of images (her uploads) when checking, and say plainly
   when you can't see something.
2. **Invented copy and structure** to fill gaps, then patched one section at a time after each
   complaint. The narrative lurched between versions and the result looked like a template.
3. **Built whole pages before agreeing on the look.** Every rebuild missed.
4. **Long, technical replies,** and questions she had already answered.
5. **Worked in the wrong repo** (Quacked, then mimbalu.com) before confirming where the site lives.

## How to work

1. **Check this file first.** If the answer is here, don't ask.
2. **Use her words verbatim.** If something genuinely needs words she hasn't given, offer 2–3
   options and let her pick. Never fill the gap silently.
3. **Mock up before you build.** Screenshot the top of the page and any new section, send it,
   get a pick, then build. Use local photos so the mock-up looks real.
4. **Change only what she asked.** No extra sections or "improvements" without asking.
5. **Look at it before sending it:** desktop and phone screenshots with real images. If it looks
   generic, cluttered or template-like, fix it first.
6. **Think like a brand and healthcare-industry expert.** Hospital staff and executives need
   credibility (the real product, in real clinical settings, calm and clean). The koala adds
   warmth but shouldn't make it look like a toy.
7. **Research claims before publishing.** Name the source, and flag anything you can't verify.
8. **Questions:** at most 3 at a time, multiple choice where possible, only when the answer
   changes what you build. Put the most important one first.
9. **Replies:** a few lines. What changed, what she needs to do (if anything), one question at most.

## Open questions (update this list as they're answered)

- The device photo on the beige sofa: needs uploading as a file. It came through as a picture only.
- Spelling in text: "Mimbuddy" (as in the logo) or "MimBuddy"?
- The "[X] minutes per patient" figure, if that line comes back.
- LOAPAC: its role, and whether its logo can be used.
- The bare domain mimbuddy.com.au isn't connected in Vercel yet (only www is).
