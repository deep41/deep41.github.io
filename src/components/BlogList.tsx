import { Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with React and TypeScript',
    excerpt: 'Learn how to create maintainable and scalable web applications using modern React patterns and TypeScript best practices.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Web Development'],
    progress: 85,
  },
  {
    id: 2,
    title: 'Microservices Architecture: A Comprehensive Guide',
    excerpt: 'Explore the benefits and challenges of microservices architecture and learn how to implement it effectively in your projects.',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['Microservices', 'Architecture', 'Backend'],
    progress: 92,
  },
  {
    id: 3,
    title: 'Optimizing Performance in Modern Web Applications',
    excerpt: 'Discover techniques and tools to improve the performance of your web applications and provide better user experiences.',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['Performance', 'Optimization', 'Frontend'],
    progress: 78,
  },
  {
    id: 4,
    title: 'Getting Started with Cloud-Native Development',
    excerpt: 'An introduction to cloud-native development principles and how to build applications that leverage cloud platforms effectively.',
    date: '2023-12-28',
    readTime: '15 min read',
    tags: ['Cloud', 'DevOps', 'Kubernetes'],
    progress: 88,
  },
  {
    id: 5,
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is transforming the software development landscape and what it means for developers.',
    date: '2023-12-20',
    readTime: '7 min read',
    tags: ['AI', 'Machine Learning', 'Future Tech'],
    progress: 95,
  },
  {
    id: 6,
    title: 'Database Design Patterns for Modern Applications',
    excerpt: 'Learn about effective database design patterns and how to choose the right approach for your application needs.',
    date: '2023-12-15',
    readTime: '11 min read',
    tags: ['Database', 'Design Patterns', 'Backend'],
    progress: 82,
  },
];

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
            <article
              key={post.id}
              className="group glass-card border border-white/20 rounded-lg overflow-hidden interactive-hover"
            >
              {/* Post Number Badge */}
              <div className={`absolute top-4 left-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                index % 4 === 0 ? 'highlight-blue' :
                index % 4 === 1 ? 'highlight-purple' :
                index % 4 === 2 ? 'highlight-cyan' :
                'highlight-green'
              }`}>
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
                    <span>{new Date(post.date).toLocaleDateString()}</span>
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
                      className={`px-2 py-1 text-xs rounded-full border ${
                        tagIndex % 4 === 0 ? 'bg-blue-500/10 border-blue-400/30 text-blue-300' :
                        tagIndex % 4 === 1 ? 'bg-purple-500/10 border-purple-400/30 text-purple-300' :
                        tagIndex % 4 === 2 ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300' :
                        'bg-green-500/10 border-green-400/30 text-green-300'
                      }`}
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
                      className={`h-full transition-all duration-1000 ease-out group-hover:animate-pulse ${
                        index % 4 === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                        index % 4 === 1 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                        index % 4 === 2 ? 'bg-gradient-to-r from-cyan-400 to-cyan-600' :
                        'bg-gradient-to-r from-green-400 to-green-600'
                      }`}
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