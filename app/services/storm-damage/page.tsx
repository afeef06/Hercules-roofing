import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, Zap, Shield, FileText, Clock } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcessSteps from "@/components/ServiceProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import BookingCTA from "@/components/BookingCTA";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import { REVIEWS } from "@/data/reviews";
import { SERVICES } from "@/data/services";
import { BUSINESS, ROUTES } from "@/data/business";

export const metadata: Metadata = {
  title: "Storm Damage Roof Repair Frisco TX | Hercules Roof Systems",
  description:
    "Same-day storm and wind damage roof repair in DFW. Insurance claim support available. Free inspection. Call Hercules Roof Systems 24/7 at (469) 444-8559.",
};

const RELATED = SERVICES.filter((s) => ["residential", "commercial", "interior"].includes(s.id));

export default function StormDamagePage() {
  return (
    <>
      <ServiceHero
        overline="Emergency Response"
        title="Storm Damage Repair"
        subtitle="Fast Response When Storms Strike DFW"
        description="Hail, wind, and severe storms can devastate your roof in minutes. Hercules Roof Systems responds same-day with emergency tarping, full damage assessment, and complete restoration — backed by insurance claim expertise."
      />

      {/* Emergency CTA bar */}
      <div className="py-5" style={{ background: "linear-gradient(90deg, #7a0000, #C41E3A)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-300" />
            <p className="text-white font-semibold text-sm">
              Experiencing storm damage right now? We respond 24/7 with same-day emergency service.
            </p>
          </div>
          <a href={BUSINESS.phoneHref} className="btn-secondary shrink-0 py-2.5 px-5 text-sm">
            <Phone className="w-4 h-4" />
            Call 24/7
          </a>
        </div>
      </div>

      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="overline mb-4">Storm Services</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Complete Storm Damage Response
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-base leading-relaxed mb-6">
                DFW is one of the most storm-prone regions in the country — severe hail, high winds, and sudden rain events can cause immediate and hidden damage. Hercules Roof Systems is equipped to handle the full scope of storm damage from emergency tarping to final restoration.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Free storm damage inspection",
                  "Same-day emergency response",
                  "Emergency tarping & board-up",
                  "Hail damage assessment & repair",
                  "Wind damage repair",
                  "Fallen debris removal",
                  "Leak detection & repair",
                  "Full roof replacement (when needed)",
                  "Interior damage documentation",
                  "Insurance claim assistance",
                  "Direct adjuster communication",
                  "Complete restoration services",
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

            {/* Insurance section */}
            <div>
              <p className="overline mb-4">Insurance Claims</p>
              <h2 className="display-sm text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                We Handle the Insurance Process
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                Navigating an insurance claim after storm damage is stressful. Hercules Roof Systems takes that burden off your shoulders with full claim documentation and adjuster support.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Thorough Damage Documentation",
                    desc: "We photograph, document, and report every point of damage to build a complete claim.",
                  },
                  {
                    icon: FileText,
                    title: "Insurance Adjuster Coordination",
                    desc: "Our team works directly with your adjuster to ensure you receive fair and full coverage.",
                  },
                  {
                    icon: Clock,
                    title: "Fast Turnaround",
                    desc: "From inspection to restoration — we move quickly so your home is protected before more damage occurs.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 p-4 border border-white/6" style={{ backgroundColor: "#1E2832" }}>
                    <div className="w-10 h-10 bg-brand-crimson/15 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-crimson" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                      <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 border border-brand-crimson/30" style={{ backgroundColor: "rgba(196,30,58,0.06)" }}>
                <p className="text-brand-crimson font-condensed font-bold text-sm tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  Important
                </p>
                <p className="text-white/65 text-sm leading-relaxed">
                  Most homeowner policies cover storm and hail damage. Call us before calling your insurance company — we&apos;ll help you understand your coverage and ensure the claim is filed correctly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceProcessSteps />

      <ProjectGallery
        title="Storm Damage Repair Projects"
        projects={[
          { title: "Hail Damage Replacement", location: "Frisco, TX", type: "Emergency Repair" },
          { title: "Wind Damage Repair", location: "Plano, TX", type: "Shingle Repair" },
          { title: "Full Roof Replacement", location: "Allen, TX", type: "Post-Storm Replacement" },
          { title: "Tree Damage Repair", location: "McKinney, TX", type: "Structural Repair" },
          { title: "Emergency Tarp & Repair", location: "Prosper, TX", type: "Emergency Service" },
          { title: "Water Damage Restoration", location: "Richardson, TX", type: "Storm Restoration" },
        ]}
        showViewMore={false}
      />

      <section className="py-16" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="overline mb-3">Client Reviews</p>
            <h2 className="display-sm text-white" style={{ fontFamily: "var(--font-oswald)" }}>
              Storm Survivors Speak
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[REVIEWS[1], REVIEWS[4], REVIEWS[0]].map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Storm Damage? Don't Wait."
        subtitle="Every hour of exposure causes more damage. Call Hercules Roof Systems now for same-day emergency response, or schedule your free storm damage inspection online."
        dark={false}
      />

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
