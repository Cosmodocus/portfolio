import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className="w-full flex flex-col items-center text-center justify-center h-screen gap-8 py-[300px]">
      <motion.h1
        className="md:text-8xl text-4xl mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let&apos;s Work Together
      </motion.h1>
      <motion.p
        className="md:text-3xl text-xl text-center md:leading-[42px] md:w-[1200px] mx-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Have a project in mind or just want to say hello? I&apos;d love to hear from
        you! Feel free to reach out to me using the contact information below:
      </motion.p>
      <motion.ul
        className="border p-8 rounded-xl shadow-md text-left flex flex-col gap-4 mx-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[
          { icon: <MdEmail size={25} />, text: 'homayunir@gmail.com', link: null },
          { icon: <FaPhoneAlt size={25} />, text: '(647)-535-4495', link: null },
          {
            icon: <FaLinkedin size={30} />,
            text: 'https://www.linkedin.com/in/reza-homayuni-0503861b6/',
            link: 'https://www.linkedin.com/in/reza-homayuni-0503861b6/',
          },
          {
            icon: <FaGithub size={30} />,
            text: 'https://github.com/Cosmodocus',
            link: 'https://github.com/Cosmodocus',
          },
          {
            icon: <FaTwitter size={30} />,
            text: 'https://twitter.com/Rez_Technology',
            link: 'https://twitter.com/Rez_Technology',
          },
        ].map(({ icon, text, link }, index) => (
          <motion.li
            key={index}
            className="md:text-2xl flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {link ? (
              <Link to={link} target="_blank" className="flex items-center gap-2">
                {icon} {text}
              </Link>
            ) : (
              <>
                {icon} {text}
              </>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Contacts;
