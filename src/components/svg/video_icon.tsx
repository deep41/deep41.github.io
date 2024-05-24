import { MdOutlineOndemandVideo } from "react-icons/md";
import { cn } from "@/lib/utils";

const VideoIcon = (props: { className?: string }) => {
  const { className } = props;
  return (
    <div>
      <MdOutlineOndemandVideo className={cn("mr-2", className)} />
    </div>
  );
};

export default VideoIcon;
