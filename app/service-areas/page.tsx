import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import BookingCTA from "@/components/BookingCTA";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import { ROUTES, BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Roofing Service Areas — DFW | Hercules Roof Systems",
  description:
    "Hercules Roof Systems serves Frisco, Plano, Allen, McKinney, Dallas, Fort Worth, and all DFW communities. Free inspections available.",
};

const COUNTIES = [...new Set(SERVICE_AREAS.map((a) => a.county))];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1E2832 60%, #0A0A0A 100%)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(196,30,58,0.07), transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <p className="overline mb-4">Coverage Area</p>
          <h1 className="display-xl text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
            Serving the <span style={{ color: "#C41E3A" }}>Entire DFW</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">
            For 30 years, Hercules Roof Systems has protected homes and businesses across the Dallas-Fort Worth Metroplex — from Frisco to Fort Worth, Allen to Arlington.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {COUNTIES.map((county) => {
            const cities = SERVICE_AREAS.filter((a) => a.county === county);
            return (
              <div key={county} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-6 bg-brand-crimson" />
                  <h2 className="text-white font-display font-bold text-2xl uppercase" style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}>
                    {county} County
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {cities.map(({ city, featured }) => (
                    <div
                      key={city}
                      className={`flex items-center gap-2 px-4 py-3 border text-sm transition-all ${
                        featured
                          ? "border-brand-crimson/40 text-white bg-brand-crimson/8"
                          : "border-white/6 text-white/60 hover:border-white/20 hover:text-white"
                      }`}
                      style={{ backgroundColor: featured ? "rgba(196,30,58,0.06)" : "#1E2832" }}
                    >
                      <MapPin className={`w-3 h-3 shrink-0 ${featured ? "text-brand-crimson" : "text-white/30"}`} />
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Coverage statement */}
          <div className="border border-white/6 p-7 mt-6" style={{ backgroundColor: "#1E2832" }}>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-crimson shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-display font-bold text-xl uppercase mb-2" style={{ fontFamily: "var(--font-oswald)" }}>
                  Don&apos;t See Your City?
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  Hercules Roof Systems serves the entire DFW Metroplex. If your city isn&apos;t listed above, we very likely serve your area. Call us or request a free inspection and we&apos;ll confirm coverage right away.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={ROUTES.contact} className="btn-primary px-6 py-3 text-sm">
                    Get Free Inspection <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={BUSINESS.phoneHref} className="btn-secondary px-6 py-3 text-sm">
                    Call {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA title="Serving Your Neighborhood" subtitle="Wherever you are in the DFW Metroplex, Hercules Roof Systems is nearby. Schedule your free roof inspection today and get the protection your home deserves." />
    </>
  );
}
