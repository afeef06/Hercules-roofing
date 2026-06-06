export interface ServiceArea {
  city: string;
  county: string;
  featured?: boolean;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { city: "Frisco", county: "Collin", featured: true },
  { city: "Plano", county: "Collin", featured: true },
  { city: "Allen", county: "Collin", featured: true },
  { city: "McKinney", county: "Collin", featured: true },
  { city: "Prosper", county: "Collin", featured: true },
  { city: "Celina", county: "Collin" },
  { city: "Little Elm", county: "Denton", featured: true },
  { city: "The Colony", county: "Denton" },
  { city: "Lewisville", county: "Denton" },
  { city: "Flower Mound", county: "Denton", featured: true },
  { city: "Carrollton", county: "Denton" },
  { city: "Richardson", county: "Dallas", featured: true },
  { city: "Garland", county: "Dallas" },
  { city: "Mesquite", county: "Dallas" },
  { city: "Irving", county: "Dallas" },
  { city: "Arlington", county: "Tarrant", featured: true },
  { city: "Fort Worth", county: "Tarrant", featured: true },
  { city: "Dallas", county: "Dallas", featured: true },
  { city: "Addison", county: "Dallas" },
  { city: "Grapevine", county: "Tarrant" },
  { city: "Southlake", county: "Tarrant" },
  { city: "Keller", county: "Tarrant" },
  { city: "Colleyville", county: "Tarrant" },
  { city: "Mansfield", county: "Tarrant" },
  { city: "Grand Prairie", county: "Dallas" },
  { city: "Denton", county: "Denton" },
  { city: "Wylie", county: "Collin" },
  { city: "Murphy", county: "Collin" },
  { city: "Sachse", county: "Collin" },
  { city: "Rowlett", county: "Dallas" },
  { city: "Rockwall", county: "Rockwall" },
  { city: "Royse City", county: "Rockwall" },
  { city: "Forney", county: "Kaufman" },
  { city: "Fate", county: "Rockwall" },
  { city: "Anna", county: "Collin" },
  { city: "Van Alstyne", county: "Grayson" },
];
