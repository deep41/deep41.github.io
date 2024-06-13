import ProjectItem, { ProjectItemProps } from "./project_item/project_item";

type ProjectType = {};

const projectList: ProjectItemProps[] = [
  {
    name: "Mixxcloud",
    description:
      "This project focuses on creating a cloud environment equipped with Load Balancer (LB) services in both Infrastructure-as-a-Service (IaaS) and Load-Balancer-as-a-Service (LBaaS) models, integrated with an auto-scaling interface. It supports tenants in creating virtual machines within specified subnets and virtual private clouds (VPCs), and allows them to configure load balancing and auto-scaling schemes through an accessible interface. Mixxcloud's architecture includes high availability mechanisms and security features such as DDoS protection and custom firewall rules, ensuring robust and secure cloud operations.",
    images: [],
    github: "https://github.com/deepr41/mixxcloud",
    report:
      "https://docs.google.com/document/d/1vL2F0CGbqgDim4xNWZG7HB-zksPmqTzY/edit?usp=sharing&ouid=113056820402321163892&rtpof=true&sd=true",
    slides:
      "https://docs.google.com/presentation/d/1H0kS04bjQtDhTDMm8onlcNIrSSVed_Uj/edit?usp=sharing&ouid=113056820402321163892&rtpof=true&sd=true",
  },
  {
    name: "Music Generation using Deep Learning Techniques",
    description:
      "This project aims to compare two deep learning techniques in the task of learning musical styles and generating novel musical content. Long Short Term Memory (LSTMs), a supervised learning algorithm is used, which is a variation of the Recurrent Neural Network (RNN), frequently used for sequential data. Another technique explored is Generative Adversarial Networks (GANs), an unsupervised approach which is used to learn a distribution of a particular style, and novelly combine components to create sequences.",
    images: [],
    github: "https://github.com/deepr41/MusicGeneration",
    slides:
      "https://docs.google.com/presentation/d/10teE9EflDuL1sHF1LFBysPrBa2Zbej19RaR50svpPHg/edit?usp=sharing",
    report:
      "https://drive.google.com/file/d/1cBGm5xjfsGuXaBZpHy8fiWWzwpYMydSa/view?usp=sharing",
    demo: "https://drive.google.com/drive/folders/13bMdHkV0nsN7rQ8pC_l9rgH7b8sFDvLP?usp=sharing",
    certificate: "https://doi.org/10.1166/jctn.2020.9003",
  },
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
  {
    name: "WolfJobs",
    description:
      "At the heart of our bustling campus, WolfJobs stands out as the top student employment portal. Our platform is the ultimate connector between recruiters in need of talent for both short-term and full-time roles and candidates seeking the freedom to choose.",
    images: [
      "/assets/wolfjobs/wolf-jobs-1.png",
      "/assets/wolfjobs/wolf-jobs-2.gif",
      "/assets/wolfjobs/wolf-jobs-8.gif",
      "/assets/wolfjobs/wolf-jobs-9.gif",
      "/assets/wolfjobs/wolf-jobs-10.gif",
      "/assets/wolfjobs/wolf-jobs-3.gif",
      "/assets/wolfjobs/wolf-jobs-4.gif",
      "/assets/wolfjobs/wolf-jobs-5.gif",
      "/assets/wolfjobs/wolf-jobs-6.gif",
      "/assets/wolfjobs/wolf-jobs-7.gif",
    ],
    github: "https://github.com/deepr41/WolfJobs",
    video: "https://www.youtube.com/watch?v=kMgLUrDiYEw",
  },
  {
    name: "Budget-Bot",
    description:
      "BudgetBot is a user-friendly AI Telegram bot designed to simplify your budgeting process and help you manage your finances. With intuitive in-chat commands, BudgetBot allows you to effortlessly set and customize your budget, track expenses, add income from various sources, and even predict your next month's budget based on current spending trends. BudgetBot is your AI budget companion, designed to identify patterns and provide advice accordingly.",
    images: [],
    github: "https://github.com/deepr41/Budget-Bot",
    video: "https://www.youtube.com/watch?v=3-w7-B_R0c4",
  },
  {
    name: "Cloud Computing Architecture",
    description:
      "This report is an experiment towards architecting cloud applications. The proposed SaaS project aims to enhance patient engagement in medical diagnostics by providing a seamless digital experience. The platform allows patients to schedule various medical tests and access their results online, with options to share these securely with physicians. It includes a website and mobile application with integrated customer support and feedback mechanisms, emphasizing data security, regulatory compliance, high availability, low latency, and cost-efficiency. Future capabilities may include health tracking, aligning with the project's goal to revolutionize the patient experience in the medical diagnostics sector.",
    images: [],
    report:
      "https://docs.google.com/document/d/14ONAjfBluLfWNEfUhhcws66TrMhR--XX/edit?usp=sharing&ouid=113056820402321163892&rtpof=true&sd=true",
  },
  {
    name: "Portfolio",
    description:
      "This website is built using React, Vite, and Tailwind CSS, with CI/CD pipelines managed through GitHub Actions. For inquiries, please contact me using the information provided at the bottom of the site.",
    images: ["/assets/portfolio/portfolio-1.png"],
    github: "https://github.com/deepr41/deepr41.github.io",
    demo: "https://deepr41.github.io",
  },
  {
    name: "Aircraft Maintenance Prediction",
    description:
      "The notebook focuses on learning to build RNN and LSTM networks for a time series dataset, specifically aiming to predict engine failure within a specific cycle using sensory data. Rigorous cleaning and preprocessing steps have been applied to the NASA turbofan dataset to identify the variables that provide the most value.",
    images: ["/assets/aircraft/aircraft-maintaince-1.png"],
    github: "https://github.com/deepr41/Aircraft-Maintenance-Prediction",
  },
  {
    name: "Stock Market Analysis",
    description:
      "The project aimed to predict stock market prices to help investors maximize their gains. By analyzing historical stock data and technical indicators, the team developed a machine learning-based approach to forecast future stock prices. They gathered and processed relevant data, trained their prediction model, and evaluated its accuracy. The results showed that their approach successfully predicted stock price trends, providing valuable insights for investors. The project demonstrated potential for broader applications in financial markets, including mutual funds and derivatives.",
    images: [
      "/assets/stock-market/stock-market-flow.png",
      "/assets/stock-market/stock-market-1.png",
      "/assets/stock-market/stock-market-2.png",
      "/assets/stock-market/stock-market-3.png",
    ],
    github: "https://github.com/deepr41/StockMarketAnalysis",
    report:
      "https://docs.google.com/document/d/1kdRHPhqhmMHkWR1kMF2KVQUF2UvxLtIb8g0CKDeGMpU/edit?usp=sharing",
  },
  {
    name: "Stance Detection for Fake News Identification",
    description: "",
    images: [],
    github: "",
    slides:
      "https://drive.google.com/file/d/1iu_A6b5PxzayXXiSFN1HG-Lh9joISeuk/view?usp=sharing",
    report:
      "https://drive.google.com/file/d/1zqfp0YS5ZoomrGX2SK-HPHzz34dwL-Jt/view?usp=sharing",
  },
  // {
  //   name: "REAUG",
  //   description: "",
  //   images: [],
  //   github: "",
  // },
  // {
  //   name: "Networked.io",
  //   description: "",
  //   images: [],
  //   github: "",
  // },
  // {
  //   name: "ASE project",
  //   description: "",
  //   images: [],
  //   github: "",
  // },
  // {
  //   name: "NNDL Competition project",
  //   description: "",
  //   images: [],
  //   github: "",
  // },
];

const Project = (props: ProjectType) => {
  const {} = props;

  return (
    <>
      <div className="px-6 py-2 bg-gray-100/10">
        <div className="font-bold text-2xl">Projects</div>
        <div className="pt-4 grid md:grid-cols-2 grid-cols-1 gap-4">
          {projectList.map((item) => (
            <ProjectItem {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
