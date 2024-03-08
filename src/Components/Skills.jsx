import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/js.png';
import ReactJS from '../assets/react.png';
import Tailwind from '../assets/tailwind.svg';
import Git from '../assets/git.svg';

const Skills = () => {
	return (
		<div className=' py-32 flex flex-col items-center gap-8 justify-center'>
			<h1 className='text-4xl font-bold '>Skills</h1>
			<div className='grid md:grid-cols-3  grid-cols-1 gap-16'>
				<div className=' w-[300px] flex flex-col gap-2 border items-center rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>HTML</h2>
					<img
						className='w-[100px]'
						src={HTML}
						alt=''
					/>
				</div>
				<div className=' w-[300px] flex flex-col gap-2 border items-center rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>CSS</h2>
					<img
						className='w-[100px]'
						src={CSS}
						alt=''
					/>
				</div>
				<div className=' w-[300px] flex flex-col gap-2 border items-center rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>JavaScript</h2>
					<img
						className='w-[100px]'
						src={JavaScript}
						alt=''
					/>
				</div>
				<div className=' w-[300px] flex flex-col gap-2 border items-center rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>React</h2>
					<img
						className='w-[100px]'
						src={ReactJS}
						alt=''
					/>
				</div>
				<div className=' w-[300px] flex flex-col gap-2 border items-center rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>Tailwind CSS</h2>
					<img
						className='w-[100px]'
						src={Tailwind}
						alt=''
					/>
				</div>
				<div className=' w-[300px] flex flex-col gap-2 border items-center rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-bold'>Version Control</h2>
					<img
						className='w-[100px]'
						src={Git}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
