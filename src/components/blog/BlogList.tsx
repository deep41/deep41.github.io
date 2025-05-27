import { blogs } from '../../data/blogs';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogList = () => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-gray-300 border border-white/20 mb-6">
              <span className="mr-2">📝</span>
              Latest Articles
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Blog Posts
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Thoughts, ideas, and experiences shared through writing. Exploring the world of software development and technology.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <a key={blog.id} href={`/blog/${blog.id}`} className="group">
                <Card className="h-full glass-card border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 group-hover:-translate-y-2 interactive-hover">
                  <CardHeader className="pb-4">
                    {/* Blog Number Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full grayscale-highlight text-white text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="h-5 w-5 text-gray-300" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 line-clamp-3 leading-relaxed">
                      {blog.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={blog.date}>
                          {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-white/40 to-white/60 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Empty State */}
          {blogs.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 glass-card rounded-full flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-300">
                Check back soon for new articles and insights!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
