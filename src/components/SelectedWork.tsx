import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const SelectedWork: React.FC = () => {
    return (
        <section id="work" className="memo-container section-padding border-t border-border">
            <div className="mb-20">
                <span className="label">Index / Selected</span>
                <h2 className="max-w-md">
                    Building systems that <span className="font-serif italic text-muted">endure</span>.
                </h2>
            </div>

            <div className="space-y-32">
                {PROJECTS.map((project) => (
                    <article key={project.id} className="group">
                        <div className="flex flex-col gap-10">
                            {/* Header Info */}
                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{project.role} — {project.year}</span>
                                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface border border-border shadow-sm">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Concise Content */}
                            <div className="max-w-lg space-y-6 pl-4 border-l border-border">
                                <p className="italic text-base text-muted font-light leading-relaxed">
                                    "{project.problem}"
                                </p>
                                <Link
                                    to={`/project/${project.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex text-[11px] font-semibold uppercase tracking-widest hover:translate-x-1 transition-transform"
                                >
                                    View Full Case Study →
                                </Link>

                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SelectedWork;
