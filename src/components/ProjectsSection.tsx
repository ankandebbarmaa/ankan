import React from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects-section" className="mb-14 max-w-2xl">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight lowercase">
          projects
        </h2>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          things i built & shipped
        </span>
      </div>

      <div className="space-y-7">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group border-b border-neutral-200/80 dark:border-neutral-800 pb-7 last:border-b-0"
          >
            {/* Project Header: Title | Tech Stack | Live Link */}
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
              <h3 className="text-[17px] font-semibold text-neutral-900 dark:text-neutral-100">
                {project.name}
              </h3>
              
              <span className="text-neutral-400 dark:text-neutral-600 font-normal">|</span>
              
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                {project.technologies.join(' · ')}
              </div>

              {project.liveUrl && (
                <>
                  <span className="text-neutral-400 dark:text-neutral-600 font-normal">|</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="founder-link inline-flex items-center gap-1 font-semibold uppercase text-xs tracking-wider"
                  >
                    LIVE DEMO
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}

              {project.githubUrl && (
                <>
                  <span className="text-neutral-400 dark:text-neutral-600 font-normal">|</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="founder-link inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 font-mono"
                  >
                    <Github className="w-3 h-3" />
                    github
                  </a>
                </>
              )}
            </div>

            {project.description && (
              <p className="text-[15px] text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                {project.description}
              </p>
            )}

            {/* Bullet Points */}
            {project.points && project.points.length > 0 && (
              <ul className="space-y-1.5 text-[14.5px] text-neutral-700 dark:text-neutral-300 list-disc list-inside">
                {project.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed pl-1 marker:text-neutral-400">
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
