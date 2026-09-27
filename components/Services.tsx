import Image from "next/image";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container-site">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-body">
          Physiotherapist Vijay Nagar · Palasia · Bhawarkua · Aerodrome · Indore
        </p>
        <Reveal>
          <h2 className="heading-xl mt-3 text-center text-[28px] lg:text-4xl">
            Services
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.12}>
              <article className="group h-full overflow-hidden rounded-md border border-line bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl uppercase tracking-[0.04em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">
                    {service.blurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
