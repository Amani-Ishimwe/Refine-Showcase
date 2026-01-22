import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const SelectedWork: React.FC = () => {
    return (
        <section id="work" className="memo-container section-padding">
            <div className="mb-12">
                <span className="label">Index / 02</span>
                <h2 className="text-3xl font-medium font-serif-italic">Selected Work</h2>
                <p className="text-sm text-foreground/60 mt-2 max-w-sm">
                    A selection of projects focusing on structural design and technical execution.
                </p>
            </div>

            <div className="space-y-24">
                {PROJECTS.map((project) => (
                    <article key={project.id} className="flex flex-col gap-10 group">
                        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/60 pb-6 gap-4">
                            <div>
                                <h3 className="text-2xl font-medium">{project.title}</h3>
                                <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mt-2">{project.role} — {project.year}</span>
                            </div>
                            <Link
                                to={`/project/${project.id}`}
                                className="text-[10px] font-mono uppercase tracking-[0.25em] underline underline-offset-8 decoration-border/60 hover:decoration-foreground transition-all shrink-0"
                            >
                                View Case Study
                            </Link>
                        </div>

                        <div className="flex flex-col gap-12">
                            <div className="aspect-[21/9] bg-muted/5 overflow-hidden border border-border/40 grayscale hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100 rounded-sm">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-12">
                                    <div className="flex flex-col gap-6">
                                        <p className="text-base text-foreground/80 leading-relaxed font-normal max-w-2xl">
                                            {project.problem}
                                        </p>
                                        <p className="text-sm font-medium text-foreground/90 border-l-2 border-accent/20 pl-6 py-1">
                                            {project.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SelectedWork;
