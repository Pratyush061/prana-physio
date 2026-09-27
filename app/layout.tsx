import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Prana Physio — Physiotherapist in Vijay Nagar, Indore | Physiotherapy, Pilates, Acupuncture",
  description:
    "Premium physiotherapy, reformer Pilates and acupuncture studio in Vijay Nagar, Indore, run by Dr. Meera Joshi (MPT). Serving Palasia, Bhawarkua, Rajwada and the wider Indore area. Book online.",
  keywords: [
    "physiotherapist Indore",
    "physiotherapy Vijay Nagar",
    "reformer Pilates Indore",
    "acupuncture Indore",
    "sports injury rehab Indore",
  ],
  openGraph: {
    title: "Prana Physio — Physiotherapy, Pilates & Acupuncture, Indore",
    description:
      "Find your balance. Evidence-based physiotherapy, reformer Pilates and acupuncture in Vijay Nagar, Indore.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  name: "Prana Physio",
  description:
    "Premium physiotherapy, reformer Pilates and acupuncture studio in Vijay Nagar, Indore.",
  telephone: "+91 98260 45678",
  email: "hello@pranaphysio.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Silver Arc Complex, Scheme 54, Vijay Nagar",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452010",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.7533, longitude: 75.8937 },
  openingHours: ["Mo-Sa 08:00-20:00", "Su 09:00-13:00"],
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${roboto.variable}`}>
      <body className="font-sans text-body antialiased">
        <AnnouncementBar />
        <Navbar />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
