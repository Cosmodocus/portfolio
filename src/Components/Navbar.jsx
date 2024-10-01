import { useState } from 'react';
import DarkLightBtn from './DarkLightBtn';
import Hamburger from './Hamburger';

const Navbar = ({ scrollToSection }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleIsDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<nav
			className={`w-full flex justify-between items-center py-4 px-6 fixed z-10 transition-colors duration-300
				${isDarkMode ? 'navbar-dark text-text shadow-md' : 'navbar-light text-text shadow-md'}`}
		>
			<span className='text-3xl font-bold cursor-pointer' onClick={() => scrollToSection('home')}>RezTech</span>
			<ul className='gap-8 md:flex hidden'>
				<li onClick={() => scrollToSection('home')}>Home</li>
				<li onClick={() => scrollToSection('about')}>About</li>
				<li onClick={() => scrollToSection('details')}>Projects</li>
				<li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
				<li onClick={() => scrollToSection('cta')}>Contact</li>
			</ul>
			<DarkLightBtn className='md:flex hidden' />
			<Hamburger scrollToSection={scrollToSection} />
		</nav>
	);
};

export default Navbar;
