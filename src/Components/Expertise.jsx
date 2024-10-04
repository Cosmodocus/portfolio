import { useEffect } from "react";
import { expertiseData } from "../data/expertise";
import { motion, useAnimation } from "framer-motion";

const Expertise = () => {
  const borderControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    // Start the glowing effect for the border
    borderControls.start({
      borderColor: ["#9ee3e3", "#1fc6c6", "#9ee3e3"], // Lighter colors for better visibility
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    // Start the glowing effect for the title
    titleControls.start({
      opacity: [1, 0.7, 1], // Subtle opacity range for the title
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [borderControls, titleControls]);

  return (
    <div className="relative container mx-auto px-6 py-32 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="md:text-6xl text-4xl font-bold mb-6 text-center">
        My <span className="text-transparent bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text">work experience</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mx-auto px-4">
        {/* Mapping over expertiseData */}
        {expertiseData.map((item) => (
          <motion.div
            key={item.title}
            className={`flex flex-col items-start justify-center px-6 py-6 rounded-lg shadow-lg transition-transform border-8 border-teal-600 glow-effect`}
            animate={borderControls}
          >
            <img src={item.icon} alt={item.title} className="w-36 h-36 mb-2 object-contain md:w-48 md:h-48" />
            <motion.span
              className={`text-3xl md:text-3xl font-semibold mb-1 text-teal-600`}
              animate={titleControls}
            >
              {item.title}
            </motion.span>
            <p className="text-base text-gray-700 mb-4 leading-relaxed md:text-xl">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
