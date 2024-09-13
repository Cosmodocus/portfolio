import { skills } from "../constants";

const categories = [
  { title: "Frontend", items: ["html", "css", "javascript", "typescript", "react", "nextjs", "redux", "tailwind", "mui"] },
  { title: "Backend", items: ["nodejs", "firebase", "postgresql"] },
  { title: "Tools & Platforms", items: ["vscode", "git", "github", "aws"] },
  { title: "Testing", items: ["jest", "postman", "playwright"] },
];

const TechStack = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      {categories.map((category) => (
        <div key={category.title}>
          <h3 className='text-2xl font-semibold mb-4 text-blue-600'>{category.title}</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {category.items.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center p-4 border-2 border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'
              >
                <img
                  src={skills[item]}
                  alt={item}
                  className='w-16 h-16 mb-2 transition-opacity duration-300 ease-in-out hover:opacity-80'
                />
                <span className='text-sm font-medium text-center capitalize'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
