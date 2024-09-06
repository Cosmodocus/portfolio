import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'; // Import FaTwitter
import { Link } from 'react-router-dom';

const Contacts = () => {
	return (
		<div className='w-full flex flex-col items-center text-center justify-center h-screen gap-8 py-[300px]'>
			<h1 className='md:text-8xl text-4xl mt-20'>Let's Work Together</h1>
			<p className='md:text-3xl  text-xl text-center md:leading-[42px] md:w-[1200px] mx-2 '>
				Have a project in mind or just want to say hello? I'd love to hear from
				you! Feel free to reach out to me using the contact information below:
			</p>
			<ul className='border p-8 rounded-xl shadow-md text-left flex flex-col gap-4 mx-2'>
				<li className='md:text-2xl flex items-center gap-2'>
					<MdEmail size={25} /> homayunir@gmail.com
				</li>
				<li className='md:text-2xl flex items-center gap-2'>
					<FaPhoneAlt size={25} />
					(647)-535-4495
				</li>
				<li className='md:text-2xl '>
					<Link
						to={'https://www.linkedin.com/in/reza-homayuni-0503861b6/'}
						target='_blank'
						className='flex items-center gap-2'
					>
						<FaLinkedin size={30} />{' '}
						https://www.linkedin.com/in/reza-homayuni-0503861b6/
					</Link>
				</li>
				<li className='md:text-2xl '>
					<Link
						className='flex items-center gap-2'
						to={'https://github.com/Cosmodocus'}
						target='_blank'
					>
						<FaGithub size={30} /> https://github.com/Cosmodocus
					</Link>
				</li>
				{/* Add Twitter link */}
				<li className='md:text-2xl '>
					<Link
						className='flex items-center gap-2'
						to={'https://twitter.com/Rez_Technology'} // Replace with your Twitter link
						target='_blank'
					>
						<FaTwitter size={30} /> https://twitter.com/Rez_Technology
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Contacts;
