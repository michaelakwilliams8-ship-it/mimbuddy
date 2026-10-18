import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";
import { headFor } from "./seo.ts";

// Runs at build time (see vite.config.ts) so each page ships as real HTML that
// search engines and AI crawlers can read without running JavaScript.
export async function prerender({ url }: { url: string }) {
  const path = new URL(url, "https://mimbalu.com").pathname;
  const html = renderToString(
    <App router={({ children }) => <StaticRouter location={path}>{children}</StaticRouter>} />,
  );
  return { html, data: { path }, head: headFor(path) };
}
