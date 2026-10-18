const cards = [
  { tag: "Age 3", quote: '"Do shoes go on my hands or feet? *giggles* MY FEET KIKI!"', name: "Elly" },
  { tag: "Teacher", quote: '"This is absolutely incredible. So clever and needed!"', name: "Stacey" },
  { tag: "Occupational Therapist", quote: '"Wow! I\'ve got no words. This is brilliant."', name: "Mary" },
];

const TestimonialsSection = () => (
  <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-background py-16 md:py-20 px-6 md:px-20">
    <div className="text-center mb-16">
      <div className="text-[11px] font-medium tracking-[3px] uppercase text-sage mb-3.5 flex justify-center">What People Are Saying</div>
      <h2 id="testimonials-heading" className="font-display text-[clamp(30px,3.2vw,44px)] font-normal leading-[1.15] tracking-tight">
        Real people. <em className="italic text-sage">Real moments.</em>
      </h2>
    </div>

    {/* Featured */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden mb-8 bg-card">
      <img
        src="https://cdn.shopify.com/s/files/1/0767/1893/2201/files/IMG_3465.png?v=1774158608"
        alt="Sophie, age 7, confidently walking downstairs holding her MimBuddy, a real neurodivergent child showing how the standalone assistive technology device fits naturally into everyday life for Autistic and ADHD families"
        loading="lazy"
        decoding="async"
        className="w-full h-auto block object-contain align-bottom"
      />
      <div className="flex flex-col justify-center p-12 md:p-14 bg-card">
        <div className="font-display text-[clamp(24px,2.5vw,38px)] italic text-foreground leading-[1.4] mb-8">
          "I love my MimBuddy!"
        </div>
        <div className="text-[15px] font-medium text-foreground">Sophie</div>
        <div className="text-xs text-mid mt-1">Age 7</div>
      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {cards.map((c, i) => (
        <div key={i} className="bg-card rounded-3xl p-9 flex flex-col justify-between">
          <div>
            <span className="text-[10px] tracking-[2px] uppercase text-sage font-semibold mb-5 block">{c.tag}</span>
            <blockquote className="font-display italic text-base text-foreground leading-[1.7] mb-6">{c.quote}</blockquote>
          </div>
          <div className="text-sm font-medium text-foreground">{c.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
