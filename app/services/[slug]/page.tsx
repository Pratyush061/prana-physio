import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { serviceDetails } from "@/lib/services";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/shared/CtaSection";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceDetails.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};

  return {
    title: `${service.title} — Prana Physio, Indore`,
    description: service.sections[0].body.slice(0, 150) + "...",
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = serviceDetails.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full bg-ink">
        <Image
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container-site">
            <Reveal>
              <h1 className="font-display text-4xl uppercase tracking-wide text-white md:text-6xl lg:text-7xl">
                {service.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {service.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.1}>
                <div>
                  <h2 className="font-display text-3xl uppercase tracking-wide text-ink mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-body leading-relaxed">{section.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <Reveal delay={0.2}>
                <div className="rounded-md border border-line bg-mist p-8 shadow-sm">
                  <h3 className="font-display text-2xl uppercase tracking-wide text-ink mb-6">
                    Conditions Treated
                  </h3>
                  <ul className="space-y-4">
                    {service.conditionsTreated.map((condition) => (
                      <li
                        key={condition}
                        className="flex items-start text-sm leading-relaxed text-body"
                      >
                        <span className="mr-3 text-teal">✓</span>
                        {condition}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link
                      href="/bookings"
                      className="btn-primary w-full text-center block"
                    >
                      Book this service
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
