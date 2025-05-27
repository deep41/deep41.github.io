import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import projects from './projectsData'; // Import the project data

const ProjectsPage = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 py-16 max-w-[1000px]">
      <h1 className="mb-8 text-3xl font-bold text-white">Projects</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} className="overflow-hidden glass-card border-white/20 interactive-hover">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-300">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag: string, tagIndex: number) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className={`bg-white/10 text-gray-300 border-white/20 ${
                      tagIndex % 4 === 0 ? 'hover:bg-blue-500/20' :
                      tagIndex % 4 === 1 ? 'hover:bg-purple-500/20' :
                      tagIndex % 4 === 2 ? 'hover:bg-cyan-500/20' :
                      'hover:bg-green-500/20'
                    } transition-colors`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.live && (
                  <Button size="sm" asChild className="highlight-blue hover:bg-blue-500/20 text-white border-blue-400/20">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button size="sm" variant="outline" asChild className="border-purple-400/30 text-gray-300 hover:bg-purple-500/10 hover:border-purple-400/50">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                <Button size="sm" variant="ghost" asChild className="text-gray-300 hover:bg-cyan-500/10 hover:text-white">
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
