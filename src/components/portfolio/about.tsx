import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import GitHubIcon from '../svg/github_icon';
import ActionButton from '../ui/actionbutton';
import LinkedInIcon from '../svg/linkedin_icon';
import DocumentIcon from '../svg/document_icon';

type AboutType = {
  linkedinLink?: string;
  githubLink?: string;
  resumeLink?: string;
};

const About = (props: AboutType) => {
  const { linkedinLink, githubLink, resumeLink } = props;

  return (
    <>
      <div className="px-6 py-2">
        <div className="md:flex-direction-row flex-direction-column items-top md:flex">
          <Avatar className="m-4 mx-auto h-40 w-40 md:mb-0 md:h-60 md:w-60 md:text-center">
            <AvatarImage src="https://avatars.githubusercontent.com/u/22258487?v=4" />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div className="ml-0 md:ml-12">
            <p className="mt-4">
              I'm <span className="font-bold">Deepak Rajendran</span>, a
              software developer with a passion for creating innovative,
              high-performance, and scalable applications.
            </p>
            <p className="mt-2">
              I love good design and am committed to solving complex problems. I
              see the big picture and approach problems methodically, breaking
              them down into manageable pieces to ensure successful project
              completion.
            </p>
            <p className="mt-2">
              Currently, I am working with my teammates at NCSU to create a
              <span className="font-semibold"> chatbot</span> with
              Retrieval-Augmented Generation (RAG) to assist students and
              professors.
            </p>
            <p className="mt-2">
              When I’m not coding, you’ll find me immersed in a good book,
              enjoying a movie, hiking the great outdoors, or gaming with
              friends.
            </p>
            <div className="mt-2 flex flex-row gap-2">
              {githubLink && (
                <ActionButton link={githubLink} key={'github-header'}>
                  <GitHubIcon className="text-black dark:text-white" />
                  GitHub
                </ActionButton>
              )}
              {linkedinLink && (
                <ActionButton link={linkedinLink} key={'linkedin-header'}>
                  <LinkedInIcon className="text-black dark:text-white" />
                  LinkedIn
                </ActionButton>
              )}
              {resumeLink && (
                <ActionButton link={resumeLink} key={'resume-header'}>
                  <DocumentIcon className="text-black dark:text-white" />
                  Resume
                </ActionButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
