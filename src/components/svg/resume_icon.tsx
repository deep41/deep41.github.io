import { cn } from "@/lib/utils";
import { IoDocument } from "react-icons/io5";

const ResumeIcon = (props: { className?: string }) => {
  const { className } = props;
  return (
    <div>
      <IoDocument className={cn("mr-2", className)} />
    </div>
  );
};

export default ResumeIcon;
