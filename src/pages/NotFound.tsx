import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => (
  <>
    <Navbar current="" />
    <main className="py-24 px-6 text-center">
      <img src="/assets/mimbuddy-koala.png" alt="" className="h-20 w-auto mx-auto mb-6" />
      <h1 className="h-display mb-4">Page not found</h1>
      <a href="/" className="text-sage-deep underline">Back to MimBuddy</a>
    </main>
    <Footer />
  </>
);

export default NotFound;
