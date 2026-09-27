import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import CtaSection from "@/components/shared/CtaSection";
import Reveal from "@/components/Reveal";
import { aboutStory, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Dr. Meera Joshi — Prana Physio, Indore",
  description:
    "Learn about Dr. Meera Joshi, founder of Prana Physio in Vijay Nagar, Indore. Expert in physiotherapy, reformer Pilates, and evidence-based injury management.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Dr. Meera Joshi" subtitle="Founder & Lead Physiotherapist" />

      {/* Testimonial Quote Cards */}
      <section className="py-12 bg-white">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {testimonials.slice(0, 2).map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 0.1}>
                <div className="rounded-md border border-line bg-mist p-6 shadow-sm">
                  <p className="text-body italic">"{testimonial.quote}"</p>
                  <p className="mt-4 font-semibold text-ink">— {testimonial.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Founder Story */}
      <section className="py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal>
              <h2 className="heading-xl mb-8">The Prana Physio Story</h2>
            </Reveal>
            <div className="space-y-8">
              {aboutStory.map((section, i) => (
                <Reveal key={section.heading} delay={0.05}>
                  <div>
                    <h3 className="font-display text-2xl uppercase tracking-wide text-ink mb-3">
                      {section.heading}
                    </h3>
                    <p className="leading-relaxed text-body">{section.body}</p>

                    {/* Add Image strip under Prana Physio today section */}
                    {section.heading === "Prana Physio today" && (
                       <div className="mt-8 grid grid-cols-2 gap-4">
                         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                           <Image
                             src="/images/service-physiotherapy.jpg"
                             alt="Clinic view"
                             fill
                             className="object-cover"
                           />
                         </div>
                         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                           <Image
                             src="/images/service-pilates.jpg"
                             alt="Pilates view"
                             fill
                             className="object-cover"
                           />
                         </div>
                       </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-24">
              <Reveal delay={0.2}>
                <div className="overflow-hidden rounded-md bg-teal text-white shadow-card">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/images/hero.jpg"
                      alt="Dr. Meera Joshi in clinic"
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-3xl uppercase tracking-wide">
                      Dr. Meera Joshi
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/80">
                      MPT (Musculoskeletal)
                    </p>
                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/90">
                      <p>• Bachelor of Physiotherapy, Mumbai (2006)</p>
                      <p>• Masters in Musculoskeletal Physiotherapy, Melbourne</p>
                      <p>• Certified Dry Needling Practitioner</p>
                      <p>• Registered with MP Paramedical Council</p>
                      <p>• Indian Association of Physiotherapists (IAP)</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
