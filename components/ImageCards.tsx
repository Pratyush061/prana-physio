import Image from "next/image";
import Reveal from "@/components/Reveal";

const cards = [
  {
    label: "Rebuild Your Strength",
    button: "Rebuild Your Body",
    image: "/images/card-strength.jpg",
    alt: "Woman exercising on a Pilates reformer in a bright studio",
  },
  {
    label: "Move Without Limits",
    button: "Access Your Full Capacity",
    image: "/images/card-running.jpg",
    alt: "Runner training on a road at sunrise",
  },
];

export default function ImageCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-site grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.label} delay={i * 0.12}>
            <div className="group relative overflow-hidden rounded-md">
              <div className="relative aspect-[4/5] max-h-[560px] w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-teal/95 p-6 transition-transform duration-300 group-hover:-translate-y-2">
                <p className="font-display text-2xl uppercase tracking-[0.04em] text-white sm:text-3xl">
                  {card.label}
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-block rounded bg-white px-5 py-2.5 text-sm font-medium text-teal-deep transition-colors hover:bg-ink hover:text-white"
                >
                  {card.button}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
