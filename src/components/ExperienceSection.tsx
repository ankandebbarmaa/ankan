import React from 'react';
import { ExperienceItem } from '../types';
import { ExternalLink } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience-section" className="mb-14 max-w-2xl">
      <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 tracking-tight lowercase">
        experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-0">
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <div className="font-semibold text-[17px] text-neutral-900 dark:text-neutral-100">
                <span>{exp.position}</span>
                <span className="text-neutral-500 dark:text-neutral-400 font-normal"> at </span>
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="founder-link inline-flex items-center gap-1 font-semibold"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3 inline" />
                  </a>
                ) : (
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {exp.company}
                  </span>
                )}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 tabular-nums">
                {exp.dates}
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] text-neutral-700 dark:text-neutral-300 mb-3 mt-1.5 leading-relaxed">
              {exp.description}
            </p>

            {/* Key Achievements */}
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="space-y-1.5 text-[14.5px] text-neutral-700 dark:text-neutral-300 list-disc list-inside">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="leading-relaxed pl-1 marker:text-neutral-400">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
