import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/content";

export default function Footer() {
  return (
    <section id="faq" className="bg-teal py-16 text-white">
      <div className="container-site">
        <Reveal>
          <div className="flex justify-center gap-4">
            <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-teal-deep">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-teal-deep">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-teal-deep">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-teal-deep">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-10 text-center md:grid-cols-3 md:text-left">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <Phone className="h-4 w-4" aria-hidden="true" /> Phone
              </span>
              <a href={clinic.phoneHref} className="text-lg hover:underline">
                {clinic.phone}
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Address
              </span>
              <p className="text-lg leading-relaxed">{clinic.address}</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <Mail className="h-4 w-4" aria-hidden="true" /> Email
              </span>
              <a href={`mailto:${clinic.email}`} className="text-lg hover:underline">
                {clinic.email}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-sm leading-relaxed text-white/90">
            Serving patients across {clinic.areas}. Open {clinic.hours}.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-md">
            <iframe
              title="Map — Prana Physio, Vijay Nagar, Indore"
              src="https://www.openstreetmap.org/export/embed.html?bbox=75.86%2C22.72%2C75.92%2C22.77&layer=mapnik"
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
