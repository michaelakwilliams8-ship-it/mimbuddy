import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const prerendered = document.getElementById("prerender-data")?.textContent;

// Pages prerendered at build time already contain their HTML, so attach to it.
// Other routes (e.g. /starlight) are served the homepage's HTML by the Vercel
// rewrite, so throw that away and render from scratch.
const path = window.location.pathname.replace(/(.)\/+$/, "$1");

if (prerendered && JSON.parse(prerendered).path === path) {
  hydrateRoot(root, <App />);
} else {
  root.replaceChildren();
  createRoot(root).render(<App />);
}
