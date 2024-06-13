type EducationType = {};

const educationList = [
  {
    name: "North Carolina State Univeristy",
    degree: "Masters in Computer Science",
    from: "Aug 2023",
    to: "May 2025",
    points: [
      "GPA: 3.84",
      "Hack NC 2024 Winner",
      "Tech Crew member at University Theatre",
    ],
    image: "/ncsu_logo.png",
    imagealt: "NCSU logo",
  },
  {
    name: "Ramaiah Institute of Technology",
    degree: "Bachelors of Engineering in Computer Science and Engineering",
    from: "July 2015",
    to: "June 2019",
    points: [
      "CGPA: 8.66",
      "Hackathons won: init 2017, EMPYREAL 2017",
      "Department Fest Organiser",
    ],
    image: "/rit_logo.png",
    imagealt: "RIT logo",
  },
];

const Education = (props: EducationType) => {
  const {} = props;

  return (
    <>
      <div className="px-6 md:py-2">
        <div className="text-2xl font-bold">Education</div>
        {educationList.map((item, index) => (
          <div className="mt-2 py-2 md:px-6" key={`${index}-educ`}>
            {/* Hover transition
                rounded-lg hover:bg-gray-100/70 hover:shadow-sm hover:drop-shadow-sm transition duration-100 ease-in-out
            */}
            <div className="md:flex-direction-row flex-direction-column items-start md:flex">
              <img
                src={item.image}
                alt={item.imagealt}
                className="m-2 mx-auto aspect-square h-32 w-32 p-2 md:mx-0"
              />
              <div className="ml-0 w-full md:ml-12">
                <div className="flex flex-col items-baseline md:flex-row md:justify-between">
                  <div className="pr-2 text-lg font-bold">{item.name}</div>
                  <div className="text-md text-balance italic">
                    {item.from} - {item.to}
                  </div>
                </div>
                <div className="text-sm italic">{item.degree}</div>
                {item.points &&
                  item.points.map((point, index) => (
                    <p
                      className="light:text-gray-600 items-baseline"
                      key={`${index}-educ`}
                    >
                      {point}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
