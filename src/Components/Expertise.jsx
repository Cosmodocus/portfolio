import { useEffect } from "react";
import { expertiseData } from "../data/expertise";
import { motion, useAnimation } from "framer-motion";

const Expertise = () => {
  const borderControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    // Start the glowing effect for the border
    borderControls.start({
      borderColor: ["#9ee3e3", "#1fc6c6", "#9ee3e3"], // Use lighter colors for better visibility in dark mode
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    // Start the glowing effect for the title
    titleControls.start({
      opacity: [1, 0.7, 1], // Use a more subtle opacity range for the title
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mx-auto px-4">
        {/* Frontend Developer Card */}
        <motion.div
          key="Frontend Developer"
          className={`flex flex-col items-start justify-center px-6 rounded-lg shadow-lg transition-transform border-8 border-teal-600 md:col-span-1 md:row-span-2 mb-4 md:mb-0 glow-effect`} // Add glow-effect class
          animate={borderControls}
        >
          <img src={expertiseData[1].icon} alt={expertiseData[1].title} className="w-36 h-36 mb-2 object-contain md:w-48 md:h-48" />
          <motion.span
            className={`text-3xl md:text-6xl font-semibold mb-1 text-teal-600`}
            animate={titleControls}
          >
            {expertiseData[1].title}
          </motion.span>
          <p className="text-base text-gray-700 mb-4 leading-relaxed md:text-xl">{expertiseData[1].description}</p>
        </motion.div>

        {/* Other Cards stacked vertically on the right */}
        <div className="flex flex-col justify-between h-full">
          {/* Fullstack Developer Card */}
          {expertiseData
            .filter(item => item.title === "Fullstack Developer")
            .map((item) => (
              <motion.div
                key={item.title}
                className={`flex flex-col items-start px-6 rounded-lg border shadow-lg transition-transform border-gray-300 mb-4`}
              >
                <img src={item.icon} alt={item.title} className="w-32 h-32 mb-2 object-contain" />
                <span className="text-2xl md:text-3xl font-semibold mb-1">{item.title}</span>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">{item.description}</p>
              </motion.div>
          ))}

          {/* Team Lead Card */}
          {expertiseData
            .filter(item => item.title === "Team Lead")
            .map((item) => (
              <motion.div
                key={item.title}
                className={`flex flex-col items-start px-6 rounded-lg border shadow-lg transition-transform border-gray-300`}
              >
                <img src={item.icon} alt={item.title} className="w-32 h-32 mb-2 object-contain md:w-36 md:h-36" />
                <span className="text-2xl md:text-3xl font-semibold mb-1">{item.title}</span>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">{item.description}</p>
              </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
