import { useState, useEffect } from 'react';
import { BlogPost } from './types';
import {
  initialProfile,
  initialExperiences,
  initialProjects,
  initialBlogPosts,
  initialSocials
} from './data/portfolioData';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import { BlogPostView } from './components/BlogPostView';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  // Dark mode state - strictly defaults to Light Mode first as requested
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme_preference');
      if (savedTheme) return savedTheme === 'dark';
    }
    return false; // Default to light mode first
  });

  const profile = initialProfile;

  // Navigation & Active View State
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Sync dark mode class on HTML root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('theme_preference', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme_preference', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  // Navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    // If we are currently reading a blog post and user clicks navigation
    if (activeBlogPost) {
      setActiveBlogPost(null);
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Smooth scroll to targeted element
    setTimeout(() => {
      const element = document.getElementById(`${sectionId}-section`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Tag selection for blog
  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    setActiveBlogPost(null);
    setActiveSection('blog');
    setTimeout(() => {
      const blogEl = document.getElementById('blog-section');
      if (blogEl) {
        blogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#121212] text-[#111111] dark:text-[#f0f0f0] transition-colors duration-150">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-4 sm:py-8 font-sans">
        {/* Top-left Minimal Navigation */}
        <Navigation
          activeSection={activeBlogPost ? 'blog' : activeSection}
          onNavigate={handleNavigate}
          isDark={isDark}
          toggleDarkMode={toggleDarkMode}
        />

        <main id="main-content">
          {activeBlogPost ? (
            /* Dedicated clean reading page with markdown support */
            <BlogPostView
              post={activeBlogPost}
              onBack={() => setActiveBlogPost(null)}
              onSelectTag={handleSelectTag}
            />
          ) : (
            /* Text-first founder layout matching Farza's site and requirements */
            <div className="space-y-4">
              <HeroSection profile={profile} onNavigate={handleNavigate} />
              
              <AboutSection profile={profile} onNavigate={handleNavigate} />

              <ExperienceSection experiences={initialExperiences} />

              <ProjectsSection projects={initialProjects} />

              <BlogSection
                posts={initialBlogPosts}
                onSelectPost={(post) => setActiveBlogPost(post)}
                selectedTag={selectedTag}
                onClearTag={() => setSelectedTag(null)}
                onSelectTag={handleSelectTag}
              />

              <ContactSection profile={profile} socials={initialSocials} />
            </div>
          )}
        </main>

        {/* Minimalist Footer */}
        <Footer name={profile.name} socials={initialSocials} />
      </div>
    </div>
  );
}
