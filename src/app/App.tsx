import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from '@/components/portfolio/header';
import About from '@/components/portfolio/about';
import BlogList from '@/components/blog/BlogList';
import BlogDetail from '@/components/blog/BlogDetail';
import ContactPage from '@/components/contact/ContactPage';
import ProjectsPage from '@/components/projects/ProjectsPage';
import Intro from '@/components/home/Intro';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { Toaster } from '@/components/ui/toaster';
import Tetris from '@/components/games/Tetris';
import Games from '@/components/games/Games';
import BackgroundGrid from '@/components/background/BackgroundGrid';

// CSS class for card elements to be translucent
const cardClass = "bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm shadow-lg";

function App() {
  return (
    <div className="text-black dark:text-white" style={{fontFamily: 'Geist'}}>
      <Router>
        <div className="relative">
          {/* Global background grid effect that applies to all routes */}
          <BackgroundGrid />
          
          {/* Header with translucent background */}
          <div className="backdrop-blur-sm relative z-10">
            <Header />
          </div>
          
          <Routes>
            <Route
              path="/"
              element={
                <div className="h-[calc(100vh-68px)] w-full overflow-auto bg-stone-100/70 dark:bg-stone-900/70 relative z-10">
                  <div className="relative">
                    <Intro />
                    <BlogList />
                  </div>
                </div>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <div className="w-full bg-stone-100/70 transition dark:bg-stone-900/70 relative z-10">
                  <BlogDetail />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="w-full bg-stone-100/70 transition dark:bg-stone-900/70 relative z-10">
                  <div>
                    <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-8">
                      <div className="md:col-span-2 lg:col-span-3">
                        <About />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div className="w-full bg-stone-100/70 transition dark:bg-stone-900/70 relative z-10">
                  <ProjectsPage />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="w-full bg-stone-100/70 transition dark:bg-stone-900/70 relative z-10">
                  <ContactPage />
                </div>
              }
            />
            <Route path="/projects" element={<div className="relative z-10 bg-stone-100/70 dark:bg-stone-900/70"><ProjectsPage /></div>} />
            <Route path="/projects/:slug" element={<div className="relative z-10 bg-stone-100/70 dark:bg-stone-900/70"><ProjectDetail /></div>} />
            <Route path="/tetris" element={<div className="relative z-10 bg-stone-100/70 dark:bg-stone-900/70"><Tetris /></div>} />
            <Route
              path="/games"
              element={
                <div className="w-full bg-stone-100/70 transition dark:bg-stone-900/70 relative z-10">
                  <Games />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
