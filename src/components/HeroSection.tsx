import React from 'react';
import { UserProfile } from '../types';

interface HeroSectionProps {
  profile: UserProfile;
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onNavigate }) => {
  return (
    <section id="hero-section" className="mb-14 max-w-2xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6 lowercase">
        {profile.heading || `hi im ${profile.name.toLowerCase()}.`}
      </h1>

      <p className="text-[17px] sm:text-[18px] leading-relaxed text-neutral-800 dark:text-neutral-200 font-normal">
        {profile.intro}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <span>📍 {profile.location}</span>
        <span>•</span>
        <span>🛠️ {profile.currentRole}</span>
        <span>•</span>
        <button
          onClick={() => onNavigate('contact')}
          className="founder-link cursor-pointer"
        >
          say hi
        </button>
      </div>
    </section>
  );
};
