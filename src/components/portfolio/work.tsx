type WorkType = {};

const workList = [
  {
    name: "HCL Technologies Limited",
    from: "May 2024",
    to: "Dec 2023",
    points: [
      "Migrated a monolithic frontend application into micro frontends achieving a speed-up of over 90% in lighthouse metrics. ",
      "Mentored multiple teams on migrating to cloud/on-premise platform built on Kubernetes, spearheading the development of impactful Proof of Concepts that addressed technical challenges faced by different teams.",
      "Implemented an HTML5 time series viewer for uterine activity and fetal heart rate data visualization with interactive annotation features, achieving a 70% speed-up in annotator workflows.",
      "Upgraded Angular frontend projects, achieving a 20% improvement in load times and a 40% reduction in first load bundle size, while significantly enhancing system security by remediating critical vulnerabilities.",
    ],
    image:
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/307377964_10159766756760985_6467272317538767870_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dZesOc933y8Q7kNvgENZKBE&_nc_ht=scontent-atl3-2.xx&oh=00_AYCHRIC9QMs27b9jceWiY7nQRU22B9tQzXupoZd0jurgcw&oe=664C1B83",
    imagealt: "Temp",
    title: "Software Engineer",
  },
];

const Work = (props: WorkType) => {
  return (
    <>
      <div className="px-6 md:py-2">
        <div className="font-bold text-2xl">Work Experience</div>
        {workList.map((item) => (
          <div className="md:px-6 py-2">
            <div className="md:flex md:flex-direction-row flex-direction-column items-start ">
              <img
                src={item.image}
                alt={item.imagealt}
                className="h-32 w-32 p-2 m-2 mx-auto md:mx-0"
              />
              <div className="md:ml-12 ml-0 w-full">
                <div className="flex flex-col items-baseline md:flex-row  md:justify-between">
                  <div className="pr-2 text-lg font-bold">{item.name}</div>
                  <div className="text-md italic text-balance">
                    {item.from} - {item.to}
                  </div>
                </div>
                <div className="text-sm italic">{item.title}</div>
                {item.points &&
                  item.points.map((point) => (
                    <p className="text-gray-600 items-baseline">
                      <span className="text-gray-700 text-sm">■</span>
                      &nbsp;&nbsp;
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

export default Work;
