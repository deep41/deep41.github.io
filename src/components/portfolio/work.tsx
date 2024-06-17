type WorkType = {};

const workList = [
  {
    name: 'HCL Technologies Limited',
    from: 'Jan 2022',
    to: 'July 2023',
    points: [
      'Migrated a monolithic frontend application into micro frontends achieving a speed-up of over 90% in lighthouse metrics. ',
      'Mentored multiple teams on migrating to cloud/on-premise platform built on Kubernetes, spearheading the development of impactful Proof of Concepts that addressed technical challenges faced by different teams.',
      'Implemented an HTML5 time series viewer for uterine activity and fetal heart rate data visualization with interactive annotation features, achieving a 70% speed-up in annotator workflows.',
      'Upgraded Angular frontend projects, achieving a 20% improvement in load times and a 40% reduction in first load bundle size, while significantly enhancing system security by remediating critical vulnerabilities.',
    ],
    image: '/hcltech_logo.jpeg',
    imagealt: 'HCL Technologies Limited',
    title: 'Software Engineer',
  },
  {
    name: 'Center for Artificial Intelligence and Robotics, DRDO',
    from: 'Mar 2019',
    to: 'Jun 2019',
    points: [
      'Engineered a cutting-edge NLP model utilizing the SNLI Dataset, Sentence Embedding, transfer learning, and BiLSTM techniques to accurately identify fake news articles.',
      'Developed a bot to collect news articles from diverse sources and integrated it with a predictive model to classify them as genuine or fake, enabling for fake news identification.',
    ],
    image: '/cair.png',
    imagealt: 'CAIR',
    title: 'Project Trainee',
  },
];

const Work = (props: WorkType) => {
  const {} = props;

  return (
    <>
      <div className="px-6 md:py-2">
        <div className="text-2xl font-bold">Work Experience</div>
        {workList.map((item) => (
          <div className="py-2 md:px-6">
            <div className="md:flex-direction-row flex-direction-column items-start md:flex">
              <img
                src={item.image}
                alt={item.imagealt}
                className="m-2 mx-auto h-32 w-32 p-2 md:mx-0"
              />
              <div className="ml-0 w-full md:ml-12">
                <div className="flex flex-col items-baseline md:flex-row md:justify-between">
                  <div className="pr-2 text-lg font-bold">{item.name}</div>
                  <div className="text-md text-balance italic">
                    {item.from} - {item.to}
                  </div>
                </div>
                <div className="text-sm italic">{item.title}</div>
                {item.points &&
                  item.points.map((point) => (
                    <p className="items-baseline text-gray-600">
                      <span className="text-sm text-gray-700">■</span>
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
