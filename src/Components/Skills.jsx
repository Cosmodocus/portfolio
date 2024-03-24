import React from 'react';
import {
	FaHtml5,
	FaJs,
	FaReact,
	FaCss3Alt,
	FaGithub,
	FaCode,
	FaBug,
	FaServer,
	FaFileAlt,
	FaGlobeAmericas,
} from 'react-icons/fa';
import {
	SiTypescript,
	SiTailwindcss,
	SiReactrouter,
	SiVite,
	SiNetlify,
} from 'react-icons/si';

const Skills = () => {
	return (
		<div className='container mx-auto px-4 py-32'>
			<h1 className='text-4xl font-bold mb-8 text-center '>Skills</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* Frontend Technologies Section */}
				<div className='border border-gray-200 rounded-lg p-6  shadow-lg'>
					<h2 className='text-xl font-semibold mb-4 '>Frontend Technologies</h2>
					<div className='flex flex-wrap justify-center items-center'>
						{/* HTML5 */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaHtml5 className='text-5xl text-red-500' />
							<span className='text-sm mt-2'>HTML5</span>
						</div>
						{/* CSS3 */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaCss3Alt className='text-5xl text-blue-500' />
							<span className='text-sm mt-2'>CSS3</span>
						</div>
						{/* JavaScript */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaJs className='text-5xl text-yellow-500' />
							<span className='text-sm mt-2'>JavaScript</span>
						</div>
						{/* React */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaReact className='text-5xl text-blue-400' />
							<span className='text-sm mt-2'>React</span>
						</div>
						{/* TypeScript */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<SiTypescript className='text-5xl text-blue-600' />
							<span className='text-sm mt-2'>TypeScript</span>
						</div>
						{/* Tailwind CSS */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<SiTailwindcss className='text-5xl text-blue-300' />
							<span className='text-sm mt-2'>Tailwind CSS</span>
						</div>
						{/* React Router */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<SiReactrouter className='text-5xl  text-orange-500' />
							<span className='text-sm mt-2'>React Router</span>
						</div>
						{/* Vite */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<SiVite className='text-5xl text-purple-600' />
							<span className='text-sm mt-2'>Vite</span>
						</div>
						{/* Git */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaGithub className='text-5xl   rounded-full' />
							<span className='text-sm mt-2'>Git</span>
						</div>
						{/* Netlify */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<SiNetlify className='text-5xl text-teal-500' />
							<span className='text-sm mt-2'>Netlify</span>
						</div>
					</div>
				</div>
				{/* Additional Expertise Section */}
				<div className='border border-gray-200 rounded-lg p-6  shadow-lg'>
					<h2 className='text-xl font-semibold mb-4 '>Additional Expertise</h2>
					<div className='flex flex-wrap justify-center items-center'>
						{/* Icons and names for additional expertise */}
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaCode className='text-5xl text-purple-500' />
							<span className='text-sm mt-2'>Asynchronous Programming</span>
						</div>
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaBug className='text-5xl text-red-500' />
							<span className='text-sm mt-2'>Troubleshooting/Debugging</span>
						</div>
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaServer className='text-5xl text-green-500' />
							<span className='text-sm mt-2'>API Integration</span>
						</div>
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaFileAlt className='text-5xl text-blue-500' />
							<span className='text-sm mt-2'>Documentation</span>
						</div>
						<div className='flex flex-col items-center mx-4 my-2'>
							<FaGlobeAmericas className='text-5xl text-orange-500' />
							<span className='text-sm mt-2'>DOM Manipulation</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
