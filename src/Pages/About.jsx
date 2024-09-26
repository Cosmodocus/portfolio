import { motion } from 'framer-motion';
import Expertise from "../Components/Expertise";
import TechStack from "../Components/TechStack";
import aboutImg from "../assets/aboutImg.svg";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="container mx-auto lg:px-12 px-4 py-32">
      <div className="flex flex-col lg:flex-row">
        {/* About Content */}
        <motion.div
          className="flex-1 lg:pr-8 mb-16 lg:mb-0"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <section className="mb-6">
            <motion.h1
              className="text-3xl lg:text-4xl font-bold mb-6 text-left"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="text-base lg:text-lg text-left mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               I am a hardworking and dedicated frontend developer with a strong passion for creating aesthetic and functional client-side applications using <span className="font-bold">React</span > and <span className="font-bold">Next.js</span>
            </motion.p>
            <motion.p
              className="text-base lg:text-lg text-left"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             My background involves contributing to open-source projects, often contributing to the frontend development of the application, as well as leading teams of developers under my supervision.
            </motion.p>
          </section>

          <TechStack />
        </motion.div>

        {/* About Image */}
        <motion.div
          className="hidden lg:block flex-1"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center h-full">
            <img
              src={aboutImg}
              alt="About"
              className="object-contain max-w-full h-auto"
            />
          </div>
        </motion.div>
      </div>

      <section className="mt-4 lg:mt-14">
        <Expertise />
      </section>
    </div>
  );
};

export default About;
