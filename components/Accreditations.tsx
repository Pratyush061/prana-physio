import Reveal from "@/components/Reveal";
import { accreditations } from "@/lib/content";

export default function Accreditations() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-site">
        <Reveal>
          <h2 className="heading-xl text-center text-[28px] lg:text-4xl">
            Accreditations
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {accreditations.map((item, i) => (
            <Reveal key={item} delay={i * 0.12}>
              <div className="flex h-full min-h-32 items-center justify-center rounded-md border border-line bg-white p-6 shadow-card">
                <p className="text-center font-display text-lg uppercase leading-snug tracking-[0.06em] text-ink">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
