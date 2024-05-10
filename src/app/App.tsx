import Footer from "../components/portfolio/Footer";
import Header from "../components/portfolio/Header";
import About from "@/components/portfolio/about";
import Project from "@/components/portfolio/project";
import Work from "@/components/portfolio/work";
import Contact from "@/components/portfolio/contact";

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
      <Project />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
