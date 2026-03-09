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
                <Link to="/" className="label hover:text-fg transition-colors mb-12 inline-block">← Back to Registry</Link>
                <div className="text-sm text-muted">Memorandum not found in registry.</div>
            </div>
        </Layout>
    );

    return (
        <Layout>
            <article className="memo-container pt-32 pb-24">
                <Link to="/" className="label hover:text-fg transition-colors mb-12 inline-block">← Back to Registry</Link>

                <header className="mb-20">
                    <div className="border-b border-border pb-6 mb-10">
                        <h1 className="text-2xl md:text-3xl font-medium mb-2">{project.title}</h1>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">{project.role} — {project.year}</span>
                    </div>
                </header>

                <div className="space-y-20">
                    <div className="aspect-video bg-surface border border-border grayscale opacity-90 rounded-2xl overflow-hidden shadow-sm">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        <div className="flex flex-col gap-10">
                            <div>
                                <span className="label">The Problem</span>
                                <p className="text-sm md:text-base text-muted leading-relaxed font-light">
                                    {project.problem}
                                </p>
                            </div>
                            <div>
                                <span className="label">Technical Constraints</span>
                                <ul className="space-y-2">
                                    {project.constraints.map((constraint, i) => (
                                        <li key={i} className="text-sm text-muted flex gap-3 font-light">
                                            <span className="text-border">•</span>
                                            {constraint}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <div>
                                <span className="label">Process / Execution</span>
                                <div className="space-y-6">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-muted leading-relaxed font-light">
                                            <span className="text-fg font-medium">Design:</span> {project.process.design}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-muted leading-relaxed font-light">
                                            <span className="text-fg font-medium">Development:</span> {project.process.development}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface p-8 rounded-2xl border border-border">
                        <span className="label">Outcome / Metrics</span>
                        <p className="text-sm md:text-base font-medium text-fg leading-relaxed">
                            {project.outcome}
                        </p>
                    </div>

                    <div className="pt-12 border-t border-border text-center">
                        <span className="label">Structural Lesson</span>
                        <p className="text-sm italic text-muted max-w-sm mx-auto leading-relaxed font-light">
                            "{project.lesson}"
                        </p>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default ProjectDetails;
