import type { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Hospitals from "./pages/Hospitals.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

// The router is passed in so the build-time prerender (src/prerender.tsx) can
// render the same app with a StaticRouter.
const App = ({ router: Router = BrowserRouter }: { router?: (props: { children: ReactNode }) => ReactNode }) => (
  <>
    <Sonner />
    <Router>
      <Routes>
        <Route path="/" element={<Hospitals />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
