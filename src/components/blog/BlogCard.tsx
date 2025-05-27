import { Calendar, Clock } from 'lucide-react';
import { getBadgeClasses, getHighlightClass, getProgressGradient, formatDate } from '../../lib/utils';
import type { BlogPost } from '../../types/Portfolio';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <article className="group glass-card border border-white/20 rounded-lg overflow-hidden interactive-hover">
      {/* Post Number Badge */}
      <div className={`absolute top-4 left-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${getHighlightClass(index)}`}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="p-6 pt-12">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag, tagIndex) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs rounded-full border ${getBadgeClasses(tagIndex)}`}
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/20 text-gray-400">
              +{post.tags.length - 2}
            </span>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Reading Progress</span>
            <span>{post.progress}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-out group-hover:animate-pulse ${getProgressGradient(index)}`}
              style={{ width: `${post.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Read More Link */}
        <a
          href={`/blog/${post.id}`}
          className="inline-flex items-center mt-4 text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors group-hover:underline"
        >
          Read More
          <svg
            className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default BlogCard; 