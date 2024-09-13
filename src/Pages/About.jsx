import Expertise from "../Components/Expertise";
import TechStack from "../Components/TechStack";
import aboutImg from "../assets/aboutImg.svg"; // Adjust the path as needed

const About = () => {
  return (
    <div className="container mx-auto lg:px-12 px-4 py-32">
      <div className="flex flex-col lg:flex-row">
        {/* About Content */}
        <div className="flex-1 lg:pr-8 mb-16 lg:mb-0">
          <section className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-left">About Me</h1>
            <p className="text-base lg:text-lg text-left mb-6">
              I am a passionate and skilled developer with expertise in both
              frontend and backend technologies. I thrive in fast-paced environments
              and love to tackle challenging problems. With a keen eye for detail
              and a drive for continuous learning, I am always eager to explore new
              technologies and improve my skills.
            </p>
            <p className="text-base lg:text-lg text-left">
              My background includes working on a variety of projects, from complex
              web applications to innovative tools. I am committed to delivering
              high-quality results and collaborating effectively with teams to
              achieve shared goals.
            </p>
          </section>

          <TechStack />
        </div>

        {/* About Image */}
        <div className="hidden lg:block flex-1">
          <div className="flex items-center justify-center h-full">
            <img
              src={aboutImg}
              alt="About"
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <section className="mt-4 lg:mt-14">
        <Expertise />
      </section>
    </div>
  );
};

export default About;
