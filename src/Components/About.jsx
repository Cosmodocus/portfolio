import React from 'react';

const About = () => {
	return (
		<div className='w-full flex items-center justify-center pb-24  '>
			<div className='flex flex-col gap-12 items-center leading-2'>
				<div className='text-left flex flex-col gap-6 mx-4'>
					<h1 className='md:text-6xl text-3xl font-semibold  text-left'>
						About Me
					</h1>
					<p className='md:w-[1000px] text-left md:text-2xl text-xl mx-auto'>
						Hello! My name is Reza Homayuni. I'm a frontend developer ready to
						help you create{' '}
						<span className='font-semibold '>
							sophisticated, aesthetic, and functioning web applications
						</span>
						.
					</p>
					<h2 className='md:text-3xl text-xl font-bold  text-left'>
						Creativity, Knowledge, and Innovation
					</h2>
					<p className='md:w-[1000px] text-left md:text-2xl text-lg mx-auto '>
						These 3 concepts are integral to my very being. They give me
						meaning, purpose, and excitement in my everyday life. I bring these
						up, because these 3 concepts are the reason I am infatuated over the
						world of tech. Tech allows me to indulge in{' '}
						<span className='font-semibold '>
							creative stimulation, continuous learning, and the rush of
							discovering something never before seen.
						</span>
					</p>
					<h2 className='md:text-3xl text-xl font-bold  text-left'>
						Go Ahead and Explore
					</h2>
					<p className='md:w-[1000px] text-left md:text-2xl text-lg mx-auto'>
						Please have a look around at my skills, projects; or look through my
						contacts to message me directly. I'd love to hear and or work with
						you.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
