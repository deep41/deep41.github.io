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
    <div className="min-h-screen text-black dark:text-white bg-gray-50 dark:bg-gray-900" style={{fontFamily: 'Geist'}}>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-full">
                  <Intro />
                  <BlogList />
                </div>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <div className="w-full bg-white dark:bg-gray-900 min-h-[calc(100vh-80px)]">
                  <BlogDetail />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="w-full bg-white dark:bg-gray-900 min-h-[calc(100vh-80px)]">
                  <div className="py-8">
                    <div className="md:grid md:grid-cols-1 md:gap-4 lg:gap-8">
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
                <div className="w-full bg-white dark:bg-gray-900 min-h-[calc(100vh-80px)]">
                  <ProjectsPage />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="w-full bg-white dark:bg-gray-900 min-h-[calc(100vh-80px)]">
                  <ContactPage />
                </div>
              }
            />
            <Route 
              path="/projects/:slug" 
              element={
                <div className="w-full bg-white dark:bg-gray-900 min-h-[calc(100vh-80px)]">
                  <ProjectDetail />
                </div>
              } 
            />
            <Route 
              path="/tetris" 
              element={
                <div className="w-full bg-white dark:bg-gray-900 min-h-[calc(100vh-80px)]">
                  <Tetris />
                </div>
              } 
            />
            <Route
              path="/games"
              element={
                <div className="w-full bg-white dark:bg-gray-900 min-h-[calc(100vh-80px)]">
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
