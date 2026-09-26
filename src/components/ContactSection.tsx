import React, { useState } from 'react';
import { UserProfile, SocialLink } from '../types';
import { Mail, Check, Copy, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  profile: UserProfile;
  socials: SocialLink[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, socials }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact-section" className="mb-14 max-w-2xl">
      <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-5 tracking-tight lowercase">
        get in touch
      </h2>

      {/* Atmospheric founder photo */}
      {profile.photoUrl && (
        <div className="mb-8">
          <div className="overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-800">
            <img
              src={profile.photoUrl}
              alt="founder visual"
              referrerPolicy="no-referrer"
              className="w-full max-h-[360px] object-cover"
              loading="lazy"
            />
          </div>
          {profile.photoCaption && (
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              {profile.photoCaption}
            </p>
          )}
        </div>
      )}

      {/* Founder contact note & direct links */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-neutral-800 dark:text-neutral-200">
        <p className="leading-relaxed">
          {profile.contactNote ? (
            profile.contactNote
          ) : (
            <>
              p.s: if you wanna contact me ping{' '}
              <a href={`mailto:${profile.email}`} className="founder-link font-medium">
                {profile.email}
              </a>
              . i generally respond to most emails under 300 characters with a clear ask.
            </>
          )}
        </p>

        {/* Direct Email Action */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="founder-link font-medium inline-flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer border border-neutral-300/50 dark:border-neutral-700/50"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>copy email</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 block mb-3">
            elsewhere on the internet:
          </span>
          <ul className="space-y-2 text-sm">
            {socials.map((social) => (
              <li key={social.platform} className="flex items-center gap-2">
                <span className="w-24 text-neutral-500 dark:text-neutral-400">
                  {social.label}:
                </span>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="founder-link inline-flex items-center gap-1"
                >
                  {social.handle}
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
