import TechStack from "../Components/TechStack";
import aboutImg from "../assets/aboutImg.svg";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-200 py-32">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center">
          {/* About Image */}
          <div className="hidden lg:block flex-1">
            <img src={aboutImg} alt="About" className="object-contain max-w-full h-auto" />
          </div>
          {/* About Content */}
          <div className="flex-1 lg:pl-8 mb-16 lg:mb-0">
            <section className="mb-6">
              <div className="bg-opacity-50 bg-black rounded-xl p-4 space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-custom-white text-shadow text-center md:text-left">
                  About Me
                </h1>
                <p className="text-base lg:text-lg mb-4 text-custom-white rounded text-shadow text-left">
                  I&apos;m a passionate frontend developer with expertise in building dynamic and responsive web applications.
                  My journey in tech began with a fascination for creating seamless user experiences using{" "}
                  <span className="font-bold">React</span> and{" "}
                  <span className="font-bold">Next.js</span>.
                </p>
                <p className="text-base lg:text-lg text-left text-custom-white text-shadow">
                  With a solid background in collaborating on diverse projects, I thrive in fast-paced environments
                  where I can leverage my skills in frontend technologies and contribute to impactful solutions.
                </p>
              </div>
            </section>
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
