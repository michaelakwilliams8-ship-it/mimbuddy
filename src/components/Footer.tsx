const Footer = () => (
  <footer className="bg-sage-light px-6 md:px-20 pt-12 pb-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
      <a href="/" className="flex items-center gap-3">
        <img src="/assets/mimbuddy-koala.png" alt="" loading="lazy" className="h-14 w-auto" />
        <img src="/assets/mimbuddy-wordmark.png" alt="MimBuddy" loading="lazy" className="h-10 w-auto" />
      </a>
      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/80">
        <a href="/" className="hover:text-foreground">For hospitals</a>
        <a href="/home" className="hover:text-foreground">For home</a>
        <a href="/about" className="hover:text-foreground">About us</a>
        <a href="/contact" className="hover:text-foreground">Contact</a>
      </nav>
      <a href="mailto:mickey@mimbuddy.com.au" className="text-base text-foreground/85 hover:text-foreground">mickey@mimbuddy.com.au</a>
    </div>
    <p className="text-center text-sm text-mid mt-10 mb-0">© 2026 MimBuddy. All rights reserved.</p>
  </footer>
);

export default Footer;
