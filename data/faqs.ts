export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Do you offer free roof inspections?",
    answer:
      "Yes. We provide completely free, no-obligation roof inspections for both residential and commercial properties across the DFW area. Our certified inspectors will give you a detailed, honest assessment.",
    category: "General",
  },
  {
    question: "How quickly can you respond to storm damage?",
    answer:
      "We offer same-day emergency service for storm and wind damage. Our team is available 24/7 — just call (469) 444-8559 and we'll dispatch immediately.",
    category: "Emergency",
  },
  {
    question: "Do you help with insurance claims?",
    answer:
      "Absolutely. Our team has extensive experience working with insurance companies. We'll document the damage thoroughly, provide all necessary reports, and work directly with your adjuster to ensure you receive the coverage you deserve.",
    category: "Insurance",
  },
  {
    question: "What roofing materials do you work with?",
    answer:
      "We work with all major roofing systems including asphalt shingles, architectural and Class 4 shingles, metal roofing (standing seam, corrugated, and metal shingles), tile, slate, TPO, PVC, modified bitumen, and roof coatings. We are certified by leading materials manufacturers.",
    category: "Materials",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. We understand that a new roof is a significant investment. Hercules Roof Systems offers flexible financing options to make quality roofing accessible on your budget and timeline.",
    category: "Financing",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Hercules Roof Systems is fully licensed, bonded, and insured. We are BBB Accredited, NRCIA members, and certified by leading materials manufacturers. Your home and our crew are fully protected on every project.",
    category: "Credentials",
  },
  {
    question: "How long does a typical roof replacement take?",
    answer:
      "Most residential roof replacements are completed in 1–2 days. Commercial projects vary based on size and system type. We'll give you a precise timeline during your free inspection and estimate.",
    category: "Process",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve the entire DFW Metroplex including Frisco, Plano, Allen, McKinney, Prosper, Celina, Little Elm, Flower Mound, Lewisville, Carrollton, Richardson, Garland, Irving, Arlington, Fort Worth, Dallas, and all surrounding communities.",
    category: "Service Areas",
  },
];
