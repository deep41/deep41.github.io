import ProjectItem, { ProjectItemProps } from "./project_item/project_item";

type ProjectType = {};

const projectList: ProjectItemProps[] = [
  {
    name: "Spaces",
    description:
      "Spaces is a community-driven exploration app inspired by the idea of turning personal journeys into shared treasures, connecting users through their favorite spots without the pressure of follower counts. It allows users to document and share experiences, organize them into 'Collections,' and use tags to build and amplify community voices. By customizing map markers and implementing seamless media uploads, Spaces enhances user engagement and interaction. The app offers a polished user experience and plans to introduce new features such as community sharing, multi-city exploration, and enhanced content creation tools, ensuring continuous growth and user engagement.",
    images: [
      "/assets/spaces/spaces-1.png",
      "/assets/spaces/spaces-2.png",
      "/assets/spaces/spaces-3.png",
      "/assets/spaces/spaces-4.png",
      "/assets/spaces/spaces-5.png",
      "/assets/spaces/spaces-6.png",
      "/assets/spaces/spaces-7.png",
      "/assets/spaces/spaces-8.png",
    ],
    github: "https://github.com/deepr41/Spaces",
  },
  {
    name: "Mixxcloud",
    description:
      "This project focuses on creating a cloud environment equipped with Load Balancer (LB) services in both Infrastructure-as-a-Service (IaaS) and Load-Balancer-as-a-Service (LBaaS) models, integrated with an auto-scaling interface. It supports tenants in creating virtual machines within specified subnets and virtual private clouds (VPCs), and allows them to configure load balancing and auto-scaling schemes through an accessible interface. Mixxcloud's architecture includes high availability mechanisms and security features such as DDoS protection and custom firewall rules, ensuring robust and secure cloud operations.",
    images: [],
    github: "https://github.com/deepr41/mixxcloud",
    report:
      "https://docs.google.com/document/d/1vL2F0CGbqgDim4xNWZG7HB-zksPmqTzY/edit?usp=sharing&ouid=113056820402321163892&rtpof=true&sd=true",
    slides:
      "https://docs.google.com/presentation/d/1H0kS04bjQtDhTDMm8onlcNIrSSVed_Uj/edit?usp=sharing&ouid=113056820402321163892&rtpof=true&sd=true",
  },
];

const Project = (props: ProjectType) => {
  const {} = props;

  return (
    <>
      <div className="px-6 py-2 bg-gray-100/10">
        <div className="font-bold text-2xl">Projects</div>
        <div className="pt-4 grid md:grid-cols-2 grid-cols-1 gap-4">
          {projectList.map((item) => (
            <ProjectItem
              name={item.name}
              description={item.description}
              images={item.images}
              github={item.github}
              demo={item.demo}
              report={item.report}
              slides={item.slides}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
