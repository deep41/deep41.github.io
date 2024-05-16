import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const aboutData = {
  title:
    "I'm Deepak Rajendran, a software developer with a passion forbuilding innovative solutions.",
  points: [
    "Transforming ideas into innovative solutions, I'm a driven software developer with a passion for building cutting-edge applications.",
    "With a strong foundation in computer science and 1.7 years of experience, I excel in web development, backend engineering, and cloud technologies.",
    "Let's connect and bring your vision to life!",
  ],
};

type AboutType = {};

const About = (props: AboutType) => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="md:flex md:flex-direction-row flex-direction-column items-center mb-8">
          <Avatar className="h-40 w-40 md:h-60 md:w-60 m-4 md:mb-0 md:text-center mx-auto">
            <AvatarImage src="https://avatars.githubusercontent.com/u/22258487?v=4" />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div className="md:ml-12 ml-0">
            <p className="text-lg font-bold">{aboutData.title}</p>
            {aboutData.points.map((point) => (
              <p className="text-gray-600 mt-2 ">{point}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
