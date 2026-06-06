import type { Metadata } from "next";
import { Check } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcessSteps from "@/components/ServiceProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import BookingCTA from "@/components/BookingCTA";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import { REVIEWS } from "@/data/reviews";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Gutter Installation & Repair Frisco TX | Hercules Roof Systems",
  description:
    "Professional gutter installation, replacement, guards, and cleaning in Frisco, TX and across DFW. Free estimate. Call Hercules Roof Systems.",
};

const RELATED = SERVICES.filter((s) => ["residential", "exteriors", "storm-damage"].includes(s.id));

export default function GuttersPage() {
  return (
    <>
      <ServiceHero
        overline="Gutter Services"
        title="Gutters"
        subtitle="Complete Gutter Solutions for DFW Homes"
        description="Properly functioning gutters are your home's first line of defense against water damage. Hercules Roof Systems installs, replaces, and maintains all gutter systems with the same quality craftsmanship we bring to every project."
      />

      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="overline mb-4">What We Offer</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Full-Service Gutter Solutions
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-base leading-relaxed mb-6">
                Clogged or damaged gutters lead to foundation erosion, water intrusion, and structural damage. Our gutter specialists protect your home&apos;s foundation and siding with high-performance gutter systems built for Texas weather.
              </p>
              <ul className="space-y-2.5">
                {[
                  "New seamless gutter installation",
                  "Gutter replacement (all styles & sizes)",
                  "K-style & half-round gutters",
                  "Copper & aluminum gutter options",
                  "Gutter guard & cover installation",
                  "Professional gutter cleaning",
                  "Gutter tune-up & realignment",
                  "Fascia & soffit repair",
                  "Downspout installation & extension",
                  "Underground drainage solutions",
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

            <div className="space-y-4">
              <p className="overline mb-4">Why Gutters Matter</p>
              <h2 className="display-sm text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Protect Your Foundation
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              {[
                { title: "Foundation Protection", desc: "Properly directed water runoff prevents erosion and keeps water away from your foundation — one of the most expensive repairs a homeowner faces." },
                { title: "Siding & Fascia Protection", desc: "Without gutters, rainwater cascades down your walls and siding, causing rot, staining, and long-term structural deterioration." },
                { title: "Basement & Crawl Space", desc: "Directing water away from the foundation prevents basement flooding and moisture intrusion in crawl spaces." },
                { title: "Landscape Preservation", desc: "Controlled drainage protects your landscaping, prevents soil erosion, and keeps your yard draining properly after heavy Texas rains." },
              ].map((item) => (
                <div key={item.title} className="border border-white/6 p-5" style={{ backgroundColor: "#1E2832" }}>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceProcessSteps />

      <ProjectGallery
        title="Gutter Projects"
        projects={[
          { title: "Seamless Gutter Install", location: "Frisco, TX", type: "K-Style Aluminum" },
          { title: "Gutter Replacement", location: "Plano, TX", type: "Full Replacement" },
          { title: "Gutter Guard System", location: "Allen, TX", type: "Micro-Mesh Guards" },
          { title: "Copper Gutters", location: "Prosper, TX", type: "Custom Copper" },
          { title: "Gutter & Downspout", location: "McKinney, TX", type: "Full System" },
          { title: "Gutter Cleaning", location: "Flower Mound, TX", type: "Maintenance Service" },
        ]}
        showViewMore={false}
      />

      <section className="py-16" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="overline mb-3">Client Reviews</p>
            <h2 className="display-sm text-white" style={{ fontFamily: "var(--font-oswald)" }}>What Homeowners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[REVIEWS[3], REVIEWS[0], REVIEWS[4]].map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA title="Get Your Gutters Right" subtitle="Schedule a free gutter inspection with Hercules Roof Systems. We'll assess your current system and recommend the best solution to protect your home." />

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
