import type { WorkExperience } from '../../types/Portfolio';

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

const WorkExperienceItem = ({ experience }: { experience: WorkExperience }) => {
  return (
    <div className="border-l-4 border-white/40 pl-4">
      <h3 className="font-semibold text-white">{experience.position}</h3>
      <p className="text-gray-400">
        {experience.company} • {experience.period}
      </p>
      <div className="space-y-1">
        {experience.achievements.map((achievement, index) => (
          <p key={index} className="text-gray-300">
            <span className="font-mono">•</span> {renderAchievementText(achievement, experience.link)}
          </p>
        ))}
      </div>
    </div>
  );
};

const renderAchievementText = (
  achievement: string,
  link?: { url: string; text: string }
) => {
  if (link && achievement.includes(link.text)) {
    const parts = achievement.split(link.text);
    return (
      <>
        {parts[0]}
        <span className="">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline border-b border-dashed border-gray-400 font-mono text-sm hover:text-white"
          >
            {link.text}
            <span className="ml-0.5 font-mono text-xl leading-none">↗</span>
          </a>
        </span>
        {parts[1]}
      </>
    );
  }
  return achievement;
};

const WorkExperienceSection = ({ experiences }: WorkExperienceSectionProps) => {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-white">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <WorkExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection; 