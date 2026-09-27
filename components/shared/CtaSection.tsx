import React from "react";
import Reveal from "@/components/Reveal";

interface CtaSectionProps {
  title?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaSection({
  title = "Ready to start your recovery?",
  buttonText = "Book an Appointment",
  buttonHref = "/bookings",
}: CtaSectionProps) {
  return (
    <section className="bg-teal py-16 text-center text-white">
      <div className="container-site">
        <Reveal>
          <h2 className="font-display text-3xl uppercase tracking-wide md:text-5xl">
            {title}
          </h2>
          <a
            href={buttonHref}
            className="mt-8 inline-block rounded bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-teal-deep transition-colors hover:bg-ink hover:text-white"
          >
            {buttonText}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
