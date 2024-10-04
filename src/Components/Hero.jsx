import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import ProfilePic from '../assets/profile.jpg';

const Hero = ({ scrollToSection }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textAnimation = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-light dark:bg-dark py-10'>
      <div className='flex flex-col md:flex-row items-center gap-8 p-6 justify-center relative'>

        {/* Text Section */}
        <div className='flex flex-col gap-2 text-left md:w-1/2'>
          <motion.p
            className='text-lg md:text-2xl font-semibold'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0.1 }}
          >
            Welcome to my portfolio!
          </motion.p>

          <motion.h1
            className='text-4xl md:text-7xl font-bold mb-4'
            variants={textAnimation}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Crafting <span>Beautiful</span>
            <br /> <span>Digital</span> Experiences
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl mb-4'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0.4 }}
          >
            My name is Reza, and I am a <span className='font-semibold text-coral'>Frontend Developer </span>
            based in Canada, dedicated to turning ideas into beautifully designed and functional web applications.
          </motion.p>

          <motion.div
            className='flex justify-start gap-4 pt-2'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button className='highlight-btn md:text-xl text-md border-4 rounded-md px-4 py-2'>
              <a className='flex items-center gap-2' onClick={() => scrollToSection('cta')}>
                Contact me
              </a>
            </button>
            <button className='md:text-xl text-md border-4 rounded-md px-4 py-2'>
              <a
                href='https://github.com/Cosmodocus'
                className='flex items-center gap-2'
                target='_blank'
                rel="noopener noreferrer"
              >
                Explore my Github!
                <FaGithub />

              </a>
            </button>
          </motion.div>
        </div>

        {/* Profile Image Section */}
        <div className='relative hidden md:block'>
          {/* Circle Background */}
          <div className='profile-background'></div>
          <motion.img
            src={ProfilePic}
            alt='Profile'
            className='w-52 md:w-80 rounded-full shadow-lg transform hover:scale-105'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
