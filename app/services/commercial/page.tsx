import type { Metadata } from "next";
import { Check, ChevronRight } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceProcessSteps from "@/components/ServiceProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import BookingCTA from "@/components/BookingCTA";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import { REVIEWS } from "@/data/reviews";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Commercial Roofing Contractor DFW | Hercules Roof Systems",
  description:
    "Commercial roofing services across DFW — flat roofs, TPO/PVC, coatings, and maintenance programs. Free estimate. Hercules Roof Systems, Frisco TX.",
};

const RELATED = SERVICES.filter((s) => ["residential", "storm-damage", "interior"].includes(s.id));

export default function CommercialRoofingPage() {
  return (
    <>
      <ServiceHero
        overline="Commercial Roofing"
        title="Commercial Roofing"
        subtitle="Industrial-Grade Roofing for DFW Businesses"
        description="From single-story retail to multi-family complexes and warehouses — Hercules Roof Systems delivers commercial roofing built to protect your business assets, meet code requirements, and perform for decades."
      />

      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="overline mb-4">Commercial Services</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Built for Business Demands
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-base leading-relaxed mb-6">
                Commercial roofing requires specialized expertise, heavier-duty materials, and precision scheduling to minimize business disruption. Hercules Roof Systems brings 30 years of commercial experience to every project.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Low-slope & flat roof replacement",
                  "Multi-family roof replacement",
                  "TPO membrane installation",
                  "PVC membrane installation",
                  "Modified bitumen systems",
                  "Elastomeric, acrylic & silicone coatings",
                  "Infrared scan moisture inspection",
                  "Roof assessment & maintenance programs",
                  "Waterproofing systems",
                  "Sheet metal fabrication",
                  "Roof access hatch installation",
                  "HVAC curb flashing",
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
              <p className="overline mb-4">System Types</p>
              {[
                {
                  title: "TPO / PVC Membranes",
                  desc: "Single-ply thermoplastic membranes ideal for flat roofs. Energy-efficient, UV-resistant, and highly durable for commercial applications.",
                },
                {
                  title: "Modified Bitumen",
                  desc: "Two-ply system that offers exceptional waterproofing and impact resistance. Ideal for roofs with moderate foot traffic.",
                },
                {
                  title: "Roof Coatings",
                  desc: "Elastomeric, acrylic, and silicone coatings to restore and extend the life of existing commercial roofs at a fraction of replacement cost.",
                },
                {
                  title: "Infrared Scan Inspection",
                  desc: "Non-invasive thermal imaging to detect hidden moisture and energy loss — identifying problems before they become costly failures.",
                },
              ].map((sys) => (
                <div key={sys.title} className="border border-white/6 p-5 group hover:border-brand-crimson/30 transition-all" style={{ backgroundColor: "#1E2832" }}>
                  <div className="flex items-start gap-2 mb-2">
                    <ChevronRight className="w-4 h-4 text-brand-crimson shrink-0 mt-0.5" />
                    <h3 className="text-white font-semibold text-base">{sys.title}</h3>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed pl-6">{sys.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="overline mb-4">Our Commitment</p>
          <h2 className="display-sm text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
            Zero Business Disruption
          </h2>
          <div className="w-12 h-0.5 bg-brand-crimson mx-auto mb-5" />
          <p className="text-white/65 text-base leading-relaxed">
            We understand that a commercial roofing project means your building, tenants, and operations are affected. Hercules Roof Systems coordinates around your schedule, minimizes downtime, and completes projects on budget and on time — every time.
          </p>
        </div>
      </section>

      <ServiceProcessSteps />

      <ProjectGallery
        title="Commercial Roofing Projects"
        projects={[
          { title: "Retail Center Flat Roof", location: "Allen, TX", type: "TPO System" },
          { title: "Office Building Replacement", location: "Plano, TX", type: "Modified Bitumen" },
          { title: "Warehouse Roof Coating", location: "Frisco, TX", type: "Silicone Coating" },
          { title: "Multi-Family Complex", location: "McKinney, TX", type: "TPO / PVC" },
          { title: "Medical Office Roofing", location: "Richardson, TX", type: "Flat Roof" },
          { title: "Restaurant Roof Repair", location: "Garland, TX", type: "Emergency Repair" },
        ]}
        showViewMore={false}
      />

      <section className="py-16" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="overline mb-3">Client Reviews</p>
            <h2 className="display-sm text-white" style={{ fontFamily: "var(--font-oswald)" }}>
              Trusted by DFW Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[REVIEWS[2], REVIEWS[5], REVIEWS[3]].map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Protect Your Business Investment"
        subtitle="Schedule a free commercial roof assessment with Hercules Roof Systems. We provide detailed reports, transparent pricing, and zero-pressure recommendations tailored to your property."
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
