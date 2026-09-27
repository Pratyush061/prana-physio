"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const line = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const reduce = useReducedMotion();
  const a = (delay: number) => (reduce ? {} : line(delay));

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Woman stretching outdoors at golden hour, embodying balance and recovery"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10"
          aria-hidden="true"
        />
      </div>

      <div className="container-site relative z-10 py-24">
        <motion.h1
          {...a(0)}
          className="heading-xl text-[44px] text-white sm:text-6xl lg:text-[72px]"
        >
          Find Your Balance
        </motion.h1>
        <motion.p
          {...a(0.08)}
          className="mt-3 font-display text-xl uppercase tracking-[0.12em] text-white sm:text-2xl"
        >
          Physiotherapy · Pilates · Acupuncture
        </motion.p>
        <motion.p
          {...a(0.16)}
          className="mt-4 max-w-xl text-sm font-medium uppercase tracking-[0.18em] text-white/80"
        >
          Physiotherapist Vijay Nagar · Palasia · Bhawarkua · Indore
        </motion.p>
        <motion.div {...a(0.32)} className="mt-8">
          <a href="/bookings" className="btn-primary">
            Book Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          {...a(0.45)}
          className="mt-10 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 shadow-card"
        >
          <span className="font-display text-3xl leading-none text-ink">5.0</span>
          <span className="flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-teal text-teal" aria-hidden="true" />
            ))}
          </span>
          <span className="text-sm font-medium text-body">300+ Google reviews</span>
        </motion.div>
      </div>
    </section>
  );
}
