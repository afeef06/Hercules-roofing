import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone, ClipboardCheck, Star, MapPin, Clock, Shield, Check, ChevronRight,
  ArrowRight, Zap, Award, Users, DollarSign
} from "lucide-react";
import { BUSINESS, ROUTES } from "@/data/business";
import { SERVICES } from "@/data/services";
import { REVIEWS } from "@/data/reviews";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import TrustBadges from "@/components/TrustBadges";
import QuoteForm from "@/components/QuoteForm";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Roofing Contractor in Frisco, TX`,
  description:
    "Family-owned roofing contractor serving DFW for 30 years. Residential & commercial roofing, storm damage repair, gutters, and exterior services. Free inspections. Call (469) 444-8559.",
};

const FEATURED_CITIES = SERVICE_AREAS.filter((a) => a.featured).map((a) => a.city);

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO SECTION
          UPDATE: Replace hero-placeholder with real background image
          ============================================================ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0A0A0A 0%, #131B24 40%, #0D1520 70%, #0A0A0A 100%)" }}
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          {/* UPDATE: Replace with real hero roofing project photo */}
          {/* <Image src="/images/hero-bg.jpg" alt="Hercules Roof Systems — DFW roofing project" fill className="object-cover opacity-25" priority /> */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(196,30,58,0.12) 0%, transparent 60%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 80%, rgba(30,40,50,0.8) 0%, transparent 60%)" }} />

          {/* Geometric grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Left vertical accent bar */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1" style={{ background: "linear-gradient(180deg, transparent, #C41E3A, transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Main content */}
            <div>
              {/* Overline tag */}
              <div className="inline-flex items-center gap-2.5 mb-6">
                <div className="w-8 h-px bg-brand-crimson" />
                <span className="overline">Frisco, TX — Est. 1995</span>
              </div>

              {/* Main headline */}
              <h1
                className="text-white mb-4 leading-none"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  fontSize: "clamp(3.2rem, 7vw, 6rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  lineHeight: 0.95,
                }}
              >
                Frisco&apos;s{" "}
                <span style={{ color: "#C41E3A" }}>Trusted</span>
                <br />
                Roofing
                <br />
                Experts
              </h1>

              <p
                className="text-brand-crimson font-condensed font-semibold text-lg sm:text-xl mb-5"
                style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.04em" }}
              >
                30 Years of Strength, Precision, and Reliability Across the DFW.
              </p>

              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
                Family-owned and Texas-born, Hercules Roof Systems delivers premium residential and commercial
                roofing, storm damage repair, and full exterior services — built to last, backed by decades of experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href={ROUTES.contact} className="btn-primary px-8 py-4 text-base justify-center">
                  <ClipboardCheck className="w-5 h-5" />
                  Get Your Free Inspection
                </Link>
                <Link href="#services" className="btn-secondary px-8 py-4 text-base justify-center">
                  View Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust signals row */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/60 text-xs">5.0 — {BUSINESS.reviewCount} Reviews</span>
                </div>
                <div className="w-px h-4 bg-white/15 self-center" />
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-brand-crimson" />
                  <span className="text-white/60 text-xs">{BUSINESS.yearsInBusiness} Years in Business</span>
                </div>
                <div className="w-px h-4 bg-white/15 self-center" />
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-brand-crimson" />
                  <span className="text-white/60 text-xs">Family Owned</span>
                </div>
              </div>
            </div>

            {/* Right: Info panel */}
            <div className="lg:pl-8">
              <div className="border border-white/8 bg-white/3 backdrop-blur-sm p-6 sm:p-8" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                {/* Stat grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "30+", label: "Years Serving DFW" },
                    { value: "5.0★", label: "Google Rating" },
                    { value: "24/7", label: "Emergency Service" },
                    { value: "Free", label: "Inspections" },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center p-4 border border-white/6" style={{ backgroundColor: "rgba(30,40,50,0.5)" }}>
                      <p
                        className="text-white font-display font-bold text-3xl mb-1"
                        style={{ fontFamily: "var(--font-oswald)", color: "#C41E3A" }}
                      >
                        {value}
                      </p>
                      <p className="text-white/50 text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.12em" }}>
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact info */}
                <div className="space-y-3">
                  <a href={BUSINESS.phoneHref} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-brand-crimson/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-brand-crimson" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm group-hover:text-brand-crimson transition-colors">{BUSINESS.phone}</p>
                      <p className="text-white/40 text-xs">Available 24/7 for emergencies</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-white/40" />
                    </div>
                    <div>
                      <p className="text-white/75 text-sm">{BUSINESS.address.full}</p>
                      <p className="text-white/40 text-xs">Serving all of DFW</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-white/40" />
                    </div>
                    <div>
                      <p className="text-white/75 text-sm">Open 24/7 for emergencies</p>
                      <p className="text-white/40 text-xs">Office: Mon–Fri 8am–6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-crimson to-transparent" style={{ background: "none" }} />
      </section>

      {/* ============================================================
          TRUST BADGES
          ============================================================ */}
      <TrustBadges />

      {/* ============================================================
          SERVICES OVERVIEW
          ============================================================ */}
      <section id="services" className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="overline mb-4">What We Do</p>
            <h2 className="display-lg text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              Complete Roofing &amp;{" "}
              <span style={{ color: "#C41E3A" }}>Exterior Solutions</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto text-base">
              From full roof replacements to interior water damage restoration — Hercules handles every inch of your property with certified craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href={ROUTES.contact} className="btn-primary px-8 py-4">
              <ClipboardCheck className="w-4 h-4" />
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY HERCULES SECTION
          ============================================================ */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#161616" }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5" style={{ background: "radial-gradient(ellipse at right, #C41E3A, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="overline mb-4">Our Difference</p>
              <h2 className="display-lg text-white mb-6" style={{ fontFamily: "var(--font-oswald)" }}>
                The Hercules{" "}
                <span style={{ color: "#C41E3A" }}>Difference</span>
              </h2>
              <div className="w-14 h-0.5 bg-brand-crimson mb-6" />
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Being family-owned and locally operated enables us to provide the highest level of service and products
                to the communities we serve. With the strength of Hercules behind every project, our professionalism,
                quality, and reliability are why families and companies choose us — then refer us to friends and neighbors.
              </p>

              {/* Value points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "30 Years of DFW Experience",
                  "Family-Owned & Texas-Born",
                  "Certified & Licensed Technicians",
                  "Premium Materials & Manufacturers",
                  "Free Roof Inspections",
                  "Same-Day Emergency Service",
                  "Financing Available",
                  "Full Residential & Commercial Coverage",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-brand-crimson/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-crimson" />
                    </div>
                    <span className="text-white/75 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href={ROUTES.about} className="btn-outline-red px-6 py-3">
                  About Hercules
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Stats column */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, value: "30+", label: "Years of Excellence", sub: "Est. 1995 in Frisco, TX" },
                { icon: Star, value: "5.0", label: "Google Rating", sub: `${BUSINESS.reviewCount} verified reviews` },
                { icon: Zap, value: "24/7", label: "Emergency Response", sub: "Same-day service" },
                { icon: DollarSign, value: "Free", label: "Roof Inspections", sub: "No pressure, no obligation" },
              ].map(({ icon: Icon, value, label, sub }) => (
                <div key={label} className="border border-white/6 p-6 flex flex-col gap-3 group hover:border-brand-crimson/30 transition-all duration-300" style={{ backgroundColor: "#1E2832" }}>
                  <Icon className="w-6 h-6 text-brand-crimson" />
                  <div>
                    <p className="text-white font-display font-bold text-4xl" style={{ fontFamily: "var(--font-oswald)" }}>{value}</p>
                    <p className="text-white/80 font-semibold text-sm mt-1">{label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RESIDENTIAL vs COMMERCIAL SPLIT
          ============================================================ */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Residential */}
          <div
            className="relative p-12 lg:p-16 xl:p-20 overflow-hidden group"
            style={{ background: "linear-gradient(135deg, #0D1520 0%, #131B24 100%)" }}
          >
            {/* UPDATE: Replace with real residential roofing photo */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at top left, #C41E3A, transparent 60%)" }} />
            <div className="relative">
              <p className="overline mb-4">Since 1995</p>
              <h2 className="display-md text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
                Protecting DFW Homes
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Decades of residential roofing expertise across the DFW Metroplex. Every home deserves certified craftsmanship and materials built for Texas weather.
              </p>
              <ul className="space-y-2.5 mb-8">
                {["Asphalt Shingles", "Architectural Shingles", "Class 4 Shingles", "Metal Roofing", "Tile and Slate"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-crimson shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={ROUTES.residential} className="btn-primary px-7 py-3.5">
                Residential Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Commercial */}
          <div
            className="relative p-12 lg:p-16 xl:p-20 overflow-hidden group"
            style={{ background: "linear-gradient(135deg, #C41E3A 0%, #7a0000 100%)" }}
          >
            {/* UPDATE: Replace with real commercial roofing photo */}
            <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at bottom right, rgba(0,0,0,0.6), transparent 60%)" }} />
            <div className="relative">
              <p className="font-condensed font-semibold text-[10px] tracking-[0.2em] uppercase text-white/60 mb-4" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                Business Class
              </p>
              <h2 className="display-md text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
                Built for Business.
                <br />Built to Last.
              </h2>
              <div className="w-12 h-0.5 bg-white/40 mb-5" />
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Industrial-grade commercial roofing solutions for businesses, retail centers, multi-family properties, and warehouses across DFW.
              </p>
              <ul className="space-y-2.5 mb-8">
                {["Flat Roof Replacement", "TPO / PVC", "Modified Bitumen", "Roof Coatings", "Infrared Inspection"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <ChevronRight className="w-3.5 h-3.5 text-white/60 shrink-0" />
                    <span className="text-white/75 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={ROUTES.commercial} className="btn-secondary px-7 py-3.5">
                Commercial Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STORM DAMAGE SECTION
          ============================================================ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0A0A0A 0%, #1a1a1a 100%)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(196,30,58,0.06) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="overline mb-4">Emergency Response</p>
              <h2 className="display-lg text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
                Storm Hit Your Roof?{" "}
                <span style={{ color: "#C41E3A" }}>We Respond Fast.</span>
              </h2>
              <div className="w-14 h-0.5 bg-brand-crimson mb-6" />
              <p className="text-white/65 text-base leading-relaxed mb-8">
                DFW storms are unpredictable. Hercules Roof Systems offers same-day emergency roof repair, insurance
                claim support, and full storm damage restoration — so you&apos;re never left waiting when it matters most.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Zap, text: "Same-day emergency response" },
                  { icon: Shield, text: "Insurance claim assistance" },
                  { icon: Award, text: "Storm & wind damage specialists" },
                  { icon: ClipboardCheck, text: "Free damage inspection" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-2.5 p-3 border border-white/6" style={{ backgroundColor: "#161616" }}>
                    <Icon className="w-4 h-4 text-brand-crimson mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={ROUTES.stormDamage} className="btn-primary px-7 py-3.5">
                  <Zap className="w-4 h-4" />
                  Get Emergency Help
                </Link>
                <a href={BUSINESS.phoneHref} className="btn-secondary px-7 py-3.5">
                  <Phone className="w-4 h-4" />
                  Call 24/7
                </a>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative">
              {/* UPDATE: Replace with real storm damage photo */}
              <div className="aspect-square max-w-md mx-auto border border-brand-crimson/20" style={{ background: "linear-gradient(135deg, #1a1a1a, #1E2832)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-brand-crimson/15 border border-brand-crimson/30 flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-10 h-10 text-brand-crimson" />
                    </div>
                    <p className="text-white/30 font-condensed font-semibold text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                      Storm Damage Specialists
                    </p>
                    {/* UPDATE: Replace above placeholder with real storm damage project photo */}
                  </div>
                </div>
              </div>

              {/* Callout badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand-crimson p-4 max-w-xs">
                <p className="text-white font-display font-bold text-lg uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
                  Same-Day Response
                </p>
                <p className="text-white/75 text-sm">24/7 emergency service across DFW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROJECT GALLERY
          ============================================================ */}
      <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
            <div>
              <p className="overline mb-3">Portfolio</p>
              <h2 className="display-md text-white" style={{ fontFamily: "var(--font-oswald)" }}>
                Our Work Speaks{" "}
                <span style={{ color: "#C41E3A" }}>for Itself</span>
              </h2>
            </div>
            <Link href={ROUTES.contact} className="btn-outline-red text-sm shrink-0">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Residential Roof Replacement", location: "Frisco, TX", type: "Architectural Shingles" },
              { title: "Storm Damage Repair", location: "Plano, TX", type: "Emergency Repair" },
              { title: "Commercial Flat Roof", location: "Allen, TX", type: "TPO System" },
              { title: "Gutter Installation", location: "McKinney, TX", type: "Seamless Gutters" },
              { title: "Exterior Renovation", location: "Prosper, TX", type: "Siding & Windows" },
              { title: "Metal Roofing Install", location: "Frisco, TX", type: "Standing Seam" },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden aspect-video cursor-pointer"
                style={{ backgroundColor: i % 2 === 0 ? "#1E2832" : "#161E2A" }}
              >
                {/* UPDATE: Replace this div with <Image src={`/images/projects/project-${i+1}.jpg`} ... /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/10 font-display text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-oswald)" }}>
                    {project.type}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <p className="text-brand-crimson font-condensed font-semibold text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                    {project.type}
                  </p>
                  <h3 className="text-white font-display font-bold text-base uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
                    {project.title}
                  </h3>
                  <p className="text-white/55 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="overline mb-4">Testimonials</p>
            <h2 className="display-md text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/75 font-semibold">{BUSINESS.rating} stars</span>
              <span className="text-white/40">—</span>
              <span className="text-white/55 text-sm">{BUSINESS.reviewCount} Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center">
            <a
              href={BUSINESS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-red px-8 py-3"
            >
              Read More Reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINANCING PREVIEW
          ============================================================ */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1E2832 0%, #0d1520 100%)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(196,30,58,0.08), transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="overline mb-4">Financing</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Flexible Financing Options Available
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Don&apos;t let budget hold back your roof. Hercules Roof Systems offers flexible financing options to
                make sure your home or business gets the protection it needs — on your terms.
              </p>
              <Link href={ROUTES.financing} className="btn-primary px-7 py-3.5">
                <DollarSign className="w-4 h-4" />
                Explore Financing Options
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "0%", label: "Interest Options", sub: "Subject to approval" },
                { value: "Fast", label: "Approval Process", sub: "Simple application" },
                { value: "Flexible", label: "Payment Plans", sub: "Built for your budget" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="text-center border border-white/8 p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <p className="text-brand-crimson font-display font-bold text-3xl mb-1" style={{ fontFamily: "var(--font-oswald)" }}>{value}</p>
                  <p className="text-white/75 font-semibold text-sm">{label}</p>
                  <p className="text-white/35 text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FREE INSPECTION FORM
          ============================================================ */}
      <section id="inspection" className="py-20" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Copy */}
            <div className="lg:col-span-2">
              <p className="overline mb-4">No Pressure. No Obligation.</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Start With a Free Roof Inspection
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Not sure what condition your roof is in? Our certified inspectors will assess your roof at no cost
                and give you an honest, detailed report. No pressure. No obligation.
              </p>

              {/* Checklist */}
              <div className="space-y-3">
                {[
                  "Certified inspection team",
                  "Detailed written report",
                  "Insurance claim support",
                  "Response within 1 business hour",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-brand-crimson/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-crimson" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact direct */}
              <div className="mt-8 p-4 border border-white/8" style={{ backgroundColor: "rgba(30,40,50,0.5)" }}>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-barlow-condensed)" }}>Prefer to call?</p>
                <a href={BUSINESS.phoneHref} className="text-brand-crimson font-display font-bold text-2xl hover:text-brand-fire transition-colors" style={{ fontFamily: "var(--font-oswald)" }}>
                  {BUSINESS.phone}
                </a>
                <p className="text-white/40 text-xs mt-1">Available 24/7 for emergencies</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 border border-white/8 p-6 sm:p-8" style={{ backgroundColor: "rgba(30,40,50,0.3)" }}>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE AREAS PREVIEW
          ============================================================ */}
      <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="overline mb-4">Coverage</p>
            <h2 className="display-md text-white mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              Proudly Serving the{" "}
              <span style={{ color: "#C41E3A" }}>DFW Area</span>
            </h2>
            <p className="text-white/55 max-w-xl mx-auto">
              From Frisco to Fort Worth, Allen to Arlington — Hercules Roof Systems has protected DFW homes and businesses for 30 years.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {FEATURED_CITIES.map((city) => (
              <span
                key={city}
                className="px-4 py-2 border border-white/8 text-white/60 text-sm font-medium hover:border-brand-crimson/40 hover:text-white transition-all duration-200 cursor-default"
                style={{ backgroundColor: "rgba(30,40,50,0.4)" }}
              >
                {city}
              </span>
            ))}
            <span
              className="px-4 py-2 border border-white/8 text-white/35 text-sm"
              style={{ backgroundColor: "rgba(30,40,50,0.4)" }}
            >
              + Surrounding Areas
            </span>
          </div>

          <div className="text-center">
            <Link href={ROUTES.serviceAreas} className="btn-outline-red px-7 py-3">
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <BookingCTA />
    </>
  );
}
