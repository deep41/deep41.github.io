// import Footer from "@/components/portfolio/footer";
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

function App() {
  return (
    <div className="text-black dark:text-white">
      <Router>
        <div className="bg-gray-100 dark:bg-zinc-900">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="h-[calc(100vh-68px)] w-full overflow-auto bg-stone-100 dark:bg-stone-900">
                  <Intro />
                  <BlogList />
                </div>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <div className="w-full bg-stone-100 transition dark:bg-stone-900">
                  <BlogDetail />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="w-full bg-stone-100 transition dark:bg-stone-900">
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
                <div className="w-full bg-stone-100 transition dark:bg-stone-900">
                  <ProjectsPage />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="w-full bg-stone-100 transition dark:bg-stone-900">
                  <ContactPage />
                </div>
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/tetris" element={<Tetris />} />
            <Route
              path="/games"
              element={
                <div className="w-full bg-stone-100 transition dark:bg-stone-900">
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
