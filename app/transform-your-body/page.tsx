import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/shared/CtaSection";

export const metadata: Metadata = {
  title: "Transform Your Body — Prana Physio",
  description: "Rebuild your strength after injury with our clinical Pilates and rehabilitation programs.",
};

export default function TransformYourBodyPage() {
  return (
    <main>
      {/* Full-bleed hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-ink">
        <Image
          src="/images/card-strength.jpg"
          alt="Woman exercising on a Pilates reformer in a bright studio"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container-site">
            <Reveal>
              <h1 className="font-display text-5xl uppercase tracking-wide text-white md:text-7xl lg:text-8xl">
                Rebuild Your Strength
              </h1>
              <p className="mt-6 text-lg font-medium text-white/90 max-w-2xl mx-auto">
                True recovery isn't just about stopping the pain. It's about rebuilding
                your body so the pain never returns.
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
                1. Beyond Pain Relief
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto">
                Many clinics stop treatment once your acute pain subsides. At Prana Physio,
                that is just phase one. We focus heavily on the rehabilitation phase—using
                clinical Pilates and targeted strength training to address the underlying
                weakness that caused the injury in the first place.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl uppercase tracking-wide text-ink mb-6">
                2. The Power of Reformer Pilates
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto">
                Our 1-on-1 Reformer Pilates sessions are led by qualified physiotherapists.
                The resistance of the springs allows us to safely load your muscles and joints
                long before you are ready to lift weights in a traditional gym. It improves
                core stability, flexibility, and overall body awareness.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl uppercase tracking-wide text-ink mb-6">
                3. A Program Designed for You
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto">
                Whether you are recovering from spinal surgery, struggling with postnatal core
                weakness, or simply want to improve your posture after years at a desk, we
                create a bespoke progression plan that moves at your pace.
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
              "I didn't have a specific injury, just terrible posture and general weakness.
              The 1-on-1 Pilates sessions have completely transformed how I carry myself.
              I feel taller and much stronger."
            </p>
            <p className="font-semibold text-ink uppercase tracking-wider text-sm">
              — Pooja Sharma
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection title="Start Your Transformation" buttonText="Book a Pilates Session" />
    </main>
  );
}
