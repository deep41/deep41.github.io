import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
};

const projects: ProjectItem[] = [
  {
    title: 'EventPlanner AI Agent',
    description:
    'Built an AI agent to manage venue and vendor coordination, logistics, scheduling, contract negotiations, marketing, and post-event follow-ups, while providing a streamlined dashboard.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/deep41/EventPlannerAI',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'Load balanced service orchestrator',
    description:
    'Orchestrated services using Docker and Ansible for seamless deployment and management within Virtual Private Clouds (VPCs) and container clusters across multiple devices.',
    tags: ['Python', 'Ansible', 'Linux', 'Networking'],
    github: 'https://github.com/deep41/mixxcloud',
    image: 'https://placehold.co/600x400',
  },
  {
    title: 'LeetRevise',
    description:
      'Built a spaced repetition tool that recommends LeetCode problems, helping 35+ users practice efficiently and improve problem-solving skills.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    live: 'https://leetrevise.com',
    image: 'https://placehold.co/600x400',
  },
];

const ProjectsPage = () => {
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
          {projects.map((project, index) => (
            <Card key={index}>
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
                        <Badge key={i} variant="secondary">
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
                        <Button size="sm" asChild>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
