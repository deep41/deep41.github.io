import type { SkillCategory } from '../../types/Portfolio';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const SkillCategoryItem = ({ skillCategory }: { skillCategory: SkillCategory }) => {
  return (
    <div>
      <h3 className="mb-3 font-semibold text-white">{skillCategory.category}</h3>
      <ul className="space-y-1 text-sm text-gray-300">
        {skillCategory.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-white">Skills & Technologies</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {skills.map((skillCategory, index) => (
          <SkillCategoryItem key={index} skillCategory={skillCategory} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection; 