import type { Education } from '../../types/Portfolio';

interface EducationSectionProps {
  education: Education[];
}

const EducationItem = ({ education }: { education: Education }) => {
  return (
    <div className="border-l-4 border-white/40 pl-4">
      <h3 className="font-semibold text-white">{education.title}</h3>
      <p className="text-gray-400">
        {education.institution} • {education.period}
      </p>
      {education.description && (
        <p className="mt-2 text-gray-300">{education.description}</p>
      )}
    </div>
  );
};

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-white">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection; 