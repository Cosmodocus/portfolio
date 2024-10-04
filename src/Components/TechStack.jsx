import { skills } from "../constants";
import { motion } from "framer-motion";

const techStackItems = [
  "react",
  "nextjs",
  "typescript",
  "nodejs",
  "firebase",
  "postgresql",
];

const TechStack = () => {
  return (
    <section className="bg-opacity-50 bg-black p-8 rounded-xl shadow-lg">
      <h2 className="text-lg lg:text-3xl font-bold mb-6 text-center text-white">
        My Tech Stack
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {techStackItems.map((item, index) => (
          <motion.div
            key={item}
            className="relative flex items-center justify-center p-4 bg-white rounded-full shadow-lg transition-transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
          >
            <img
              src={skills[item]}
              alt={item}
              className="w-12 h-12 transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <motion.div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 pointer-events-none opacity-0 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalizes first letter */}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
