import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "For hospitals" },
  { href: "/home", label: "For home" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
];

const Navbar = ({ current }: { current: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-6 md:px-20 py-4 bg-background/95 backdrop-blur-md border-b border-beige">
      <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
        <img src="/assets/mimbuddy-koala.png" alt="" className="h-11 w-auto" />
        <img src="/assets/mimbuddy-wordmark.png" alt="MimBuddy, home" className="h-8 w-auto" />
      </a>

      {/* Desktop */}
      <ul className="hidden lg:flex items-center gap-8 list-none">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
              className={`text-[13px] no-underline transition-colors ${current === l.href ? "text-foreground font-semibold" : "text-mid hover:text-foreground"}`}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="/contact" className="bg-sage-deep text-primary-foreground px-6 py-2.5 rounded-full text-[13px] font-semibold hover:bg-dark transition-colors no-underline" style={{ animation: "glow 3s ease-in-out infinite" }}>
            Book a 10-min call →
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        type="button"
        className="text-foreground lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {open && (
        <div id="mobile-nav" className="absolute top-full left-0 right-0 bg-background border-b border-beige p-6 flex flex-col gap-4 lg:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} aria-current={current === l.href ? "page" : undefined} className="text-sm text-mid" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/contact" className="bg-sage-deep text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold text-center" onClick={() => setOpen(false)}>
            Book a 10-min call →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
