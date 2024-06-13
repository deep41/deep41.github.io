// import Footer from "@/components/portfolio/footer";
import Header from "@/components/portfolio/header";
import About from "@/components/portfolio/about";
import Project from "@/components/portfolio/project";
// import Work from "@/components/portfolio/work";
// import Contact from "@/components/portfolio/contact";
import Education from "@/components/portfolio/education";
import Certifications from "@/components/portfolio/certifications";
import Skills from "@/components/portfolio/skills";

const skillsList = [
  "Javascript",
  "HTML",
  "CSS",
  "Typescript",
  "React",
  "Angular",
  "NodeJs",
  "Jest",
  "ExpressJs",
  "GraphQL",
  "Websockets",
  "gRPC",
  "Python",
  "Django",
  "GoLang",
  "Java",
  "Springboot",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "NoSQL",
  "Amazon RDS",
  "Git",
  "Redis",
  "RabbitMQ",
  "Ansible",
  "Docker",
  "Kubernetes",
  "Nginx",
  "Helm",
  "SQS",
  "EKS",
  "Github Actions",
  // "",
];

function App() {
  return (
    <>
      <div className="bg-gray-100 text-black dark:bg-zinc-900 lg:pb-8">
        <Header
          headerName="Portfolio"
          navLinks={
            [
              // {
              //   name: "Resume",
              //   link: "https://bit.ly/3V2HZDR",
              // },
              // { name: "Blog", link: "" },
            ]
          }
        />
        <div className="container mx-auto max-w-[1000px] rounded-lg bg-white shadow-xl dark:bg-black dark:text-white">
          <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-8">
            <div className="md:col-span-2 lg:col-span-3">
              <About
                githubLink="https://github.com/deepr41"
                linkedinLink="https://linkedin.com/in/deepr41"
                resumeLink="https://bit.ly/3V2HZDR"
              />
              <Skills skills={skillsList} />
              <Project />
              <Certifications />
              <Education />
              {/* <Work /> */}
              {/* <Contact /> */}
              <div className="h-10" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
