import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import CtaSection from "@/components/shared/CtaSection";
import Reveal from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "New Patient Offer — Prana Physio",
  description: "Book your 30-minute initial physiotherapy assessment for just ₹499.",
};

const inclusions = [
  "Detailed discussion of your medical history and current symptoms.",
  "Comprehensive physical examination (joint mobility, muscle strength, neurological tests).",
  "Clear explanation of your diagnosis and the root cause of your pain.",
  "Initial hands-on treatment or symptom-relief strategies.",
  "A customized, day-one exercise plan to start your recovery.",
];

export default function NewPatientsOfferPage() {
  return (
    <main>
      <PageHero title="New Patient Assessment" subtitle="Special Introductory Offer" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">

            <Reveal>
              <div>
                <h2 className="heading-xl mb-6">
                  Get a clear diagnosis and start your recovery today.
                </h2>
                <p className="text-body text-lg leading-relaxed mb-6">
                  Don't let pain dictate what you can and cannot do. Our initial assessment
                  is designed to pinpoint exactly what's wrong and give you a clear roadmap
                  back to full health.
                </p>
                <div className="mb-8">
                  <span className="font-display text-5xl uppercase text-teal-deep">₹499</span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-ink ml-3">/ 30 minutes</span>
                </div>
                <Link
                  href="/contact?session=Initial%20Session"
                  className="btn-primary"
                >
                  Book Assessment Now
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-md border border-line bg-mist p-8 shadow-sm">
                <h3 className="font-display text-2xl uppercase tracking-wide text-ink mb-6">
                  What's Included:
                </h3>
                <ul className="space-y-4">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-start text-body leading-relaxed">
                      <CheckCircle2 className="h-6 w-6 text-teal shrink-0 mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Mini FAQ section */}
      <section className="py-16 bg-mist">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl uppercase tracking-wide text-center text-ink mb-10">
              Questions?
            </h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-ink mb-2">How long is the session?</h4>
                <p className="text-body text-sm leading-relaxed">
                  The initial assessment is a dedicated 30-minute block entirely one-on-one with Dr. Meera Joshi.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-ink mb-2">Will I get treatment on the first day?</h4>
                <p className="text-body text-sm leading-relaxed">
                  Yes. Once the assessment is complete, we use the remaining time to begin treatment. This may include manual therapy, taping, or teaching you specific exercises for immediate pain relief.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-ink mb-2">What should I wear?</h4>
                <p className="text-body text-sm leading-relaxed">
                  Please wear loose, comfortable clothing (like athletic wear) that allows the physiotherapist to easily see and assess the injured area.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection title="Ready to get started?" buttonText="Book for ₹499" buttonHref="/contact?session=Initial%20Session" />
    </main>
  );
}
