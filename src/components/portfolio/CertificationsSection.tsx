import type { Certification } from '../../types/Portfolio';

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationItem = ({ certification }: { certification: Certification }) => {
  return (
    <div className="rounded-lg border border-white/20 glass-card p-4 interactive-hover">
      <h3 className="font-semibold text-white">{certification.title}</h3>
      <p className="text-gray-400">Issued: {certification.issued}</p>
    </div>
  );
};

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-white">Certifications</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((certification, index) => (
          <CertificationItem key={index} certification={certification} />
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection; 