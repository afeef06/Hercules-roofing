import Link from "next/link";
import { Phone, MapPin, Globe, Shield, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { BUSINESS, ROUTES } from "@/data/business";

const SERVICE_LINKS = [
  { label: "Residential Roofing", href: ROUTES.residential },
  { label: "Commercial Roofing", href: ROUTES.commercial },
  { label: "Storm Damage", href: ROUTES.stormDamage },
  { label: "Gutters", href: ROUTES.gutters },
  { label: "Exteriors", href: ROUTES.exteriors },
  { label: "Interior Services", href: ROUTES.interior },
];

const COMPANY_LINKS = [
  { label: "About Us", href: ROUTES.about },
  { label: "Financing", href: ROUTES.financing },
  { label: "Service Areas", href: ROUTES.serviceAreas },
  { label: "Contact", href: ROUTES.contact },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/6" style={{ backgroundColor: "#111111" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-crimson">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-display font-bold text-xl leading-none tracking-wide" style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}>
                  HERCULES
                </div>
                <div className="text-brand-crimson font-condensed font-semibold text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  ROOF SYSTEMS
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              {BUSINESS.taglineLong}
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 text-white/70 hover:text-brand-crimson transition-colors group">
                <Phone className="w-4 h-4 text-brand-crimson shrink-0" />
                <span className="text-sm font-medium">{BUSINESS.phone}</span>
              </a>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-crimson shrink-0 mt-0.5" />
                <span className="text-sm">{BUSINESS.address.full}</span>
              </a>
              <a
                href={BUSINESS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-brand-crimson shrink-0" />
                <span className="text-sm">herculesdfw.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: BUSINESS.social.facebook, label: "Facebook" },
                { icon: Instagram, href: BUSINESS.social.instagram, label: "Instagram" },
                { icon: Twitter, href: BUSINESS.social.twitter, label: "Twitter" },
                { icon: Youtube, href: BUSINESS.social.youtube, label: "YouTube" },
                { icon: Linkedin, href: BUSINESS.social.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 border border-white/12 text-white/50 hover:border-brand-crimson hover:text-brand-crimson transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-condensed font-bold text-xs tracking-[0.2em] uppercase mb-5 pb-3 border-b border-white/8" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-condensed font-bold text-xs tracking-[0.2em] uppercase mb-5 pb-3 border-b border-white/8" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Column */}
          <div>
            <h3 className="text-white font-condensed font-bold text-xs tracking-[0.2em] uppercase mb-5 pb-3 border-b border-white/8" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              24/7 Emergency
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Storm damage or roof emergency? We respond fast, day or night.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="btn-primary w-full justify-center text-sm py-3"
              aria-label="Call for 24/7 emergency roof repair"
            >
              <Phone className="w-4 h-4" />
              Call Now 24/7
            </a>
            <div className="mt-4 p-3 border border-brand-crimson/25 bg-brand-crimson/5">
              <p className="text-brand-crimson font-condensed font-semibold text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                Same-Day Service
              </p>
              <p className="text-white/60 text-xs">Emergency response available across the entire DFW Metroplex.</p>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                Accreditations
              </p>
              <div className="flex flex-wrap gap-2">
                {["BBB", "NRCIA", "Licensed", "Insured"].map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-1 border border-white/12 text-white/50 text-xs font-condensed font-semibold tracking-wider"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              {/* UPDATE: Replace text badges above with real certification images */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/6 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. |{" "}
            <span className="text-white/25">9201 Warren Pkwy #200, Frisco, TX 75035</span>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
