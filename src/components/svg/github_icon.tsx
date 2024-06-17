import { cn } from '@/lib/utils';
import { FaGithub } from 'react-icons/fa';

const GitHubIcon = (props: { className?: string; fill?: string }) => {
  const { className } = props;

  return <FaGithub className={cn('mr-2 text-white', className)} />;
};

export default GitHubIcon;
