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
			className={
				isDarkMode
					? 'navbar-dark w-full flex justify-between px-8 items-center py-4  text-text shadow-md fixed z-10'
					: 'navbar-light w-full flex justify-between px-8 items-center py-4 text-text shadow-md fixed z-10'
			}
		>
			<span className='text-3xl font-bold '>RezTech</span>
			<ul className=' gap-8 md:flex hidden'>
				<li onClick={() => scrollToSection('home')}>Home</li>
				<li onClick={() => scrollToSection('about')}>About</li>
				<li onClick={() => scrollToSection('details')}>Projects</li>
				<li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
				<li onClick={() => scrollToSection('cta')}>Contact</li>
			</ul>
			<DarkLightBtn className='md:flex hidden' />
			<Hamburger />
		</nav>
	);
};

export default Navbar;
