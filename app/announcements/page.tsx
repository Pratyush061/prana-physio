import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CtaSection from "@/components/shared/CtaSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Announcements — Prana Physio",
  description: "The latest news and announcements from Prana Physio in Indore.",
};

const announcements = [
  {
    date: "October 15, 2023",
    title: "New Extended Saturday Hours",
    content: "To better serve our patients who work during the week, we have extended our Saturday hours. We are now open from 8:00 AM until 8:00 PM every Saturday. You can book these new slots online now.",
  },
  {
    date: "September 02, 2023",
    title: "Cashless Insurance Tie-Ups Expanded",
    content: "We are thrilled to announce that we now offer cashless treatment for policyholders of Niva Bupa and Care Health, in addition to our existing partners (Star Health, HDFC Ergo, ICICI Lombard, Bajaj Allianz). Please register on our Insured Patients page.",
  },
  {
    date: "August 10, 2023",
    title: "Corporate Camp Partnership in Vijay Nagar",
    content: "Prana Physio has partnered with a leading fitness center in Vijay Nagar to provide monthly on-site posture and movement screening camps for their members. Stay tuned for dates on our social media channels.",
  },
];

export default function AnnouncementsPage() {
  return (
    <main>
      <PageHero title="Clinic Announcements" subtitle="Latest News & Updates" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-3xl">
          <div className="space-y-8">
            {announcements.map((announcement, i) => (
              <Reveal key={announcement.title} delay={i * 0.1}>
                <div className="rounded-md border border-line bg-mist p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
                    {announcement.date}
                  </p>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-ink mb-4">
                    {announcement.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {announcement.content}
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
