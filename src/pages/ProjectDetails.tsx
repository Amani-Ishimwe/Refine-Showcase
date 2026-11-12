import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS, PROFILE_CONFIG } from '../constants';
import ProjectVisual from '../components/ProjectVisual';
import SEOHead from '../components/SEOHead';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const decodedId = id ? decodeURIComponent(id).trim().toLowerCase() : '';

  const projectIndex = PROJECTS.findIndex(
    (p) =>
      p.id.toLowerCase() === decodedId ||
      p.aliases?.some((alias) => alias.toLowerCase() === decodedId)
  );

  const project = projectIndex >= 0 ? PROJECTS[projectIndex] : undefined;
  const nextProject =
    projectIndex >= 0 ? PROJECTS[(projectIndex + 1) % PROJECTS.length] : undefined;

  if (!project) {
    return (
      <div className="editorial-container py-16">
        <SEOHead title="Case Study Not Found" />
        <div className="skeuo-card p-8 space-y-4 max-w-lg">
          <span className="label">404</span>
          <h1 className="text-2xl font-bold text-fg">Case study not found.</h1>
          <Link to="/work" className="skeuo-btn">
            <span>← Back to Work</span>
          </Link>
        </div>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <>
      <SEOHead
        title={`${project.title} — Case Study`}
        description={project.shortDescription}
        image={project.imageUrl ? `https://www.amanisamuel.online${project.imageUrl}` : undefined}
      />

      <article className="editorial-container pt-6 pb-16 space-y-6 sm:space-y-8">
        <header className="skeuo-card p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-muted font-bold">
              <Link to="/" className="hover:text-fg">Home</Link>
              <span>/</span>
              <Link to="/work" className="hover:text-fg">Work</Link>
              <span>/</span>
              <span className="text-fg truncate max-w-[180px] sm:max-w-xs">{project.title}</span>
            </div>
            <span className="skeuo-inset px-3 py-1 text-xs font-bold text-fg">
              {project.status}
            </span>
          </div>

          <div className="space-y-2 max-w-3xl">
            <span className="eyebrow block">{project.category}</span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-fg">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-muted">
              {project.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-stretch">
            <div className="skeuo-inset p-3.5 h-full flex flex-col justify-between">
              <span className="text-[10px] uppercase text-muted font-bold block">Role</span>
              <span className="text-xs sm:text-sm font-bold text-fg mt-0.5 block">{project.role}</span>
            </div>
            <div className="skeuo-inset p-3.5 h-full flex flex-col justify-between">
              <span className="text-[10px] uppercase text-muted font-bold block">Year</span>
              <span className="text-xs sm:text-sm font-bold text-fg mt-0.5 block">{project.year}</span>
            </div>
            <div className="skeuo-inset p-3.5 h-full flex flex-col justify-between">
              <span className="text-[10px] uppercase text-muted font-bold block">Scope</span>
              <span className="text-xs sm:text-sm font-bold text-fg mt-0.5 block">{project.ownershipNote}</span>
            </div>
            <div className="skeuo-inset p-3.5 h-full flex flex-col justify-between">
              <span className="text-[10px] uppercase text-muted font-bold block">Status</span>
              <span className="text-xs sm:text-sm font-bold text-fg mt-0.5 block">{project.status}</span>
            </div>
          </div>

          {/* Unwrapped Stack & Tools */}
          <div className="pt-2 border-t border-border flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold text-fg">
            <span className="text-muted uppercase tracking-wider text-[10px]">Stack & Tools:</span>
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                {idx > 0 && <span className="text-muted opacity-40">·</span>}
                <span>{tech}</span>
              </React.Fragment>
            ))}
          </div>
        </header>

        <ProjectVisual
          id={project.id}
          imageUrl={project.imageUrl}
          title={project.title}
          category={project.category}
          schematicType={project.schematicType}
          status={project.status}
        />

        {/* Equal-Height Problem & Contribution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-2">
            <span className="label">01 · The Problem</span>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-2">
            <span className="label">02 · My Contribution</span>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Equal-Height Process Trio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-2">
            <span className="label">Design</span>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {cs.designProcess || project.process.design}
            </p>
          </div>
          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-2">
            <span className="label">Engineering</span>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {cs.technicalImplementation || project.process.development}
            </p>
          </div>
          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-2">
            <span className="label">Documentation</span>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {project.process.documentation}
            </p>
          </div>
        </div>

        {/* Equal-Height Outcome & Lesson */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-2">
            <span className="label">Outcome & Progress</span>
            <p className="text-base sm:text-lg font-bold text-fg">
              {cs.outcomes || project.outcome}
            </p>
          </div>
          <div className="skeuo-card p-6 h-full flex flex-col justify-between space-y-2">
            <span className="label">Key Takeaway</span>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              &ldquo;{cs.lessons || project.lesson}&rdquo;
            </p>
          </div>
        </div>

        <div className="skeuo-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {nextProject && (
            <div>
              <span className="label">Next Case Study</span>
              <Link
                to={`/project/${encodeURIComponent(nextProject.id)}`}
                className="text-base font-bold text-fg hover:underline"
              >
                {nextProject.title} →
              </Link>
            </div>
          )}
          <div className="flex flex-wrap gap-2.5">
            <Link to="/work" className="skeuo-btn-secondary">
              <span>← All Work</span>
            </Link>
            <a
              href={PROFILE_CONFIG.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn"
            >
              <span>Discover More</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectDetails;
