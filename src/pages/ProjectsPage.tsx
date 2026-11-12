import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  VENTURES_INITIATIVES,
  PRODUCTS,
  SELECTED_WORK_ITEMS,
  BOOKING_URL,
} from '../constants';
import ProjectVisual from '../components/ProjectVisual';
import SEOHead from '../components/SEOHead';

type ProjectFilter = 'All' | 'Ventures' | 'Products' | 'Client Work';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('All');

  const allProjects = [
    ...VENTURES_INITIATIVES.map((v) => ({
      id: v.id,
      title: v.name,
      category: v.category,
      badge: 'Venture & Initiative',
      type: 'Ventures' as const,
      description: v.description,
      tagline: v.tagline,
      role: v.role,
      technologies: v.technologies,
      schematicType: v.schematicType,
      imageUrl: v.imageUrl,
      link: v.liveUrl || v.caseStudyPath || BOOKING_URL,
      isWork: false,
    })),
    ...PRODUCTS.map((p) => ({
      id: p.id,
      title: p.name,
      category: p.category,
      badge: 'Software Product',
      type: 'Products' as const,
      description: p.description,
      tagline: p.tagline,
      role: p.myRole,
      technologies: p.technologyStack.map((t) => t.name),
      schematicType: p.schematicType,
      imageUrl: p.imageUrl,
      link: `/products/${p.id}`,
      isWork: false,
    })),
    ...SELECTED_WORK_ITEMS.map((w) => ({
      id: w.id,
      title: w.title,
      category: w.category,
      badge: 'Collaborative Work',
      type: 'Client Work' as const,
      description: w.description,
      tagline: w.roleOrContribution,
      role: w.roleOrContribution,
      technologies: w.technologies,
      schematicType: w.schematicType,
      imageUrl: w.imageUrl,
      link: w.externalUrl || w.caseStudyPath || BOOKING_URL,
      isWork: true,
    })),
  ];

  const filtered = allProjects.filter(
    (p) => filter === 'All' || p.type === filter
  );

  return (
    <>
      <SEOHead
        title="Projects & Products — Portfolio Directory"
        description="Complete project showcase of ventures, products, and software systems engineered by Ishimwe Amani Samuel."
      />
      <div className="editorial-container pt-6 pb-2">
        <div className="skeuo-card p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">Home</Link>
            <span>/</span>
            <span className="text-fg">Projects</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            Projects &amp; Products
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl">
            Software systems, digital products, and technology ventures engineered with intentionality.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="editorial-container space-y-10">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-border" role="tablist">
            {(['All', 'Ventures', 'Products', 'Client Work'] as ProjectFilter[]).map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab)}
                  className={`cursor-pointer shrink-0 ${
                    active ? 'skeuo-btn' : 'skeuo-btn-secondary text-muted'
                  }`}
                >
                  {tab === 'All' ? `All (${allProjects.length})` : tab}
                </button>
              );
            })}
          </div>

          {/* Projects Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="skeuo-card p-5 sm:p-6 h-full flex flex-col justify-between space-y-5 hover:-translate-y-0.5 transition-transform"
              >
                <div className="space-y-4">
                  <ProjectVisual
                    imageUrl={project.imageUrl}
                    title={project.title}
                    category={project.category}
                    schematicType={project.schematicType}
                  />

                  <div className="flex items-center justify-between gap-2">
                    <span className="skeuo-inset px-2.5 py-0.5 text-[10px] uppercase font-bold text-fg">
                      {project.badge}
                    </span>
                    <span className="text-xs text-muted font-bold">
                      {project.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold text-fg tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Unwrapped Technologies */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted font-bold">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <React.Fragment key={tech}>
                        {idx > 0 && <span className="opacity-40">·</span>}
                        <span>{tech}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Exactly one button: View Product or View Work */}
                <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                  <span className="text-[11px] text-muted font-bold truncate">
                    {project.role}
                  </span>
                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="skeuo-btn shrink-0"
                  >
                    <span>{project.isWork ? 'View Work' : 'View Product'}</span>
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
