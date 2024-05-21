type WorkType = {};

const workList = [
  {
    name: "HCL Technologies Limited",
    from: "Jan 2022",
    to: "July 2023",
    points: [
      "Migrated a monolithic frontend application into micro frontends achieving a speed-up of over 90% in lighthouse metrics. ",
      "Mentored multiple teams on migrating to cloud/on-premise platform built on Kubernetes, spearheading the development of impactful Proof of Concepts that addressed technical challenges faced by different teams.",
      "Implemented an HTML5 time series viewer for uterine activity and fetal heart rate data visualization with interactive annotation features, achieving a 70% speed-up in annotator workflows.",
      "Upgraded Angular frontend projects, achieving a 20% improvement in load times and a 40% reduction in first load bundle size, while significantly enhancing system security by remediating critical vulnerabilities.",
    ],
    image: "/hcltech_logo.jpeg",
    imagealt: "HCL Technologies Limited",
    title: "Software Engineer",
  },
  {
    name: "Center for Artificial Intelligence and Robotics, DRDO",
    from: "Mar 2019",
    to: "Jun 2019",
    points: [
      "Engineered a cutting-edge NLP model utilizing the SNLI Dataset, Sentence Embedding, transfer learning, and BiLSTM techniques to accurately identify fake news articles.",
      "Developed a bot to collect news articles from diverse sources and integrated it with a predictive model to classify them as genuine or fake, enabling for fake news identification.",
    ],
    image: "/cair.png",
    imagealt: "CAIR",
    title: "Project Trainee",
  },
];

const Work = (props: WorkType) => {
  const {} = props;

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
