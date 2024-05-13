type EducationType = {};

const educationList = [
  {
    name: "North Carolina State Univeristy",
    from: "Aug 2023",
    to: "May 2025",
    points: ["Point A", "Point B", "Point C"],
  },
];

const Education = (props: EducationType) => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="font-bold text-lg">Education</div>
        {educationList.map((item) => (
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

export default Education;
