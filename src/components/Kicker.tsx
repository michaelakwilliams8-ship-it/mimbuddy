const Kicker = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`text-[11px] font-medium tracking-[3px] uppercase text-sage-deep mb-3.5 ${className}`}>{children}</div>
);

export default Kicker;
