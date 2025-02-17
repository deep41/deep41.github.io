import { useParams, Link } from 'react-router';
import { blogs } from '../../data/blogs';
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Blog post not found</p>
        <Button variant="link" asChild>
          <Link to="/blog">Back to blogs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-8" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blogs
          </Link>
        </Button>
        
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{blog.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
          <Separator className="my-8" />
          <ReactMarkdown className="mt-8">{blog.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail; 