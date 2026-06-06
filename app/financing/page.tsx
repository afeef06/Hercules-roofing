import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, Check, ArrowRight, Star, Shield } from "lucide-react";
import BookingCTA from "@/components/BookingCTA";
import { ROUTES } from "@/data/business";

export const metadata: Metadata = {
  title: "Roofing Financing Options | Hercules Roof Systems",
  description:
    "Flexible roofing financing options in Frisco, TX. Don't let budget delay your roof. Hercules Roof Systems offers affordable payment plans. Apply today.",
};

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1E2832 60%, #0A0A0A 100%)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(196,30,58,0.08), transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <p className="overline mb-4">Flexible Plans</p>
          <h1 className="display-xl text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
            Financing <span style={{ color: "#C41E3A" }}>Options</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mb-8">
            Don&apos;t let budget hold back your roof. Hercules Roof Systems offers flexible financing options to make sure your home or business gets the protection it needs — on your terms.
          </p>
          <Link href={ROUTES.contact} className="btn-primary px-8 py-4 text-base">
            <DollarSign className="w-5 h-5" />
            Apply for Financing
          </Link>
        </div>
      </section>

      {/* Why Financing */}
      <section className="py-20" style={{ backgroundColor: "#0F0F0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: DollarSign,
                title: "Protect Your Investment",
                desc: "Delaying a necessary roof repair or replacement leads to significantly higher costs from structural damage, water intrusion, and mold. Financing lets you protect your home now.",
              },
              {
                icon: Shield,
                title: "Manageable Payments",
                desc: "Break a major expense into affordable monthly payments that fit your budget — without sacrificing the quality of materials or workmanship.",
              },
              {
                icon: Star,
                title: "Fast Approval",
                desc: "Our streamlined financing application process is simple and fast. Get a decision quickly so your project can move forward without delay.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-white/6 p-7" style={{ backgroundColor: "#1E2832" }}>
                <div className="w-12 h-12 bg-brand-crimson/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-crimson" />
                </div>
                <h3 className="text-white font-display font-bold text-xl uppercase mb-3" style={{ fontFamily: "var(--font-oswald)" }}>
                  {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Financing details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="overline mb-4">What&apos;s Available</p>
              <h2 className="display-md text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                Financing Plans Overview
              </h2>
              <div className="w-12 h-0.5 bg-brand-crimson mb-5" />
              <p className="text-white/65 text-base leading-relaxed mb-6">
                Hercules Roof Systems partners with reputable financing providers to offer a range of options for residential and commercial property owners. Our team will help you find the plan that works best for your situation.
              </p>
              <ul className="space-y-3">
                {[
                  "Low and 0% interest options (subject to qualification)",
                  "Flexible loan terms from 12–120 months",
                  "Coverage for residential and commercial projects",
                  "Available for roofing, gutters, exterior, and interior services",
                  "Simple one-page application",
                  "Decisions within 24–48 hours",
                  "No prepayment penalties",
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
              <p className="overline mb-4">The Process</p>
              <h2 className="display-sm text-white mb-5" style={{ fontFamily: "var(--font-oswald)" }}>
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Get Your Free Inspection", desc: "We assess your project and provide a detailed estimate so you know exactly what you need." },
                  { step: "02", title: "Choose Your Plan", desc: "Our team presents available financing options. We help you select the plan that fits your budget." },
                  { step: "03", title: "Apply in Minutes", desc: "Complete a simple application. Most customers receive decisions within 24–48 hours." },
                  { step: "04", title: "We Get to Work", desc: "Once approved, we schedule your project and deliver the same Hercules-quality craftsmanship — regardless of how you pay." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-5 border border-white/6" style={{ backgroundColor: "#1E2832" }}>
                    <span className="text-brand-crimson font-display font-bold text-3xl shrink-0 leading-none mt-1" style={{ fontFamily: "var(--font-oswald)" }}>
                      {step}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 border border-brand-crimson/25" style={{ backgroundColor: "rgba(196,30,58,0.05)" }}>
                <p className="text-white/65 text-sm leading-relaxed">
                  <strong className="text-white">Ready to apply?</strong> Contact us for a free roof inspection and we&apos;ll walk you through all available financing options at no obligation.
                </p>
                <Link href={ROUTES.contact} className="inline-flex items-center gap-2 mt-3 text-brand-crimson font-condensed font-bold text-sm tracking-wider uppercase hover:text-brand-fire transition-colors" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  Schedule Free Inspection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA
        title="Don't Let Budget Delay Your Roof"
        subtitle="Ask about our flexible financing options when you schedule your free inspection. We'll find a plan that works for your budget and gets your roof the protection it deserves."
      />
    </>
  );
}
