import { useParams } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { ProjectItem } from './ProjectsPage';
import projects from './projectsData'; // Import the project data


const ProjectDetail = () => {
  const { slug } = useParams();
  const project: ProjectItem | undefined = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <Button
          variant="ghost"
          className="mb-6"
          asChild
        >
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <Card className="dark:bg-stone-800">
          <CardContent className="p-6">
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 h-[400px] w-full rounded-lg object-cover"
            />
            <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="dark:bg-stone-700">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mb-6 flex gap-4">
              {project.github && (
                <Button variant="outline" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.live && (
                <Button asChild className="bg-stone-800 dark:bg-stone-200">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">{project.description}</p>
              <div className="mt-6">{project.longDescription}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail; 