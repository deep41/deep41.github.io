import { ProjectItem } from "./ProjectsPage";

const projects: ProjectItem[] = [
  {
    title: 'EventPlanner AI Agent',
    description:
      'Built an AI agent to manage venue and vendor coordination, logistics, scheduling, contract negotiations, marketing, and post-event follow-ups, while providing a streamlined dashboard.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/deep41/EventPlannerAI',
    image: '/projects/eventflow/eventflow.png',
    slug: 'eventplanner-ai',
    // longDescription: 'This is the longer description!'
  },
  {
    title: 'Load balanced service orchestrator',
    description:
      'Orchestrated services using Docker and Ansible for seamless deployment and management within Virtual Private Clouds (VPCs) and container clusters across multiple devices.',
    tags: ['Python', 'Ansible', 'Linux', 'Networking'],
    github: 'https://github.com/deep41/mixxcloud',
    image: '/projects/mixxcloud/mixxcloud.jpeg',
    slug: 'load-balanced-service-orchestrator',
  },
  {
    title: 'LeetRevise',
    description:
      'Built a spaced repetition tool that recommends LeetCode problems, helping 35+ users practice efficiently and improve problem-solving skills.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    live: 'https://leetrevise.com',
    image: '/projects/leetrevise/leetrevise.png',
    slug: 'leetrevise',
  },
];

export default projects; 