// A hand-drawn underline under one word, in the quackedmarketing.com style.
const Underline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block whitespace-nowrap">
    <em className="italic text-sage-mid">{children}</em>
    <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true" className="absolute left-0 -bottom-1 w-full h-[0.35em] overflow-visible">
      <path d="M4 13 C 50 7, 120 6, 196 9" fill="none" stroke="hsl(var(--gold))" strokeWidth="5" strokeLinecap="round" />
    </svg>
  </span>
);

export default Underline;
