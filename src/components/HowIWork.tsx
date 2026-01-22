import React from 'react';

const HowIWork: React.FC = () => {
    const systems = [
        {
            title: "End-to-End Ownership",
            description: "I manage the entire lifecycle of a feature—from discovery and stakeholder alignment to deployment and post-launch monitoring.",
            bullets: [
                "Milestone and timeline management",
                "Stakeholder expectation setting",
                "Direct communication loops",
                "Risk identification and mitigation"
            ]
        },
        {
            title: "Design + Engineering",
            description: "I operate at the intersection of aesthetic precision and technical rigor, ensuring design intent is never lost in translation.",
            bullets: [
                "Atomic design system architecture",
                "Responsive and fluid implementation",
                "Performance-first UI engineering",
                "Interactive prototyping and validation"
            ]
        },
        {
            title: "Documentation Culture",
            description: "Clarity is a requirement, not an afterthought. I ensure every system is documented for longevity and ease of handoff.",
            bullets: [
                "Comprehensive READMEs and setup logs",
                "Design tokens and system governance",
                "API and internal logic documentation",
                "Video walkthroughs for stakeholders"
            ]
        },
        {
            title: "Clear Communication",
            description: "I prioritize structured, asynchronous-first communication to maintain momentum and ensure all parties are aligned.",
            bullets: [
                "Written status updates and briefs",
                "Disciplined feedback integration",
                "Collaborative problem solving",
                "Technical concepts for non-tech folks"
            ]
        }
    ];

    return (
        <section id="process" className="memo-container section-padding border-t border-border/40">
            <div className="mb-12">
                <span className="label">Standards / 04</span>
                <h2 className="text-3xl font-medium font-serif-italic">How I work.</h2>
                <p className="text-sm text-foreground/60 mt-2 max-w-sm">
                    Structured systems for precision and predictability.
                </p>
            </div>

            <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {systems.map((system, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-lg font-medium mb-3">{system.title}</h3>
                                <p className="text-sm text-foreground/70 leading-relaxed">
                                    {system.description}
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {system.bullets.map((bullet, i) => (
                                    <li key={i} className="text-sm text-foreground/60 flex items-start gap-3">
                                        <span className="text-muted/40 font-mono text-[10px] pt-1">—</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
