import expertise1 from "../assets/expertise1.svg";
import expertise2 from "../assets/expertise2.svg";
import expertise3 from "../assets/expertise3.svg";

const expertiseData = [
  {
    title: "Frontend Developer",
    description: "Specialized in creating responsive and interactive user interfaces using modern frontend technologies.",
    icon: expertise1
  },
  {
    title: "Fullstack Developer",
    description: "Experienced in building end-to-end solutions, handling both frontend and backend development.",
    icon: expertise2,
  },
  {
    title: "Tech Lead",
    description: "Proven track record of leading development teams, managing projects, and guiding technical decisions.",
    icon: expertise3,
  },
];

const Expertise = () => {
  return (
    <div className='container mx-auto  py-16'>
      <h2 className='text-4xl font-bold mb-12 text-center'>Areas of Expertise</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
        {expertiseData.map((item) => (
          <div
            key={item.title}
            className='flex items-start p-8 border rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
          >
            <img src={item.icon} alt={item.title} className='w-32 h-32 mr-6 object-contain' />
            <div className='flex flex-col'>
              <h3 className='text-2xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-base'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
