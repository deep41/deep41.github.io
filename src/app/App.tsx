import Footer from "@/components/portfolio/footer";
import Header from "@/components/portfolio/header";
import About from "@/components/portfolio/about";
import Project from "@/components/portfolio/project";
import Work from "@/components/portfolio/work";
import Contact from "@/components/portfolio/contact";
import Education from "@/components/portfolio/education";
import Certifications from "@/components/portfolio/certifications";

function App() {
  return (
    <>
      <Header
        headerName="Portfolio"
        navLinks={[
          { name: "Resume Download", link: "" },
          { name: "Blog", link: "" },
        ]}
      />
      <div className="container mx-auto p-4  shadow-xl">
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-8">
          <div className="md:col-span-2 lg:col-span-3">
            <About />
            <Certifications />
            <Education />
            <Project />
            <Work />
            <Contact />
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
