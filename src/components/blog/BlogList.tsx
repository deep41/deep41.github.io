import { Link } from 'react-router';
import { blogs } from '../../data/blogs';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const BlogList = () => {
  return (
    <div className="container mx-auto min-h-screen max-w-[1000px] px-4 py-4">
      <div className="mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-muted-foreground">
            Thoughts, ideas, and experiences shared through writing.
          </p>
        </div>
        <Separator className="my-8" />

        <div className="grid gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <Card className="bg-stone-100 transition-colors hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700">
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription>{blog.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
