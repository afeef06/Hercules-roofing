import type { Metadata } from "next";
import { Check, Shield, Award, Users, Heart } from "lucide-react";
import BookingCTA from "@/components/BookingCTA";
import ReviewCard from "@/components/ReviewCard";
import { REVIEWS } from "@/data/reviews";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "About Hercules Roof Systems | Frisco, TX Roofing Contractor",
  description:
    "Family-owned and Texas-born since 1995. Learn about Hercules Roof Systems — 30 years of roofing excellence in DFW. BBB Accredited. NRCIA Member.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #131B24 50%, #0A0A0A 100%)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(196,30,58,0.08), transparent 60%)" }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <p className="overline mb-4">Our Story</p>
          <h1 className="display-xl text-white mb-5" style={{ fontFamily: "var(--font-oswald)", lineHeight: 0.95 }}>
            About <span style={{ color: "#C41E3A" }}>Hercules</span>
            <br />Roof Systems
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            Family-owned and Texas-born since 1995. Thirty years of strength, integrity, and certified craftsmanship — serving DFW homes and businesses with the pride of a family business and the capability of an industry leader.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="overline mb-4">Est. 1995</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                30 Years of{" "}
                <span style={{ color: "#C41E3A" }}>Proven Excellence</span>
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-6" />
              <div className="space-y-4 text-white/65 text-base leading-relaxed">
                <p>
                  Hercules Roof Systems was founded in 1995 in Frisco, Texas — a small family business with one clear purpose: provide homeowners and businesses across the DFW area with roofing services built on honesty, craftsmanship, and lasting quality.
                </p>
                <p>
                  Three decades later, that purpose hasn&apos;t changed. We&apos;ve grown our team, expanded our services, and earned the trust of thousands of DFW families and businesses — but we remain the same family-owned company, personally invested in every project we touch.
                </p>
                <p>
                  Being locally operated means your neighbors are our neighbors. When Hercules works on your roof, we bring the accountability and care that only comes from a family business — not a national franchise.
                </p>
              </div>
            </div>

            <div>
              {/* UPDATE: Replace with real team/crew photo */}
              <div
                className="aspect-video border border-white/8 flex items-center justify-center mb-6"
                style={{ backgroundColor: "#1E2832" }}
              >
                <div className="text-center p-8">
                  <Users className="w-12 h-12 text-white/15 mx-auto mb-3" />
                  <p className="text-white/20 font-condensed font-semibold text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                    Team Photo Placeholder
                  </p>
                  <p className="text-white/15 text-xs mt-1">Replace with real crew/team photo</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "30+", label: "Years in DFW" },
                  { value: "5.0★", label: "Google Rating" },
                  { value: "24/7", label: "Emergency" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center border border-white/6 p-5" style={{ backgroundColor: "#1E2832" }}>
                    <p className="text-brand-crimson font-display font-bold text-3xl mb-1" style={{ fontFamily: "var(--font-oswald)" }}>{value}</p>
                    <p className="text-white/50 text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.12em" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Guarantee */}
      <section className="py-16" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="border border-white/6 p-8" style={{ backgroundColor: "#1E2832" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-crimson/15 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-brand-crimson" />
                </div>
                <h3 className="text-brand-crimson font-condensed font-bold text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  Our Mission
                </h3>
              </div>
              <h2 className="display-sm text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
                Built on Trust. Driven by Excellence.
              </h2>
              <p className="text-white/65 text-base leading-relaxed">
                Our mission is to deliver roofing and exterior services of the highest quality to every client we serve — with honesty, professionalism, and the genuine care that comes from being a family business rooted in the DFW community.
              </p>
            </div>

            {/* Hercules Guarantee */}
            <div className="border border-brand-crimson/30 p-8 relative" style={{ backgroundColor: "rgba(196,30,58,0.05)" }}>
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #C41E3A, transparent)" }} />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-crimson flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-brand-crimson font-condensed font-bold text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  The Hercules Guarantee
                </h3>
              </div>
              <h2 className="display-sm text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
                Our Promise to Every Client
              </h2>
              <p className="text-white/75 text-base leading-relaxed italic">
                &ldquo;Being family-owned and locally operated enables us to provide the highest level of service and products to the communities we serve. With the strength of Hercules behind every project, our professionalism, quality, and reliability are why families and companies choose us — then refer us to friends and neighbors.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="overline mb-4">Credentials</p>
            <h2 className="display-md text-white" style={{ fontFamily: "var(--font-oswald)" }}>
              Certified. Accredited. Trusted.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Award,
                title: "BBB Accredited",
                desc: "Hercules Roof Systems is accredited by the Better Business Bureau, demonstrating our commitment to ethical business practices.",
              },
              {
                icon: Shield,
                title: "NRCIA Member",
                desc: "As a member of the National Roof Certification and Inspection Association, we meet rigorous industry standards.",
              },
              {
                icon: Check,
                title: "Manufacturer Certified",
                desc: "Certified by leading materials manufacturers, allowing us to offer extended manufacturer warranties on qualifying projects.",
              },
              {
                icon: Users,
                title: "Licensed & Insured",
                desc: "Fully licensed, bonded, and insured in Texas. Your home and our crew are fully protected on every project.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-white/6 p-6 text-center" style={{ backgroundColor: "#161616" }}>
                <div className="w-14 h-14 bg-brand-crimson/15 border border-brand-crimson/25 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-brand-crimson" />
                </div>
                <h3 className="text-white font-display font-bold text-lg uppercase mb-2" style={{ fontFamily: "var(--font-oswald)" }}>
                  {title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                {/* UPDATE: Add real certification badge images above the title */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="overline mb-4">Community</p>
          <h2 className="display-sm text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
            Deep Roots in the DFW Community
          </h2>
          <div className="w-12 h-0.5 bg-brand-crimson mx-auto mb-5" />
          <p className="text-white/65 text-base leading-relaxed">
            Hercules Roof Systems isn&apos;t just a contractor — we&apos;re neighbors. We live, work, and raise our families in the same DFW communities we serve. That&apos;s why we give back through local sponsorships, community events, and our commitment to supporting the neighborhoods that have trusted us for 30 years.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="overline mb-3">What Clients Say</p>
            <h2 className="display-sm text-white" style={{ fontFamily: "var(--font-oswald)" }}>The Reputation We&apos;ve Earned</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Work With a Team You Can Trust"
        subtitle="30 years. Thousands of roofs. One family-owned company that puts your home first. Get your free inspection from Hercules Roof Systems today."
      />
    </>
  );
}
