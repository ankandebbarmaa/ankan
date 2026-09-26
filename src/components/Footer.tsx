import React from 'react';
import { SocialLink } from '../types';

interface FooterProps {
  name: string;
  socials: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ name, socials }) => {
  return (
    <footer className="mt-20 pt-8 pb-12 border-t border-neutral-200/80 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 max-w-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p>© {new Date().getFullYear()} {name}.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="founder-link text-xs"
            >
              {social.label.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
