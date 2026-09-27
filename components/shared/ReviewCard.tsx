import React from "react";
import Reveal from "@/components/Reveal";

interface ReviewCardProps {
  name: string;
  quote: string;
  condition?: string;
  delay?: number;
}

export default function ReviewCard({
  name,
  quote,
  condition,
  delay = 0,
}: ReviewCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full flex-col rounded-md border border-line bg-mist p-6 shadow-sm">
        <div className="mb-4 flex text-teal">
          {"★★★★★".split("").map((star, i) => (
            <span key={i} className="text-xl">
              {star}
            </span>
          ))}
        </div>
        <p className="mb-6 text-sm italic leading-relaxed text-body flex-grow">
          "{quote}"
        </p>
        <div>
          <p className="font-semibold text-ink">{name}</p>
          {condition && (
            <p className="mt-1 text-xs text-body uppercase tracking-wider">
              {condition}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
