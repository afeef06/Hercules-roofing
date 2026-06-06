export interface Review {
  id: number;
  name: string;
  title?: string;
  text: string;
  rating: number;
  service?: string;
  source: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    title: "Real Estate Professional",
    text: "You have done 40-plus roofs for me and my clients and I have never had one person who is less than 100% satisfied with the quality and professionalism of Hercules Roof Systems.",
    rating: 5,
    service: "Residential Roofing",
    source: "Google",
  },
  {
    id: 2,
    name: "Michael R.",
    title: "",
    text: "We had significant storm damage at our home. I was referred to Hercules Roof Systems and couldn't be happier with the results. True Hercules strength and quality.",
    rating: 5,
    service: "Storm Damage",
    source: "Google",
  },
  {
    id: 3,
    name: "David & Linda K.",
    title: "",
    text: "In an industry with an unfortunate checkered reputation for integrity, Hercules Roof Systems stands apart with their legendary reliability and professional excellence.",
    rating: 5,
    service: "Residential Roofing",
    source: "Google",
  },
  {
    id: 4,
    name: "Jennifer T.",
    title: "",
    text: "Great communication, work was done in a timely manner, five stars from us! The crew was professional and left our property spotless.",
    rating: 5,
    service: "Residential Roofing",
    source: "Google",
  },
  {
    id: 5,
    name: "Robert A.",
    title: "",
    text: "Quality work, clean job, great service. Hercules came out the same day after our roof was damaged in a hail storm. Could not be happier.",
    rating: 5,
    service: "Storm Damage",
    source: "Google",
  },
  {
    id: 6,
    name: "Patricia N.",
    title: "",
    text: "They are so responsive and have the best pricing in town. When we needed our commercial building's roof replaced, Hercules delivered on time and on budget.",
    rating: 5,
    service: "Commercial Roofing",
    source: "Google",
  },
];
