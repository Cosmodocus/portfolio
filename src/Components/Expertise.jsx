import { expertiseData } from "../data/expertise";

const Expertise = () => {
  return (
    <div className='container mx-auto py-16'>
      <h2 className='text-4xl font-bold mb-12 text-center'>Areas of Expertise</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
        {expertiseData.map((item) => (
          <div
            key={item.title}
            className='flex flex-col items-center p-8 border rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
          >
            <img
              src={item.icon}
              alt={item.title}
              className='w-32 h-32 mb-4 object-contain'
            />
            <h3 className='text-2xl font-semibold mb-2'>{item.title}</h3>
            <p className='text-base text-center'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
