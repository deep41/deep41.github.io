import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js",
    tags: ["React", "Node.js", "TypeScript", "MongoDB"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.com",
    image: "https://via.placeholder.com/600x400"
  },
  {
    title: "Project Two",
    description: "Mobile-first responsive design with modern animations",
    tags: ["React Native", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two.com",
    image: "https://via.placeholder.com/600x400"
  }
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            A collection of my recent work and side projects.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
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