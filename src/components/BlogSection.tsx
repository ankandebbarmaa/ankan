import React, { useState, useMemo } from 'react';
import { BlogPost } from '../types';
import { Search, X, Calendar, Clock } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  selectedTag?: string | null;
  onClearTag?: () => void;
  onSelectTag?: (tag: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  onSelectPost,
  selectedTag,
  onClearTag,
  onSelectTag
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category));
    return ['All', ...Array.from(set)];
  }, [posts]);

  // Extract all tags for quick browsing
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Category check
      if (selectedCategory !== 'All' && post.category !== selectedCategory) {
        return false;
      }
      // Tag check
      if (selectedTag && !post.tags.includes(selectedTag)) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchesContent = post.content.toLowerCase().includes(query);
        const matchesTag = post.tags.some((t) => t.toLowerCase().includes(query));
        return matchesTitle || matchesExcerpt || matchesContent || matchesTag;
      }
      return true;
    });
  }, [posts, selectedCategory, selectedTag, searchQuery]);

  return (
    <section id="blog-section" className="mb-14 max-w-2xl">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight lowercase">
          writing & thoughts
        </h2>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
        occasional essays on building startups software engineering and things im learning along the way.
      </p>

      {/* Search and Category filters */}
      <div className="space-y-3 mb-8">
        {/* Minimal Search bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="blog-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search by keyword, topic, or title..."
            className="w-full pl-9 pr-8 py-1.5 text-sm bg-neutral-200/60 dark:bg-neutral-800/80 border border-neutral-300/60 dark:border-neutral-700/60 rounded focus:outline-none focus:border-neutral-500 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-neutral-400 dark:text-neutral-500 font-mono">category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 font-medium'
                  : 'bg-neutral-200/50 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300/60 dark:hover:bg-neutral-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active tag filter banner if any */}
        {selectedTag && (
          <div className="flex items-center gap-2 pt-1 text-xs">
            <span className="text-neutral-500">filtering by tag:</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-[#0066cc] dark:text-blue-400 font-mono inline-flex items-center gap-1">
              #{selectedTag}
              {onClearTag && (
                <button
                  onClick={onClearTag}
                  className="hover:opacity-75 cursor-pointer ml-1"
                  title="Clear tag filter"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Post list */}
      {filteredPosts.length === 0 ? (
        <div className="text-neutral-500 dark:text-neutral-400 text-sm py-8 text-center bg-neutral-200/30 dark:bg-neutral-900/40 rounded p-6">
          no articles match your search criteria.
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                if (onClearTag) onClearTag();
              }}
              className="block mx-auto mt-2 founder-link cursor-pointer text-xs"
            >
              clear all filters
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-7">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
              onClick={() => onSelectPost(post)}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-[17px] font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#0066cc] dark:group-hover:text-[#60a5fa] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 shrink-0 tabular-nums">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>
              </div>

              <p className="text-[15px] text-neutral-700 dark:text-neutral-300 leading-relaxed mb-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectTag) onSelectTag(tag);
                      }}
                      className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono hover:text-[#0066cc] dark:hover:text-blue-400 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="founder-link font-medium group-hover:underline text-[13px]">
                  read article →
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Quick Tag cloud at bottom of blog section */}
      {!selectedTag && allTags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 text-xs">
          <span className="text-neutral-400 dark:text-neutral-500 block mb-2 font-mono">
            popular topics:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSelectTag && onSelectTag(tag)}
                className="px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800/80 hover:bg-neutral-300/60 dark:hover:bg-neutral-700/60 text-neutral-600 dark:text-neutral-400 font-mono transition-colors cursor-pointer"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
