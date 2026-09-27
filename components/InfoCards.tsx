import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function InfoCards() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-md border border-line bg-white p-8 shadow-card">
              <h3 className="font-display text-xl uppercase tracking-[0.04em] text-ink">
                Cashless Insurance Registration
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                We're empanelled with leading insurers. Register online before
                your first visit.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-md border border-line bg-white p-8 shadow-card">
              <h3 className="font-display text-xl uppercase tracking-[0.04em] text-ink">
                Corporate & Sports Club Offers
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                Discounted assessment camps for Indore offices, gyms and sports
                academies.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a href="#contact" className="btn-primary">
            Book Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
