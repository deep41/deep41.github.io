export type Project = { title: string; desc?: string; tags?: string[] };

export const projectsData: Project[] = [
  {
    title: 'EventPlanner AI Agent',
    desc: 'AI agent for venue/vendor coordination, logistics, scheduling, contract negotiation, marketing, and post‑event follow‑ups with a unified dashboard.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    title: 'Load Balanced Service Orchestrator',
    desc: 'Orchestrates services using Docker and Ansible across container clusters and VPCs; includes load balancing, auto‑scaling, and fault tolerance.',
    tags: ['Python', 'Ansible', 'Linux', 'Networking'],
  },
  {
    title: 'LeetRevise',
    desc: 'Spaced repetition tool recommending LeetCode problems, used by 35+ users.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    title: 'Tetris',
    desc: 'Classic Tetris implemented with React and TypeScript; includes rotation, line clearing, levels, and score tracking.',
    tags: ['React', 'TypeScript'],
  },
];


