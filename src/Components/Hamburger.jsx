import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import DarkLightBtn from './DarkLightBtn';

const Hamburger = ({ scrollToSection }) => {
	const [navbar, setNavbar] = useState(false);

	const toggleNavbar = () => {
		setNavbar(!navbar);
	};

	const handleOutsideClick = (e) => {
		if (e.target.classList.contains('overlay')) {
			setNavbar(false);
		}
	};

	return (
		<div className='cursor-pointer md:hidden flex relative'>
			<CgMenuGridR size={30} onClick={toggleNavbar} />
			{navbar && (
				<div
					className='overlay fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 transition-opacity duration-300'
					onClick={handleOutsideClick}
				>
					<div className='bg-white text-[#000] text-center w-[300px] gap-4 shadow-lg rounded-lg p-8 flex flex-col items-center z-10 transform transition-transform duration-300'>
						<ul className='flex flex-col gap-4'>
							<li className='font-semibold hover:text-cyan-500' onClick={() => { scrollToSection('home'); toggleNavbar(); }}>Home</li>
							<li className='font-semibold hover:text-cyan-500' onClick={() => { scrollToSection('about'); toggleNavbar(); }}>About</li>
							<li className='font-semibold hover:text-cyan-500' onClick={() => { scrollToSection('details'); toggleNavbar(); }}>Projects</li>
							<li className='font-semibold hover:text-cyan-500' onClick={() => { scrollToSection('testimonials'); toggleNavbar(); }}>Testimonials</li>
							<li className='font-semibold hover:text-cyan-500' onClick={() => { scrollToSection('cta'); toggleNavbar(); }}>Contact</li>
						</ul>
						<DarkLightBtn />
					</div>
				</div>
			)}
		</div>
	);
};

export default Hamburger;
