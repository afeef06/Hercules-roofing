"use client";
import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, Phone, X } from "lucide-react";
import { BUSINESS } from "@/data/business";

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      className="relative z-50 bg-gradient-to-r from-brand-crimson-dark via-brand-crimson to-brand-fire py-2.5 px-4"
      style={{ background: "linear-gradient(90deg, #7a0000 0%, #C41E3A 50%, #E02020 100%)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <AlertTriangle className="w-4 h-4 text-yellow-300 shrink-0" aria-hidden="true" />
          <p className="text-white text-sm font-medium truncate">
            <span className="hidden sm:inline font-semibold">Storm damage?</span>
            <span className="sm:hidden font-semibold">Storm damage? </span>
            <span className="hidden sm:inline">
              {" "}We offer same-day emergency roof repair.{" "}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={BUSINESS.phoneHref}
            className="flex items-center gap-1.5 bg-white text-brand-crimson font-condensed font-bold text-xs tracking-widest uppercase px-3 py-1.5 hover:bg-yellow-50 transition-colors"
            aria-label="Call now for emergency roof repair"
          >
            <Phone className="w-3 h-3" aria-hidden="true" />
            <span className="hidden xs:inline">Call Now</span>
            <span className="xs:hidden">{BUSINESS.phone}</span>
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Dismiss emergency banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
