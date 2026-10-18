import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroImage from "@/components/HeroImage";
import FullWidthImage from "@/components/FullWidthImage";
import Footer from "@/components/Footer";
import Kicker from "@/components/Kicker";
import Underline from "@/components/Underline";
import closeup from "@/assets/startlight/mimbuddy-closeup.png.asset.json";
import atrium from "@/assets/atrium-kiki-mimbuddy.jpg.asset.json";

export const ONE_LINER = "The bedside tool for supporting neurodivergent patients, from the ED, admission, to home.";

const h2 = "h-section";
const body = "text-[15px] font-light text-mid leading-[1.8]";
const button = "inline-block bg-sage-deep text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold no-underline hover:bg-dark hover:-translate-y-0.5 transition-all";

const inside = [
  ["Social stories", "Customised social stories, like getting a blood test."],
  ["About me", "User profiles about the patient."],
  ["Daily living", "Support for activities of daily living during admissions and ED visits."],
  ["Visual routine boards", "Each step, one picture at a time."],
  ["Staff profiles", "Get to know the people caring for them."],
  ["Procedures", "Information about procedures, before they happen."],
  ["Daily flow", "Set up the day. Today, it's an X-ray."],
  ["Timers", "To help with waits."],
  ["Calming activities", "Activities that up-regulate or down-regulate, depending on the patient's needs."],
  ["Feelings board", "To talk about and process feelings, connect with caregivers and communicate."],
  ["Pain scale board", "With visuals to identify what the pain is and communicate it."],
  ["Speaks their language", "A little mascot talks to the patient in the language that best suits them, like English or Chinese."],
  ["Speaks to their needs", "Declarative language for a child with PDA. Safety and autonomy language around food for OCD or fear-based needs."],
];

const care = [
  ["C", "Communication", "Adapt to how each person communicates."],
  ["A", "Autonomy", "Presume competence and share decisions."],
  ["R", "Reduce barriers", "Predictability, fewer sensory demands."],
  ["E", "Empathy", "Take pain seriously and lead with curiosity."],
];

const steps = [
  ["Set up", "We customise MimBuddy for your hospital: your wards, your procedures, your ED."],
  ["Personalise", "Each patient's communication style, sensory needs and preferences are added in minutes."],
  ["Support", "Staff and patients use it together, and it travels with the patient from the ED, to admission, to home."],
];

const Hospitals = () => (
  <>
    <AnnouncementBar text={ONE_LINER} />
    <Navbar current="/" />
    <main>
      <HeroImage
        src="https://cdn.shopify.com/s/files/1/0767/1893/2201/files/bedside.kids.Mimhub.jpg?v=1774153662"
        alt="The MimBuddy on a bedside table, its screen showing Kiki the Koala resting, beside a lamp and a mug"
      />

      <section aria-labelledby="hero-heading" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center bg-background py-16 md:py-24 px-6 md:px-20">
        <div>
          <h1 id="hero-heading" className="h-display mb-9">
            The bedside tool for supporting <Underline>neurodivergent</Underline> patients, from the ED, admission, to home.
          </h1>
          <div className="flex gap-3 items-center flex-wrap">
            <a href="/contact" className={button}>Book a 10-min call →</a>
            <a href="#how" className="text-sm font-medium text-mid hover:text-foreground no-underline transition-colors px-4 py-4">How it works ↓</a>
          </div>
        </div>
        <img src={atrium.url} alt="Kiki the Koala plush beside the MimBuddy on a hospital bench" loading="lazy" decoding="async" className="w-full max-w-[460px] mx-auto rounded-3xl shadow-[0_26px_60px_-32px_hsl(var(--sage)/0.5)]" />
      </section>



      <FullWidthImage
        src="https://cdn.shopify.com/s/files/1/0767/1893/2201/files/coffee.table.MimHub.jpg?v=1774153443"
        alt="The MimBuddy, its screen showing Kiki the Koala"
      />

      <section id="inside" aria-labelledby="inside-heading" className="bg-background py-20 md:py-24 px-6 md:px-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-14">
            <div>
              <Kicker>Meet the MimBuddy</Kicker>
              <h2 id="inside-heading" className={h2}>What's <Underline>inside</Underline></h2>
              <p className={`${body} mb-4`}>It brings the tools families and clinicians already trust into one standalone device.</p>
              <p className={`${body} m-0`}><strong className="font-semibold text-foreground">Standalone by design.</strong> A dedicated hardware device, built that way for safety.</p>
            </div>
            <img src={closeup.url} alt="Close-up of the MimBuddy showing its visual schedule and Kiki the Koala" loading="lazy" decoding="async" className="w-full max-w-[420px] mx-auto rounded-2xl" />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
            {inside.map(([t, d]) => (
              <li key={t} className="bg-card rounded-3xl p-8">
                <h3 className="h-card">{t}</h3>
                <p className="text-[14px] font-light text-mid leading-[1.75] m-0">{d}</p>
              </li>
            ))}
          </ul>
          <p className={`${body} text-center mt-10 mb-0`}>Set up for EDs and wards, eating disorder clinics with menu options, and physio programs with each patient's activities.</p>
        </div>
      </section>

      <section id="how" aria-labelledby="how-heading" className="bg-sage-light py-20 md:py-24 px-6 md:px-20">
        <div className="max-w-[1040px] mx-auto">
          <Kicker>How it works</Kicker>
          <h2 id="how-heading" className={h2}>Three <Underline>steps</Underline></h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 list-none p-0 mt-10 mb-12">
            {steps.map(([t, d], i) => (
              <li key={t}>
                <div aria-hidden="true" className="w-14 h-14 rounded-full border-2 border-sage-deep text-sage-deep flex items-center justify-center font-display text-[24px] mb-5">{i + 1}</div>
                <h3 className="h-card text-[22px]">{t}</h3>
                <p className={`${body} m-0`}>{d}</p>
              </li>
            ))}
          </ol>
          <a href="/contact" className={button}>Book a 10-min call →</a>
        </div>
      </section>

      <section aria-labelledby="care-heading" className="bg-background py-20 md:py-24 px-6 md:px-20">
        <div className="max-w-[1100px] mx-auto">
          <Kicker>Recommended by Yellow Ladybugs, an autistic-led organisation</Kicker>
          <h2 id="care-heading" className={h2}>Built on <Underline>CARE</Underline></h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 mt-10 mb-10">
            {care.map(([l, t, d]) => (
              <li key={l} className="bg-card rounded-3xl p-8">
                <div aria-hidden="true" className="font-display text-[56px] leading-none text-sage-deep mb-4">{l}</div>
                <h3 className="h-card">{t}</h3>
                <p className="text-[14px] font-light text-mid leading-[1.75] m-0">{d}</p>
              </li>
            ))}
          </ul>
          <p className={`${body} max-w-[720px] m-0`}>
            Every patient has the same rights under the Australian Charter of Healthcare Rights. Reasonable adjustments aren't optional. They're required under the Disability Discrimination Act 1992. These rights aren't extra work. They're why you deserve the right tools.
          </p>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="bg-beige text-center py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-[760px] mx-auto">
          <img src="/assets/mimbuddy-koala.png" alt="" loading="lazy" className="h-20 w-auto mx-auto mb-6" />
          <h2 id="mission-heading" className="h-section mb-6">
            Support for every neurodivergent patient, in every healthcare setting, across Australia and New Zealand.
          </h2>
          <p className={`${body} text-[17px] mb-10`}>Neurodivergent patients deserve access to healthcare. The people caring for them deserve the tools to support them.</p>
          <a href="/contact" className={button}>Book a 10-min call →</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Hospitals;
