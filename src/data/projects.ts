export type Project = {
  title: string;
  desc?: string;
  tags?: string[];
  highlights?: string[];
  role?: string;
  period?: string;
  demo?: string;
  repo?: string;
};

export const projectsData: Project[] = [
  {
    title: 'EventPlanner AI Agent',
    desc: 'AI agent for venue/vendor coordination, logistics, scheduling, contract negotiation, marketing, and post‑event follow‑ups with a unified dashboard.',
    role: 'Full‑stack',
    period: '2024',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    highlights: [
      'Automated vendor and venue outreach via multi‑agent workflows',
      'Negotiation and contract parsing with LLM tools',
      'Unified dashboard with task orchestration and alerts',
    ],
  },
  {
    title: 'Load Balanced Service Orchestrator',
    desc: 'Orchestrates services using Docker and Ansible across container clusters and VPCs; includes load balancing, auto‑scaling, and fault tolerance.',
    role: 'DevOps',
    period: '2023',
    tags: ['Python', 'Ansible', 'Linux', 'Networking'],
    highlights: [
      'Zero‑downtime deploys with rolling updates',
      'Auto‑scaling based on CPU and memory utilization',
      'Self‑healing health checks and alerting',
    ],
  },
  {
    title: 'LeetRevise',
    desc: 'Spaced repetition tool recommending LeetCode problems, used by 35+ users.',
    role: 'Creator',
    period: '2022 – Present',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    highlights: [
      'Spaced repetition tuned for LeetCode topics',
      'Daily recommendations and streak tracking',
      '35+ active users',
    ],
  },
];


