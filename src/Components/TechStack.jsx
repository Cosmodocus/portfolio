import { skills } from "../constants";

const techStackItems = [
  "html", "css", "javascript", "typescript", "react", "nextjs", "redux",
  "tailwind", "mui", "nodejs", "firebase", "postgresql", "vscode", "git",
  "github", "aws", "jest", "postman", "playwright"
];

const TechStack = () => {
  return (
    <section className="mb-16">
      <h2 className="text-base lg:text-lg font-bold mb-6 text-left">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {techStackItems.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center px-3 py-1.5 border-2 border-gray-300 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={skills[item]}
              alt={item}
              className="w-5 h-5 lg:w-6 lg:h-6 mr-2 transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <span className="text-xs lg:text-sm font-medium capitalize">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
