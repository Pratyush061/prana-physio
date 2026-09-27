"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/Reveal";
import { insurers } from "@/lib/content";

export default function InsuredPatientsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const insurer = formData.get("insurer");
    const policy = formData.get("policy");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const reason = formData.get("reason");

    const subject = encodeURIComponent(`Insurance Verification: ${name}`);
    const body = encodeURIComponent(
      `Patient Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nInsurer: ${insurer}\nPolicy Number: ${policy}\n\nCondition/Reason for visit:\n${reason}\n\nConsent given for verification.`
    );

    window.location.href = `mailto:hello@pranaphysio.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main>
      <PageHero
        title="Insured Patient Registration"
        subtitle="Cashless Physiotherapy Verification"
      />

      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          {/* How It Works Steps */}
          <Reveal>
            <div className="mb-16">
              <h2 className="heading-xl text-center mb-8">How It Works</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-md border border-line bg-mist p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal font-display text-2xl text-white">
                    1
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-2">
                    Register
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    Fill out the secure form below with your policy details.
                  </p>
                </div>
                <div className="rounded-md border border-line bg-mist p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal font-display text-2xl text-white">
                    2
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-2">
                    We Verify
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    Our team verifies your coverage and limits directly with your insurer.
                  </p>
                </div>
                <div className="rounded-md border border-line bg-mist p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal font-display text-2xl text-white">
                    3
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-2">
                    Book & Treat
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    We send you a booking link. Sessions are billed directly to your insurer.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form Section */}
          <Reveal delay={0.1}>
            <div className="rounded-md border border-line bg-white p-8 shadow-card md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-display text-3xl uppercase tracking-wide text-ink mb-4">
                    Details Sent for Verification
                  </h2>
                  <p className="text-body leading-relaxed max-w-lg mx-auto">
                    Thank you. We will verify your coverage with your insurer and contact you via email or phone within 24 hours to schedule your appointment.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="heading-xl mb-2 text-center text-[28px]">
                    Verification Form
                  </h2>
                  <p className="mb-8 text-center text-sm text-body">
                    Please ensure all details match your insurance policy exactly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="insurer" className="block text-sm font-semibold uppercase tracking-wide text-ink">
                          Insurance Provider *
                        </label>
                        <select
                          id="insurer"
                          name="insurer"
                          required
                          className="w-full rounded border border-line bg-mist px-4 py-3 text-ink focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        >
                          <option value="">Select Insurer</option>
                          {insurers.map((insurer) => (
                            <option key={insurer} value={insurer}>
                              {insurer}
                            </option>
                          ))}
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="policy" className="block text-sm font-semibold uppercase tracking-wide text-ink">
                          Policy Number / ID *
                        </label>
                        <input
                          type="text"
                          id="policy"
                          name="policy"
                          required
                          className="w-full rounded border border-line bg-mist px-4 py-3 text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          placeholder="e.g. POL123456789"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-wide text-ink">
                          Patient Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full rounded border border-line bg-mist px-4 py-3 text-ink focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold uppercase tracking-wide text-ink">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full rounded border border-line bg-mist px-4 py-3 text-ink focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wide text-ink">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded border border-line bg-mist px-4 py-3 text-ink focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="reason" className="block text-sm font-semibold uppercase tracking-wide text-ink">
                        Condition / Reason for visit *
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        required
                        rows={3}
                        className="w-full rounded border border-line bg-mist px-4 py-3 text-ink focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-none"
                        placeholder="Briefly describe what you need treatment for..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1 h-4 w-4 rounded border-line text-teal focus:ring-teal"
                      />
                      <label htmlFor="consent" className="text-sm leading-relaxed text-body">
                        I consent to Prana Physio contacting my insurance provider to verify my coverage limits and eligibility for physiotherapy treatment.
                      </label>
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Submit for Verification
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
