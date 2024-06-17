import { cn } from '@/lib/utils';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInIcon = (props: { className?: string; fill?: string }) => {
  const { className } = props;
  return <FaLinkedin className={cn('mr-2 text-white', className)} />;
};

export default LinkedInIcon;
