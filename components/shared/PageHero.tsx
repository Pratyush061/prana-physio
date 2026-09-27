import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-mist py-14 md:py-20">
      {/* subtle decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-teal/5 blur-3xl"
      />
      <div className="container-site">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-body"
          >
            <Link href="/" className="transition-colors hover:text-teal-deep">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-line" aria-hidden="true" />
            <span className="text-teal-deep">{title}</span>
          </nav>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="heading-xl text-[38px] md:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body md:text-base">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
