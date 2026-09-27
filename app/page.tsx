import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NoticeBar from "@/components/NoticeBar";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import ImageCards from "@/components/ImageCards";
import About from "@/components/About";
import Services from "@/components/Services";
import InfoCards from "@/components/InfoCards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Accreditations from "@/components/Accreditations";
import InsuranceRow from "@/components/InsuranceRow";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main id="home">
        <Hero />
        <NoticeBar />
        <Testimonials />
        <CtaBand />
        <ImageCards />
        <About />
        <Services />
        <InfoCards />
        <Contact />
      </main>
      <Footer />
      <Accreditations />
      <InsuranceRow />
      <footer className="border-t border-line bg-white py-8 text-center text-sm text-body">
        <p>© 2026 Prana Physio, Indore. All rights reserved.</p>
      </footer>
    </>
  );
}
