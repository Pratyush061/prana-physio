import Reveal from "@/components/Reveal";
import { insurers } from "@/lib/content";

export default function InsuranceRow() {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="container-site">
        <Reveal>
          <h2 className="heading-xl text-center text-[28px] lg:text-4xl">
            Health Insurance Providers
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {insurers.map((insurer) => (
            <div
              key={insurer}
              className="flex h-20 items-center justify-center rounded-md border border-line bg-white px-3 shadow-card"
            >
              <span className="text-center font-display text-base uppercase tracking-[0.08em] text-body">
                {insurer}
              </span>
            </div>
          ))}
        </div>
        <Reveal delay={0.15} className="mt-8 text-center">
          <a href="/bookings" className="link-teal text-sm font-semibold uppercase tracking-[0.08em]">
            Discover our physiotherapy services for insurance-covered patients &gt;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
