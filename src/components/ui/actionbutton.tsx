import { cn } from '@/lib/utils';

type ActionButtonType = {
  link?: string;
  className?: string;
  children: React.ReactNode;
};

const ActionButton = (props: ActionButtonType) => {
  const { link, children, className } = props;

  return (
    <a
      className={cn(
        'flex cursor-pointer items-center justify-center rounded-md px-3 py-2 font-medium outline-none transition',
        'text-black dark:text-white',
        'light:hover:scale-105 hover:outline hover:outline-[0.5px] dark:hover:scale-95 dark:hover:bg-slate-700',
        'focus:scale-110 focus:outline focus:outline-[0.5px] focus:outline-black',
        'hover:outline-black dark:hover:outline-white',
        'dark:bg-black dark:outline dark:outline-[0.5px] dark:outline-zinc-100',
        className,
      )}
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default ActionButton;
