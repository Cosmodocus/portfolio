import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import ProfilePic from '../assets/profile.jpg';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
      <div className='flex flex-col gap-6 text-center items-center'>
        <motion.img
          src={ProfilePic}
          alt='Profile'
          className='w-40 md:w-64 rounded-full border-4 '
          variants={fadeInUp}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
        />
        <motion.h1
          className='text-3xl md:text-6xl font-bold'
          variants={fadeInUp}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to my Portfolio!
        </motion.h1>
        <motion.p
          className='text-xl md:text-2xl'
          variants={fadeInUp}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1, delay: 0.4 }}
        >
          My name is Reza and I&apos;m a developer based in Canada with expertise in developing{' '}
          <span className='font-semibold text-coral'>Frontend & Fullstack</span>
          {' '}web applications.
        </motion.p>
        <motion.div
          className='flex items-center justify-center gap-4'
          variants={fadeInUp}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className='md:text-xl text-lg border-4 rounded-full px-4 py-2'>
            <Link
              to={'/details'}
              className='flex items-center gap-2'
            >
              <FaFolderOpen />
              Check out my Projects!
            </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
