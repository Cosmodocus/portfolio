import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import ProfilePic from '../assets/profile.jpg';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 justify-center'>
        {/* Text Section */}
        <div className='flex flex-col gap-2 text-left md:w-1/2'>
          <motion.p
            className='text-xl md:text-2xl font-semibold' // Styled header
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0.1 }}
          >
            Hello I&apos;m
          </motion.p>
          <motion.span
            className='text-2xl md:text-3xl font-bold' // Styled header
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0.2 }}
          >
            Reza Homayuni
          </motion.span>
          <motion.h1
            className='text-4xl md:text-7xl font-bold mb-4' // Main title
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0.3 }}
          >
            Crafting Beautiful Digital Experiences!
          </motion.h1>
          <motion.p
            className='text-xl md:text-2xl mb-4' // Body text
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0.4 }}
          >
            I am passionate <span className='font-semibold text-coral'>Frontend Developer </span>
            based in Canada, dedicated to turning ideas into beautifully designed, functional applications.
          </motion.p>
          <motion.div
            className='flex items-center  md:justify-start gap-4 pt-2'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button className='md:text-xl text-lg border-4 rounded-full px-4 py-2'>
              <a
                href='https://github.com/Cosmodocus'
                className='flex items-center gap-2'
                target='_blank'
                rel="noopener noreferrer"
              >
                <FaGithub />
                Explore my Github!
              </a>
            </button>
          </motion.div>
        </div>

        {/* Profile Image Section */}
        <motion.img
          src={ProfilePic}
          alt='Profile'
          className='w-52 md:w-80 rounded-full border-4 md:block hidden'
          variants={fadeInUp}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
