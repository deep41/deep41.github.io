import Footer from "@/components/portfolio/footer1";
import Header from "@/components/portfolio/header1";
import About from "@/components/portfolio/about";
import Project from "@/components/portfolio/project";
import Work from "@/components/portfolio/work";
import Contact from "@/components/portfolio/contact";
import Education from "@/components/portfolio/education";

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
      <About />
      <Education />
      <Project />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
