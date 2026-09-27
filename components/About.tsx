import Reveal from "@/components/Reveal";
import { aboutStory } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <div className="grid overflow-hidden rounded-md border border-line md:grid-cols-[240px_1fr]">
          <div className="flex flex-col items-center justify-center gap-5 bg-teal px-6 py-14 text-white">
            <span className="font-display text-4xl uppercase tracking-[0.08em]">About</span>
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white font-display text-4xl text-teal">
              P
            </span>
          </div>

          <div className="bg-white px-7 py-10 lg:px-12 lg:py-14">
            <Reveal>
              <h2 className="heading-xl text-3xl lg:text-4xl">Dr. Meera Joshi</h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-teal-deep">
                MPT (Musculoskeletal & Sports) · Founder, Prana Physio
              </p>
            </Reveal>

            <div className="mt-8 space-y-7">
              {aboutStory.map((section, i) => (
                <Reveal key={section.heading} delay={Math.min(i * 0.05, 0.2)}>
                  <div>
                    <h3 className="font-display text-lg uppercase tracking-[0.06em] text-ink">
                      {section.heading}
                    </h3>
                    <p className="mt-2 max-w-3xl text-[15px] leading-[1.8] text-body">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
