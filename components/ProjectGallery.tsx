import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/data/business";

interface Project {
  title: string;
  location: string;
  type: string;
  bgColor?: string;
}

const DEFAULT_PROJECTS: Project[] = [
  { title: "Residential Roof Replacement", location: "Frisco, TX", type: "Architectural Shingles" },
  { title: "Storm Damage Repair", location: "Plano, TX", type: "Emergency Repair" },
  { title: "Commercial Flat Roof", location: "Allen, TX", type: "TPO System" },
  { title: "Gutter Installation", location: "McKinney, TX", type: "Seamless Gutters" },
  { title: "Exterior Renovation", location: "Prosper, TX", type: "Siding + Windows" },
  { title: "Metal Roofing Install", location: "Frisco, TX", type: "Standing Seam" },
];

// UPDATE: Replace project-placeholder divs with actual <Image /> components
// pointing to real project photos in /public/images/projects/

export default function ProjectGallery({
  projects = DEFAULT_PROJECTS,
  showViewMore = true,
  title = "Our Work Speaks for Itself",
}: {
  projects?: Project[];
  showViewMore?: boolean;
  title?: string;
}) {
  return (
    <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div>
            <p className="overline mb-3">Portfolio</p>
            <h2 className="display-md text-white" style={{ fontFamily: "var(--font-oswald)" }}>
              {title}
            </h2>
          </div>
          {showViewMore && (
            <Link
              href={ROUTES.contact}
              className="btn-outline-red text-sm shrink-0"
            >
              View More Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden aspect-video bg-brand-steel cursor-pointer"
              style={{ backgroundColor: i % 2 === 0 ? "#1E2832" : "#161E2A" }}
            >
              {/* Placeholder — replace with real project image */}
              {/* <Image src={`/images/projects/project-${i+1}.jpg`} alt={project.title} fill className="object-cover" /> */}
              <div className="absolute inset-0 project-placeholder flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-white/20 font-display text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-oswald)" }}>
                    {project.type}
                  </p>
                  {/* UPDATE: Replace this placeholder div with an actual project photo */}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                <p className="text-brand-crimson font-condensed font-semibold text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  {project.type}
                </p>
                <h3 className="text-white font-display font-bold text-lg uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
