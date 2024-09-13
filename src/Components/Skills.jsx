import { skills } from "../constants";

const Skills = () => {
  return (
    <div className='container flex flex-col items-center mx-auto px-4 py-32'>
      <h1 className='text-4xl font-bold mb-8 text-center'>My Skills</h1>

      <div className='flex gap-8'>
        <div className='border border-gray-200 rounded-lg p-6 shadow-lg'>
          <div className='flex flex-wrap justify-center items-center'>
            {Object.entries(skills).map(([key, src]) => (
              <div key={key} className='flex flex-col items-center mx-4 my-2'>
                <img src={src} alt={key} className='w-16 h-16' />
                <span className='text-sm mt-2 uppercase'>{key}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
