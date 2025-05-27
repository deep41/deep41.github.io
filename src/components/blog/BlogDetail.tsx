import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import type { Blog } from '../../types/Blog';
import './BlogDetail.css';

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <a 
          href="/"
          className="inline-flex items-center px-4 py-2 mb-8 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blogs
        </a>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.title}
          </h1>
          <div className="mb-8 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-8"></div>
          <ReactMarkdown className="mt-8 markdown-container prose prose-lg dark:prose-invert max-w-none">
            {blog.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
