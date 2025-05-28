import { ArrowRight, Github, Linkedin, Download, Mail } from 'lucide-react';
import { trackExternalLink, trackDownloadResume } from './GoogleAnalytics';

const Intro = () => {
  const handleResumeDownload = () => {
    trackDownloadResume();
  };

  const handleExternalLink = (url: string, platform: string) => {
    trackExternalLink(url, platform);
  };
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 highlight-blue rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 highlight-purple rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 highlight-cyan rounded-full opacity-40 animate-pulse delay-500"></div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[400px_1fr]">
          {/* Profile Image */}
          <div className="mx-auto lg:mx-0 relative group">
            <div className="absolute -inset-4 highlight-gradient rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500 blur-xl animate-glow"></div>
            <div className="relative">
              <img
                src="/profile.png"
                alt="Deepak's profile"
                className="h-[320px] w-[320px] rounded-full object-cover shadow-2xl ring-4 ring-blue-400/30 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-gray-300 border border-blue-400/30">
                <span className="animate-pulse mr-2">👋</span>
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-white">Hey, I'm</span>
                <span className="block text-highlight">
                  Deepak
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                A passionate <span className="font-semibold text-blue-300">software engineer</span> who loves building innovative solutions that make a difference. I specialize in full-stack development and creating exceptional user experiences.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Currently pursuing my Master's in Computer Science at NC State University, with expertise in modern web technologies and cloud platforms.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium highlight-gradient hover:bg-blue-500/20 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg group interactive-hover"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium border-2 border-purple-400/30 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 rounded-lg interactive-hover"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/deep41"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalLink('https://github.com/deep41', 'GitHub')}
                className="flex items-center px-4 py-2 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 rounded-lg interactive-hover"
              >
                <Github className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">GitHub</span>
              </a>
              
              <a
                href="https://linkedin.com/in/deep41"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalLink('https://linkedin.com/in/deep41', 'LinkedIn')}
                className="flex items-center px-4 py-2 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 rounded-lg interactive-hover"
              >
                <Linkedin className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">LinkedIn</span>
              </a>
              
              <a
                href="https://drive.google.com/file/d/1JJkVUbDJ5nUgM---T8w4MxKQgpMeTgWe/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeDownload}
                className="flex items-center px-4 py-2 hover:bg-green-500/10 transition-all duration-300 hover:scale-110 rounded-lg interactive-hover"
              >
                <Download className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Intro; 