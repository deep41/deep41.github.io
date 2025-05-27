import BlogCard from './blog/BlogCard';
import { blogPosts } from '../data/blogPosts';

const BlogList = () => {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-highlight mb-4">Latest Blog Posts</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about software development, technology trends, and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 highlight-gradient hover:bg-blue-500/20 text-white font-medium rounded-lg transition-all duration-300 interactive-hover"
          >
            View All Posts
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogList; 