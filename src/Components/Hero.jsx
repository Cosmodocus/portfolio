import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';

const Hero = () => {
	return (
		<div className='w-full flex py-[300px]  items-center justify-center'>
			<div className='flex flex-col gap-4 text-center'>
				<h1 className='md:text-8xl text-4xl'>Welcome to my Portfolio</h1>
				<p className='md:text-3xl text-xl '>
					I'm a passionate{' '}
					<span className='font-semibold text-[#1fc6c6] '>Frontend </span>
					Developer dedicated to crafting exceptional web applications
				</p>
				<div className='text-center flex items-center justify-center md:gap-4 gap-2'>
					<button className='md:text-xl text-lg border-4 rounded-full  px-4 py-2'>
						<Link
							to={
								'https://docs.google.com/document/d/13v86c8Wn7Y8JiitiOhFZMZwuk_x2XIxzzF5pmCv7Fow/edit?usp=sharing'
							}
							target='_blank'
						>
							CV Resume
						</Link>
					</button>
					<button className='md:text-xl text-lg border-4 rounded-full  px-4 py-2'>
						<Link
							to={'https://github.com/Cosmodocus'}
							target='_blank'
							className='flex items-center gap-2'
						>
							<FaGithub size={30} />
							Github
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
