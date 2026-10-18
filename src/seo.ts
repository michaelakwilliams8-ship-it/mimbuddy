// Per-page <head> tags, added to each prerendered page at build time
// (src/prerender.tsx). Shared tags such as og:image live in index.html.
const SITE = "https://mimbuddy.com.au";

type PageMeta = { title: string; description: string };

const ONE_LINER = "The bedside tool for supporting neurodivergent patients, from the ED, admission, to home.";

const pages: Record<string, PageMeta> = {
  "/": { title: "MimBuddy — For hospitals", description: ONE_LINER },
  "/home": { title: "MimBuddy — For home", description: "The therapeutic support hub of childhood." },
  "/about": { title: "About us — MimBuddy", description: "The founding team behind MimBuddy, and our journey so far." },
  "/contact": { title: "Book a 10-min call — MimBuddy", description: "Book a 10-minute call about bringing MimBuddy to your hospital." },
};

export function headFor(path: string) {
  const page = pages[path] ?? pages["/"];
  const url = SITE + (path === "/" ? "/" : path);
  return {
    lang: "en-AU",
    title: page.title,
    elements: new Set([
      { type: "meta", props: { name: "description", content: page.description } },
      { type: "link", props: { rel: "canonical", href: url } },
      { type: "meta", props: { property: "og:title", content: page.title } },
      { type: "meta", props: { property: "og:description", content: page.description } },
      { type: "meta", props: { property: "og:url", content: url } },
      { type: "meta", props: { name: "twitter:title", content: page.title } },
      { type: "meta", props: { name: "twitter:description", content: page.description } },
    ]),
  };
}
