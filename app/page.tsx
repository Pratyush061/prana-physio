import Hero from "@/components/Hero";
import NoticeBar from "@/components/NoticeBar";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import ImageCards from "@/components/ImageCards";
import About from "@/components/About";
import Services from "@/components/Services";
import InfoCards from "@/components/InfoCards";
import Contact from "@/components/Contact";
import Accreditations from "@/components/Accreditations";
import InsuranceRow from "@/components/InsuranceRow";

export default function Home() {
  return (
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
      <Accreditations />
      <InsuranceRow />
    </main>
  );
}
