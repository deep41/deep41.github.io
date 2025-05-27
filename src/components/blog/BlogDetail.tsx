import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import type { Blog } from '../../types/Blog';
import './BlogDetail.css';
import { useEffect } from 'react';
import { trackBlogView } from '../GoogleAnalytics';

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
  useEffect(() => {
    // Track blog view when component mounts
    trackBlogView(blog.title);
  }, [blog.title]);
  return (
    <div className="container mx-auto min-h-screen px-4 py-16 max-w-[1000px]">
      <div className="mx-auto max-w-4xl">
        <a 
          href="/"
          className="inline-flex items-center px-4 py-2 mb-8 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-blue-500/10 interactive-hover"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blogs
        </a>

        <article className="glass-card border-white/20 rounded-lg p-8 lg:p-12">
          {/* Header */}
          <header className="mb-8 space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-highlight leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown 
              className="markdown-container text-gray-300 leading-relaxed"
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold text-white mb-6 mt-8">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-semibold text-white mb-4 mt-6">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-medium text-white mb-3 mt-5">{children}</h3>,
                p: ({children}) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                a: ({href, children}) => (
                  <a 
                    href={href} 
                    className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 hover:decoration-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                code: ({children}) => (
                  <code className="bg-white/10 text-cyan-300 px-2 py-1 rounded text-sm font-mono border border-white/20">
                    {children}
                  </code>
                ),
                pre: ({children}) => (
                  <pre className="bg-white/5 border border-white/20 rounded-lg p-4 overflow-x-auto my-6">
                    {children}
                  </pre>
                ),
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-blue-400/50 pl-4 my-6 italic text-gray-400">
                    {children}
                  </blockquote>
                ),
                ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300">{children}</ol>,
                li: ({children}) => <li className="text-gray-300">{children}</li>,
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Published on {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <a 
                href="/"
                className="inline-flex items-center px-4 py-2 text-sm text-blue-300 hover:text-blue-200 transition-colors rounded-lg hover:bg-blue-500/10"
              >
                ← Back to all posts
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
