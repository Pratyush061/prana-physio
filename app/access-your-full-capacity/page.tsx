import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/shared/CtaSection";

export const metadata: Metadata = {
  title: "Access Your Full Capacity — Prana Physio",
  description: "Improve your athletic performance with sports physiotherapy, running, and cycling assessments.",
};

export default function AccessYourFullCapacityPage() {
  return (
    <main>
      {/* Full-bleed hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-ink">
        <Image
          src="/images/card-running.jpg"
          alt="Runner training on a road at sunrise"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container-site">
            <Reveal>
              <h1 className="font-display text-5xl uppercase tracking-wide text-white md:text-7xl lg:text-8xl">
                Move Without Limits
              </h1>
              <p className="mt-6 text-lg font-medium text-white/90 max-w-2xl mx-auto">
                Optimize your biomechanics, prevent injuries, and perform at your peak
                with our specialized sports assessments.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 Content Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-4xl space-y-20">

          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl uppercase tracking-wide text-ink mb-6">
                1. Data-Driven Diagnostics
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto">
                Don't guess when it comes to your biomechanics. We use slow-motion video
                gait analysis to assess your running form and specialized setups to evaluate
                your cycling posture. We identify the exact asymmetries that are robbing
                you of power and causing repetitive strain.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl uppercase tracking-wide text-ink mb-6">
                2. Sports-Specific Conditioning
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto">
                Once we understand your movement flaws, we design a conditioning program
                specific to your sport. Whether you need more explosive power for cricket,
                better glute activation for marathon running, or improved core stability
                for the bike, our tailored strength programs will get you there.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl uppercase tracking-wide text-ink mb-6">
                3. Proactive Recovery
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto">
                High-level training demands high-level recovery. We offer deep tissue
                sports massage, dry needling, and targeted joint mobilization to keep
                your tissues healthy, maintain full range of motion, and prevent small
                niggles from turning into season-ending injuries.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-mist">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <div className="text-teal mb-4 text-3xl">★★★★★</div>
            <p className="text-xl italic text-ink leading-relaxed mb-6">
              "I booked a running assessment before the Indore marathon. The gait analysis
              found an imbalance I never knew I had. A few tweaks to my form and targeted
              strength work, and I ran my personal best."
            </p>
            <p className="font-semibold text-ink uppercase tracking-wider text-sm">
              — Vivek Ratnaparkhi
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection title="Optimize Your Performance" buttonText="Book an Assessment" />
    </main>
  );
}
