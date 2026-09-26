export interface ProjectItem {
  id: string;
  name: string;
  description?: string;
  points?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: string;
  year?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  dates: string;
  location?: string;
  description: string;
  achievements: string[];
  link?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
  handle: string;
}

export interface UserProfile {
  name: string;
  heading: string;
  intro: string;
  aboutParagraphs: string[];
  email: string;
  location: string;
  currentRole: string;
  newsletterHeadline: string;
  contactNote: string;
  photoUrl?: string;
  photoCaption?: string;
}
