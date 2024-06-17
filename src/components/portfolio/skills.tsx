import { getIcon } from '@/lib/icons';

const skills: string[] = [
  'Javascript',
  'HTML',
  'CSS',
  'Typescript',
  'React',
  'Angular',
  'NodeJs',
  'Jest',
  'ExpressJs',
  'GraphQL',
  'Websockets',
  'gRPC',
  'Python',
  'Django',
  'GoLang',
  'Java',
  'Springboot',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'NoSQL',
  'Amazon RDS',
  'Git',
  'Redis',
  'RabbitMQ',
  'Ansible',
  'Docker',
  'Kubernetes',
  'Nginx',
  'Helm',
  'SQS',
  'EKS',
  'Github Actions',
];

const Skills = () => {
  return (
    <>
      <div className="bg-gray-100 px-6 py-4 transition dark:bg-black">
        <div className="mb-2 text-2xl font-bold">Skills</div>
        <div className="flex flex-row flex-wrap gap-2">
          {skills &&
            skills.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex cursor-default flex-row items-center gap-2 bg-blue-950 p-2 font-mono text-sm text-white transition hover:scale-110 hover:bg-blue-950 dark:bg-blue-950/50 dark:hover:scale-95"
              >
                {getIcon(item, 'w-5 h-5')}
                {item}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
