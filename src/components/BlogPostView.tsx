import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
  onSelectTag: (tag: string) => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  onBack,
  onSelectTag
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post]);

  return (
    <article className="max-w-2xl mx-auto py-4">
      {/* Back button */}
      <button
        id="back-to-blog-btn"
        onClick={onBack}
        className="founder-link inline-flex items-center gap-1.5 text-sm mb-8 cursor-pointer font-medium"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        back to all writing
      </button>

      {/* Post Header */}
      <header className="mb-8 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
          <span>•</span>
          <span className="px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono text-xs">
            {post.category}
          </span>
        </div>
      </header>

      {/* Post Markdown Content */}
      <div className="markdown-body text-neutral-800 dark:text-neutral-200 text-[16.5px] leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Tags & Footer Navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Tag className="w-3.5 h-3.5 text-neutral-400" />
          {post.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag(tag)}
              className="text-xs px-2 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 hover:bg-neutral-300/80 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-mono transition-colors cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm">
          <button
            onClick={onBack}
            className="founder-link inline-flex items-center gap-1 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            back to blog list
          </button>
          <a
            href="mailto:ankandebbarmaa@gmail.com?subject=Thoughts%20on%20your%20post"
            className="founder-link text-xs sm:text-sm"
          >
            reply via email →
          </a>
        </div>
      </footer>
    </article>
  );
};
