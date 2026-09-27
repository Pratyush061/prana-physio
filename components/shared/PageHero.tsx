import React from "react";
import Reveal from "@/components/Reveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-mist py-16 md:py-24 text-center">
      <div className="container-site">
        <Reveal>
          <h1 className="heading-xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-teal-deep">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
