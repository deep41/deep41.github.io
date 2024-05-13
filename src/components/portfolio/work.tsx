type WorkType = {};

const workList = [
  {
    name: "Work 1",
    from: "May 2024",
    to: "Dec 2023",
    points: ["Hello world", "Point 2"],
  },
];

const Work = (props: WorkType) => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="font-bold text-lg">Work Experience</div>
        {workList.map((item) => (
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

export default Work;
