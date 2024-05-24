import { MdInsertLink } from "react-icons/md";
import { cn } from "@/lib/utils";

const LinkIcon = (props: { className?: string }) => {
  const { className } = props;
  return (
    <div>
      <MdInsertLink className={cn("mr-2", className)} />
    </div>
  );
};

export default LinkIcon;
