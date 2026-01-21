import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Data would ideally come from a central store/file
    const projects: Record<string, any> = {
        "flowops": {
            title: "FlowOps: Intelligent Resource Management",
            problem: "Enterprise teams struggled with visibility into engineering bandwidth, leading to burnout and missed deadlines.",
            constraints: "12 weeks to launch MVP. Integration with legacy Jira instances. Minimal impact on developer workflow.",
            role: "Lead Product Engineer (Design + Frontend Architecture)",
            process: "Conducted stakeholder interviews → Iterative Figma prototyping → React/TS development with custom scheduling engine → Full system documentation for internal handoff.",
            outcome: "Reduced resource planning time by 40% across three test divisions. Successfully migrated to production with 100% test coverage.",
            lesson: "In a data-heavy tool, information hierarchy is more important than visual flair. Clarity is the ultimate feature.",
            image: "/flowops_dashboard_mockup.png"
        },
        "nexus": {
            title: "Nexus Design System for FinTech",
            problem: "Inconsistent UI across 14 internal tools leading to significant technical debt and design-to-code friction.",
            constraints: "Must support multiple frameworks (React, Vue). Strict accessibility requirements (WCAG 2.1 AA).",
            role: "Product Designer & DS Lead",
            process: "Audited existing patterns → Defined core design tokens → Built headless component library → Authored comprehensive documentation site for engineering teams.",
            outcome: "Released v1 documentation. Reduced frontend development time by 30% for new internal tools.",
            lesson: "A design system is a living product. Success is measured by adoption, not by the number of components.",
            image: "/nexus_design_system_mockup.png"
        }
    };

    const project = id ? projects[id] : null;

    if (!project) return <div>Project not found</div>;

    return (
        <Layout>
            <div className="container-custom pt-32 pb-24">
                <Link to="/" className="font-mono text-[10px] uppercase text-accent mb-8 inline-block hover:underline">← Back to Overview</Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-12">
                        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">{project.title}</h1>

                        <div className="aspect-[16/9] bg-muted/20 border border-border/40">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>

                        <section className="space-y-6">
                            <h2 className="font-mono text-[10px] uppercase text-accent tracking-widest">Process & Execution</h2>
                            <p className="text-lg leading-relaxed font-light">{project.process}</p>
                        </section>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        <div className="p-8 border border-border/40 space-y-8">
                            <div>
                                <h4 className="font-mono text-[10px] uppercase text-muted mb-2 tracking-widest">Role</h4>
                                <p className="text-sm font-medium">{project.role}</p>
                            </div>
                            <div>
                                <h4 className="font-mono text-[10px] uppercase text-muted mb-2 tracking-widest">Constraints</h4>
                                <p className="text-sm leading-relaxed">{project.constraints}</p>
                            </div>
                            <div>
                                <h4 className="font-mono text-[10px] uppercase text-muted mb-2 tracking-widest">Outcome</h4>
                                <p className="text-sm font-medium leading-relaxed">{project.outcome}</p>
                            </div>
                        </div>

                        <div className="p-8 bg-accent/5 border-l border-accent">
                            <h4 className="font-mono text-[10px] uppercase text-accent mb-3 tracking-widest">Core Insight</h4>
                            <p className="text-sm italic italic leading-relaxed">"{project.lesson}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectDetails;
