import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CtaBand() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="container-site text-center">
        <Reveal>
          <h2 className="heading-xl text-[28px] lg:text-4xl">
            Book Your Physiotherapy Session
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            Not sure which session to start with? Book the 30-minute initial
            assessment and we'll map it out together.
          </p>
          <a href="#contact" className="btn-primary mt-8">
            Book Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
