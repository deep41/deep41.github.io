import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import projects from './projectsData'; // Import the project data

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
  slug: string;
  longDescription?: string;
};

const ProjectsPage = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            A collection of my recent work and side projects.
          </p>
        </div>

        <div className="grid gap-6">
          {displayedProjects.map((project, index) => (
            <Link key={index} to={`/projects/${project.slug}`}>
              <Card className="dark:bg-stone-800 transition-transform hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
                      <p className="mb-4 text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className='dark:bg-stone-700'>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.live && (
                          <Button size="sm" asChild className='bg-stone-800 dark:bg-stone-200' >
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="mt-8 text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
            >
              Show All Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
