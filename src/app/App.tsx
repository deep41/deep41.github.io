// import Footer from "@/components/portfolio/footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from '@/components/portfolio/header';
import About from '@/components/portfolio/about';
import Project from '@/components/portfolio/project';
// import Work from "@/components/portfolio/work";
// import Contact from "@/components/portfolio/contact";
import Education from '@/components/portfolio/education';
import Certifications from '@/components/portfolio/certifications';
import Skills from '@/components/portfolio/skills';
import BlogList from '@/components/blog/BlogList';
import BlogDetail from '@/components/blog/BlogDetail';
import ContactPage from '@/components/contact/ContactPage';
import ProjectsPage from '@/components/projects/ProjectsPage';
import Intro from '@/components/home/Intro';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-black transition lg:pb-8 dark:bg-zinc-900">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full bg-stone-100 transition dark:bg-stone-900 dark:text-white">
                <Intro />
                <BlogList />
              </div>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <div className="w-full bg-stone-100 transition dark:bg-stone-900 dark:text-white">
                <BlogDetail />
              </div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <div className="mx-auto max-w-[1000px] rounded-lg bg-white shadow-xl transition dark:bg-black dark:text-white">
                <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-8">
                  <div className="md:col-span-2 lg:col-span-3">
                    <About
                      githubLink="https://github.com/deepr41"
                      linkedinLink="https://linkedin.com/in/deepr41"
                      resumeLink="https://bit.ly/3V2HZDR"
                    />
                    <Skills />
                    <Project />
                    <Certifications />
                    <Education />
                    {/* <Work /> */}
                    {/* <Contact /> */}
                    <div className="h-10" />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="w-full bg-stone-100 transition dark:bg-stone-900 dark:text-white">
                <ProjectsPage />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="w-full bg-stone-100 transition dark:bg-stone-900 dark:text-white">
                <ContactPage />
              </div>
            }
          />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
