import React from 'react';
import { UserProfile } from '../types';

interface AboutSectionProps {
  profile: UserProfile;
  onNavigate: (section: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onNavigate }) => {
  return (
    <section id="about-section" className="mb-14 max-w-2xl">
      <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-5 tracking-tight lowercase">
        about me
      </h2>

      <div className="space-y-4 text-[16px] sm:text-[17px] leading-relaxed text-neutral-800 dark:text-neutral-200">
        {profile.aboutParagraphs.map((para, index) => (
          <p key={index} className="leading-relaxed">
            {para}
          </p>
        ))}

        <p className="leading-relaxed pt-2">
          you can check out my recent{' '}
          <button
            onClick={() => onNavigate('projects')}
            className="founder-link cursor-pointer"
          >
            projects
          </button>
          , read my work history in{' '}
          <button
            onClick={() => onNavigate('experience')}
            className="founder-link cursor-pointer"
          >
            experience
          </button>
          , or read some of my thoughts on the{' '}
          <button
            onClick={() => onNavigate('blog')}
            className="founder-link cursor-pointer"
          >
            blog
          </button>
          .
        </p>
      </div>
    </section>
  );
};
