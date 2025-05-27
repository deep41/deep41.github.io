import type { Education, Certification, WorkExperience, SkillCategory } from '../types/Portfolio';

export const education: Education[] = [
  {
    title: 'Master of Computer Science',
    institution: 'North Carolina State University',
    period: 'Aug 2023 - May 2025',
    description: '',
  },
  {
    title: `Bachelor's of Computer Science and Engineering`,
    institution: 'MS Ramaiah Institute of Technology',
    period: 'Aug 2015 - July 2019',
  },
];

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issued: '2025',
  },
  {
    title: 'Kubernetes Certified Administrator & Developer',
    issued: '2022',
  },
];

export const workExperience: WorkExperience[] = [
  {
    position: 'Research, GenAI',
    company: 'NC State University',
    period: '2024 - Present',
    achievements: [
      'Developed a RAG AI chatbot to analyze course evaluations of students, adopted by 30+ professors.',
      'Integrated prompt management into Langfuse, enabling easy prompt switching and performance tracking.',
      'Optimized RAG pipeline, boosting accuracy by 30% through efficient file ingestion and retrieval improvement.',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'GE HealthCare (contractor)',
    period: '2022 - 2024',
    achievements: [
      'Transitioned a monolithic frontend application to micro frontends, achieving a 90% reduction in load time.',
      'Collaborated on migrating services to EKS, enhancing CI/CD efficiency and boosting delivery.',
      'Wrote 250+ of Angular tests and patched vulnerabilities, reducing risks by 12%, boosting system stability.',
      'Built a faster HTML5 time series viewer, speeding annotation and labelling by 40% with seamless integration.',
      'Authored guidebooks on cloud migration for the adoption of in-house solutions built on EKS.',
      'Engineered a data ingestion layer to connect legacy systems, enabling secure ingestion of medical images.',
    ],
  },
  {
    position: 'Software Developer',
    company: 'Freelance',
    period: '2019 - 2021',
    achievements: [
      'Architected cross-platform Flutter social media app with real-time chat, infinite feed, online/offline data sync.',
      'Engineered a scalable multi-tenant system, boosting onboarding speed by 50% while ensuring data security.',
      'Implemented user privacy settings and data protection measures in full compliance with CCPA regulation.',
    ],
    link: {
      url: 'https://qr1.be/16PB',
      text: 'Flutter social media app',
    },
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Angular'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'Java', 'PostgreSQL'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'],
  },
];

export const aboutContent = {
  title: 'About Me',
  paragraphs: [
    "I'm a passionate software developer with a keen interest in building innovative solutions that make a difference. My journey in tech has been driven by curiosity and a desire to create applications that are not only functional but also provide exceptional user experiences.",
    "With expertise in full-stack development and a strong foundation in modern technologies, I approach each project as an opportunity to learn and grow while delivering robust solutions that meet business needs.",
  ],
  cta: {
    title: 'Interested in my work?',
    description: 'Check out my latest projects and see what I\'ve been building.',
    linkText: 'View Projects →',
    linkUrl: '/projects',
  },
}; 