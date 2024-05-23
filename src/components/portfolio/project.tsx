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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
