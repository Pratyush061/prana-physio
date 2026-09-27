"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Reveal key={index} delay={index * 0.05}>
            <div className="rounded-md border border-line bg-white overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-mist focus:outline-none"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <span className="font-display text-xl uppercase tracking-wide text-ink pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-teal transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-body leading-relaxed border-t border-line">
                  {item.answer}
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
