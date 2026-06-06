import { Shield, Star, Clock, Users, CheckCircle, DollarSign, BadgeCheck, Zap } from "lucide-react";

const BADGES = [
  { icon: BadgeCheck, label: "BBB Accredited", sub: "Business" },
  { icon: Shield, label: "NRCIA Member", sub: "Certified" },
  { icon: Star, label: "5.0 Google Rating", sub: "25 Reviews" },
  { icon: Clock, label: "30 Years", sub: "In Business" },
  { icon: Users, label: "Family Owned", sub: "Texas Born" },
  { icon: CheckCircle, label: "Free Inspections", sub: "No Obligation" },
  { icon: DollarSign, label: "Financing", sub: "Available" },
  { icon: Zap, label: "24/7 Emergency", sub: "Same-Day Service" },
];

export default function TrustBadges() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(90deg, #C41E3A 0%, #8B0000 100%)" }}
      aria-label="Trust indicators and certifications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-0">
          {BADGES.map(({ icon: Icon, label, sub }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center py-2 px-2 ${
                i < BADGES.length - 1 ? "lg:border-r lg:border-white/20" : ""
              }`}
            >
              <Icon className="w-5 h-5 text-white mb-1.5" aria-hidden="true" />
              <p className="text-white font-bold text-xs leading-tight tracking-wide" style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.06em" }}>
                {label}
              </p>
              <p className="text-white/70 text-[10px] mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>
      {/* UPDATE: Replace icon badges with real certification images where available */}
    </section>
  );
}
