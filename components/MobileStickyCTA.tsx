"use client";
import Link from "next/link";
import { Phone, ClipboardCheck } from "lucide-react";
import { BUSINESS, ROUTES } from "@/data/business";

export default function MobileStickyCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex"
      role="complementary"
      aria-label="Quick contact"
    >
      <a
        href={BUSINESS.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 bg-brand-steel py-4 text-white font-condensed font-bold text-sm tracking-widest uppercase border-r border-white/10 active:bg-brand-steel/80 transition-colors"
        style={{ fontFamily: "var(--font-barlow-condensed)", backgroundColor: "#1E2832" }}
        aria-label="Call Hercules Roof Systems"
      >
        <Phone className="w-4 h-4 text-brand-crimson" />
        Call Now
      </a>
      <Link
        href={ROUTES.contact}
        className="flex-1 flex items-center justify-center gap-2 bg-brand-crimson py-4 text-white font-condensed font-bold text-sm tracking-widest uppercase active:bg-brand-fire transition-colors"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
        aria-label="Get free roof inspection"
      >
        <ClipboardCheck className="w-4 h-4" />
        Free Inspection
      </Link>
    </div>
  );
}
