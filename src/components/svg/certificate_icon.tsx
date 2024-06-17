import { cn } from '@/lib/utils';
import { GrCertificate } from 'react-icons/gr';

const CertificateIcon = (props: { className?: string }) => {
  const { className } = props;
  return (
    <div>
      <GrCertificate className={cn('mr-2', className)} />
    </div>
  );
};

export default CertificateIcon;
