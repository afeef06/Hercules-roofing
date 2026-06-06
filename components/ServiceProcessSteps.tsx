import { Search, FileText, Hammer, CheckSquare } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Free Inspection",
    description: "Our certified inspector visits your property at no cost and performs a thorough assessment of your roof's condition.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Detailed Estimate",
    description: "We provide a clear, itemized estimate with no hidden fees. We walk you through every line item and answer all questions.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Professional Installation",
    description: "Our certified crew arrives on schedule, uses premium materials, and completes the work with precision and care.",
  },
  {
    number: "04",
    icon: CheckSquare,
    title: "Final Walkthrough & Guarantee",
    description: "We walk the completed project with you, ensure your full satisfaction, and provide our Hercules Guarantee in writing.",
  },
];

export default function ServiceProcessSteps() {
  return (
    <section className="py-20" style={{ backgroundColor: "#161616" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="overline mb-4">How It Works</p>
          <h2 className="display-md text-white" style={{ fontFamily: "var(--font-oswald)" }}>
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-transparent via-brand-crimson/40 to-transparent" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 bg-brand-steel border-2 border-white/8 flex items-center justify-center relative z-10" style={{ backgroundColor: "#1E2832" }}>
                    <Icon className="w-7 h-7 text-brand-crimson" aria-hidden="true" />
                  </div>
                  <span
                    className="absolute -top-3 -right-3 text-brand-crimson/20 font-display font-bold text-4xl select-none"
                    style={{ fontFamily: "var(--font-oswald)", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-white font-display font-bold text-lg uppercase mb-3"
                  style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
