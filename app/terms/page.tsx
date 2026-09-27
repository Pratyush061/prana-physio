import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service — Prana Physio",
  description: "Terms of Service for Prana Physio, Indore.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero title="Terms of Service" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="prose prose-teal max-w-none text-body">
              <p className="lead text-lg mb-8">
                By accessing this website and booking services at Prana Physio, you agree to abide by the following Terms of Service.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                1. General Information
              </h2>
              <p className="mb-6">
                Prana Physio provides physiotherapy, Pilates, and allied health services. The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                2. Bookings and Payments
              </h2>
              <p className="mb-6">
                All appointments must be booked through our online platform or by contacting the clinic directly. Payment for services is required at the clinic following your session unless alternative arrangements (such as direct insurance billing) have been confirmed prior to the appointment. We accept cash, UPI, and major credit/debit cards.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                3. Treatment Outcomes
              </h2>
              <p className="mb-6">
                While we strive to provide the highest standard of evidence-based care, medical and allied health treatments cannot guarantee specific outcomes. Individual results will vary depending on the nature of the injury, adherence to prescribed home exercises, and individual physiological factors.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                4. Website Use
              </h2>
              <p className="mb-6">
                The content, design, and branding on this website are the property of Prana Physio. You may not reproduce, distribute, or modify any part of this site without our express written consent.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
