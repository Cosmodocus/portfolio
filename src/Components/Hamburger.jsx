import React, { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import DarkLightBtn from './DarkLightBtn';

const Hamburger = () => {
	const [navbar, setNavbar] = useState(false);

	const toggleNavbar = () => {
		setNavbar(!navbar);
	};

	return (
		<div className='cursor-pointer md:hidden flex relative'>
			<CgMenuGridR
				size={30}
				onClick={toggleNavbar}
			/>
			{navbar && (
				<div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 '>
					<div className='bg-white text-[#000] text-center w-[300px] gap-4 shadow-md rounded-md p-8 flex flex-col items-center  z-10'>
						<ul className='flex flex-col gap-4'>
							<li className='font-semibold'>
								<Link
									to='/'
									onClick={toggleNavbar}
								>
									Home
								</Link>
							</li>
							<li className='font-semibold'>
								<Link
									to='/details'
									onClick={toggleNavbar}
								>
									Projects
								</Link>
							</li>
							<li className='font-semibold'>
								<Link
									to='/contacts'
									onClick={toggleNavbar}
								>
									Contact
								</Link>
							</li>
						</ul>
						<DarkLightBtn />
					</div>
				</div>
			)}
		</div>
	);
};

export default Hamburger;
