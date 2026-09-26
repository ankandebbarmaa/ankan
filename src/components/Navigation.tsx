import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  isDark,
  toggleDarkMode,
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="w-full pt-8 pb-4 mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Simple text navigation at top-left, no navbar background or borders */}
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors font-medium cursor-pointer ${
                  isActive
                    ? 'text-[#0066cc] dark:text-[#60a5fa] underline underline-offset-4 decoration-2'
                    : 'text-[#0066cc] dark:text-[#60a5fa] hover:opacity-75 underline underline-offset-4'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side utility toggle: light/dark mode switch */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <button
            id="theme-toggle-btn"
            onClick={toggleDarkMode}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center gap-1.5 py-1 px-2.5 rounded hover:bg-neutral-200/70 dark:hover:bg-neutral-800 transition-colors cursor-pointer border border-transparent hover:border-neutral-300/60 dark:hover:border-neutral-700/60"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-medium text-neutral-300">light mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-neutral-600" />
                <span className="font-medium text-neutral-700">dark mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
