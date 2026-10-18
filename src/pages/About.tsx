import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Kicker from "@/components/Kicker";
import Underline from "@/components/Underline";
import { ONE_LINER } from "@/pages/Hospitals";

const founders = [
  {
    name: "Mickey Williams",
    role: "CEO",
    bio: "Healthcare professional of 14 years, with 8 years supporting neurodivergent children, and mum to a wonderfully neurodivergent family.",
    photo: "https://cdn.shopify.com/s/files/1/0767/1893/2201/files/Mickey.png?v=1774165073",
    linkedin: "https://www.linkedin.com/in/mickeywilliams1/",
  },
  {
    name: "Sahil Yadav",
    role: "CTO",
    bio: "Mechatronic engineer and software developer.",
    photo: "https://cdn.shopify.com/s/files/1/0767/1893/2201/files/Sahil.profile.png?v=1774165075",
    linkedin: "https://www.linkedin.com/in/sahilyadav127/",
  },
];

const journey = [
  ["Mimbalu", "We started as Mimbalu, an early-stage startup building the therapeutic support hub of childhood for families at home."],
  ["Listening", "500+ customer discussions. 85% reported the same: support tools are fragmented, apps are distracting, and the admin burden is huge."],
  ["MimBuddy", "Today we're MimBuddy, the bedside tool for supporting neurodivergent patients, from the ED, admission, to home."],
];

const About = () => (
  <>
    <AnnouncementBar text={ONE_LINER} />
    <Navbar current="/about" />
    <main>
      <section aria-labelledby="team-heading" className="bg-sage-light py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-[1040px] mx-auto">
          <Kicker>About us</Kicker>
          <h1 id="team-heading" className="h-display mb-12">
            Our <Underline>Founding</Underline> Team
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 list-none p-0 m-0">
            {founders.map(f => (
              <li key={f.name} className="flex flex-col">
                <div className="aspect-[4/5] w-full max-w-[420px] rounded-2xl overflow-hidden bg-background">
                  <img src={f.photo} alt={`${f.name}, ${f.role} and co-founder of MimBuddy`} loading="lazy" decoding="async" className="w-full h-full object-cover object-top block" />
                </div>
                <h2 className="h-card text-[22px] mt-6 mb-1">{f.name}</h2>
                <div className="text-xs text-mid tracking-[1.5px] uppercase mb-4">{f.role}</div>
                <p className="text-[15px] font-light text-mid leading-[1.8] mb-4">{f.bio}</p>
                <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-sage-deep font-medium">
                  Connect on LinkedIn →<span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="journey-heading" className="bg-background py-20 md:py-24 px-6 md:px-20">
        <div className="max-w-[760px] mx-auto">
          <h2 id="journey-heading" className="h-section mb-10">
            Our journey <Underline>so far</Underline>
          </h2>
          <ol className="list-none p-0 m-0 border-l-2 border-sage pl-8 space-y-10">
            {journey.map(([t, d]) => (
              <li key={t} className="relative">
                <span aria-hidden="true" className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-sage-deep" />
                <h3 className="h-card text-[22px] mb-1">{t}</h3>
                <p className="text-[15px] font-light text-mid leading-[1.8] m-0">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
