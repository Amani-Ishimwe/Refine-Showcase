import React from 'react';

const Services: React.FC = () => {
  const packages = [
    {
      title: "Foundation",
      subtitle: "Clarity First",
      price: "$400",
      outcome: "A clear, validated product direction with reduced risk.",
      items: [
        "Product understanding & clarity session",
        "Problem definition & goal alignment",
        "Technical feasibility review",
        "High-level project roadmap"
      ]
    },
    {
      title: "Design & Experience",
      subtitle: "Design with Purpose",
      price: "$1,000",
      outcome: "A usable, scalable, and professional product design system.",
      featured: false,
      items: [
        "User flows & information architecture",
        "High-fidelity UI/UX design",
        "Responsive layouts",
        "Design documentation for scaling"
      ]
    },
    {
      title: "Build",
      subtitle: "Design to Reality",
      price: "$2,500",
      outcome: "A functional, deployable product ready for real users.",
      items: [
        "Frontend & backend development",
        "Clean, production-ready code",
        "API integration & core logic",
        "Deployment setup & tech docs"
      ]
    },
    {
      title: "End-to-End",
      subtitle: "Idea to Impact",
      price: "$5,000",
      outcome: "A complete, well-designed, well-built product with long-term clarity.",
      featured: true,
      items: [
        "Product strategy & planning",
        "Full UI/UX + Development",
        "Project mgmt & milestone tracking",
        "Launch preparation & support"
      ]
    },
    {
      title: "Documentation",
      subtitle: "System Clarity",
      price: "$700",
      outcome: "A product that is easy to understand, maintain, and scale.",
      items: [
        "Codebase & system review",
        "Architecture & system flows",
        "API documentation",
        "Design rationale & usage notes"
      ]
    },
    {
      title: "Advisory",
      subtitle: "Professional Presence",
      price: "$400 /mo",
      outcome: "Better decisions, fewer mistakes, consistent progress.",
      items: [
        "Product & technical advisory",
        "Design & code reviews",
        "Planning & prioritization support",
        "Clear written feedback"
      ]
    }
  ];

  return (
    <section id="services" className="container-custom section-padding">
      <div className="mb-20">
        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">04 / Services</span>
        <h2 className="text-3xl font-medium">Outcome-based packages.</h2>
        <p className="text-muted mt-4 text-sm">* Prices are flexible based on scope and timeline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`p-8 border ${pkg.featured ? 'border-accent bg-accent/5' : 'border-border'} flex flex-col`}
          >
            <div className="mb-8">
              <h3 className="font-mono text-xs uppercase text-accent mb-2">{pkg.subtitle}</h3>
              <h4 className="text-xl font-medium mb-2">{pkg.title} <span className="text-xs font-normal text-muted ml-2">{pkg.price}</span></h4>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {pkg.items.map((item, i) => (
                <li key={i} className="text-xs text-muted flex items-center gap-3 italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-border/40 space-y-6 mt-auto">
              <div>
                <p className="text-[10px] uppercase font-mono text-muted mb-2 tracking-wider">Outcome</p>
                <p className="text-sm font-medium">{pkg.outcome}</p>
              </div>
              <button
                title="Book Clarity Call"
                className="w-full py-3 hover:bg-accent hover:text-white transition-all duration-300 border border-border/40 text-[10px] font-mono uppercase tracking-widest"
              >
                Book Call
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm">Every project starts with a short <span className="font-medium underline underline-offset-4 cursor-pointer hover:text-accent">clarity call</span>.</p>
      </div>
    </section>
  );
};

export default Services;
