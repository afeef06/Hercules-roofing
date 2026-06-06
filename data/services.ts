import { ROUTES } from "./business";

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  href: string;
  icon: string;
  items: string[];
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: Service[] = [
  {
    id: "residential",
    name: "Residential Roofing",
    shortDescription: "Protecting DFW homes for 30 years",
    description:
      "From asphalt shingles to standing seam metal, we install and replace every roof type with precision and pride. Your home deserves the best.",
    href: ROUTES.residential,
    icon: "Home",
    items: [
      "Asphalt & Composite Shingles",
      "Architectural Shingles",
      "Class 4 Impact-Resistant Shingles",
      "Tile & Slate Roofing",
      "Corrugated Metal Roof",
      "Standing Seam Panel",
      "Metal Shingles",
      "Full Roof Replacement",
    ],
    heroSubheadline: "Premium Roofing for Every DFW Home",
    metaTitle: "Residential Roofing Frisco TX | Hercules Roof Systems",
    metaDescription:
      "Expert residential roofing in Frisco, TX. Shingles, metal roofing, tile, and full roof replacement. Free inspection. Call Hercules Roof Systems at (469) 444-8559.",
  },
  {
    id: "commercial",
    name: "Commercial Roofing",
    shortDescription: "Dependable solutions for businesses of all sizes",
    description:
      "Built for the demands of commercial properties. We protect your business assets with industrial-grade materials and certified installation.",
    href: ROUTES.commercial,
    icon: "Building2",
    items: [
      "Low-Slope / Flat Roof Replacement",
      "Multi-Family Roof Replacement",
      "TPO / PVC Membranes",
      "Modified Bitumen Systems",
      "Elastomeric, Acrylic & Silicone Coatings",
      "Infrared Scan Inspection",
      "Roof Assessment & Maintenance Programs",
      "Waterproofing & Sheet Metal Fabrication",
    ],
    heroSubheadline: "Industrial-Grade Roofing for DFW Businesses",
    metaTitle: "Commercial Roofing Contractor DFW | Hercules Roof Systems",
    metaDescription:
      "Commercial roofing services across DFW — flat roofs, TPO/PVC, coatings, and maintenance programs. Free estimate. Hercules Roof Systems, Frisco TX.",
  },
  {
    id: "storm-damage",
    name: "Storm Damage Repair",
    shortDescription: "Same-day emergency response, insurance claim support",
    description:
      "DFW weather is unforgiving. When storms strike, Hercules responds fast — same-day emergency repair, full damage documentation, and insurance claim support.",
    href: ROUTES.stormDamage,
    icon: "CloudLightning",
    items: [
      "Free Storm Damage Inspection",
      "Same-Day Emergency Roof Repair",
      "Hail & Wind Damage Repair",
      "Insurance Claim Documentation",
      "Insurance Claim Assistance",
      "Full Storm Damage Restoration",
      "Emergency Tarping & Board-Up",
      "Leak Detection & Repair",
    ],
    heroSubheadline: "Fast Response When Storms Strike DFW",
    metaTitle: "Storm Damage Roof Repair Frisco TX | Hercules Roof Systems",
    metaDescription:
      "Same-day storm and wind damage roof repair in DFW. Insurance claim support available. Free inspection. Call Hercules Roof Systems 24/7 at (469) 444-8559.",
  },
  {
    id: "gutters",
    name: "Gutters",
    shortDescription: "Installation, replacement, guards, and cleaning",
    description:
      "Properly functioning gutters are your home's first line of defense against water damage. We install, replace, and maintain all gutter systems.",
    href: ROUTES.gutters,
    icon: "Droplets",
    items: [
      "New Gutter Installation",
      "Gutter Replacement",
      "Seamless Gutter Systems",
      "Gutter Guards & Covers",
      "Gutter Cleaning",
      "Gutter Tune-Ups & Realignment",
      "Fascia & Soffit Repair",
      "Downspout Installation",
    ],
    heroSubheadline: "Complete Gutter Solutions for DFW Homes",
    metaTitle: "Gutter Installation & Repair Frisco TX | Hercules Roof Systems",
    metaDescription:
      "Professional gutter installation, replacement, guards, and cleaning in Frisco, TX and across DFW. Free estimate. Call Hercules Roof Systems.",
  },
  {
    id: "exteriors",
    name: "Exterior Services",
    shortDescription: "Fencing, windows, siding, and painting",
    description:
      "Complete exterior solutions beyond the roof. We protect and beautify every inch of your property's exterior with certified craftsmanship.",
    href: ROUTES.exteriors,
    icon: "Layers",
    items: [
      "Fence Installation & Repair",
      "Window Installation & Replacement",
      "Window Repair & Sealing",
      "Siding Installation & Repair",
      "Exterior Painting",
      "Soffit & Fascia Work",
      "Trim & Accent Details",
      "Storm Board-Up Services",
    ],
    heroSubheadline: "Protect & Beautify Your Entire Exterior",
    metaTitle: "Exterior Contractor Frisco TX | Hercules Roof Systems",
    metaDescription:
      "Fencing, windows, siding, and exterior painting in Frisco TX and DFW. Premium exterior services by Hercules Roof Systems. Free estimate.",
  },
  {
    id: "interior",
    name: "Interior Services",
    shortDescription: "Water damage, remediation, and restoration",
    description:
      "Roof damage often leads to interior water damage. We handle the full scope — from inspection and remediation to ceiling, wall, and floor restoration.",
    href: ROUTES.interior,
    icon: "Waves",
    items: [
      "Water Damage Inspection",
      "Water Remediation & Extraction",
      "Mold Prevention Treatment",
      "Ceiling Repair & Replacement",
      "Drywall Repair",
      "Wall Repair & Restoration",
      "Flooring Replacement",
      "Interior Painting",
    ],
    heroSubheadline: "Full Interior Restoration After Water Damage",
    metaTitle: "Water Damage Repair Frisco TX | Hercules Roof Systems",
    metaDescription:
      "Interior water damage inspection, remediation, and restoration in DFW. Ceiling, wall, and floor repair by Hercules Roof Systems. Free inspection.",
  },
];
