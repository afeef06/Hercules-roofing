import Link from "next/link";
import { Phone, ClipboardCheck, ChevronRight } from "lucide-react";
import { BUSINESS, ROUTES } from "@/data/business";

interface ServiceHeroProps {
  overline?: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceHero({ overline, title, subtitle, description }: ServiceHeroProps) {
  return (
    <section
      className="relative min-h-[55vh] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1A1E28 60%, #0A0A0A 100%)" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(196,30,58,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(30,40,50,0.6) 0%, transparent 70%)" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "linear-gradient(180deg, transparent, #C41E3A 30%, #C41E3A 70%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 mb-8 text-white/35 text-xs" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/55">{title}</span>
        </nav>

        <div className="max-w-3xl">
          {overline && (
            <p className="overline mb-4">{overline}</p>
          )}
          <h1
            className="display-xl text-white mb-4"
            style={{ fontFamily: "var(--font-oswald)", lineHeight: 1.0 }}
          >
            {title}
          </h1>
          <p className="text-brand-crimson font-condensed font-semibold text-lg mb-6" style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.03em" }}>
            {subtitle}
          </p>
          <p className="text-white/65 text-base max-w-2xl leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={ROUTES.contact} className="btn-primary px-7 py-3.5">
              <ClipboardCheck className="w-4 h-4" />
              Get Free Inspection
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-secondary px-7 py-3.5">
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
