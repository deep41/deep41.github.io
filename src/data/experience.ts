export type ExperienceItem = {
  role: string;
  org?: string;
  period?: string;
  points: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    role: 'Front End Engineer',
    org: 'AWS',
    period: '2025 - Present',
    points: ['Billing'],
  },
  {
    role: 'Research, GenAI',
    org: 'NC State University',
    period: '2024 - 2025',
    points: [
      'Developed a RAG AI chatbot to analyze course evaluations of students, adopted by 30+ professors.',
      'Integrated prompt management into Langfuse, enabling easy prompt switching and performance tracking.',
      'Optimized RAG pipeline, boosting accuracy by 30% through efficient file ingestion and retrieval improvements.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'GE HealthCare (contractor)',
    period: '2022 - 2024',
    points: [
      'Transitioned a monolithic frontend to micro frontends, achieving a 90% reduction in load time.',
      'Migrated services to EKS, improving CI/CD efficiency and delivery.',
      'Wrote 250+ Angular tests and patched vulnerabilities to increase stability.',
      'Built a faster HTML5 time series viewer to speed annotation and labelling by 40%.',
      'Authored cloud migration guidebooks for in-house solutions on EKS.',
      'Engineered a secure data ingestion layer for medical images.',
    ],
  },
  {
    role: 'Software Developer',
    org: 'Freelance',
    period: '2019 - 2021',
    points: [
      'Built a cross-platform Flutter social media app with real‑time chat, infinite feed, and offline sync.',
      'Implemented a multi‑tenant architecture to boost onboarding speed by 50%.',
      'Implemented user privacy and data protection in compliance with CCPA.',
    ],
  },
];


