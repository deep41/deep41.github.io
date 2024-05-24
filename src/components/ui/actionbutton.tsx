import { cn } from "@/lib/utils";

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
        "px-3 font-medium py-2 flex items-center justify-center rounded-md outline-none focus:scale-110 hover:scale-105 transition cursor-pointer borderBlack text-black hover:outline hover:outline-black hover:outline-[0.5px] focus:outline focus:outline-black focus:outline-[0.5px]",
        className
      )}
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default ActionButton;
