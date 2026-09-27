"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape to close + lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-all ${
        scrolled ? "border-line shadow-[0_2px_12px_rgba(0,0,0,0.04)]" : "border-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between py-3.5">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Prana Physio — home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal font-display text-2xl text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
            P
          </span>
          <span className="leading-none">
            <span className="block font-display text-[26px] uppercase tracking-[0.06em] text-ink">
              Prana Physio
            </span>
            <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-deep sm:block">
              Physio · Pilates · Acupuncture
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`link-slide text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                      isActive ? "text-teal-deep" : "text-ink hover:text-teal-deep"
                    }`}
                    data-active={isActive}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/bookings" className="btn-primary hidden !px-5 !py-2.5 !text-base xl:inline-flex">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Now
          </Link>
          <button
            type="button"
            className="rounded p-2 text-ink transition-colors hover:text-teal-deep lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="border-t border-line bg-white lg:hidden"
            initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <ul className="container-site flex flex-col py-3">
              {nav.map((item, i) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <motion.li
                    key={item.label}
                    initial={reduce ? undefined : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-line/60 py-3.5 text-[15px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                        isActive ? "text-teal-deep" : "text-ink hover:text-teal-deep"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-teal" : "bg-transparent"}`}
                      />
                    </Link>
                  </motion.li>
                );
              })}
              <li className="pt-4">
                <Link
                  href="/bookings"
                  className="btn-primary w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
