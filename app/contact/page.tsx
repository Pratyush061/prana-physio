import type { Metadata } from "next";
import Contact from "@/components/Contact";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Contact Us — Prana Physio, Indore",
  description: "Get in touch with Prana Physio in Vijay Nagar, Indore. Book an appointment or send us an enquiry.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Get in Touch" subtitle="We're here to help" />
      <Contact />
    </main>
  );
}
