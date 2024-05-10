import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AboutType = {};

const About = (props: AboutType) => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="md:flex md:flex-direction-row flex-direction-column items-start mb-8">
          <Avatar className="h-40 w-40 md:h-60 md:w-60 m-4 md:mb-0 md:text-center mx-auto">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="md:ml-4 ml-0">
            <p className="text-lg font-bold">
              I'm a passionate web developer with a love for building responsive
              and accessible interfaces.
            </p>
            <p className="text-gray-600">
              With over 5 years of experience in the field, I've honed my skills
              in HTML, CSS, and JavaScript. With over 5 years of experience in
              the field, I've honed my skills in HTML, CSS, and JavaScript. With
              over 5 years of experience in the field, I've honed my skills in
              HTML, CSS, and JavaScript. With over 5 years of experience in the
              field, I've honed my skills in HTML, CSS, and JavaScript.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me hiking or playing guitar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
