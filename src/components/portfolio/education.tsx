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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/North_Carolina_State_University_Athletic_logo.svg/1200px-North_Carolina_State_University_Athletic_logo.svg.png",
    imagealt: "NCSU logo",
  },
  {
    name: "Ramaiah Institute of Technology",
    degree: "Bachelors of Engineering in Computer Science and Engineering",
    from: "July 2015",
    to: "June 2019",
    points: [
      "CGPA: 8.66",
      "Hackathons won: init 2017",
      "Department Fest Organiser",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5a/Ramaiah_Institutions_Logo.png",
    imagealt: "RIT logo",
  },
];

const Education = (props: EducationType) => {
  return (
    <>
      <div className="px-6 md:py-2 ">
        <div className="font-bold text-2xl">Education</div>
        {educationList.map((item) => (
          <div className="md:px-6 mt-2 py-2 ">
            {/* Hover transition
                rounded-lg hover:bg-gray-100/70 hover:shadow-sm hover:drop-shadow-sm transition duration-100 ease-in-out
            */}
            <div className="md:flex md:flex-direction-row flex-direction-column items-start ">
              <img
                src={item.image}
                alt={item.imagealt}
                className="h-32 w-32 p-2 m-2 mx-auto md:mx-0 aspect-square"
              />
              <div className="md:ml-12 ml-0 w-full">
                <div className="flex flex-col items-baseline md:flex-row  md:justify-between">
                  <div className="pr-2 text-lg font-bold">{item.name}</div>
                  <div className="text-md italic text-balance">
                    {item.from} - {item.to}
                  </div>
                </div>
                <div className="text-sm italic">{item.degree}</div>
                {item.points &&
                  item.points.map((point) => (
                    <p className="text-gray-600 items-baseline">{point}</p>
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
