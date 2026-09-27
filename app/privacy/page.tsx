import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Prana Physio",
  description: "Privacy Policy for Prana Physio, Indore.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero title="Privacy Policy" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="prose prose-teal max-w-none text-body">
              <p className="lead text-lg mb-8">
                At Prana Physio, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal and medical information.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-6">
                We collect personal information that you provide to us directly when you book an appointment, register as an insured patient, or communicate with us. This includes your name, contact details (phone, email, address), and health insurance policy details. During your clinical visits, we also collect sensitive medical information necessary for your treatment.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-6">
                Your medical information is used exclusively by our clinical staff to assess, diagnose, and treat your condition safely. Your contact information is used to manage appointments, send important updates regarding your care, and for billing purposes. We may also use your insurance details to verify coverage and process claims on your behalf.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                3. Data Sharing and Security
              </h2>
              <p className="mb-6">
                We do not sell or rent your personal information to third parties. We may share your information with your health insurance provider for the purpose of verifying coverage and processing claims, provided you have given us consent to do so. We implement strict physical and digital security measures to ensure your data is kept confidential and protected against unauthorized access.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                4. Your Rights
              </h2>
              <p className="mb-6">
                You have the right to request access to the personal and medical information we hold about you. You may also request corrections to any inaccurate data. If you have any concerns about how your data is handled, please contact us at hello@pranaphysio.in.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
