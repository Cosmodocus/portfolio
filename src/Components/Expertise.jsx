import { useEffect } from "react";
import { expertiseData } from "../data/expertise";
import { motion, useAnimation } from "framer-motion";

const Expertise = () => {
  const borderControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    // Start the glowing effect for the border
    borderControls.start({
      borderColor: ["#4ae6e6", "#1fc6c6", "#4ae6e6"], // Change to your desired colors
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    // Start the glowing effect for the title
    titleControls.start({
      opacity: [2, 0.7, 1], // Fading effect for the title
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [borderControls, titleControls]);

  return (
    <div className="relative container mx-auto px-6 py-32 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="md:text-6xl text-4xl font-bold mb-12 text-center">
        My <span className="text-transparent bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text">work experience</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-auto">
        {expertiseData.map((item) => (
          <motion.div
            key={item.title}
            className={`flex flex-col items-center p-8 rounded-xl border shadow-lg transition-transform ${
              item.title === "Frontend Developer" ? "border-8 border-teal-600" : "border-gray-300"
            }`}
            animate={item.title === "Frontend Developer" ? borderControls : {}}
          >
            <img src={item.icon} alt={item.title} className="w-32 h-32 mb-4 object-contain" />
            <motion.span
              className={`text-2xl font-semibold mb-2 ${
                item.title === "Frontend Developer" ? "text-teal-600 text-4xl" : "text-3xl"
              }`}
              animate={item.title === "Frontend Developer" ? titleControls : {}}
            >
              {item.title}
            </motion.span>
            <p className="text-base text-center text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
