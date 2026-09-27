"use client";

import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/content";

const interests = [
  "Initial assessment",
  "Physiotherapy",
  "Reformer Pilates",
  "Acupuncture",
  "Sports rehab",
  "Insurance registration",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Front-end only: compose an email to the clinic.
  // A backend API route can be wired here later (e.g. app/api/contact/route.ts).
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Enquiry: ${data.get("interest")} — ${data.get("first-name")} ${data.get("last-name")}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("first-name")} ${data.get("last-name")}\n` +
        `Email: ${data.get("email")}\nPhone: ${data.get("phone")}\n` +
        `Interested in: ${data.get("interest")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${clinic.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container-site">
        <Reveal>
          <h2 className="heading-xl text-center text-[28px] lg:text-4xl">
            Contact Us
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-5 max-w-2xl space-y-1 text-center text-sm leading-relaxed text-body">
            <p>
              Bookings can only be made through this website — we do not take
              bookings over the phone.
            </p>
            <p>
              New patients unsure where to start: book the 30-minute initial
              assessment.
            </p>
            <p>
              Insurance patients:{" "}
              <a href="#contact" className="link-teal">
                register as an insured patient here &gt;
              </a>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            {sent ? (
              <div
                role="status"
                className="rounded-md border border-teal bg-teal/10 p-8 text-center"
              >
                <p className="font-display text-2xl uppercase text-teal-deep">
                  Thank you!
                </p>
                <p className="mt-2 text-[15px] text-body">
                  We'll call you back within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    I'm interested in <span className="text-teal-deep">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full rounded border border-[#AFAFAF] bg-white px-4 py-3 text-[15px] text-ink focus:border-teal focus:outline-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      First name <span className="text-teal-deep">*</span>
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      required
                      autoComplete="given-name"
                      className="w-full rounded border border-[#AFAFAF] bg-white px-4 py-3 text-[15px] text-ink focus:border-teal focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Last name <span className="text-teal-deep">*</span>
                    </label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      required
                      autoComplete="family-name"
                      className="w-full rounded border border-[#AFAFAF] bg-white px-4 py-3 text-[15px] text-ink focus:border-teal focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Email <span className="text-teal-deep">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded border border-[#AFAFAF] bg-white px-4 py-3 text-[15px] text-ink focus:border-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Phone <span className="text-teal-deep">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded border border-[#AFAFAF] bg-white px-4 py-3 text-[15px] text-ink focus:border-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded border border-[#AFAFAF] bg-white px-4 py-3 text-[15px] text-ink focus:border-teal focus:outline-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="lg:pl-8">
              <p className="text-[15px] leading-[1.8] text-body">
                Please feel free to contact me for further information or any
                enquiries regarding the services on offer. Drop us a line with
                the nature of your enquiry.
              </p>
              <hr className="my-8 border-line" />
              <p className="text-[15px] leading-[1.8] text-body">
                Drop us a line with the nature of your enquiry.
              </p>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body">
                  Share us
                </p>
                <div className="mt-3 flex gap-3">
                  <a
                    href="#"
                    aria-label="Prana Physio on Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-link text-white transition-transform hover:-translate-y-0.5"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Prana Physio on Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-link text-white transition-transform hover:-translate-y-0.5"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Prana Physio on X (Twitter)"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-link text-white transition-transform hover:-translate-y-0.5"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Prana Physio on LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-link text-white transition-transform hover:-translate-y-0.5"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
