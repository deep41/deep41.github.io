type EducationType = {};

const educationList = [
  {
    name: "North Carolina State Univeristy",
    from: "Aug 2023",
    to: "May 2025",
    points: ["GPA: 3.84", "Hack NC Winner", "Point C"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/North_Carolina_State_University_Athletic_logo.svg/1200px-North_Carolina_State_University_Athletic_logo.svg.png",
    imagealt: "NCSU logo",
  },
];

const Education = (props: EducationType) => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="font-bold text-lg">Education</div>
        {educationList.map((item) => (
          <div className="px-6 py-2">
            <div className="md:flex md:flex-direction-row flex-direction-column items-start mb-8">
              <img
                src={item.image}
                alt="item.imagealt"
                className="max-h-32 max-w-32 p-2 m-2 mx-auto"
              />
              <div className="md:ml-4 ml-0">
                <p className="">
                  <div className="flex flex-col items-baseline md:flex-row  md:justify-between">
                    <div className="pr-2 text-lg font-bold">{item.name}</div>
                    <div className="text-md italic text-balance">
                      {item.from} - {item.to}
                    </div>
                  </div>
                </p>
                <p className="text-gray-600">
                  Transforming ideas into innovative solutions, I'm a driven
                  software developer with a passion for building cutting-edge
                  applications. With a strong foundation in computer science and
                  1.7 years of experience, I excel in web development, backend
                  engineering, and cloud technologies. Let's connect and bring
                  your vision to life!
                </p>
                <p className="text-gray-600">
                  When I'm not coding, you can find me hiking or playing guitar.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
