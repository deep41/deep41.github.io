import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowLeft, Star } from 'lucide-react';
import type { ProjectItem } from '../../types/Portfolio';

interface ProjectDetailProps {
  project: ProjectItem;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-5xl">
          {/* Back Navigation */}
          <a
            href="/projects"
            className="inline-flex items-center px-4 py-2 mb-8 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 shadow-sm hover:shadow-md group interactive-hover"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </a>

          {/* Hero Section */}
          <div className="glass-card rounded-2xl shadow-xl border border-white/20 overflow-hidden mb-8">
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium bg-white/10 text-gray-300 border border-white/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 highlight-gradient text-white rounded-lg hover:bg-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium interactive-hover"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border-2 border-purple-400/30 text-gray-300 rounded-lg hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 font-medium interactive-hover"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative">
                  <div className="absolute inset-0 highlight-gradient rounded-xl blur-xl opacity-50"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full rounded-xl shadow-2xl border border-white/20 object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Project Details Card */}
              <Card className="glass-card border border-white/20 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Star className="mr-3 h-6 w-6 text-yellow-400" />
                    About This Project
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Placeholder for future markdown content */}
                    <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/20">
                      <p className="text-sm text-gray-400 italic">
                        💡 <strong>Note:</strong> This project now uses markdown content for detailed documentation. The markdown version provides rich formatting, code examples, and comprehensive project details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card className="glass-card border border-white/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="space-y-2">
                    {project.tags.map((tag) => (
                      <div 
                        key={tag}
                        className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                      >
                        <span className="text-sm font-medium text-gray-300">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="glass-card border border-white/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 text-sm text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 text-sm text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 