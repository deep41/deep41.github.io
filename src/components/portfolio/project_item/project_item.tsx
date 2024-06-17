import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../ui/carousel';
import { Card, CardContent } from '../../ui/card';
import ActionButton from '../../ui/actionbutton';
import GitHubIcon from '../../svg/github_icon';
import './project_item.css';
import DocumentIcon from '@/components/svg/document_icon';
import SlidesIcon from '@/components/svg/slides_icon';
import LinkIcon from '@/components/svg/link_icon';
import VideoIcon from '@/components/svg/video_icon';
import CertificateIcon from '@/components/svg/certificate_icon';
import { cn } from '@/lib/utils';

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
      <div
        className={cn(
          'overflow-hidden rounded-md bg-white outline outline-[0.2px] outline-gray-200 transition hover:shadow-md',
          'dark:bg-black dark:outline dark:outline-[0.2px] dark:outline-zinc-100',
        )}
      >
        <Carousel className="m-0 w-full p-0">
          <CarouselContent>
            {images.map((item, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video w-full items-center justify-center overflow-y-hidden p-0">
                    <img className="w-full" src={item} alt={name} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 disabled:hidden dark:bg-black dark:outline dark:outline-[0.2px] dark:outline-zinc-100" />
          <CarouselNext className="right-2 disabled:hidden dark:bg-black dark:outline dark:outline-[0.2px] dark:outline-zinc-100" />
        </Carousel>
        <div className="px-6 py-4">
          <div className="mb-1 pr-2 text-xl font-bold">{name}</div>
          <div className="mb-2 flex flex-row flex-wrap gap-x-2 gap-y-2">
            {github && (
              <div className="no-padding-div">
                <ActionButton link={github} className="bg-black">
                  <GitHubIcon className="" fill="white" />
                  <div className="font-mono text-sm text-white">GitHub</div>
                </ActionButton>
              </div>
            )}
            {demo && (
              <div className="no-padding-div">
                <ActionButton link={demo} className="bg-black">
                  <LinkIcon className="text-white" />
                  <div className="font-mono text-sm text-white">Demo</div>
                </ActionButton>
              </div>
            )}
            {report && (
              <div className="no-padding-div">
                <ActionButton link={report} className="bg-black">
                  <DocumentIcon className="text-white" />
                  <div className="font-mono text-sm text-white">Report</div>
                </ActionButton>
              </div>
            )}
            {slides && (
              <div className="no-padding-div">
                <ActionButton link={slides} className="bg-black">
                  <SlidesIcon />
                  <div className="font-mono text-sm text-white">Slides</div>
                </ActionButton>
              </div>
            )}
            {video && (
              <div className="no-padding-div">
                <ActionButton link={video} className="bg-black">
                  <VideoIcon className="text-white" />
                  <div className="font-mono text-sm text-white">Video</div>
                </ActionButton>
              </div>
            )}
            {certificate && (
              <div className="no-padding-div">
                <ActionButton link={certificate} className="bg-black">
                  <CertificateIcon className="text-white" />
                  <div className="font-mono text-sm text-white">Paper</div>
                </ActionButton>
              </div>
            )}
          </div>
          <p
            className={`text-base text-gray-700 dark:text-gray-200 ${
              images.length > 0 ? 'line-clamp-5' : ''
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
