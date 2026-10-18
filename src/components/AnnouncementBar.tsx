const AnnouncementBar = ({ text }: { text: string }) => (
  <div className="bg-sage-deep text-primary-foreground text-center py-3 px-6 text-[13px] font-medium tracking-wide flex items-center justify-center gap-2.5 relative z-[101]">
    <span className="w-2 h-2 bg-primary-foreground rounded-full flex-shrink-0" style={{ animation: "pulse-dot 2s infinite" }} aria-hidden="true" />
    <img src="/assets/mimbuddy-koala.png" alt="" className="h-6 w-6 object-contain" />
    <span>{text}</span>
  </div>
);

export default AnnouncementBar;
