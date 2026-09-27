import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import CtaSection from "@/components/shared/CtaSection";
import Reveal from "@/components/Reveal";
import { services, clinic } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Prana Physio, Indore",
  description:
    "Explore our full range of services including Physiotherapy, Reformer Pilates, Acupuncture, and specialized Running and Cycling Assessments.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Care & Assessment"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, i) => {
              // The slug 'insured-patients' routes to its own page instead of dynamic services
              const href =
                service.slug === "insured-patients"
                  ? "/insured-patients"
                  : `/services/${service.slug}`;

              return (
                <Reveal key={service.slug} delay={i * 0.1}>
                  <Link
                    href={href}
                    className="group flex flex-col md:flex-row h-full rounded-md border border-line bg-white shadow-card hover:-translate-y-1 hover:shadow-cardHover transition-all overflow-hidden"
                  >
                    <div className="relative h-48 md:h-auto md:w-2/5 md:shrink-0 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-8">
                      <h3 className="font-display text-2xl uppercase tracking-wide text-ink group-hover:text-teal transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-body leading-relaxed">
                        {service.blurb}
                      </p>
                      <span className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-widest text-teal">
                        Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Areas Strip (Reusing the language from home) */}
      <section className="bg-mist py-12">
        <div className="container-site text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-teal-deep mb-2">
              Serving the community
            </p>
            <p className="text-body leading-relaxed max-w-3xl mx-auto">
              We proudly serve patients from {clinic.areas}.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
