const items = [
  "Neurodivergent kids have the right to feel safe and be understood"
];

const TickerItem = ({ text }: { text: string }) => (
  <span className="inline-flex items-center gap-2.5 px-10 text-xs font-normal text-white/90 tracking-wide border-r border-white/20">
    <span className="text-sage text-base">✦</span>
    <b className="text-white font-medium">{text}</b>
  </span>
);

const Ticker = () => (
  <div className="bg-dark py-2.5 overflow-hidden whitespace-nowrap">
    <div className="inline-flex hover:[animation-play-state:paused]" style={{ animation: 'ticker 28s linear infinite' }}>
      {[...items, ...items].map((item, i) => (
        <TickerItem key={i} text={item} />
      ))}
    </div>
  </div>
);

export default Ticker;
