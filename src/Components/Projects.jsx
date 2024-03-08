import React from 'react';
import Finance from '../assets/finance.png';
import Pokedex from '../assets/Pokedex.png';
import Netflix from '../assets/netflix.png';
import Youtube from '../assets/youtube.png';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center py-32'>
			<h1 className='text-4xl font-bold pb-8 '>Featured Projects</h1>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-16'>
				{/* PROJECT 1 */}
				<div className='mx-2 flex flex-col  items-center text-center gap-2 border rounded-lg p-8 shadow-md'>
					<img
						className='border-4 rounded-lg w-[400px] h-[200px]'
						src={Finance}
						alt=''
					/>
					<h2 className='text-2xl  font-bold'>Landing Page</h2>
					<p className='text-lg'>
						A mock landing page focused on the data finance niche.
					</p>
					<div>
						<h3 className='text-lg font-semibold'>Technologies Used:</h3>
						<p> React, Tailwind CSS</p>
					</div>
					<div className='flex gap-2'>
						<button className='border-4 rounded-full py-2 px-4'>
							<Link
								className='flex items-center gap-2'
								to={
									'https://github.com/Cosmodocus/finance-responsive-landing-page'
								}
								target='_blank'
							>
								<FaGithub size={25} />
								GitHub
							</Link>
						</button>
						<button className='border-4 rounded-full py-2 px-4'>
							Live Demo
						</button>
					</div>
				</div>
				{/* PROJECT 2 */}
				<div className=' mx-2 flex flex-col  items-center text-center gap-2 border rounded-lg p-8 shadow-md'>
					<img
						className='border-4 rounded-lg w-[400px] h-[200px]'
						src={Pokedex}
						alt=''
					/>
					<h2 className='text-2xl font-bold'>National Pokedex</h2>
					<p className=' text-lg '>
						A national pokedex that contains data and stats of 1008 Pokemon
					</p>
					<div>
						<h3 className='text-lg font-semibold'>Technologies Used:</h3>
						<p>HTML, CSS, JavaScript, PokeAPI</p>
					</div>
					<div className='flex gap-2'>
						<button className='border-4 rounded-full py-2 px-4'>
							<Link
								className='flex items-center gap-2'
								to={'https://github.com/Cosmodocus/national-pokedex'}
								target='_blank'
							>
								<FaGithub size={25} />
								GitHub
							</Link>
						</button>
						<button className='border-4 rounded-full py-2 px-4'>
							<a
								href='https://reztech-pokedex.netlify.app/'
								target='_blank'
							>
								Live Demo
							</a>
						</button>
					</div>
				</div>
				{/* PROJECT 3 */}
				<div className=' md:md-0 flex flex-col  items-center text-center gap-2 border rounded-lg p-8 shadow-md'>
					<img
						className='border-4 rounded-lg w-[400px] h-[200px]'
						src={Netflix}
						alt=''
					/>
					<h2 className='text-2xl font-bold'>Netflix Clone</h2>
					<p className=' text-lg '>
						A replica of the popular Netflix streaming website
					</p>
					<div>
						<h3 className='text-lg font-semibold'>Technologies Used:</h3>
						<p> React, Tailwind CSS, Firebase, Axios, TMDB API</p>
					</div>
					<div className='flex gap-2'>
						<button className='border-4 rounded-full py-2 px-4'>
							<Link
								className='flex items-center gap-2'
								to={'https://github.com/Cosmodocus/netflix-clone'}
								target='_blank'
							>
								<FaGithub size={25} />
								GitHub
							</Link>
						</button>
						<button className='border-4 rounded-full py-2 px-4'>
							Live Demo
						</button>
					</div>
				</div>
				{/* PROJECT 4 */}
				<div className=' mx-2 flex flex-col items-center text-center gap-2 border rounded-lg p-8 shadow-md'>
					<img
						className='border-4 rounded-lg w-[400px] h-[200px]'
						src={Youtube}
						alt=''
					/>
					<h2 className='text-2xl font-bold'>Youtube Clone</h2>
					<p className=' text-lg '>A functional Youtube Clone website</p>
					<div>
						<h3 className='text-lg font-semibold'>Technologies Used:</h3>
						<p> React, Tailwind CSS, Youtube Data API V3</p>
					</div>
					<div className='flex gap-2'>
						<button className='border-4 rounded-full py-2 px-4'>
							<Link
								className='flex items-center gap-2'
								to={'https://github.com/Cosmodocus/youtube-clone'}
								target='_blank'
							>
								<FaGithub size={25} />
								GitHub
							</Link>
						</button>
						<button className=' border-4 rounded-full py-2 px-4'>
							Live Demo
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
