import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SessionCard from "@/components/shared/SessionCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Bookings — Prana Physio, Indore",
  description: "Book your physiotherapy, Pilates, acupuncture or massage session at Prana Physio in Vijay Nagar, Indore.",
};

const physiotherapySessions = [
  {
    name: "Initial Session",
    duration: "30 min",
    price: "₹499",
    flag: "New patients start here",
  },
  {
    name: "Follow-up",
    duration: "30 min",
    price: "₹599",
  },
  {
    name: "Follow-up",
    duration: "1 hour",
    price: "₹999",
  },
];

const pilatesAndMassageSessions = [
  {
    name: "1-on-1 Reformer Pilates",
    duration: "1 hour",
    price: "₹799",
  },
  {
    name: "Reformer Pilates",
    duration: "30 min",
    price: "₹449",
  },
  {
    name: "Deep Tissue Massage",
    duration: "1 hour",
    price: "₹899",
  },
  {
    name: "Deep Tissue Massage",
    duration: "30 min",
    price: "₹549",
  },
  {
    name: "Acupuncture",
    duration: "1 hour",
    price: "₹899",
  },
  {
    name: "Acupuncture",
    duration: "30 min",
    price: "₹549",
  },
];

const assessmentsAndOffers = [
  {
    name: "Running Assessment",
    price: "₹1,299",
  },
  {
    name: "Cycling Assessment",
    price: "₹1,299",
  },
  {
    name: "Gift Card ₹1,000",
    price: "₹1,000",
  },
  {
    name: "Gift Card ₹2,000",
    price: "₹2,000",
  },
  {
    name: "Gift Card ₹3,000",
    price: "₹3,000",
  },
];

export default function BookingsPage() {
  return (
    <main>
      <PageHero title="Book an Appointment" subtitle="Choose your session below" />

      <section className="py-12 bg-white">
        <div className="container-site max-w-5xl">
          <Reveal>
            <div className="mb-12 rounded-md border border-teal bg-mist p-6 text-center shadow-sm">
              <h2 className="font-display text-xl uppercase tracking-wide text-ink mb-2">
                Booking Information
              </h2>
              <p className="text-body text-sm leading-relaxed">
                Bookings can only be made through this website. Payment is taken at the clinic after your session.
                Please provide at least 24 hours notice for cancellations to avoid a fee.
              </p>
            </div>
          </Reveal>

          {/* Note Card for Insured Patients */}
          <Reveal delay={0.1}>
             <div className="mb-12 rounded-md bg-ink p-6 text-center text-white shadow-card">
               <p className="text-sm font-medium">
                 Insured patients: register first at{" "}
                 <Link href="/insured-patients" className="text-teal hover:underline">
                   /insured-patients
                 </Link>{" "}
                 — insured-patient sessions are booked after verification.
               </p>
             </div>
          </Reveal>

          {/* Physiotherapy */}
          <div className="mb-16">
            <Reveal>
              <h2 className="heading-xl text-[28px] mb-6">Physiotherapy</h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {physiotherapySessions.map((session, i) => (
                <SessionCard key={`${session.name}-${session.duration}`} {...session} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Pilates & Massage */}
          <div className="mb-16">
            <Reveal>
              <h2 className="heading-xl text-[28px] mb-6">Pilates, Massage & Acupuncture</h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pilatesAndMassageSessions.map((session, i) => (
                <SessionCard key={`${session.name}-${session.duration}`} {...session} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Assessments & Offers */}
          <div>
            <Reveal>
              <h2 className="heading-xl text-[28px] mb-6">Assessments & Gift Cards</h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {assessmentsAndOffers.map((session, i) => (
                <SessionCard key={session.name} {...session} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
