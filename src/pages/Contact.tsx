import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import Kicker from "@/components/Kicker";
import Underline from "@/components/Underline";
import { ONE_LINER } from "@/pages/Hospitals";

const Contact = () => (
  <>
    <AnnouncementBar text={ONE_LINER} />
    <Navbar current="/contact" />
    <main>
      <section aria-labelledby="contact-heading" className="bg-background py-16 md:py-24 px-6 md:px-20 text-center">
        <img src="/assets/mimbuddy-koala.png" alt="" className="h-20 w-auto mx-auto mb-6" />
        <Kicker>Contact</Kicker>
        <h1 id="contact-heading" className="h-display mb-5">
          Book a <Underline>10-min</Underline> call
        </h1>
        <p className="text-[15px] font-light text-mid leading-[1.8] max-w-[460px] mx-auto mb-10">
          Tell us a little about your service and we'll be in touch to find a time.
        </p>
        <SignupForm kind="hospital" />
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
