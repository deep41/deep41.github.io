import type { ProjectItem } from "../../types/Portfolio";

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'EventPlanner AI Agent',
    description:
      'Built an AI agent to manage venue and vendor coordination, logistics, scheduling, contract negotiations, marketing, and post-event follow-ups, while providing a streamlined dashboard.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/deep41/EventPlannerAI',
    image: '/projects/eventflow/eventflow.png',
    slug: 'eventplanner-ai',
  },
  {
    id: 2,
    title: 'Load balanced service orchestrator',
    description:
      'Orchestrated services using Docker and Ansible for seamless deployment and management within Virtual Private Clouds (VPCs) and container clusters across multiple devices.',
    tags: ['Python', 'Ansible', 'Linux', 'Networking'],
    github: 'https://github.com/deep41/mixxcloud',
    image: '/projects/mixxcloud/mixxcloud.jpeg',
    slug: 'load-balanced-service-orchestrator',
  },
  {
    id: 3,
    title: 'LeetRevise',
    description:
      'Built a spaced repetition tool that recommends LeetCode problems, helping 35+ users practice efficiently and improve problem-solving skills.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    live: 'https://leetrevise.com',
    image: '/projects/leetrevise/leetrevise.png',
    slug: 'leetrevise',
  },
  {
    id: 4,
    title: 'Tetris',
    description:
      'Join the fun and challenge your skills with our classic Tetris game! Play to clear lines and aim for the highest score—how high can you go?',
    tags: ['React', 'Typescript'],
    live: '/tetris',
    image: '/projects/tetris/tetris.png',
    slug: 'tetris',
  },
];

export default projects; 