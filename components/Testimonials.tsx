import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 lg:py-24">
      <div className="container-site">
        <Reveal>
          <h2 className="heading-xl text-center text-[28px] lg:text-4xl">
            What Our Patients Say
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-md border border-line bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover">
                <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-teal text-teal" aria-hidden="true" />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-body">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-display text-lg uppercase tracking-wide text-ink">
                    {t.name}
                  </p>
                  <a
                    href="https://www.google.com/search?q=Prana+Physio+Indore+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded bg-mist px-4 py-2 text-xs font-medium text-body transition-colors hover:text-teal-deep"
                  >
                    Read {t.name.split(" ")[0]}'s full 5-star review on Google
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=Prana+Physio+Indore+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="link-teal text-sm font-semibold uppercase tracking-[0.1em]"
          >
            Read more patient reviews &gt;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
