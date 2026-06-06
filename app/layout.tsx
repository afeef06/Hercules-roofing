import type { Metadata } from "next";
import { Oswald, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { BUSINESS } from "@/data/business";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | Roofing Contractor in Frisco, TX`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Family-owned roofing contractor serving DFW for 30 years. Residential & commercial roofing, storm damage repair, gutters, and exterior services. Free inspections. Call (469) 444-8559.",
  keywords: [
    "roofing contractor Frisco TX",
    "roof replacement DFW",
    "storm damage repair",
    "residential roofing",
    "commercial roofing",
    "gutters DFW",
    "Hercules Roof Systems",
  ],
  openGraph: {
    title: `${BUSINESS.name} | Roofing Contractor in Frisco, TX`,
    description:
      "Family-owned roofing contractor serving DFW for 30 years. Free inspections. Call (469) 444-8559.",
    type: "website",
    locale: "en_US",
    url: BUSINESS.website,
    siteName: BUSINESS.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// LocalBusiness schema markup for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: BUSINESS.name,
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.1581,
    longitude: -96.8225,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  foundingDate: BUSINESS.foundedYear.toString(),
  description: `Family-owned roofing contractor serving DFW for ${BUSINESS.yearsInBusiness} years.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        <EmergencyBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
