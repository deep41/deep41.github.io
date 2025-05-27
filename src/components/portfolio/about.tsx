import WorkExperienceSection from './WorkExperienceSection';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import SkillsSection from './SkillsSection';
import CallToAction from '../ui/CallToAction';
import { education, certifications, workExperience, skills, aboutContent } from '../../data/portfolio';

const About = () => {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-16">
      {/* About Me Section */}
      <section className="mb-12 space-y-6">
        <h1 className="text-highlight text-4xl font-bold">
          {aboutContent.title}
        </h1>
        <div className="space-y-4">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA Section */}
        <CallToAction
          title={aboutContent.cta.title}
          description={aboutContent.cta.description}
          linkText={aboutContent.cta.linkText}
          linkUrl={aboutContent.cta.linkUrl}
        />

        {/* Experience Section */}
        <WorkExperienceSection experiences={workExperience} />

        {/* Education Section */}
        <EducationSection education={education} />

        {/* Certificates Section */}
        <CertificationsSection certifications={certifications} />

        {/* Skills Section */}
        <SkillsSection skills={skills} />
      </section>
    </div>
  );
};

export default About;
