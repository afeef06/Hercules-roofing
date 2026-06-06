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
  title: "Exterior Contractor Frisco TX | Hercules Roof Systems",
  description:
    "Fencing, windows, siding, and exterior painting in Frisco TX and DFW. Premium exterior services by Hercules Roof Systems. Free estimate.",
};

const RELATED = SERVICES.filter((s) => ["residential", "gutters", "interior"].includes(s.id));

export default function ExteriorsPage() {
  return (
    <>
      <ServiceHero
        overline="Exterior Services"
        title="Exterior Services"
        subtitle="Protect & Beautify Your Entire Exterior"
        description="Beyond the roof, Hercules Roof Systems protects and enhances every aspect of your property's exterior — from custom fencing and window replacement to siding and professional painting."
      />

      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                title: "Fencing",
                items: ["Wood Privacy Fence", "Vinyl Fence", "Wrought Iron", "Chain-Link Fence", "Fence Repair & Staining"],
              },
              {
                title: "Windows",
                items: ["Window Installation", "Window Replacement", "Energy-Efficient Windows", "Window Repair & Sealing", "Storm Window Protection"],
              },
              {
                title: "Siding",
                items: ["Vinyl Siding", "Fiber Cement Siding", "Wood Siding", "Siding Repair", "Soffit & Fascia Work"],
              },
              {
                title: "Painting",
                items: ["Exterior House Painting", "Trim & Accent Details", "Pressure Washing", "Color Consultation", "Surface Prep & Priming"],
              },
            ].map((cat) => (
              <div key={cat.title} className="border border-white/6 p-5" style={{ backgroundColor: "#1E2832" }}>
                <h3 className="text-brand-crimson font-condensed font-bold text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/65 text-sm">
                      <Check className="w-3 h-3 text-brand-crimson shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-4">Full Exterior Protection</p>
            <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
              One Company. Complete Coverage.
            </h2>
            <div className="w-12 h-0.5 bg-brand-crimson mx-auto mb-5" />
            <p className="text-white/65 text-base leading-relaxed">
              Coordinating multiple contractors for exterior work is frustrating and inefficient. Hercules Roof Systems handles your entire exterior in one project — saving you time, money, and the headache of managing multiple vendors. Our certified crews bring the same standard of excellence to every service, from first board to final coat.
            </p>
          </div>
        </div>
      </section>

      <ServiceProcessSteps />

      <ProjectGallery
        title="Exterior Projects"
        projects={[
          { title: "Full Exterior Renovation", location: "Frisco, TX", type: "Siding + Paint" },
          { title: "Window Replacement", location: "Plano, TX", type: "Energy-Efficient Windows" },
          { title: "Privacy Fence Install", location: "Allen, TX", type: "Wood Privacy Fence" },
          { title: "Siding Installation", location: "Prosper, TX", type: "Fiber Cement Siding" },
          { title: "Exterior Painting", location: "McKinney, TX", type: "Full Exterior Paint" },
          { title: "Wrought Iron Fence", location: "Flower Mound, TX", type: "Custom Iron Work" },
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
            {[REVIEWS[0], REVIEWS[3], REVIEWS[2]].map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA title="Transform Your Exterior" subtitle="Get a free exterior services estimate from Hercules Roof Systems. We'll assess your property and recommend the best approach for every exterior need." />

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
