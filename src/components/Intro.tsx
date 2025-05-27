import { ArrowRight, Github, Linkedin, Download, Mail } from 'lucide-react';

const Intro = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[400px_1fr]">
          {/* Profile Image */}
          <div className="mx-auto lg:mx-0 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
            <div className="relative">
              <img
                src="/profile.png"
                alt="Deepak's profile"
                className="h-[320px] w-[320px] rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-gray-800 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                <span className="animate-pulse mr-2">👋</span>
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900 dark:text-white">Hey, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Deepak
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">software engineer</span> who loves building innovative solutions that make a difference. I specialize in full-stack development and creating exceptional user experiences.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                Currently pursuing my Master's in Computer Science at NC State University, with expertise in modern web technologies and cloud platforms.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg group"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 rounded-lg"
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
                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 rounded-lg"
              >
                <Github className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">GitHub</span>
              </a>
              
              <a
                href="https://linkedin.com/in/deep41"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 rounded-lg"
              >
                <Linkedin className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">LinkedIn</span>
              </a>
              
              <a
                href="https://drive.google.com/file/d/1JJkVUbDJ5nUgM---T8w4MxKQgpMeTgWe/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 rounded-lg"
              >
                <Download className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro; 