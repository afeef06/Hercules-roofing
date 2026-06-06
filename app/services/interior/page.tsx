import type { Metadata } from "next";
import { Check, AlertTriangle } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcessSteps from "@/components/ServiceProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import BookingCTA from "@/components/BookingCTA";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import { REVIEWS } from "@/data/reviews";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Water Damage Repair Frisco TX | Hercules Roof Systems",
  description:
    "Interior water damage inspection, remediation, and restoration in DFW. Ceiling, wall, and floor repair by Hercules Roof Systems. Free inspection.",
};

const RELATED = SERVICES.filter((s) => ["residential", "storm-damage", "gutters"].includes(s.id));

export default function InteriorPage() {
  return (
    <>
      <ServiceHero
        overline="Interior Services"
        title="Interior Services"
        subtitle="Full Interior Restoration After Water Damage"
        description="Roof damage and storm events often cause interior water damage that can go undetected for weeks. Hercules Roof Systems provides comprehensive interior inspection, water remediation, and complete restoration services."
      />

      {/* Warning Banner */}
      <div className="py-4 border-l-4 border-yellow-400" style={{ backgroundColor: "#1a1500" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-white/75 text-sm">
            <strong className="text-yellow-400">Don&apos;t ignore water stains.</strong> Interior water damage can lead to mold growth within 24–48 hours. If you see ceiling stains, soft drywall, or musty odors — call Hercules immediately.
          </p>
        </div>
      </div>

      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="overline mb-4">Interior Services</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                From Leak to Restored
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-base leading-relaxed mb-6">
                Water damage doesn&apos;t stop at the roof. Moisture infiltration can damage ceilings, walls, flooring, and insulation — and lead to dangerous mold growth. Hercules Roof Systems offers the full restoration scope, so you only need one call.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Water damage inspection & assessment",
                  "Water extraction & remediation",
                  "Moisture mapping & documentation",
                  "Mold prevention treatment",
                  "Ceiling drywall removal & replacement",
                  "Wall repair & drywall installation",
                  "Insulation replacement",
                  "Flooring removal & replacement",
                  "Interior painting",
                  "Full room restoration",
                  "Insurance claim documentation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-brand-crimson/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-crimson" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="overline mb-4">Warning Signs</p>
              <h2 className="display-sm text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Signs You Need Interior Services
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <div className="space-y-3">
                {[
                  { sign: "Water stains on ceilings or walls", severity: "High" },
                  { sign: "Soft or sagging drywall", severity: "High" },
                  { sign: "Peeling or bubbling paint", severity: "Medium" },
                  { sign: "Musty or mildew odor", severity: "High" },
                  { sign: "Visible mold or dark spots", severity: "Critical" },
                  { sign: "Warped or buckled flooring", severity: "Medium" },
                  { sign: "Rust stains from ceiling fixtures", severity: "Medium" },
                  { sign: "Elevated indoor humidity", severity: "Medium" },
                ].map(({ sign, severity }) => (
                  <div key={sign} className="flex items-center justify-between gap-4 p-3 border border-white/6" style={{ backgroundColor: "#1E2832" }}>
                    <div className="flex items-center gap-2.5">
                      <AlertTriangle className={`w-3.5 h-3.5 shrink-0 ${severity === "Critical" ? "text-red-400" : severity === "High" ? "text-orange-400" : "text-yellow-400"}`} />
                      <span className="text-white/70 text-sm">{sign}</span>
                    </div>
                    <span
                      className={`text-xs font-condensed font-bold px-2 py-0.5 ${
                        severity === "Critical"
                          ? "bg-red-500/20 text-red-400"
                          : severity === "High"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                      style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.1em" }}
                    >
                      {severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceProcessSteps />

      <ProjectGallery
        title="Interior Restoration Projects"
        projects={[
          { title: "Ceiling Repair & Repaint", location: "Frisco, TX", type: "Water Damage Repair" },
          { title: "Full Room Restoration", location: "Plano, TX", type: "Storm Restoration" },
          { title: "Flooring Replacement", location: "Allen, TX", type: "Water-Damaged Floor" },
          { title: "Drywall Replacement", location: "McKinney, TX", type: "Wall Repair" },
          { title: "Insulation Replacement", location: "Prosper, TX", type: "Attic Restoration" },
          { title: "Mold Remediation", location: "Richardson, TX", type: "Remediation" },
        ]}
        showViewMore={false}
      />

      <section className="py-16" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="overline mb-3">Client Reviews</p>
            <h2 className="display-sm text-white" style={{ fontFamily: "var(--font-oswald)" }}>What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[REVIEWS[1], REVIEWS[2], REVIEWS[4]].map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA title="Water Damage? Act Fast." subtitle="Don't let interior water damage compound into a mold problem. Hercules Roof Systems responds quickly with full inspection, remediation, and restoration services." dark={false} />

      <section className="py-16" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="overline mb-3">Also From Hercules</p>
            <h2 className="display-sm text-white" style={{ fontFamily: "var(--font-oswald)" }}>Related Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {RELATED.map((s) => <ServiceCard key={s.id} {...s} />)}
          </div>
        </div>
      </section>
    </>
  );
}
