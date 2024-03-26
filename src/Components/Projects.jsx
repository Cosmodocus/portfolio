import React from 'react';
import Finance from '../assets/finance.png';
import Pokedex from '../assets/Pokedex.png';
import ZipLinkz from '../assets/Ziplinkz.png';
import Youtube from '../assets/youtube.png';
import Sushi from '../assets/kaiyo-sushi.png';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center py-16'>
			<h1 className='text-4xl font-bold pb-8'>Featured Projects</h1>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
				{/* Project Cards */}
				{[
					{
						image: Pokedex,
						title: 'National Pokedex',
						description:
							'A national pokedex that contains data and stats of 1008 Pokemon',
						technologies: 'HTML, CSS, JavaScript, PokeAPI',
						githubLink: 'https://github.com/Cosmodocus/national-pokedex',
						liveDemoLink: 'https://reztech-pokedex.netlify.app/',
					},
					{
						image: ZipLinkz,
						title: 'ZipLinkz URL Shortener',
						description:
							'A Mock URL shortening web app inspired by Bitly and Ow.ly',
						technologies:
							'React, TypeScript, Tailwind CSS, Node, Express, CleanURI API',
						githubLink: 'https://github.com/Cosmodocus/ziplinkz',
						liveDemoLink: 'https://reztech-ziplinkz.netlify.app/',
					},
					{
						image: Sushi,
						title: 'Sushi Website',
						description:
							"A website to explore a Sushi restaurant's menus, orders, and FAQ's",
						technologies: 'React, React-Router, Tailwind CSS',
						githubLink: 'https://github.com/Cosmodocus/kaiyo-sushi-website',
						liveDemoLink: 'https://reztech-kaiyo-sushi.netlify.app/',
					},
					{
						image: Youtube,
						title: 'Youtube Clone',
						description: 'A functional Youtube Clone website',
						technologies: 'React, React-Router, CSS, Youtube Data API V3',
						githubLink: 'https://github.com/Cosmodocus/youtube-clone',
						liveDemoLink: '#',
					},
					{
						image: Finance,
						title: 'Landing Page',
						description:
							'A mock landing page focused on the data finance niche.',
						technologies: 'React, Tailwind CSS',
						githubLink:
							'https://github.com/Cosmodocus/finance-responsive-landing-page',
						liveDemoLink: 'https://reztech-finance.netlify.app/',
					},
				].map((project, index) => (
					<div
						key={index}
						className='mx-2 flex flex-col items-center text-center gap-4 border rounded-lg p-4 shadow-md'
					>
						<img
							className='border-2 rounded-lg w-full h-auto max-h-[250px] object-cover'
							src={project.image}
							alt={project.title}
						/>
						<h2 className='text-2xl font-bold mt-4 '>{project.title}</h2>
						<p className='text-lg text-gray-600'>{project.description}</p>
						<div className='mt-2'>
							<h3 className='text-lg font-semibold'>Technologies Used:</h3>
							<p className='text-gray-600'>{project.technologies}</p>
						</div>
						<div className='flex justify-center mt-4 gap-2'>
							<button className='border-2 rounded-full py-2 px-4 '>
								<Link
									className='flex items-center gap-2'
									to={project.githubLink}
									target='_blank'
								>
									<FaGithub size={20} />
									GitHub
								</Link>
							</button>
							<button className='border-2 rounded-full py-2 px-4 '>
								<a
									href={project.liveDemoLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									Live Demo
								</a>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
