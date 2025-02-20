import { Link } from 'react-router';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Skill = {
  name: string;
  categories: RoleType[];
};

type Role = {
  id: RoleType;
  title: string;
  description: string;
};

type RoleType = 'full-stack' | 'cloud' | 'ai' | 'systems';

const skillsData = {
  roles: [
    {
      id: 'full-stack' as RoleType,
      title: 'Full Stack Engineer',
      description: 'End-to-end application development',
    },
    {
      id: 'cloud' as RoleType,
      title: 'Cloud Engineer',
      description: 'Cloud infrastructure and DevOps',
    },
    {
      id: 'ai' as RoleType,
      title: 'AI Developer',
      description: 'Machine learning and AI solutions',
    },
    // {
    //   id: 'systems' as RoleType,
    //   title: 'Systems Engineer',
    //   description: 'System architecture and infrastructure',
    // },
  ] as Role[],

  skills: [
    { name: 'React', categories: ['full-stack', 'ai'] },
    { name: 'Node.js', categories: ['full-stack'] },
    { name: 'Python', categories: ['ai', 'systems'] },
    { name: 'AWS', categories: ['cloud', 'full-stack'] },
    { name: 'Docker', categories: ['cloud', 'systems'] },
    { name: 'Kubernetes', categories: ['cloud', 'systems'] },
    { name: 'TensorFlow', categories: ['ai'] },
    { name: 'PyTorch', categories: ['ai'] },
    { name: 'MongoDB', categories: ['full-stack'] },
    { name: 'PostgreSQL', categories: ['full-stack', 'systems'] },
    { name: 'Linux', categories: ['systems', 'cloud'] },
    { name: 'CI/CD', categories: ['cloud', 'full-stack'] },
    // Undefined
    { name: 'C++', categories: ['cloud', 'full-stack'] },
    { name: 'Javascript', categories: ['cloud', 'full-stack'] },
    { name: 'Typescript', categories: ['cloud', 'full-stack'] },
    { name: 'Java', categories: ['cloud', 'full-stack'] },
    { name: 'Bash', categories: ['cloud', 'full-stack'] },
    { name: 'GoLang', categories: ['cloud', 'full-stack'] },
    { name: 'YAML', categories: ['cloud', 'full-stack'] },
    { name: 'JSON', categories: ['cloud', 'full-stack'] },
    { name: 'HTML', categories: ['cloud', 'full-stack'] },
    { name: 'CSS', categories: ['cloud', 'full-stack'] },
    { name: 'TailwindCSS', categories: ['cloud', 'full-stack'] },
    { name: 'Angular', categories: ['cloud', 'full-stack'] },
    { name: 'NextJS', categories: ['cloud', 'full-stack'] },
    { name: 'GraphQL', categories: ['cloud', 'full-stack'] },
    { name: 'Rest APIs', categories: ['cloud', 'full-stack'] },
    { name: 'MySQL', categories: ['cloud', 'full-stack'] },
    { name: 'NoSQL', categories: ['cloud', 'full-stack'] },
    { name: 'Redis', categories: ['cloud', 'full-stack'] },
    { name: 'SQLite', categories: ['cloud', 'full-stack'] },
    { name: 'Terraform', categories: ['cloud', 'full-stack'] },
    { name: 'Ansible', categories: ['cloud', 'full-stack'] },
    { name: 'Helm', categories: ['cloud', 'full-stack'] },
    { name: 'Microservices', categories: ['cloud', 'full-stack'] },
    { name: 'Grafana', categories: ['cloud', 'full-stack'] },
    { name: 'Prometheus', categories: ['cloud', 'full-stack'] },
    { name: 'LangChain', categories: ['cloud', 'full-stack'] },
    { name: 'LangGraph', categories: ['cloud', 'full-stack'] },
    { name: 'LangFuse', categories: ['cloud', 'full-stack'] },
    { name: 'Flask', categories: ['cloud', 'full-stack'] },
    { name: 'Django', categories: ['cloud', 'full-stack'] },
    { name: 'Git', categories: ['cloud', 'full-stack'] },
  ] as Skill[],
};

const education = [
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
    // description: 'Description of education and achievements',
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issued: '2025',
  },
  {
    title: 'Kubernetes Certified Administrator & Developer',
    issued: '2022',
  },
];

const About = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>('full-stack');

  const isSkillHighlighted = (skillCategories: RoleType[]) => {
    if (!selectedRole) return true;
    return skillCategories.includes(selectedRole);
  };

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-16">
      {/* About Me Section */}
      <section className="mb-12 space-y-6">
        {/* <h1 className="text-4xl font-bold bg-gradient-to-r text-emerald-600 bg-clip-text"> */}
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent">
          About Me
        </h1>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            I'm a passionate software developer with a keen interest in building
            innovative solutions that make a difference. My journey in tech has
            been driven by curiosity and a desire to create applications that
            are not only functional but also provide exceptional user
            experiences.
          </p>
          <p className="text-lg leading-relaxed">
            With expertise in full-stack development and a strong foundation in
            modern technologies, I approach each project as an opportunity to
            learn and grow while delivering robust solutions that meet business
            needs.
          </p>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 p-6 shadow-md dark:from-blue-950 dark:to-purple-950">
          <h2 className="mb-3 text-2xl font-semibold">
            Interested in my work?
          </h2>
          <p className="mb-4">
            Check out my latest projects and see what I've been building.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-white transition-all hover:from-blue-600 hover:to-purple-600"
          >
            View Projects →
          </Link>
        </div>

        {/* Experience Section */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>
          <div className="space-y-6">
            {/* Static Work Experience Data */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold">Research, GenAI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                NC State University • 2024 - Present
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Developed a RAG AI chatbot
                to analyze course evaluations of students, adopted by 30+
                professors.
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Integrated prompt
                management into Langfuse, enabling easy prompt switching and
                performance tracking.
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Optimized RAG pipeline,
                boosting accuracy by 30% through efficient file ingestion and
                retrieval improvement.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                GE HealthCare (contractor) • 2022 - 2024
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Transitioned a monolithic
                frontend application to micro frontends, achieving a 90%
                reduction in load time.
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Collaborated on migrating
                services to EKS, enhancing CI/CD efficiency and boosting
                delivery.
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Built a faster HTML5 time
                series viewer, speeding annotation and labelling by 40% with
                seamless integration.
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Authored guidebooks on
                cloud migration for the adoption of in-house solutions built on
                EKS.
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Engineered a data
                ingestion layer to connect legacy systems, enabling secure
                ingestion of medical images.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold">Software Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Freelance • 2019 - 2022
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Architected cross-platform{' '}
                <span className="">
                  <Link
                    to="https://qr1.be/16PB"
                    className="inline-flex items-baseline border-b border-dashed border-gray-500 font-mono text-sm hover:text-gray-700 dark:border-gray-400 dark:hover:text-gray-300"
                  >
                    Flutter social media app
                    <span className="ml-0.5 font-mono text-xl leading-none">
                      ↗
                    </span>
                  </Link>
                </span>{' '}
                with real-time chat, infinite feed, online/offline data sync.
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Engineered a scalable
                multi-tenant system, boosting onboarding speed by 50% while
                ensuring data security.
              </p>
              <p className="text-gray-850 dark:text-gray-200">
                <span className="font-mono">﹥</span> Implemented user privacy
                settings and data protection measures in full compliance with
                CCPA regulation.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Education</h2>
          <div className="space-y-6">
            {education.map((education, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">{education.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {education.institution} • {education.period}
                </p>
                {education.description && (
                  <p className="mt-2">{education.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Certifications</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {certifications.map((certification, index) => (
              <div
                key={index}
                className="rounded-lg border border-stone-400 bg-stone-300 p-4 dark:border-stone-500 dark:bg-stone-700"
              >
                <h3 className="font-semibold">{certification.title}</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Issued: {certification.issued}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Explorer Section */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Skills Explorer</h2>
          <p className="mb-4">
            Explore my skills by selecting a role and see how they match with my
            skills.
          </p>

          {/* Role Selection Tabs */}
          <Tabs
            defaultValue="full-stack"
            value={selectedRole}
            onValueChange={(value) => setSelectedRole(value as RoleType)}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-3 gap-4">
              {skillsData.roles.map((role) => (
                <TabsTrigger
                  key={role.id}
                  value={role.id}
                  className="data-[state=active]:bg-stone-300 data-[state=active]:text-stone-900 dark:data-[state=active]:bg-stone-600 dark:data-[state=active]:text-stone-100"
                >
                  {role.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-2">
            {skillsData.skills
              .sort((a, b) => {
                const aHighlighted = isSkillHighlighted(a.categories);
                const bHighlighted = isSkillHighlighted(b.categories);
                return Number(bHighlighted) - Number(aHighlighted);
              })
              .map((skill) => {
                const highlighted = isSkillHighlighted(skill.categories);
                return (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className={`flex transform items-center justify-center border border-gray-200 px-4 py-2 text-sm transition-all duration-300 hover:scale-105 motion-safe:animate-in motion-safe:fade-in-25 dark:border-gray-800 ${
                      highlighted
                        ? 'scale-105 border-stone-400 bg-stone-200 dark:border-stone-500 dark:bg-stone-300 dark:text-black'
                        : 'bg-white hover:bg-gray-50 dark:bg-stone-700 dark:hover:bg-stone-800'
                    } `}
                  >
                    {skill.name}
                  </Badge>
                );
              })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
