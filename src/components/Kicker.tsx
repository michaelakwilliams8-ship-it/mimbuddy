const Kicker = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`kicker ${className}`}>{children}</div>
);

export default Kicker;
