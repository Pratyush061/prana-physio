import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ReviewCard from "@/components/shared/ReviewCard";
import CtaSection from "@/components/shared/CtaSection";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/content";

export const metadata: Metadata = {
  title: "Patient Reviews — Prana Physio, Indore",
  description:
    "Read what our patients in Vijay Nagar and across Indore have to say about their recovery at Prana Physio.",
};

const extendedReviews = [
  {
    name: "Kavita Agrawal",
    condition: "Slipped Disc",
    quote: "I was struggling to sit for even 10 minutes at my desk. Dr. Joshi's assessment was incredibly thorough. Within 6 weeks of physiotherapy and Pilates, I am completely pain-free and back to working normally.",
  },
  {
    name: "Sandeep Chitnis",
    condition: "Frozen Shoulder",
    quote: "A true professional. I came in with a frozen shoulder and could barely lift my arm. The mix of manual therapy and reformer Pilates was exactly right. Eight weeks later I'm back to swimming every morning.",
  },
  {
    name: "Farhan Qureshi",
    condition: "ACL Rehab",
    quote: "I tore my ACL playing football and was worried I'd never play again. The rehabilitation program here was top-notch, challenging but safe. I'm now back on the pitch feeling stronger than before.",
  },
  {
    name: "Meenal Bapat",
    condition: "Desk Neck Pain",
    quote: "Long hours at the computer left me with constant tension headaches and neck stiffness. The dry needling and posture correction program worked wonders. I finally have my life back.",
  },
  {
    name: "Vivek Ratnaparkhi",
    condition: "Marathon Prep",
    quote: "I booked a running assessment before the Indore marathon. The gait analysis found an imbalance I never knew I had. A few tweaks to my form and targeted strength work, and I ran my personal best.",
  },
  {
    name: "Shalini Vyas",
    condition: "Post-Pregnancy Back Pain",
    quote: "After having my second child, my lower back was constantly aching. The reformer Pilates sessions specifically tailored for postnatal recovery have helped me regain my core strength completely.",
  },
  {
    name: "Rohit Malviya",
    condition: "Slipped Disc",
    quote: "Best physio in Vijay Nagar, hands down. I saw three clinics for my slipped disc before Dr. Joshi fixed it in six weeks. Precise diagnosis, honest advice, zero unnecessary sessions.",
  },
  {
    name: "Anil Khandelwal",
    condition: "Knee Replacement Rehab",
    quote: "Post knee-replacement rehab done properly. Clear plan, measurable progress every visit, and she pushes you exactly as hard as you need. Worth every rupee.",
  },
  {
    name: "Sunita Jain",
    condition: "Ankle Sprain",
    quote: "A nasty ankle sprain left me hobbling for weeks. The hands-on treatment and specific balance exercises got me back to my morning walks in Palasia much faster than I expected.",
  },
  {
    name: "Rajesh Patidar",
    condition: "Sciatica",
    quote: "The shooting pain down my leg was unbearable. Dr. Meera used a combination of manual therapy and dry needling that provided immediate relief. I highly recommend her to anyone suffering from sciatica.",
  },
  {
    name: "Pooja Sharma",
    condition: "General Strength & Posture",
    quote: "I didn't have a specific injury, just terrible posture and general weakness. The 1-on-1 Pilates sessions have completely transformed how I carry myself. I feel taller and much stronger.",
  },
  {
    name: "Gaurav Singh",
    condition: "Sports Massage",
    quote: "As an avid cyclist, my legs are always tight. The deep tissue sports massage here is excellent. It's not just a rub down; it's focused, clinical work that significantly improves my recovery time.",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <PageHero title="Patient Reviews" subtitle="Real stories of recovery" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <div className="inline-block rounded-md bg-mist border border-teal p-8 shadow-sm mb-8">
                <div className="text-teal mb-2">
                  <span className="text-4xl">★★★★★</span>
                </div>
                <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
                  5.0 Rating
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-teal-deep">
                  Based on 300+ Google Reviews
                </p>
              </div>
              <p className="text-body leading-relaxed">
                We are proud to serve patients across {clinic.areas}.
                Below is a selection of real patient experiences, reflecting our commitment to evidence-based care and lasting results.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {extendedReviews.map((review, i) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                quote={review.quote}
                condition={review.condition}
                delay={(i % 3) * 0.1}
              />
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 text-center">
              <a
                href="https://google.com" // Placeholder for actual Google Maps link
                target="_blank"
                rel="noopener noreferrer"
                className="link-teal font-semibold tracking-wide"
              >
                Read more reviews on Google &gt;
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
