import Link from "next/link";
import { Phone, ClipboardCheck } from "lucide-react";
import { BUSINESS, ROUTES } from "@/data/business";

interface BookingCTAProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function BookingCTA({
  title = "Ready to Protect Your Property?",
  subtitle = "Get a free, no-obligation roof inspection from Hercules Roof Systems. Our certified inspectors deliver honest, detailed assessments — no pressure, no commitment.",
  dark = true,
}: BookingCTAProps) {
  return (
    <section
      className={`relative py-20 overflow-hidden ${dark ? "" : ""}`}
      style={dark ? { background: "linear-gradient(135deg, #0A0A0A 0%, #1E2832 60%, #0A0A0A 100%)" } : { background: "linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)" }}
    >
      {/* Decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-crimson rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-crimson rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="overline mb-4">{dark ? "The Hercules Guarantee" : "Start Today"}</p>
        <h2
          className="display-lg text-white mb-5"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          {title}
        </h2>
        <p className="text-white/65 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ROUTES.contact}
            className="btn-primary px-8 py-4 text-base w-full sm:w-auto justify-center"
          >
            <ClipboardCheck className="w-5 h-5" />
            {BUSINESS.cta.primary}
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="btn-secondary px-8 py-4 text-base w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.cta.secondary}
          </a>
        </div>
        <p className="text-white/35 text-xs mt-6 tracking-wide">
          No pressure. No obligation. Serving DFW for {BUSINESS.yearsInBusiness} years.
        </p>
      </div>
    </section>
  );
}
