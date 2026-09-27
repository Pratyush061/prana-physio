import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cancellation Policy — Prana Physio",
  description: "Cancellation policy and fees for Prana Physio appointments.",
};

export default function CancellationPolicyPage() {
  return (
    <main>
      <PageHero title="Cancellation Policy" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="prose prose-teal max-w-none text-body">
              <p className="lead text-lg mb-8">
                We understand that life can be unpredictable and you may occasionally need to change your appointment. However, missed appointments prevent us from providing care to other patients in need.
              </p>

              <div className="rounded-md border border-line bg-mist p-8 shadow-sm mb-12">
                <h2 className="font-display text-2xl uppercase tracking-wide text-ink mb-4">
                  The Policy
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-teal font-bold mr-3">•</span>
                    <span><strong>More than 24 hours notice:</strong> You may cancel or reschedule your appointment without any penalty.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal font-bold mr-3">•</span>
                    <span><strong>Less than 24 hours notice:</strong> Cancellations made within 24 hours of the scheduled appointment time will incur a ₹250 fee.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal font-bold mr-3">•</span>
                    <span><strong>No-shows:</strong> If you fail to attend your appointment without notifying us, you will be charged the full price of the missed session.</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mb-4">
                How to Cancel
              </h2>
              <p className="mb-6">
                To cancel or reschedule, please reply to your confirmation email or call the clinic directly at +91 98260 45678. If you reach our voicemail, please leave a message indicating your name and the time of your appointment.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-wide text-ink mt-12 mb-4">
                Exceptions
              </h2>
              <p className="mb-6">
                We recognize that sudden illness or true medical emergencies occur. If this is the case, please contact us as soon as possible, and we may waive the cancellation fee at our discretion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
