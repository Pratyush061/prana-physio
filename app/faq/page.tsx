import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import CtaSection from "@/components/shared/CtaSection";
import FaqAccordion from "@/components/shared/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Prana Physio, Indore",
  description:
    "Got questions? Find answers about our treatments, pricing, insurance acceptance, and what to expect during your first visit to Prana Physio.",
};

const faqs = [
  {
    question: "Where are you located?",
    answer: (
      <p>
        We are located on the 2nd Floor of the Silver Arc Complex in Scheme 54, Vijay Nagar, Indore.
        It is easily accessible from Palasia, Bhawarkua, and Rajwada. There is ample parking available
        near the building.
      </p>
    ),
  },
  {
    question: "What happens in the first appointment?",
    answer: (
      <p>
        Your first visit (Initial Assessment) lasts 30 minutes. Dr. Meera will discuss your medical history,
        assess your movement and strength, and identify the root cause of your pain. You will receive hands-on
        treatment if appropriate, and leave with a clear diagnosis and a customized recovery plan.
      </p>
    ),
  },
  {
    question: "Do I need a doctor's referral?",
    answer: (
      <p>
        No, you do not need a referral to see a physiotherapist. We are primary healthcare practitioners.
        However, if you are planning to claim the cost through certain health insurance policies, your
        insurer might require a GP referral. Please check with your provider.
      </p>
    ),
  },
  {
    question: "What are your opening hours?",
    answer: (
      <p>
        We are open Monday to Saturday from 8:00 AM to 8:00 PM, and Sundays from 9:00 AM to 1:00 PM.
        We offer early morning and evening slots to accommodate busy work schedules.
      </p>
    ),
  },
  {
    question: "How much does it cost?",
    answer: (
      <p>
        An Initial Physiotherapy Assessment (30 min) is ₹499. Follow-up sessions range from ₹599 for 30 minutes
        to ₹999 for 1 hour. We also offer specialized assessments and Pilates sessions.
        You can view our full pricing on the <Link href="/bookings" className="text-teal hover:underline">Bookings page</Link>.
      </p>
    ),
  },
  {
    question: "Do you accept health insurance?",
    answer: (
      <p>
        Yes, we work with major health insurers including Star Health, HDFC Ergo, ICICI Lombard, Niva Bupa,
        Bajaj Allianz, and Care Health. We recommend you register online via our{" "}
        <Link href="/insured-patients" className="text-teal hover:underline">Insured Patients page</Link>
        so we can verify your coverage before your session.
      </p>
    ),
  },
  {
    question: "What conditions do you treat?",
    answer: (
      <p>
        We treat a wide range of musculoskeletal issues including back and neck pain, slipped discs, sciatica,
        frozen shoulder, osteoarthritis, post-surgical rehabilitation (like knee replacements), and repetitive
        strain injuries.
      </p>
    ),
  },
  {
    question: "Do you treat sports injuries?",
    answer: (
      <p>
        Absolutely. We provide specialized sports rehab for runners, cricketers, cyclists, and gym-goers.
        We also offer dedicated Running and Cycling Assessments using video gait analysis to improve performance
        and fix biomechanical flaws.
      </p>
    ),
  },
  {
    question: "What is Reformer Pilates and do I need it?",
    answer: (
      <p>
        Reformer Pilates uses specialized equipment to provide resistance and support while you exercise.
        It is excellent for rebuilding core strength and correcting imbalances after an injury. Dr. Meera
        often integrates Pilates into physiotherapy plans for long-term pain prevention.
      </p>
    ),
  },
  {
    question: "Will the treatment hurt?",
    answer: (
      <p>
        Some techniques, like deep tissue massage or dry needling, can cause temporary discomfort or "good pain,"
        but treatment should never be unbearable. We always communicate with you to ensure the pressure is
        appropriate and comfortable.
      </p>
    ),
  },
  {
    question: "How do I book an appointment?",
    answer: (
      <p>
        All bookings must be made online through our website. Simply visit the{" "}
        <Link href="/bookings" className="text-teal hover:underline">Bookings page</Link>, select the service
        you need, and fill out the contact form. We will get back to you promptly to confirm your time slot.
      </p>
    ),
  },
  {
    question: "What is your cancellation policy?",
    answer: (
      <p>
        We require at least 24 hours notice to cancel or reschedule an appointment without penalty. Cancellations
        made with less than 24 hours notice incur a ₹250 fee, and no-shows are charged the full session price.
        This allows us to offer the slot to another patient in need.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <main>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know" />

      <section className="py-16 md:py-24 bg-mist">
        <div className="container-site">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
