import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
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
  const [filter, setFilter] = useState('All');

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="container mx-auto min-h-screen px-4 py-16 max-w-[1000px]">
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>
      
      {/* Filter buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={filter === tag ? "default" : "outline"}
            onClick={() => setFilter(tag)}
            className="text-sm"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.slug} className="overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.live && (
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                <Button size="sm" variant="ghost" asChild>
                  <a href={`/projects/${project.slug}`}>
                    View Details
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
