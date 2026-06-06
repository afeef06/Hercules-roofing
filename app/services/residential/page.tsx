import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcessSteps from "@/components/ServiceProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import BookingCTA from "@/components/BookingCTA";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import { REVIEWS } from "@/data/reviews";
import { SERVICES } from "@/data/services";
import { ROUTES } from "@/data/business";

export const metadata: Metadata = {
  title: "Residential Roofing Frisco TX | Hercules Roof Systems",
  description:
    "Expert residential roofing in Frisco, TX. Shingles, metal roofing, tile, and full roof replacement. Free inspection. Call Hercules Roof Systems at (469) 444-8559.",
};

const RESIDENTIAL_MATERIALS = [
  {
    category: "Asphalt & Shingles",
    items: ["3-Tab Asphalt Shingles", "Architectural / Dimensional Shingles", "Composite Shingles", "Class 4 Impact-Resistant Shingles"],
  },
  {
    category: "Metal Roofing",
    items: ["Standing Seam Panel", "Corrugated Metal Roof", "Metal Shingles", "Steel & Aluminum Systems"],
  },
  {
    category: "Premium Materials",
    items: ["Tile Roofing (Concrete & Clay)", "Slate Roofing", "Synthetic Slate", "Cedar Shake"],
  },
];

const RELATED = SERVICES.filter((s) => ["commercial", "storm-damage", "gutters"].includes(s.id));

export default function ResidentialRoofingPage() {
  return (
    <>
      <ServiceHero
        overline="Residential Roofing"
        title="Residential Roofing"
        subtitle="Premium Roofing for Every DFW Home"
        description="Asphalt shingles to standing seam metal — Hercules Roof Systems installs, replaces, and repairs every residential roof type with 30 years of proven expertise and certified craftsmanship."
      />

      {/* Service Details */}
      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="overline mb-4">What&apos;s Included</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Full-Service Residential Roofing
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-base leading-relaxed mb-6">
                Every DFW home has unique roofing needs shaped by age, style, and Texas weather. Hercules Roof Systems provides complete residential roofing services — from minor repairs to full replacements — using materials certified to withstand the harshest conditions.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Free comprehensive roof inspection",
                  "Full roof replacement & installation",
                  "Roof repair & patch work",
                  "Storm & hail damage repair",
                  "Roof deck repair & replacement",
                  "Flashing installation & repair",
                  "Ridge cap & ventilation systems",
                  "Satellite dish removal & patching",
                  "Detailed warranty documentation",
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
              <p className="overline mb-4">Materials We Work With</p>
              <h2 className="display-sm text-white mb-6" style={{ fontFamily: "var(--font-oswald)" }}>
                Every Roof Type. Every Style.
              </h2>
              <div className="space-y-5">
                {RESIDENTIAL_MATERIALS.map((mat) => (
                  <div key={mat.category} className="border border-white/6 p-5" style={{ backgroundColor: "#1E2832" }}>
                    <h3 className="text-brand-crimson font-condensed font-bold text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                      {mat.category}
                    </h3>
                    <ul className="space-y-1.5">
                      {mat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-white/65 text-sm">
                          <ChevronRight className="w-3 h-3 text-brand-crimson shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hercules for Residential */}
      <section className="py-16" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-4">Why Hercules</p>
            <h2 className="display-sm text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
              Certified Craftsmanship on Every Home
            </h2>
            <div className="w-12 h-0.5 bg-brand-crimson mx-auto mb-5" />
            <p className="text-white/65 text-base leading-relaxed">
              As a family-owned company, we understand that your home is your most important investment. That&apos;s why Hercules Roof Systems uses only premium, manufacturer-certified materials and employs skilled technicians who treat your home with the same care they&apos;d give their own. Every residential project comes with a detailed walkthrough, warranty documentation, and the Hercules Guarantee.
            </p>
          </div>
        </div>
      </section>

      <ServiceProcessSteps />

      <ProjectGallery
        title="Residential Roofing Projects"
        projects={[
          { title: "Shingle Replacement", location: "Frisco, TX", type: "Architectural Shingles" },
          { title: "Full Roof Replacement", location: "Plano, TX", type: "Class 4 Shingles" },
          { title: "Metal Roof Install", location: "Allen, TX", type: "Standing Seam Metal" },
          { title: "Storm Damage Repair", location: "McKinney, TX", type: "Hail Repair" },
          { title: "Tile Roof Replacement", location: "Prosper, TX", type: "Concrete Tile" },
          { title: "Roof Repair & Flashing", location: "Frisco, TX", type: "Emergency Repair" },
        ]}
        showViewMore={false}
      />

      {/* Reviews */}
      <section className="py-16" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="overline mb-3">Client Reviews</p>
            <h2 className="display-sm text-white" style={{ fontFamily: "var(--font-oswald)" }}>
              Trusted by DFW Homeowners
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Ready for a New Roof?"
        subtitle="Schedule your free residential roof inspection with Hercules Roof Systems. We'll assess your roof honestly, answer every question, and provide a detailed estimate — no pressure, no obligation."
      />

      {/* Related Services */}
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
