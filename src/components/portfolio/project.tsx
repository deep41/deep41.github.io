type ProjectType = {};

const projectList = [
  { name: "ABC", from: "May 2024", to: "Dec 2024", points: ["A", "B", "C"] },
];

const Project = (props: ProjectType) => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="font-bold text-lg">Projects</div>
        {projectList.map((item) => (
          <div>
            <div className="flex flex-row justify-between">
              <div>{item.name}</div>
              <div>
                {item.from} - {item.to}
              </div>
            </div>
            <div>
              <ul>
                {item.points.map((point) => (
                  <li> {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
