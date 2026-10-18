import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroImage from "@/components/HeroImage";
import Ticker from "@/components/Ticker";
import FullWidthImage from "@/components/FullWidthImage";
import TestimonialsSection from "@/components/TestimonialsSection";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import Kicker from "@/components/Kicker";
import Underline from "@/components/Underline";
import { ONE_LINER } from "@/pages/Hospitals";

const h2 = "font-display text-[clamp(30px,3.2vw,44px)] font-normal leading-[1.15] tracking-tight mb-5";
const body = "text-[15px] font-light text-mid leading-[1.8]";


const Home = () => (
  <>
    <AnnouncementBar text={ONE_LINER} />
    <Navbar current="/home" />
    <main>
      <HeroImage
        src="https://cdn.shopify.com/s/files/1/0767/1893/2201/files/24_Feb_Pitch.png?v=1774145200"
        alt="A child wakes up smiling, reaching for their MimBuddy on the bedside table, the screen showing Kiki the Koala"
      />

      <section aria-labelledby="hero-heading" className="bg-background py-16 md:py-24 px-6 md:px-20 text-center">
        <Kicker>For home</Kicker>
        <h1 id="hero-heading" className="font-display text-[clamp(36px,4.4vw,58px)] font-normal leading-[1.15] tracking-tight mb-9 max-w-[16ch] mx-auto">
          The therapeutic support hub of <Underline>childhood.</Underline>
        </h1>
        <a href="#register" className="inline-block bg-sage-deep text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold no-underline hover:bg-dark hover:-translate-y-0.5 transition-all">
          Join the newsletter list →
        </a>
      </section>

      <Ticker />

      <section aria-labelledby="imagine-heading" className="bg-card py-20 md:py-28 px-6 md:px-20 text-center">
        <h2 id="imagine-heading" className="sr-only">Imagine you're 7</h2>
        <div className="font-display text-[clamp(22px,2.4vw,30px)] leading-[1.5] max-w-[30ch] mx-auto space-y-6">
          <p className="m-0">Imagine you're 7yrs old and it's time to get ready for school but…</p>
          <p className="m-0 text-mid">Your clothes prick<br />Time blurs<br />Sounds hurt</p>
          <p className="m-0 italic text-sage-mid">“Hurry up, you're making us late!”</p>
          <p className="m-0 text-mid">But next steps aren't clear<br />Frozen in fear<br />And it's not even 8am…</p>
        </div>
      </section>

      <section aria-labelledby="tools-heading" className="bg-sage-light py-20 md:py-24 px-6 md:px-20">
        <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex gap-10">
            <div><div className="font-display text-[64px] leading-none">500+</div><p className={`${body} mt-2 mb-0`}>Customer discussions</p></div>
            <div><div className="font-display text-[64px] leading-none">85%</div><p className={`${body} mt-2 mb-0`}>reported the same…</p></div>
          </div>
          <div>
            <h2 id="tools-heading" className={h2}>Support tools are</h2>
            <p className="font-display text-[clamp(24px,2.6vw,34px)] leading-[1.4] m-0">Fragmented<br />Distracting apps<br />Admin burden</p>
          </div>
        </div>
      </section>


      <FullWidthImage
        src="https://cdn.shopify.com/s/files/1/0767/1893/2201/files/coffee.table.MimHub.jpg?v=1774153443"
        alt="The MimBuddy on a coffee table in a family living room"
      />

      <TestimonialsSection />

      <section id="register" aria-labelledby="register-heading" className="bg-beige text-center py-20 md:py-24 px-6 md:px-20">
        <img src="/assets/mimbuddy-koala.png" alt="" loading="lazy" className="h-16 w-auto mx-auto mb-5" />
        <h2 id="register-heading" className={h2}>Join the <Underline>newsletter</Underline> list</h2>
        <p className={`${body} max-w-[440px] mx-auto mb-10`}>Follow the journey behind the build. No spam, just meaningful updates.</p>
        <SignupForm kind="newsletter" />
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
