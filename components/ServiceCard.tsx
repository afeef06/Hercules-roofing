import Link from "next/link";
import { ArrowRight, Home, Building2, CloudLightning, Droplets, Layers, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  Building2,
  CloudLightning,
  Droplets,
  Layers,
  Waves,
};

interface ServiceCardProps {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  href: string;
  icon: string;
}

export default function ServiceCard({ id, name, shortDescription, description, href, icon }: ServiceCardProps) {
  const Icon = ICON_MAP[icon] || Home;

  return (
    <Link
      href={href}
      className="group relative flex flex-col bg-brand-steel border border-white/6 p-6 overflow-hidden transition-all duration-300 hover:border-brand-crimson/30 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-brand-crimson"
      style={{ backgroundColor: "#1E2832" }}
      aria-label={`Learn more about ${name}`}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-crimson/0 to-brand-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-brand-crimson group-hover:w-full transition-all duration-500" />

      {/* Icon */}
      <div className="relative w-12 h-12 bg-brand-crimson/15 border border-brand-crimson/25 flex items-center justify-center mb-5 group-hover:bg-brand-crimson/25 transition-colors duration-300">
        <Icon className="w-5.5 h-5.5 text-brand-crimson" aria-hidden="true" style={{ width: "1.375rem", height: "1.375rem" }} />
      </div>

      {/* Content */}
      <div className="relative flex-1">
        <p className="text-brand-crimson font-condensed font-semibold text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
          {shortDescription}
        </p>
        <h3
          className="text-white font-display font-bold text-xl uppercase mb-3 group-hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.03em" }}
        >
          {name}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5">
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="relative flex items-center gap-2 text-brand-crimson font-condensed font-bold text-sm tracking-wider uppercase group-hover:gap-3 transition-all duration-200" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
        Learn More
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </div>
    </Link>
  );
}
