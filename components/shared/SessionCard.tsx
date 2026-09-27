import React from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

interface SessionCardProps {
  name: string;
  duration?: string;
  price: string;
  description?: string;
  flag?: string;
  delay?: number;
}

export default function SessionCard({
  name,
  duration,
  price,
  description,
  flag,
  delay = 0,
}: SessionCardProps) {
  const encodedName = encodeURIComponent(name);

  return (
    <Reveal delay={delay}>
      <div className="relative flex flex-col h-full rounded-md border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-cardHover">
        {flag && (
          <div className="absolute top-0 right-0 rounded-bl-md rounded-tr-md bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {flag}
          </div>
        )}
        <div className="mb-4">
          <h3 className="font-display text-2xl uppercase tracking-wide text-ink">
            {name}
          </h3>
          {(duration || description) && (
            <p className="mt-1 text-sm text-body">
              {duration && <span className="font-medium">{duration}</span>}
              {duration && description && <span className="mx-2">•</span>}
              {description}
            </p>
          )}
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-line">
          <div className="font-display text-3xl uppercase text-teal-deep">
            {price}
          </div>
          <Link
            href={`/contact?session=${encodedName}`}
            className="rounded bg-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
          >
            Book Now
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
