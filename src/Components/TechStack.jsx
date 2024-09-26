import { skills } from "../constants";

const techStackItems = [
  "nextjs", "react", "typescript", "redux",
  "tailwind", "mui", "nodejs", "firebase",
];

const TechStack = () => {
  return (
    <section className="mb-16 bg-opacity-50 bg-black px-2 rounded-xl py-4">
      <h2 className="text-base lg:text-2xl font-bold mb-6 text-left pt-4 text-white">Tech Stack</h2>
      <div className="flex flex-wrap gap-6">
        {techStackItems.map((item) => (
          <div
            key={item}
            className=" bg-white flex items-center justify-center px-5 py-2 border-2 border-gray-300 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={skills[item]}
              alt={item}
              className="w-5 h-5 lg:w-10 lg:h-10 mr-2 transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <span className="text-xs lg:text-sm font-medium capitalize">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
