import React from 'react';
import { Link } from 'react-router-dom';

const SelectedWork: React.FC = () => {
    const projects = [
        {
            title: "FlowOps: Intelligent Resource Management",
            problem: "Enterprise teams struggled with visibility into engineering bandwidth, leading to burnout and missed deadlines.",
            constraints: "12 weeks to launch MVP. Integration with legacy Jira instances. Minimal impact on developer workflow.",
            role: "Lead Product Engineer (Design + Frontend Architecture)",
            process: "Conducted stakeholder interviews → Iterative Figma prototyping → React/TS development with custom scheduling engine → Full system documentation for internal handoff.",
            outcome: "Reduced resource planning time by 40% across three test divisions. Successfully migrated to production with 100% test coverage.",
            lesson: "In a data-heavy tool, information hierarchy is more important than visual flair. Clarity is the ultimate feature."
        },
        {
            title: "Nexus Design System for FinTech",
            problem: "Inconsistent UI across 14 internal tools leading to significant technical debt and design-to-code friction.",
            constraints: "Must support multiple frameworks (React, Vue). Strict accessibility requirements (WCAG 2.1 AA).",
            role: "Product Designer & DS Lead",
            process: "Audited existing patterns → Defined core design tokens → Built headless component library → Authored comprehensive documentation site for engineering teams.",
            outcome: "Released v1 documentation. Reduced frontend development time by 30% for new internal tools.",
            lesson: "A design system is a living product. Success is measured by adoption, not by the number of components."
        }
    ];

    return (
        <section id="work" className="container-custom section-padding">
            <div className="mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">01 / Selected Work</span>
                <h2 className="text-3xl font-medium">Focused on thinking and execution.</h2>
            </div>

            <div className="space-y-48">
                {projects.map((project, idx) => {
                    const id = idx === 0 ? "flowops" : "nexus";
                    return (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 border-l border-border pl-8 lg:pl-0 lg:border-l-0 relative`}>
                            {/* Image Column */}
                            <div className="lg:w-5/12">
                                <div className="aspect-[3/2] bg-muted/20 overflow-hidden border border-border/40">
                                    <img
                                        src={idx === 0 ? "/flowops_dashboard_mockup.png" : "/nexus_design_system_mockup.png"}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>

                            {/* Text Column */}
                            <div className="lg:w-7/12 space-y-8 flex flex-col justify-center">
                                <div>
                                    <span className="font-mono text-[10px] uppercase text-accent mb-4 block tracking-[0.2em]">Project 0{idx + 1}</span>
                                    <h3 className="text-3xl font-medium mb-6 leading-tight">{project.title}</h3>
                                    <div className="flex gap-8 text-sm">
                                        <div>
                                            <h4 className="font-mono text-[10px] uppercase text-muted mb-2 tracking-wider">Role</h4>
                                            <p className="font-medium">{project.role}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-mono text-[10px] uppercase text-muted mb-3 italic tracking-wide">Problem Statement</h4>
                                    <p className="text-lg leading-relaxed text-subtle">{project.problem}</p>
                                </div>

                                <div className="pt-8">
                                    <Link
                                        to={`/project/${id}`}
                                        className="px-10 py-4 bg-foreground text-background text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300 inline-block"
                                    >
                                        View Outcome
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SelectedWork;
