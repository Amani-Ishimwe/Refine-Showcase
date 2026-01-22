import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { PROJECTS } from '../constants';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = PROJECTS.find(p => p.id === id);

    if (!project) return (
        <Layout>
            <div className="memo-container pt-32 pb-24">
                <Link to="/" className="label hover:text-foreground transition-colors mb-12 inline-block">← Back to Registry</Link>
                <div className="text-sm text-foreground/60">Memorandum not found in registry.</div>
            </div>
        </Layout>
    );

    return (
        <Layout>
            <article className="memo-container pt-32 pb-24">
                <Link to="/" className="label hover:text-foreground transition-colors mb-12 inline-block">← Back to Registry</Link>

                <header className="mb-20">
                    <div className="flex justify-between items-end border-b border-border/60 pb-6 mb-10">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-medium mb-2">{project.title}</h1>
                            <span className="text-[10px] font-mono text-muted uppercase tracking-wider">{project.role}</span>
                        </div>
                        <span className="font-mono text-[10px] text-muted/40 uppercase tracking-widest">— {project.year}</span>
                    </div>
                </header>

                <div className="space-y-24">
                    <div className="aspect-[21/9] bg-muted/5 border border-border/40 grayscale opacity-90 rounded-sm overflow-hidden">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        <div className="flex flex-col gap-12">
                            <div>
                                <span className="label">The Problem</span>
                                <p className="text-sm text-foreground/80 leading-relaxed font-normal">
                                    {project.problem}
                                </p>
                            </div>
                            <div>
                                <span className="label">Technical Constraints</span>
                                <ul className="space-y-3">
                                    {project.constraints.map((constraint, i) => (
                                        <li key={i} className="text-sm text-foreground/70 flex gap-4">
                                            <span className="text-muted/30 font-mono text-[10px] pt-1">-</span>
                                            {constraint}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-12">
                            <div>
                                <span className="label">Process / Execution</span>
                                <div className="space-y-8">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] uppercase font-mono text-muted tracking-widest">[ DESIGN PHASE ]</span>
                                        <p className="text-sm text-foreground/70 leading-relaxed">{project.process.design}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] uppercase font-mono text-muted tracking-widest">[ DEVELOPMENT ]</span>
                                        <p className="text-sm text-foreground/70 leading-relaxed">{project.process.development}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] uppercase font-mono text-muted tracking-widest">[ DOCUMENTATION ]</span>
                                        <p className="text-sm text-foreground/70 leading-relaxed">{project.process.documentation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/5 p-10 border-l-2 border-accent/20">
                        <span className="label">Outcome / Metrics</span>
                        <p className="text-sm font-medium text-foreground/90 leading-relaxed">
                            {project.outcome}
                        </p>
                    </div>

                    <div className="pt-12 border-t border-border/40 text-center">
                        <span className="label">Structural Lesson</span>
                        <p className="text-sm italic text-muted max-w-sm mx-auto leading-relaxed">
                            "{project.lesson}"
                        </p>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default ProjectDetails;
