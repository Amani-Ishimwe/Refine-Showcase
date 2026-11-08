import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectFilterCategory } from '../types';
import ProjectVisual from './ProjectVisual';

const FILTER_CATEGORIES: ProjectFilterCategory[] = [
  'All',
  'Product Design',
  'UI/UX Design',
  'Software Engineering',
  'Full-Stack Development',
  'SaaS Products',
  'Experiments and Concepts',
];

interface SelectedWorkProps {
  showHeaderLink?: boolean;
}

const SelectedWork: React.FC<SelectedWorkProps> = ({ showHeaderLink = true }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectFilterCategory>('All');

  const filteredProjects = PROJECTS.filter(
    (project) =>
      activeCategory === 'All' || project.filterCategories.includes(activeCategory)
  );

  return (
    <section id="work" className="section-padding">
      <div className="editorial-container space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="label">01 · Selected Work</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-fg">
              Systems built to endure.
            </h2>
          </div>

          {showHeaderLink && (
            <Link to="/work" className="skeuo-btn-secondary self-start sm:self-auto">
              <span>All Projects</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Filter Pills (Navigation Button Height) */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {FILTER_CATEGORIES.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer shrink-0 ${
                  active ? 'skeuo-btn' : 'skeuo-btn-secondary text-muted'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Equal-Height 2-Column Cards Grid with Image Thumbnails & Logo Upload Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((project) => {
            const caseStudyUrl = `/project/${encodeURIComponent(project.id)}`;
            return (
              <article
                key={project.id}
                className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <Link to={caseStudyUrl} className="block">
                    <ProjectVisual
                      id={project.id}
                      imageUrl={project.imageUrl}
                      title={project.title}
                      category={project.category}
                      schematicType={project.schematicType}
                      status={project.status}
                    />
                  </Link>

                  <div className="flex items-center justify-between gap-2 text-[11px] text-muted font-bold">
                    <span className="truncate">{project.role} · {project.year}</span>
                    <span className="skeuo-inset px-2.5 py-0.5 text-[10px] text-fg shrink-0">
                      {project.category.split('·')[0].trim()}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-fg line-clamp-1">
                      <Link to={caseStudyUrl} className="hover:underline underline-offset-4">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-snug line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <React.Fragment key={tech}>
                        {idx > 0 && <span className="opacity-40">·</span>}
                        <span>{tech}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                  <span className="text-xs text-fg font-bold truncate">
                    {project.outcome}
                  </span>
                  <Link to={caseStudyUrl} className="skeuo-btn shrink-0">
                    <span>Case Study</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
