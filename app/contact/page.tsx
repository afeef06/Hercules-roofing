import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail, Globe } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact | Free Roof Inspection | Hercules Roof Systems",
  description:
    "Contact Hercules Roof Systems for a free roof inspection. Call (469) 444-8559 or submit online. Serving all of DFW from Frisco, TX.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1E2832 60%, #0A0A0A 100%)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(196,30,58,0.07), transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="overline mb-4">No Pressure. No Obligation.</p>
          <h1 className="display-xl text-white mb-4" style={{ fontFamily: "var(--font-oswald)", lineHeight: 0.95 }}>
            Get Your{" "}
            <span style={{ color: "#C41E3A" }}>Free</span>
            <br />
            Inspection
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
            Our certified inspectors will assess your roof honestly and provide a detailed report — at no cost, with zero obligation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="overline mb-4">Reach Us Directly</p>
                <h2 className="display-sm text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
                  Contact Information
                </h2>
                <div className="w-12 h-0.5 bg-brand-crimson mb-6" />
              </div>

              <div className="space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-4 p-4 border border-white/6 group hover:border-brand-crimson/30 transition-all"
                  style={{ backgroundColor: "#1E2832" }}
                >
                  <div className="w-10 h-10 bg-brand-crimson flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5" style={{ fontFamily: "var(--font-barlow-condensed)" }}>Phone</p>
                    <p className="text-white font-display font-bold text-xl group-hover:text-brand-crimson transition-colors" style={{ fontFamily: "var(--font-oswald)" }}>
                      {BUSINESS.phone}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">Available 24/7 for emergencies</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 border border-white/6" style={{ backgroundColor: "#1E2832" }}>
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-crimson" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5" style={{ fontFamily: "var(--font-barlow-condensed)" }}>Address</p>
                    <p className="text-white font-medium text-sm">{BUSINESS.address.full}</p>
                    <a
                      href={BUSINESS.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-crimson text-xs hover:underline mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border border-white/6" style={{ backgroundColor: "#1E2832" }}>
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-crimson" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5" style={{ fontFamily: "var(--font-barlow-condensed)" }}>Hours</p>
                    <p className="text-white font-medium text-sm">Mon–Fri: 8:00 AM – 6:00 PM</p>
                    <p className="text-white/65 text-sm">Sat: 9:00 AM – 4:00 PM</p>
                    <p className="text-brand-crimson text-xs font-semibold mt-1">Emergency: Available 24/7</p>
                  </div>
                </div>

                <a
                  href={BUSINESS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border border-white/6 group hover:border-white/15 transition-all"
                  style={{ backgroundColor: "#1E2832" }}
                >
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-brand-crimson" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5" style={{ fontFamily: "var(--font-barlow-condensed)" }}>Website</p>
                    <p className="text-white/75 text-sm group-hover:text-white transition-colors">herculesdfw.com</p>
                  </div>
                </a>
              </div>

              {/* Emergency CTA */}
              <div className="p-5 border border-brand-crimson/30" style={{ backgroundColor: "rgba(196,30,58,0.06)" }}>
                <p className="text-brand-crimson font-condensed font-bold text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  Emergency Service
                </p>
                <p className="text-white/65 text-sm leading-relaxed mb-3">
                  Storm damage? Roof leak? We respond 24/7 with same-day emergency service.
                </p>
                <a href={BUSINESS.phoneHref} className="btn-primary w-full justify-center py-3 text-sm">
                  <Phone className="w-4 h-4" />
                  Call Now — 24/7
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="border border-white/8 p-6 sm:p-8" style={{ backgroundColor: "rgba(30,40,50,0.4)" }}>
                <h2 className="display-sm text-white mb-2" style={{ fontFamily: "var(--font-oswald)" }}>
                  Request Your Free Inspection
                </h2>
                <p className="text-white/50 text-sm mb-6">
                  Complete the form below and we&apos;ll contact you within 1 business hour.
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div
            className="w-full h-72 border border-white/6 flex items-center justify-center"
            style={{ backgroundColor: "#161616" }}
          >
            <div className="text-center">
              <MapPin className="w-8 h-8 text-brand-crimson mx-auto mb-2" />
              <p className="text-white/40 font-condensed text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                Map Placeholder
              </p>
              <p className="text-white/25 text-xs mt-1">
                {/* UPDATE: Replace with Google Maps embed using the business address */}
                9201 Warren Pkwy #200, Frisco, TX 75035
              </p>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-crimson text-xs hover:underline mt-2 inline-block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
