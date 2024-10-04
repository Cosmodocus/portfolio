import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center gap-8 py-[300px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-200 opacity-40"></div>
      <motion.h1
        className="md:text-7xl text-4xl font-bold relative"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch!
      </motion.h1>
      <motion.div
        className="relative"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="md:text-2xl text-xl">Reach out via any of the platforms below.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 relative max-w-6xl px-4">
        {/* Email */}
        <div className="flex flex-col items-center bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <a href="mailto:homayunir@gmail.com" className="text-3xl text-teal-500 hover:text-teal-700">
            <MdEmail />
          </a>
          {/* Hide text on mobile screens */}
          <span className="text-base md:text-lg text-gray-800 mt-2 w-full text-center px-2">
            <span className="block md:hidden">homayunir@gmail.com</span>
          </span>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <a href="tel:+16475354495" className="text-3xl text-teal-500 hover:text-teal-700">
            <FaPhoneAlt />
          </a>
          {/* Hide text on mobile screens */}
          <span className="text-base md:text-lg text-gray-800 mt-2 w-full text-center px-2 hidden">
            <span className="block md:hidden">(647) 535-4495</span>
          </span>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <a href="https://linkedin.com/in/reza-homayuni-0503861b6" target="_blank" rel="noopener noreferrer" className="text-3xl text-teal-500 hover:text-teal-700">
            <FaLinkedin />
          </a>
          {/* Hide text on mobile screens */}
          <span className="text-base md:text-lg text-gray-800 mt-2 w-full text-center px-2">
            <span className="block md:hidden">LinkedIn</span>
          </span>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <a href="https://github.com/Cosmodocus" target="_blank" rel="noopener noreferrer" className="text-3xl text-teal-500 hover:text-teal-700">
            <FaGithub />
          </a>
          {/* Hide text on mobile screens */}
          <span className="text-base md:text-lg text-gray-800 mt-2 w-full text-center px-2">
            <span className="block md:hidden">GitHub</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
