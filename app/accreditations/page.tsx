import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CtaSection from "@/components/shared/CtaSection";
import Reveal from "@/components/Reveal";
import { accreditations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accreditations — Prana Physio",
  description: "View the professional accreditations and certifications of Dr. Meera Joshi and Prana Physio.",
};

const details = [
  "Membership ensures we adhere to the highest standards of clinical practice and continuous professional development across India.",
  "Our clinic and practitioners are fully registered with the state paramedical council, ensuring legally recognized and accountable healthcare.",
  "Advanced certification in dry needling techniques, allowing for safe and effective treatment of myofascial trigger points and chronic pain conditions.",
];

export default function AccreditationsPage() {
  return (
    <main>
      <PageHero title="Professional Accreditations" subtitle="Our Commitment to Excellence" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {accreditations.map((acc, i) => (
              <Reveal key={acc} delay={i * 0.1}>
                <div className="h-full rounded-md border border-line bg-mist p-8 shadow-sm flex flex-col">
                  <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-4">
                    {acc}
                  </h3>
                  <p className="text-body text-sm leading-relaxed mt-auto">
                    {details[i]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  );
}
