"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, Shield } from "lucide-react";
import { BUSINESS, ROUTES } from "@/data/business";

const SERVICE_LINKS = [
  { label: "Residential Roofing", href: ROUTES.residential },
  { label: "Commercial Roofing", href: ROUTES.commercial },
  { label: "Storm Damage", href: ROUTES.stormDamage },
  { label: "Gutters", href: ROUTES.gutters },
  { label: "Exteriors", href: ROUTES.exteriors },
  { label: "Interior Services", href: ROUTES.interior },
];

const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Financing", href: ROUTES.financing },
  { label: "Service Areas", href: ROUTES.serviceAreas },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-brand-black/97 backdrop-blur-md shadow-2xl py-3"
            : "bg-gradient-to-b from-brand-black/90 to-transparent py-5"
        }`}
        style={{ backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.85)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Hercules Roof Systems Home">
              <div className="flex items-center justify-center w-9 h-9 bg-brand-crimson group-hover:bg-brand-fire transition-colors">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div
                  className="text-white font-display font-bold text-lg leading-none tracking-wide"
                  style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}
                >
                  HERCULES
                </div>
                <div
                  className="text-brand-crimson font-condensed font-semibold text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  ROOF SYSTEMS
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href={ROUTES.home}
                className={`px-3 py-2 text-sm font-condensed font-semibold tracking-wide uppercase transition-colors ${
                  isActive(ROUTES.home) && pathname === "/"
                    ? "text-brand-crimson"
                    : "text-white/85 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.1em", fontSize: "0.8rem" }}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-condensed font-semibold tracking-wide uppercase transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-brand-crimson"
                      : "text-white/85 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.1em", fontSize: "0.8rem" }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 pt-2 w-56"
                    onMouseLeave={() => setServicesOpen(false)}
                    role="menu"
                  >
                    <div className="bg-brand-steel border border-white/8 shadow-2xl py-2">
                      {SERVICE_LINKS.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                            isActive(link.href)
                              ? "text-brand-crimson bg-white/5"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          }`}
                          role="menuitem"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {NAV_LINKS.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-condensed font-semibold tracking-wide uppercase transition-colors ${
                    isActive(link.href)
                      ? "text-brand-crimson"
                      : "text-white/85 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.1em", fontSize: "0.8rem" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={BUSINESS.phoneHref}
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-brand-crimson" />
                <span className="font-condensed font-semibold" style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "0.85rem" }}>
                  {BUSINESS.phone}
                </span>
              </Link>
              <Link href={ROUTES.contact} className="btn-primary text-sm px-5 py-2.5">
                Free Inspection
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-brand-black/97 pt-20 overflow-y-auto"
          style={{ backgroundColor: "rgba(10,10,10,0.97)" }}
        >
          <div className="px-6 py-6 space-y-1">
            <Link href={ROUTES.home} className="block py-3 text-white font-display text-xl uppercase tracking-wider border-b border-white/8">Home</Link>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 text-white font-display text-xl uppercase tracking-wider border-b border-white/8"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 py-2 space-y-1">
                  {SERVICE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2.5 text-white/70 hover:text-white font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-white font-display text-xl uppercase tracking-wider border-b border-white/8"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-6 space-y-3">
              <Link href={ROUTES.contact} className="btn-primary w-full justify-center text-base py-4">
                Get Free Inspection
              </Link>
              <Link href={BUSINESS.phoneHref} className="btn-secondary w-full justify-center text-base py-4">
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
