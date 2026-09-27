import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CtaSection from "@/components/shared/CtaSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Join Our Team — Prana Physio",
  description: "Careers at Prana Physio in Vijay Nagar, Indore.",
};

const roles = [
  {
    title: "Senior Physiotherapist",
    reqs: "MPT (Musculoskeletal/Sports), 3+ years clinical experience.",
    desc: "We are looking for a dedicated Senior Physiotherapist to join our growing team. The ideal candidate will have extensive experience with manual therapy and exercise prescription. Pilates certification is a plus but not mandatory, as training will be provided. You will manage your own caseload of private and insured patients.",
  },
  {
    title: "Front Desk Executive",
    reqs: "Bachelor's degree, excellent English and Hindi communication.",
    desc: "The Front Desk Executive is the face of Prana Physio. You will manage patient bookings, coordinate insurance verifications, and ensure the smooth day-to-day operation of the clinic. Strong organizational skills and a warm, welcoming demeanor are essential.",
  },
];

export default function JoinOurTeamPage() {
  return (
    <main>
      <PageHero title="Join Our Team" subtitle="Careers at Prana Physio" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-4xl">
          <Reveal>
            <p className="text-body leading-relaxed text-center mb-16 max-w-2xl mx-auto">
              We are always on the lookout for passionate professionals who share our commitment
              to evidence-based care and exceptional patient experience.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {roles.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-md border border-line bg-mist p-8 shadow-sm">
                  <h3 className="font-display text-2xl uppercase tracking-wide text-ink mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm font-semibold text-teal-deep mb-6">
                    {role.reqs}
                  </p>
                  <p className="text-body leading-relaxed mb-8 flex-grow">
                    {role.desc}
                  </p>
                  <a
                    href={`mailto:hello@pranaphysio.in?subject=Application for ${role.title}`}
                    className="btn-primary w-full text-center mt-auto"
                  >
                    Apply Now
                  </a>
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
