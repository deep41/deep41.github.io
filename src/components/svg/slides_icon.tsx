import { cn } from '@/lib/utils';
import { RiSlideshowFill } from 'react-icons/ri';

const SlidesIcon = (props: { className?: string }) => {
  const { className } = props;
  return (
    <div>
      <RiSlideshowFill className={cn('mr-2 text-white', className)} />
    </div>
  );
};

export default SlidesIcon;
