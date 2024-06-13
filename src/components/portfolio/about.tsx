import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GitHubIcon from "../svg/github_icon";
import ActionButton from "../ui/actionbutton";
import LinkedInIcon from "../svg/linkedin_icon";
import DocumentIcon from "../svg/document_icon";

const aboutData = {
  title:
    "I'm Deepak Rajendran, a software developer with a passion for building innovative solutions.",
  points: [
    "Transforming ideas into innovative solutions, I'm a driven software developer with a passion for building cutting-edge applications.",
    "With a strong foundation in computer science and 1.7 years of experience, I excel in web development, backend engineering, and cloud technologies.",
    "Let's connect and bring your vision to life!",
  ],
};

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
        <div className="md:flex-direction-row flex-direction-column items-center md:flex">
          <Avatar className="m-4 mx-auto h-40 w-40 md:mb-0 md:h-60 md:w-60 md:text-center">
            <AvatarImage src="https://avatars.githubusercontent.com/u/22258487?v=4" />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div className="ml-0 md:ml-12">
            <p className="text-lg font-bold">{aboutData.title}</p>
            {aboutData.points.map((point, index) => (
              <p
                className="mt-2 text-gray-600 dark:text-gray-200"
                key={`${index}-about`}
              >
                {point}
              </p>
            ))}
            <div className="mt-2 flex flex-row gap-2">
              {githubLink && (
                <ActionButton link={githubLink} key={"github-header"}>
                  <GitHubIcon fill="white" />
                  GitHub
                </ActionButton>
              )}
              {linkedinLink && (
                <ActionButton link={linkedinLink} key={"linkedin-header"}>
                  <LinkedInIcon className="dark:text-white" fill="white" />
                  LinkedIn
                </ActionButton>
              )}
              {resumeLink && (
                <ActionButton link={resumeLink} key={"resume-header"}>
                  <DocumentIcon className="dark:text-white" />
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
