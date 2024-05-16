import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AboutType = {};

const About = (props: AboutType) => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="md:flex md:flex-direction-row flex-direction-column items-start mb-8">
          <Avatar className="h-40 w-40 md:h-60 md:w-60 m-4 md:mb-0 md:text-center mx-auto">
            <AvatarImage src="https://avatars.githubusercontent.com/u/22258487?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="md:ml-4 ml-0">
            <p className="text-lg font-bold">
              I'm Deepak Rajendran, a software developer with a passion for
              building innovative solutions.
            </p>
            <p className="text-gray-600">
              Transforming ideas into innovative solutions, I'm a driven
              software developer with a passion for building cutting-edge
              applications. With a strong foundation in computer science and 1.7
              years of experience, I excel in web development, backend
              engineering, and cloud technologies. Let's connect and bring your
              vision to life!
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
