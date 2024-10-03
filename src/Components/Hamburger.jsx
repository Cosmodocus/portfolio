// Hamburger.jsx
import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import DarkLightBtn from './DarkLightBtn';
import PropTypes from 'prop-types';

const Hamburger = ({ scrollToSection, isDarkMode, toggleIsDarkMode }) => {
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
					className='overlay fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300'
					onClick={handleOutsideClick}
				>
					<div className='bg-white text-black text-center w-[300px] gap-4 shadow-lg rounded-lg p-8 flex flex-col items-center z-10 transform transition-transform duration-300'>
						<ul className='flex flex-col gap-4 text-lg items-center'>
							<li className='font-semibold  navbar-item ' onClick={() => { scrollToSection('home'); toggleNavbar(); }}>Home</li>
							<li className='font-semibold  navbar-item' onClick={() => { scrollToSection('about'); toggleNavbar(); }}>About</li>
							<li className='font-semibold  navbar-item' onClick={() => { scrollToSection('details'); toggleNavbar(); }}>Projects</li>
							<li className='font-semibold  navbar-item' onClick={() => { scrollToSection('testimonials'); toggleNavbar(); }}>Testimonials</li>
							<li className='font-semibold  navbar-item' onClick={() => { scrollToSection('cta'); toggleNavbar(); }}>Contact</li>
						</ul>
						<DarkLightBtn isDarkMode={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} />
					</div>
				</div>
			)}
		</div>
	);
};

Hamburger.propTypes = {
	scrollToSection: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
	toggleIsDarkMode: PropTypes.func.isRequired
};

export default Hamburger;
