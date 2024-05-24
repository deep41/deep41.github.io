import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../ui/carousel";
import { Card, CardContent } from "../../ui/card";
import ActionButton from "../../ui/actionbutton";
import GitHubIcon from "../../svg/github_icon";
import "./project_item.css";
import DocumentIcon from "@/components/svg/document_icon";
import SlidesIcon from "@/components/svg/slides_icon";
import LinkIcon from "@/components/svg/link_icon";
import VideoIcon from "@/components/svg/video_icon";
import CertificateIcon from "@/components/svg/certificate_icon";

export type ProjectItemProps = {
  name: string;
  description: string;
  images: string[];
  github?: string;
  demo?: string;
  report?: string;
  slides?: string;
  video?: string;
  certificate?: string;
};

const ProjectItem = (props: ProjectItemProps) => {
  const {
    name,
    description,
    images,
    github,
    demo,
    report,
    slides,
    video,
    certificate,
  } = props;
  return (
    <>
      <div className="rounded-md overflow-hidden hover:shadow-md outline outline-[0.2px] outline-gray-200  transition bg-white">
        <Carousel className="w-full  p-0 m-0">
          <CarouselContent>
            {images.map((item, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video overflow-y-hidden w-full items-center justify-center p-0">
                    <img className="w-full" src={item} alt={name} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 disabled:hidden" />
          <CarouselNext className="right-2 disabled:hidden" />
        </Carousel>
        <div className="px-6 py-4">
          <div className="font-bold text-xl pr-2 mb-1">{name}</div>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 mb-2">
            {github && (
              <div className="no-padding-div">
                <ActionButton link={github} className=" bg-black">
                  <GitHubIcon className="" fill="white" />
                  <div className="text-sm font-mono text-white">GitHub</div>
                </ActionButton>
              </div>
            )}
            {demo && (
              <div className="no-padding-div">
                <ActionButton link={demo} className=" bg-black">
                  <LinkIcon className="text-white" />
                  <div className="text-sm font-mono text-white">Demo</div>
                </ActionButton>
              </div>
            )}
            {report && (
              <div className="no-padding-div">
                <ActionButton link={report} className=" bg-black">
                  <DocumentIcon className="text-white" />
                  <div className="text-sm font-mono text-white">Report</div>
                </ActionButton>
              </div>
            )}
            {slides && (
              <div className="no-padding-div">
                <ActionButton link={slides} className=" bg-black">
                  <SlidesIcon />
                  <div className="text-sm font-mono text-white">Slides</div>
                </ActionButton>
              </div>
            )}
            {video && (
              <div className="no-padding-div">
                <ActionButton link={video} className=" bg-black">
                  <VideoIcon className="text-white" />
                  <div className="text-sm font-mono text-white">Video</div>
                </ActionButton>
              </div>
            )}
            {certificate && (
              <div className="no-padding-div">
                <ActionButton link={certificate} className=" bg-black">
                  <CertificateIcon className="text-white" />
                  <div className="text-sm font-mono text-white">Paper</div>
                </ActionButton>
              </div>
            )}
          </div>
          <p
            className={`text-gray-700 text-base ${
              images.length > 0 ? "line-clamp-5" : ""
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
